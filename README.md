# TechTime Breaker - Interactive Tech Entertainment Hub

## Overview
TechTime Breaker is an interactive web application designed to provide tech enthusiasts with a fun and engaging way to take breaks. The application combines programming jokes, tech trivia, daily advice, and a focus timer to create an entertaining and productive break experience.

## Features

### 1. Programming Jokes 🎭
- Fetches programming-related jokes from JokeAPI
- Includes both single-line and setup-punchline format jokes
- Safe mode enabled to ensure workplace-appropriate content

### 2. Daily Advice 💡
- Provides random pieces of advice using the Advice Slip API
- Refresh functionality to get new advice
- Save favorite advice to local storage
  
### 3. Activities
- Provides random pieces of advice for best Activities a tech enthusiasts
- Uses the Activities.json file
- Refresh functionality to get new Activities

### 4. Tech Trivia Quiz 🎯
- Pulls technology-related questions from Open Trivia Database
- Multiple choice format with immediate feedback
- Tracks correct and incorrect answers
- Various difficulty levels and topics

### 5. Tech Focus Timer ⏱️
- Pomodoro-style timer for productive work sessions
- 25-minute focus periods with 5-minute breaks
- Audio notification when timer completes
- Toggle between work and break modes
- Pause, reset, and restart functionality

### 6. Favorites System ⭐
- Save your favorite content across all features
- Persistent storage using localStorage
- Easy access to saved items

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- json
- External APIs:
  - JokeAPI
  - Advice Slip API
  - Open Trivia Database

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/techtime-breaker.git
```

2. Navigate to the project directory:
```bash
cd techtime-breaker
```

3. Open the project:
- Double click on `index.html` or
- Use a live server extension in your code editor

## File Structure
```
techtime-breaker/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js          # Main JavaScript file
├── pomodoro.js        # Timer functionality
└── README.md          # Project documentation
```

## API Usage

### JokeAPI
```javascript
fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode')
```

### Advice Slip API
```javascript
fetch('https://api.adviceslip.com/advice')
```

### Open Trivia Database
```javascript
fetch('https://opentdb.com/api.php?amount=1&category=18&type=multiple')
```

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## Future Enhancements
- User authentication system
- More categories for trivia
- Customizable timer intervals
- Social sharing features
- Dark/Light theme toggle
- Statistics tracking for trivia performance
- Additional API integrations

## Known Issues
- Some special characters in trivia questions may not display correctly
- Timer sound might not work on some mobile browsers
- Local storage has limited capacity for favorites

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Contact
Your Name - [your.email@example.com](mailto:your.email@example.com)
Project Link: [https://github.com/yourusername/techtime-breaker](https://github.com/yourusername/techtime-breaker)

## Acknowledgments
- [JokeAPI](https://jokeapi.dev/) for programming jokes
- [Advice Slip API](https://api.adviceslip.com/) for daily advice
- [Open Trivia Database](https://opentdb.com/) for tech trivia questions
