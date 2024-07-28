document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menu-button');
    var mobileMenu = document.querySelector('.mobile-menu');

    menuButton.addEventListener('click', function () {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenu.classList.add('hide');

            mobileMenu.addEventListener('animationend', function handler() {
                mobileMenu.style.display = 'none';
                mobileMenu.classList.remove('hide');
                mobileMenu.removeEventListener('animationend', handler);
            });
        } else {
            mobileMenu.style.display = 'block';
            mobileMenu.classList.add('active');
        }
    });
});


document.querySelector('.hamburger-icon').addEventListener('click', function() {
    this.classList.toggle('active');
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
