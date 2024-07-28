document.addEventListener('DOMContentLoaded', function() {
        loadNews();
        
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        hamburgerIcon.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    });

document.querySelector('.hamburger-icon').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('active');
});


    function loadNews() {
        fetch('posts/posts.json')
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
