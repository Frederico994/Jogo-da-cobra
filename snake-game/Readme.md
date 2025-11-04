# 🐍 Snake Arcade Neon

## 🎮 Descrição do Projeto

> "Olá meu grande amigo, bai primo, gostaria de fazer um jogo online em arcade ok, neste caso um jogo parecido ou igual ao snake games com um painel de entrada, a pedir logo o nickname — no painel quero um: scoreboard, botão jogar, também tem de ter como é óbvio sistema de pontuação e depois que tenha em cima a pontuação o botão para voltar ao painel de entrada: HTML, CSS, JavaScript."

A partir desta pergunta, iniciei o desenvolvimento do jogo **Snake Arcade Neon**, com a ajuda da Inteligência Artificial (ChatGPT), para cumprir os requisitos da ficha de trabalho. O objetivo era criar um jogo simples em 2D, divertido, com um sistema de pontuação integrado e visual moderno com aspeto arcade/neon.

---

## 🚀 Funcionalidades do Jogo

- Interface inicial com:
  - Campo para inserir o nickname
  - Botão para iniciar o jogo
  - Scoreboard com os 5 melhores jogadores (Top 5), ligado a uma API externa
- Durante o jogo:
  - Canvas 2D com movimentação da cobra
  - Sistema de pontuação que aparece em tempo real no topo
  - Botão "Voltar" para regressar ao painel inicial
- Após o jogo:
  - Score enviado automaticamente para a API
  - Atualização do scoreboard em tempo real
  - Retorno ao ecrã de entrada com o nickname já preenchido

---

## 🧪 Tecnologias Utilizadas

- HTML5 → estrutura da página
- CSS3 → design visual estilo neon (cores vibrantes e sombras)
- JavaScript (ES6+) → lógica do jogo, movimentação, pontuação, integração com API
- Local API → armazenamento e leitura dos scores (ficha de trabalho #1)

---

## 🧱 Estrutura dos Ficheiros

📁 Snake Arcade Neon
├── index.html # Interface HTML com start screen e game screen
├── style.css # Estilos visuais do jogo com efeito neon
├── script.js # Lógica do jogo + integração com API

yaml
Copiar
Editar

---

## 🔌 Integração com a API

O jogo comunica com uma API local (`http://localhost:3000/api/scores`) para guardar e buscar os scores. A integração foi feita através de `fetch` com os métodos:

- `GET` → para carregar o top 5 dos melhores jogadores
- `POST` → para guardar o score do jogador ao terminar o jogo

Exemplo de envio:
```json
{
  "nickname": "Jogador1",
  "score": 15,
  "datascore": 2025,
  "game": "Snake Game"
}
🎨 Design
O jogo foi desenhado com um estilo arcade futurista:

Tipografia digital (Orbitron)

Cores fortes (#ff003c), sombras brilhantes e bordas neon

Efeitos visuais no botão ao passar o rato (hover)

Layout simples, centralizado e responsivo

🧠 Desenvolvimento com IA
Ao longo do projeto, foram feitas várias perguntas ao ChatGPT, como:

Como criar um jogo arcade com HTML/CSS/JavaScript?

Como mostrar um scoreboard?

Como guardar pontuações via API?

Como aplicar um visual estilo neon?

A IA respondeu às dúvidas técnicas, ajudou com trechos de código, estruturação de ficheiros e até melhorou a jogabilidade e o estilo visual.

✅ Requisitos da Ficha de Trabalho
Critério Avaliado	Implementado
Criou o jogo em HTML / CSS / JavaScript	✅ Sim
Qualidade da estrutura do código	✅ Código limpo e modular
Jogabilidade e design visual	✅ Responsivo e estilizado
Relatório com explicações sobre o processo	✅ Este README
Scoreboard ligado à API	✅ Sim
Envio de score para a API	✅ Sim, via POST

📊 Scoreboard em Tempo Real (Exemplo)
txt
Copiar
Editar
Top 5 Jogadores:
1. JoaoSnake - 20 pts
2. Speedy99  - 17 pts
3. AnaCode   - 13 pts
4. PedroDev  - 10 pts
5. GamerMan  -  7 pts
🧾 Conclusão
Este projeto foi construído do zero com base numa ideia clara: criar um jogo arcade, simples, divertido, com pontuação integrada e visual estilizado. Toda a lógica, interface e conexão com a API foram feitas com foco na clareza do código, jogabilidade e experiência do utilizador.

O apoio da IA foi essencial, funcionando como um verdadeiro "parceiro de desenvolvimento". Aprendi bastante sobre canvas, colisões, localStorage, fetch com GET/POST e organização de um projeto web.

Este ficheiro README serve também como relatório final da ficha, contendo tudo o que foi pedido pelo professor — desde a ideia inicial até à implementação final.