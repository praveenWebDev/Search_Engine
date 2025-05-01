const animeList = [
    { name: 'Naruto', url: 'https://www.google.com/search?client=firefox-b-d&q=naruto' },
    { name: 'One Piece', url: 'onepiece.html' },
    { name: 'Attack on Titan', url: 'attackontitan.html' },
    { name: 'My Hero Academia', url: 'myheroacademia.html' },
    { name: 'Demon Slayer', url: 'demonslayer.html' },
    { name: 'Dragon Ball Z', url: 'dragonballz.html' },
    { name: 'Fullmetal Alchemist', url: 'fullmetalalchemist.html' },
    { name: 'Death Note', url: 'deathnote.html' },
    { name: 'Bleach', url: 'bleach.html' },
    { name: 'Hunter x Hunter', url: 'hunterxhunter.html' }
];

const searchBar = document.getElementById('searchBar');
const suggestionsList = document.getElementById('suggestions');

// Event listener for user input
searchBar.addEventListener('input', function() {
    const input = this.value.trim().toLowerCase();
    suggestionsList.innerHTML = ''; // Clear previous suggestions

    // If input is not empty, show suggestions
    if (input.length > 0) {
        const filteredAnime = animeList.filter(anime => anime.name.toLowerCase().startsWith(input));
        
        // Display the filtered anime names as suggestions
        filteredAnime.forEach(anime => {
            const suggestionItem = document.createElement('li');
            suggestionItem.textContent = anime.name;
            suggestionItem.addEventListener('click', function() {
                searchBar.value = anime.name; // Set the selected anime in the input field
                suggestionsList.innerHTML = ''; // Clear suggestions
                window.location.href = anime.url; // Redirect to the anime's page
            });
            suggestionsList.appendChild(suggestionItem);
        });
    }
});

// Optional: Close suggestions when clicking outside
document.addEventListener('click', function(event) {
    if (!searchBar.contains(event.target) && !suggestionsList.contains(event.target)) {
        suggestionsList.innerHTML = ''; // Clear suggestions if clicked outside
    }
});