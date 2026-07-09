import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

type Task = {
  id: string
  title: string
  description: string | null
  isCompleted: boolean
  createdAt: string
  updatedAt: string | null
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5284'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const pendingTasks = useMemo(
    () => tasks.filter((task) => !task.isCompleted).length,
    [tasks],
  )

  async function loadTasks() {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${apiBaseUrl}/tasks`)

      if (!response.ok) {
        throw new Error('Could not load tasks.')
      }

      const data = (await response.json()) as Task[]
      setTasks(data)
    } catch {
      setError('Backend is offline or not reachable. Start the API and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  async function createTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!title.trim()) {
      setError('Task title is required.')
      return
    }

    setIsSaving(true)
    setError(null)

    try {
      const response = await fetch(`${apiBaseUrl}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description: description || null,
        }),
      })

      if (!response.ok) {
        throw new Error('Could not create task.')
      }

      const createdTask = (await response.json()) as Task
      setTasks((currentTasks) => [createdTask, ...currentTasks])
      setTitle('')
      setDescription('')
    } catch {
      setError('Could not create the task. Check the backend and PostgreSQL.')
    } finally {
      setIsSaving(false)
    }
  }

  async function deleteTask(taskId: string) {
    setError(null)

    try {
      const response = await fetch(`${apiBaseUrl}/tasks/${taskId}`, {
        method: 'DELETE',
      })

      if (!response.ok && response.status !== 404) {
        throw new Error('Could not delete task.')
      }

      setTasks((currentTasks) =>
        currentTasks.filter((task) => task.id !== taskId),
      )
    } catch {
      setError('Could not delete the task. Try again in a moment.')
    }
  }

  useEffect(() => {
    void loadTasks()
  }, [])

  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Task Management</span>
          <h1>Plan the work. Ship the backend. Keep the stack tidy.</h1>
          <p>
            A focused React client for the .NET task API, ready to talk to
            PostgreSQL through your backend.
          </p>
        </div>

        <div className="status-panel" aria-label="Project status">
          <div>
            <span className="metric-value">{tasks.length}</span>
            <span className="metric-label">Total tasks</span>
          </div>
          <div>
            <span className="metric-value">{pendingTasks}</span>
            <span className="metric-label">Pending</span>
          </div>
          <div>
            <span className="metric-value">.NET</span>
            <span className="metric-label">API source</span>
          </div>
        </div>
      </section>

      <section className="workspace">
        <form className="task-form" onSubmit={createTask}>
          <div className="form-header">
            <div>
              <h2>Create task</h2>
              <p>Add something for the backend to persist.</p>
            </div>
            <button type="button" className="ghost-button" onClick={loadTasks}>
              Refresh
            </button>
          </div>

          <label>
            Title
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Deploy PostgreSQL locally"
            />
          </label>

          <label>
            Description
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Short notes, next step, or acceptance criteria."
              rows={4}
            />
          </label>

          <button className="primary-button" disabled={isSaving}>
            {isSaving ? 'Creating...' : 'Create task'}
          </button>

          {error && <p className="error-message">{error}</p>}
        </form>

        <div className="task-list">
          <div className="list-header">
            <div>
              <h2>Tasks</h2>
              <p>Loaded from {apiBaseUrl}</p>
            </div>
          </div>

          {isLoading ? (
            <div className="empty-state">Loading tasks...</div>
          ) : tasks.length === 0 ? (
            <div className="empty-state">
              No tasks yet. Create the first one and watch the API wake up.
            </div>
          ) : (
            <ul>
              {tasks.map((task) => (
                <li key={task.id} className="task-card">
                  <div>
                    <h3>{task.title}</h3>
                    {task.description && <p>{task.description}</p>}
                    <span>
                      Created {new Date(task.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="danger-button"
                    onClick={() => void deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  )
}

export default App
