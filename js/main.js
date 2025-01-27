const posts = [
    {
        id: 'building-in-web3',
        title: 'Building in Web3: 9 Key Areas for Crypto Product Management',
        subtitle: 'Practical Strategies for PMs: Bridging Traditional Product Management with Web3 Innovations',
        preview: "After years of managing crypto products and nurturing vibrant communities, I've gained insights that can benefit fellow Product Managers in the Web3 space...",
        slug: 'building-in-web3',
        date: '2024-03-19',
        readTime: '15 min'
    }
    // Add more posts here
];

function createPostCard(post) {
    return `
        <article class="post-card">
            <h2 class="post-title">${post.title}</h2>
            <h3 class="post-subtitle">${post.subtitle}</h3>
            <div class="post-meta-info">
                <span>📚 ${post.readTime}</span>
                <span>🗓️ ${post.date}</span>
            </div>
            <p class="post-preview">${post.preview}</p>
            <a href="posts/${post.slug}.html" class="read-more">Read more</a>
        </article>
    `;
}

function loadPosts() {
    const postsContainer = document.getElementById('posts-container');
    if (postsContainer) {
        posts.forEach(post => {
            postsContainer.innerHTML += createPostCard(post);
        });
    }
}

// Load posts when the document is ready
document.addEventListener('DOMContentLoaded', loadPosts); 