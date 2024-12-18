# 🌦️ Weather App

This is a **Weather App** built with **React** that fetches the user's current location using the browser's geolocation API and displays the weather conditions for that location. It utilizes the **OpenWeatherMap API** to fetch weather data and provides a modern, colorful, and interactive UI with **weather-related emojis** for different conditions.

## Features

- 🌍 **Geolocation**: Automatically detects the user's location using the browser's geolocation API.
- 🌞 **Weather Emojis**: Displays weather-related emojis to represent different weather conditions (e.g., sunny, rainy, cloudy).
- 🌡️ **Current Temperature**: Displays the current temperature in **Celsius**.
- 🌇 **City Name**: Fetches and displays the city name based on the user's coordinates using **reverse geocoding**.
- 💨 **Interactive UI**: Modern, colorful design with hover effects and loading animations.

## Demo

You can check out a live demo of the app here: [Live Demo](#)

## Tech Stack

- **Frontend**: React, JavaScript (ES6+)
- **Weather API**: [OpenWeatherMap API](https://openweathermap.org/)
- **CSS**: Custom styling with modern UI elements
- **Environment Variables**: `.env` for API key management

## Installation

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version >= 14.0.0)
- **npm** (or **yarn**)

### Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/jasgigli/loc-we.git
```

### Install dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd loc-we
npm install
```

### Set up environment variables

Create a `.env` file in the root directory of the project and add your **OpenWeatherMap API key**:

```bash
VITE_WEATHER_API_KEY=your-api-key-here
```

You can get your free API key by signing up at [OpenWeatherMap](https://openweathermap.org/).

### Run the app

Once everything is set up, run the app locally:

```bash
npm run dev
```

The app will now be available at `http://localhost:3000`.

## Folder Structure

The project structure is as follows:

```
weather-app/
│
├── components/              # React components
│   ├── CurrUserLoc.jsx      # Component to fetch user's location
│   └── Weather.jsx          # Component to display weather
│
├── .env                     # Environment variables (API key)
├── public/                  # Public assets (index.html)
├── src/                     # Source files
│   ├── App.jsx              # Main application component
│   └── style.css           # Custom styles for the app
│
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create your branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **OpenWeatherMap API** for providing the weather data.
- **React** for building the UI efficiently.
- All the contributors who have helped improve this project!

### Explanation:

- **Introduction**: Provides a quick overview of the app, including key features.
- **Tech Stack**: Lists the main technologies used to build the app.
- **Installation Instructions**: Guides the user on how to clone the project, install dependencies, set up the API key, and run the app locally.
- **Folder Structure**: Explains the structure of the project for easier navigation.
- **Screenshots**: Placeholder for screenshots that demonstrate the UI.
- **Contributing**: Explains how others can contribute to the project.
- **License**: States the project's license (MIT License, which is commonly used in open-source projects).
- **Acknowledgments**: Gives credit to the key tools and services used.
