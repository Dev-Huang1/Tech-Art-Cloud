document.addEventListener('DOMContentLoaded', function() {
    loadNews();
});

function loadNews() {
    fetch('posts.json')
        .then(response => response.json())
        .then(articles => {
            const newsGrid = document.getElementById('newsGrid');
            articles.forEach(article => {
                const card = createNewsCard(article);
                newsGrid.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading news:', error));
}

function createNewsCard(article) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <div class="news-card-content">
            <h3>${article.title}</h3>
            <p>${article.preview}</p>
        </div>
    `;
    return card;
}
