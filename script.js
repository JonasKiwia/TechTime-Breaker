// Initialize favorites array in localStorage if it doesn't exist
if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]));
}

// Function to add content to favorites
function addToFavorites(type) {
    const content = document.getElementById(`${type}-content`).innerHTML;
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites.push({ type, content });
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavorites();
}

// Function to update favorites display
function updateFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const favoritesContent = document.getElementById('favorites-content');
    if (favorites.length > 0) {
        document.getElementById('favorites').style.display = 'block';
        favoritesContent.innerHTML = favorites.map(fav => 
            `<div class="card">
                <h3>${fav.type.charAt(0).toUpperCase() + fav.type.slice(1)}</h3>
                <p>${fav.content}</p>
            </div>`
        ).join('');
    }
}

// Fetch programming joke from JokeAPI
async function getJoke() {
    const jokeContent = document.getElementById('joke-content');
    jokeContent.classList.add('loading');
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode');
        const data = await response.json();
        jokeContent.innerHTML = data.type === 'single' 
            ? data.joke 
            : `${data.setup}<br><br>${data.delivery}`;
    } catch (error) {
        jokeContent.innerHTML = "Failed to load joke. Please try again.";
    }
    jokeContent.classList.remove('loading');
}

// Fetch advice from Advice Slip API
async function getActivity() {
    const activityContent = document.getElementById('activity-content');
    activityContent.classList.add('loading');
    try {
        // Using Advice Slip API instead of Bored API
        const response = await fetch('https://api.adviceslip.com/advice', {
            cache: 'no-cache' // This prevents caching issues with the API
        });
        const data = await response.json();
        activityContent.innerHTML = data.slip.advice;
    } catch (error) {
        activityContent.innerHTML = "Failed to load advice. Please try again.";
    }
    activityContent.classList.remove('loading');
}

// Fetch tech trivia from Open Trivia DB
async function getTrivia() {
    const triviaContent = document.getElementById('trivia-content');
    triviaContent.classList.add('loading');
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=1&category=18&type=multiple');
        const data = await response.json();
        const question = data.results[0];
        
        // Shuffle answers
        const answers = [...question.incorrect_answers, question.correct_answer]
            .sort(() => Math.random() - 0.5);
        
        triviaContent.innerHTML = `
            <p><strong>Q: </strong>${question.question}</p>
            <div style="margin-top: 1rem;">
                ${answers.map(answer => `
                    <button class="refresh-btn" style="margin: 5px" 
                        onclick="checkAnswer('${answer}', '${question.correct_answer}')">
                        ${answer}
                    </button>
                `).join('')}
            </div>
        `;
    } catch (error) {
        triviaContent.innerHTML = "Failed to load trivia. Please try again.";
    }
    triviaContent.classList.remove('loading');
}

// Check trivia answer
function checkAnswer(selected, correct) {
    const triviaContent = document.getElementById('trivia-content');
    if (selected === correct) {
        triviaContent.innerHTML += `<p style="color: green; margin-top: 1rem;">Correct! 🎉</p>`;
    } else {
        triviaContent.innerHTML += `
            <p style="color: red; margin-top: 1rem;">
                Wrong! The correct answer was: ${correct}
            </p>
        `;
    }
}

function fetchActivity() {
    fetch('activities.json') // Fetch the local JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error(` HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Select a random activity from the JSON array
            const randomIndex = Math.floor(Math.random() * data.length);
            const activity = data[randomIndex].activity;

            // Display the activity on the page
            document.getElementById('activity').innerText = activity;
        })
        .catch(error => {
            console.error('Error fetching activity:', error);
            document.getElementById('activity').innerText = "Oops! Unable to fetch activity.";
        });
}


// Initial load
getJoke();
getActivity();
fetchActivity();
getTrivia();
updateFavorites();
