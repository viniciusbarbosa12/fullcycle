# MeshCommerce — Guia simples de todas as telas

Este documento explica o frontend como se fosse um roteiro de demonstração.
Você não precisa conhecer React, Kong, Istio ou Kubernetes para acompanhar.

## O que é o MeshCommerce?

É uma loja fictícia que cria pedidos e processa pagamentos. Além da operação
normal, o sistema possui telas que tornam visíveis decisões normalmente
invisíveis de infraestrutura:

- quem pode acessar uma rota;
- quanto tráfego o gateway aceita;
- para qual versão de um serviço cada requisição vai;
- como o sistema reage a lentidão e falhas;
- como investigar tudo isso com métricas.

## Como abrir e testar

Para ver somente o fluxo comercial, abra o frontend local do Compose em
`http://localhost:4173`.

Para usar todos os laboratórios, suba o ambiente Kubernetes e os port-forwards:

```bash
cd final-project
./kubernetes/scripts/deploy-local.sh
./kubernetes/scripts/port-forward.sh
```

Depois abra `http://localhost:14173`. A porta `14173` é importante: ela coloca
o navegador atrás do Kong, que é justamente o que as telas Gateway e Security
precisam demonstrar. A comparação com Istio usa a porta `14174`.

## A regra mais importante da navegação

Cada tela responde a uma pergunta:

| Tela | Pergunta que ela responde |
| --- | --- |
| Orders | O negócio consegue criar e acompanhar pedidos? |
| Operations | O sistema continua disponível quando uma instância falha? |
| Gateway | O gateway consegue impedir excesso de tráfego? |
| Security | Quem entra, quem é barrado e por quê? |
| Releases | Como liberar uma nova versão aos poucos? |
| Resilience | O que acontece quando há lentidão, erro ou falha injetada? |
| Ingress | Qual é a diferença entre entrar pelo Kong e pelo Istio Gateway? |
| Observability | Como transformar tráfego em evidência para investigação? |

---

## 1. Orders — operação normal da loja

### Para que serve

É a tela de negócio. Ela mostra o que o usuário final realmente quer fazer:
criar pedidos, consultar pedidos e entender o estado do pagamento.

### Como usar

1. Preencha cliente, item e valor.
2. Clique para criar o pedido.
3. Use a busca para encontrar cliente, item ou ID.
4. Observe os cartões de total, pagos e pendentes.

### O que aparece

- lista de pedidos;
- cliente, item, valor e data;
- estado `Paid`, `Awaiting payment` ou `Failed`;
- totais da operação;
- mensagem de erro quando a API não responde.

### O detalhe importante

Se o pagamento responder `503`, isso não significa automaticamente que o pedido
falhou. A requisição pode ter chegado ao Payments e a resposta pode ter sido
perdida. Nesse caso, a tela informa que o pedido ficou pendente e recarrega a
lista para evitar afirmar algo que o sistema ainda não sabe.

**Mensagem para apresentação:** a interface não esconde incerteza operacional.
Ela mostra que “não recebi a resposta” é diferente de “o pagamento foi negado”.

---

## 2. Operations — Circuit Breaker

### Para que serve

Esta tela mostra como o Istio distribui chamadas entre uma instância saudável e
uma instância propositalmente defeituosa do Payments API.

Fluxo visual:

`Frontend → Envoy → payments-api → v1 saudável ou faulty HTTP 500`

### Como usar

1. Escolha a quantidade de requisições.
2. Escolha o intervalo entre requisições.
3. Clique em **Run**.
4. Observe o stream de requisições e a tabela final.
5. Use **Stop** para interromper o experimento.

### O que aparece

- requisições executadas;
- sucessos e falhas;
- taxa de sucesso;
- latência média;
- instância que respondeu;
- status HTTP de cada chamada;
- timeline visual.

### O que significa

Uma falha não é apenas um número vermelho. A tela ajuda a ver se o tráfego
continua chegando à instância saudável ou se o proxy começa a evitar o destino
defeituoso.

**Mensagem para apresentação:** o circuit breaker protege o sistema de insistir
continuamente em um destino que já está falhando.

---

## 3. Gateway — Rate Limiting no Kong

### Para que serve

Esta tela demonstra uma regra simples: um cliente não pode consumir toda a
capacidade da API sozinho.

Fluxo visual:

`Browser → Kong → plugin de rate limit → Orders API`

### Como usar

1. Escolha o tamanho do burst.
2. Escolha o intervalo entre chamadas.
3. Clique em **Run burst**.
4. Veja a quota diminuir.
5. Observe quando as chamadas passam a retornar `HTTP 429`.

A política demonstrada permite cinco requisições por IP a cada minuto.

### O que aparece

- chamadas executadas;
- chamadas permitidas;
- chamadas bloqueadas;
- quota restante;
- tempo até o reset;
- decisões individuais na timeline;
- headers e latência do Kong quando disponíveis.

### O alerta de bypass

Se a tela disser que os headers do Kong não foram detectados, o frontend foi
aberto por um caminho que contorna o gateway. Isso não é um resultado positivo:
é um aviso para abrir a aplicação por `http://localhost:14173`.

**Mensagem para apresentação:** bloquear no edge é mais barato do que deixar a
requisição consumir aplicação, conexão e banco antes de ser rejeitada.

---

## 4. Security — Gateway Security

### Para que serve

Esta tela mostra autenticação e autorização na borda. Ela usa um emissor JWT
educacional local para demonstrar o conceito; não é um login corporativo real.

Fluxo visual:

`Bearer JWT → assinatura validada no Kong → ACL → Orders API`

### Como usar

1. Clique em **Login viewer** ou **Login operator**.
2. Observe persona, roles, scopes e tempo restante do token.
3. Execute cada cartão com **Test request**.
4. Compare o status HTTP e a indicação de capacidade do upstream.
5. Use **Logout** para limpar a sessão em memória.

### Os quatro cenários

| Cenário | Resultado | Explicação simples |
| --- | ---: | --- |
| No token | `401` | A pessoa não apresentou identidade. |
| Expired token | `401` | A identidade existe, mas sua credencial venceu. |
| Viewer token | `403` | A identidade é válida, mas não tem a ACL necessária. |
| Operator token | `200` | Identidade e permissão estão corretas. |

### O detalhe mais didático

Os cenários informam se o Orders API foi alcançado. Nos casos `401` e `403`, o
Kong bloqueia antes de consumir capacidade do serviço. No caso `200`, o upstream
é alcançado.

**Mensagem para apresentação:** autenticação responde “quem é você?”;
autorização responde “você pode fazer isso?”. São verificações diferentes.

---

## 5. Releases — Canary e progressive delivery

### Para que serve

Esta tela mostra como lançar o Payments v2 gradualmente, sem enviar todos os
usuários para uma versão nova de uma vez.

### Como usar

1. Escolha `0%`, `20%`, `50%` ou `100% v2`.
2. Opcionalmente ative **Preview header**.
3. Escolha o tamanho do burst.
4. Clique em **Run burst**.
5. Compare a distribuição configurada com a distribuição observada.

### O que aparece

- barra de distribuição entre v1 e v2;
- percentual configurado;
- percentual observado;
- quantidade e latência média de cada versão;
- decisão de versão por requisição;
- status HTTP;
- Correlation ID.

### Configuração versus preview

O peso, por exemplo `20% v2`, é uma regra de distribuição. Já o preview força
uma requisição específica para v2. Por isso, com o preview ligado, o resultado
esperado é aproximadamente `100% v2`, independentemente do peso normal.

**Mensagem para apresentação:** canary reduz o risco do lançamento; preview
permite validar a versão nova de forma controlada antes de aumentar o tráfego.

---

## 6. Resilience — falhas controladas

### Para que serve

Esta tela permite provocar situações diferentes e observar que cada uma tem uma
resposta própria. Ela não “quebra tudo”; os faults são opt-in e controlados por
headers específicos.

### Como usar

Clique em um cenário por vez:

| Cenário | O que simula | O que observar |
| --- | --- | --- |
| Healthy | tráfego normal | resposta sem falha artificial |
| Transient 503 | erro temporário | retry do Envoy e possível recuperação |
| Slow upstream | upstream lento | timeout e aumento de latência |
| Injected delay | atraso fixo de 2 s | impacto de latência sem erro imediato |
| Injected abort | bloqueio no proxy | `503` gerado pelo Istio antes do upstream |

### O que aparece

- cenário executado;
- status final;
- duração;
- número da tentativa;
- versão que respondeu;
- Correlation ID copiável;
- timeline de recuperação.

### O detalhe importante

Retry só é seguro quando a operação suporta repetição. Por isso, pagamentos
usam `Idempotency-Key`: se a mesma operação for tentada novamente, ela não deve
criar uma cobrança duplicada.

**Mensagem para apresentação:** retry, timeout, delay e abort parecem “erro”,
mas representam problemas diferentes e exigem decisões diferentes.

---

## 7. Ingress — Kong versus Istio Gateway

### Para que serve

Esta tela compara duas portas de entrada para a mesma plataforma:

- **Kong:** gateway de borda, com políticas públicas;
- **Istio Gateway:** entrada comparativa diretamente na malha.

### Como usar

1. Confirme que os port-forwards estão ativos nas portas `14173` e `14174`.
2. Clique em **Compare paths**.
3. Compare os dois cartões lado a lado.

### O que aparece

- rota utilizada;
- status HTTP;
- latência total;
- latência do proxy;
- header que prova qual gateway respondeu;
- Correlation ID;
- observação sobre a telemetria compartilhada.

### O que não concluir

O Istio Gateway nesta tela não substitui automaticamente o Kong. O objetivo é
mostrar os papéis: Kong é a borda pública com políticas de cliente; Istio
controla tráfego e telemetria dentro da malha.

**Mensagem para apresentação:** duas entradas podem chegar ao mesmo serviço,
mas não têm necessariamente as mesmas responsabilidades.

---

## 8. Observability — transformar tráfego em evidência

### Para que serve

Esta é a tela de investigação. Ela gera tráfego conhecido e mostra como medir o
efeito no navegador, no Istio, no Prometheus e no Grafana.

Fluxo visual:

`Browser → sidecars Istio → Prometheus → Grafana`

### Como usar

1. Abra o Grafana pelo link da própria tela em outra aba.
2. Mantenha o dashboard com refresh de cinco segundos.
3. Escolha um cenário:
   - **Healthy baseline:** 60 requisições normais;
   - **Latency spike:** 100 requisições, com atraso em parte do tráfego;
   - **HTTP 5xx burst:** 40 respostas de erro injetadas.
4. Observe a tela e o dashboard ao mesmo tempo.

### O que aparece

- requisições executadas;
- erros HTTP;
- latência média;
- p50, p95 e p99;
- quantidade de chamadas lentas;
- timeline colorida de sucesso, lentidão e falha.

Também existem links para:

- dashboard do Grafana;
- targets do Prometheus;
- alertas do Prometheus.

**Mensagem para apresentação:** observabilidade não é apenas guardar logs; é
gerar evidência suficiente para responder o que aconteceu e onde aconteceu.

---

## Roteiro de demonstração em poucos minutos

1. Comece em **Orders** e crie um pedido: mostre o resultado de negócio.
2. Vá para **Gateway** e rode um burst: mostre `200` e depois `429`.
3. Abra **Security**: demonstre `401`, `403` e `200`.
4. Abra **Releases**: compare `20% v2` com preview em `100% v2`.
5. Em **Resilience**, rode retry e abort: diferencie recuperação de bloqueio.
6. Em **Ingress**, compare Kong e Istio lado a lado.
7. Termine em **Observability** com latência ou 5xx e abra o Grafana.

## Dicionário para quem não é técnico

- **Gateway:** a portaria da aplicação.
- **JWT:** um crachá digital assinado.
- **ACL:** a lista do que cada crachá pode fazer.
- **Rate limit:** o limite de pessoas que podem entrar em determinado período.
- **Canary:** liberar uma novidade para poucas pessoas antes de todos.
- **Retry:** tentar novamente uma falha que pode ser temporária.
- **Timeout:** parar de esperar depois de um limite.
- **Circuit breaker:** parar de insistir em um destino que está falhando.
- **Correlation ID:** o número de rastreio de uma requisição.
- **Percentil:** uma forma de enxergar a experiência típica e os piores casos.

## Problemas comuns

- **Gateway sem headers:** a aplicação foi aberta fora do Kong; use `14173`.
- **Istio indisponível:** confirme o port-forward de `14174`.
- **Grafana sem dados:** execute um cenário e aguarde o refresh do dashboard.
- **Erro no primeiro acesso:** confirme se os pods estão `Running/Ready` antes
  de repetir o experimento.

## Limite honesto da demonstração

O Security Lab usa JWT/ACL local para ensinar o fluxo. Ele não representa um
provedor OIDC corporativo de produção. Os cenários de Payments usados pelos
laboratórios são controlados e não devem ser confundidos com uma carga de
produção.