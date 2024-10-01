## Build an AI-powered voice assistant that engages in realtime conversations using LiveKit, Python, and NextJS.

Docs : [Click here](https://docs.livekit.io/agents/quickstart/)

## Server

```
python -m venv .venv
source ./.venv/bin/activate
pip install -r requirements.txt
mv .env.example .env
python main.py dev
```

## Client

```
bun install
mv .env.example .env.local
bun run dev
```

## Get API Key

1. Go to [LiveKit](https://cloud.livekit.io/) and create a project.
2. Get the API key from the project settings.
3. Go to [OpenAI](https://platform.openai.com/api-keys) and create an API key.
4. Go to [Deepgram](https://console.deepgram.com/) and create an API key.
