# M-bot

A feature-packed Slack bot running 24/7 as a background system service, bringing live weather updates, programming jokes, and random trivia straight to your workspace.

![M-bot in action](https://raw.githubusercontent.com/mak6566/M-bot/main/demo.png)

## Try it Live

**[Open Slack Channel to Try M-bot](https://app.slack.com/client/E09V59WQY1E/C0B8P5DRDB3)**

---

## Quick Start

Once you access the Slack channel, simply type any of these commands:

* `/mbot-joke` - Get a random programming joke.
* `/mbot-fact` - Get a random useless fact.
* `/mbot-weather London` - Get current real-time weather details for any city.

---

## Features

* **Real-time Weather Queries:** Integrated with the OpenWeatherMap API to display temperature, weather condition, and city info.
* **Instant Entertainment:** Fetches programming humor and trivia on demand using external APIs.
* **Socket Mode Integration:** Uses WebSockets for real-time, low-latency event processing without requiring public HTTP endpoints.
* **24/7 Availability:** Runs continuously in the background via a managed Linux system service (`systemd`).

---

## How to Run It Locally

### Prerequisites
* **Node.js:** v18.x or higher
* **npm:** v9.x or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/mak6566/M-bot.git](https://github.com/mak6566/M-bot.git)
   cd M-bot

2.  **Install dependencies:**
   ```bash
   npm install

3. **Configure Environment Variables:**
   Create a .env file in the root folder:
   SLACK_BOT_TOKEN="xoxb-your-bot-token"
SLACK_APP_TOKEN="xapp-your-app-token"
WEATHER_API_KEY="your-openweathermap-api-key"

 * Start the bot:
   node app.js

## How It Works

Instead of exposing traditional webhooks via HTTP/HTTPS, M-bot connects using Slack Socket Mode via WebSocket. This architecture allows the bot to sit securely behind a container firewall on Nest while maintaining a persistent bidirectional connection with Slack's servers.
The application is deployed on a Linux container and managed by systemd, ensuring automated process restarts and fault tolerance if an unhandled promise or network disruption occurs.

## Credits & Acknowledgements

 * Built using the official @slack/bolt framework.
 * Weather data powered by OpenWeatherMap API.
 * Humor & trivia provided by Official Joke API and Useless Facts API.

