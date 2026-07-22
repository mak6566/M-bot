# M-bot

M-bot is a Slack bot built using JavaScript, Node.js, and the Slack Bolt framework with Socket Mode. It provides utility and entertainment slash commands using external APIs.

## Features

- `/mbot-joke`: Fetches and displays a random programming joke.
- `/mbot-fact`: Fetches and displays a random useless fact.
- `/mbot-weather [city]`: Fetches real-time weather data for the specified city using OpenWeatherMap.

## Tech Stack

- Node.js
- @slack/bolt
- Axios
- dotenv

## Environment Variables

To run this project, you need to create a `.env` file in the root directory and define the following variables:

SLACK_BOT_TOKEN=xoxb-...
SLACK_APP_TOKEN=xapp-...
WEATHER_API_KEY=your_openweathermap_api_key

## Installation and Local Setup

1. Clone the repository:
   git clone https://github.com/mak6566/M-bot.git
   cd M-bot

2. Install dependencies:
   npm install

3. Create a `.env` file based on the environment variables section above.

4. Start the bot:
   node app.js

## Deployment

This bot is designed to be deployed on Linux environments (such as Hack Club Nest) and kept online 24/7 using a systemd service.