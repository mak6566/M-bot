# M-bot

A lightweight, always-online Slack bot that delivers real-time weather, programming jokes, and random trivia directly into your Slack workspace.

Designed to run as a background Linux service, M-bot uses Slack Socket Mode for secure, low-latency communication without requiring any public web server.

![M-bot Demo](https://raw.githubusercontent.com/mak6566/M-bot/main/demo.png)

---

## Features

- **Real-Time Weather**
  - Get current weather information for any city using the OpenWeatherMap API.

- **Programming Jokes**
  - Instantly receive random programming jokes.

- **Random Trivia**
  - Discover interesting and completely useless facts.

- **Socket Mode**
  - Uses Slack Socket Mode over WebSockets instead of traditional HTTP webhooks.

- **24/7 Operation**
  - Runs continuously as a Linux `systemd` service with automatic restart support.

---

## Try It Live

You can test the bot directly in Slack:

**[Open Slack Channel to Try M-bot](https://app.slack.com/client/E09V59WQY1E/C0B8P5DRDB3)**

---

## Available Commands

| Command | Description |
| :------ | :---------- |
| `/mbot-joke` | Returns a random programming joke |
| `/mbot-fact` | Returns a random useless fact |
| `/mbot-weather <city>` | Shows the current weather for the specified city |

Example:

```text
/mbot-weather London
```

---

## Installation

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

1. Clone the repository:

```bash
git clone https://github.com/mak6566/M-bot.git
cd M-bot
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables.

Create a `.env` file in the project root:

```env
SLACK_BOT_TOKEN="xoxb-your-bot-token"
SLACK_APP_TOKEN="xapp-your-app-token"
WEATHER_API_KEY="your-openweathermap-api-key"
```

4. Start the bot:

```bash
node app.js
```

---

## Architecture

M-bot communicates with Slack using Socket Mode, maintaining a persistent WebSocket connection instead of exposing public HTTP endpoints.

The application is intended to run on a Linux server and is managed through `systemd`, providing automatic startup, crash recovery, and continuous availability.

---

## Tech Stack

- Node.js
- @slack/bolt
- Slack Socket Mode
- OpenWeatherMap API
- Official Joke API
- Useless Facts API

---

## Acknowledgements

- @slack/bolt for the official Slack framework.
- OpenWeatherMap for weather data.
- Official Joke API for programming jokes.
- Useless Facts API for random trivia.

---

## License

This project is released under the license included in this repository.
