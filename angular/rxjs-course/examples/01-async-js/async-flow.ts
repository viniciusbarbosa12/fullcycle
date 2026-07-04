// Execute com ts-node ou copie para um playground TypeScript.

console.log('1 - inicio sincrono');

setTimeout(() => {
  console.log('4 - callback do timer');
}, 0);

Promise.resolve().then(() => {
  console.log('3 - microtask da Promise');
});

console.log('2 - fim sincrono');

type User = {
  id: number;
  name: string;
};

function getUserWithCallback(id: number, callback: (user: User) => void) {
  setTimeout(() => {
    callback({ id, name: 'Ana' });
  }, 300);
}

function getUserWithPromise(id: number): Promise<User> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: 'Ana' });
    }, 300);
  });
}

getUserWithCallback(1, user => {
  console.log('callback:', user);
});

getUserWithPromise(2).then(user => {
  console.log('promise:', user);
});

async function main() {
  const user = await getUserWithPromise(3);
  console.log('async/await:', user);
}

main();
