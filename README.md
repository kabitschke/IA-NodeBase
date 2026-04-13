# IA LLM Node Base

Projeto de base em Node.js + TypeScript para integração com múltiplos provedores de LLM.

## Resumo

Este projeto expõe uma API simples em Express para criar clientes de provedores de IA e testar a conexão com:

- OpenAI
- Anthropic (Claude)
- xAI (Grok)
- Google AI (Gemini)
- Groq
- Ollama

## Tecnologias

- Node.js
- TypeScript
- Express
- CORS
- `tsx` para desenvolvimento local

## Instalação

1. Clone o repositório

```bash
git clone <url-do-repositório>
cd ia-llm-node-base
```

2. Instale as dependências

```bash
npm install
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure as chaves dos provedores que você deseja usar.

Exemplo:

```env
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
XAI_API_KEY=your_xai_api_key
GOOGLE_API_KEY=your_google_api_key
GROQ_API_KEY=your_groq_api_key
OLLAMA_BASE_URL=http://localhost:11434
PORT=3002
```

```
cp .env.example .env
``` 

> O `OLLAMA_BASE_URL` é opcional. O valor padrão é `http://localhost:11434`.

## Scripts úteis

- `npm run dev` - inicia o servidor em modo de desenvolvimento com `tsx` e recarregamento automático
- `npm run build` - compila o TypeScript para a pasta `dist`
- `npm start` - executa o servidor compilado a partir de `dist`

## Endpoints

A API monta as rotas em `/api/llm`.

- `GET /api/llm/openai`
- `GET /api/llm/anthropic`
- `GET /api/llm/xai`
- `GET /api/llm/google`
- `GET /api/llm/groq`
- `GET /api/llm/ollama`

Cada endpoint retorna um JSON com informações de provedor e se o cliente foi criado com sucesso.

## Fluxo do projeto

- `src/server.ts` inicializa o servidor Express e configura as rotas.
- `src/routes/llm.ts` define os endpoints de teste para cada provedor.
- `src/services/*.ts` cria o cliente de cada provedor usando as variáveis de ambiente.

## Observações

- O projeto não contém lógica de conversação em si; ele serve como base para criar clientes de cada LLM.
- Em caso de falta de variável de ambiente, o serviço correspondente lança erro.

## Como testar

1. Execute o servidor:

```bash
npm run dev
```

2. Acesse um endpoint no navegador ou via `curl`:

```bash
curl http://localhost:3002/api/llm/openai
```

3. Verifique o retorno JSON.

http://localhost:3001/api/llm/openai
