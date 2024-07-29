document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const dropdowns = document.querySelectorAll('.dropdown');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
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
    
    // 创建图片元素
    const img = document.createElement('img');
    img.src = article.image;
    img.alt = article.title;
    img.onerror = function() {
        console.error(`Failed to load image: ${article.image}`);
        this.src = 'path/to/placeholder-image.jpg'; // 设置一个默认的占位图片
    };

    const content = document.createElement('div');
    content.className = 'news-card-content';
    content.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.preview}</p>
    `;

    card.appendChild(img);
    card.appendChild(content);

    return card;
}
