const { App } = require('@slack/bolt');
const axios = require('axios');
require('dotenv').config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

// Command 1: Random programming joke
app.command('/mbot-joke', async ({ command, ack, respond }) => {
  await ack();
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random');
    const joke = response.data[0];
    await respond(`${joke.setup}\n\n*${joke.punchline}*`);
  } catch (error) {
    await respond('Failed to fetch a joke right now. Please try again later.');
  }
});

// Command 2: Useless fact
app.command('/mbot-fact', async ({ command, ack, respond }) => {
  await ack();
  try {
    const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
    await respond(`Fact: *${response.data.text}*`);
  } catch (error) {
    await respond('Failed to fetch a fact right now. Please try again later.');
  }
});

// Command 3: Weather lookup
app.command('/mbot-weather', async ({ command, ack, respond }) => {
  await ack();
  const city = command.text.trim();

  if (!city) {
    await respond('Please specify a city. Example: /mbot-weather London');
    return;
  }

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
    const response = await axios.get(url);

    const temp = Math.round(response.data.main.temp);
    const description = response.data.weather[0].description;
    const cityName = response.data.name;
    const country = response.data.sys.country;

    await respond(`Current weather in *${cityName}, ${country}*:\nTemperature: *${temp}°C*\nCondition: *${description}*`);
  } catch (error) {
    await respond(`Could not find weather data for "${city}". Please check the spelling.`);
  }
});

(async () => {
  await app.start();
  console.log('Bot is running successfully!');
})();