document.addEventListener('DOMContentLoaded', function() {
        loadNews();
        
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        hamburgerIcon.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
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

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%@*&';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    function onTurnstileSuccess(token) {
        const randomString = generateRandomString(300);
        const newUrl = window.location.href.split('?')[0] + '?cf-turnstile-code=' + randomString;
        window.history.replaceState(null, null, newUrl);
        
        setTimeout(function() {
            window.history.replaceState(null, null, window.location.pathname);
            document.getElementById('captcha-container').classList.add('hidden');
            document.getElementById('original-content').classList.remove('hidden');
        }, 1869);
    }
