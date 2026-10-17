# Fokus

![Texto Alternativo da Imagem](./public/preview.png)


Timer **Pomodoro** com lista de tarefas, feito no curso de Full Stack da Alura, em **HTML, CSS e JavaScript vanilla**.


## O que faz

- Modos: foco (25 min), descanso curto (5 min) e descanso longo (15 min)
- Iniciar/pausar o timer, música ambiente e som ao terminar
- Troca de tema (cores, banner e imagem) conforme o modo
- Tarefas: criar, editar, concluir e excluir (API em `localhost:4242/tasks`)

## Como rodar

```bash
npm install
npm run dev
```

## O que o JS vanilla ensina

- **DOM**: `querySelector`, `createElement`, `classList`, `textContent`, `hidden`, `dataset`
- **Eventos**: `click`, `submit`, `change` e `preventDefault`
- **Delegação**: um listener no quadro de tarefas lê `data-action` com `closest` e chama a função certa
- **Timer**: `setInterval` / `clearInterval`
- **Áudio**: `new Audio()` + `play()` / `pause()`
- **API**: `fetch` com GET, POST, PUT e DELETE (`async/await`, `FormData`, `Promise.all`)
- **Módulos**: `main.js` importa `pomodoro.js`, `timer.js`, `sounds.js` e `todos.js`

