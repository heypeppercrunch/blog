const blogManager = new BlogManager();

function createPostCard(post) {
    return `
        <article class="post-card">
            <h2 class="post-title">${post.title}</h2>
            ${post.subtitle ? `<h3 class="post-subtitle">${post.subtitle}</h3>` : ''}
            <div class="post-meta-info">
                <span>📚 ${post.readTime}</span>
                <span>🗓️ ${post.date}</span>
            </div>
            <a href="/public/posts/${post.id}.html" class="read-more">Read more</a>
        </article>
    `;
}

function loadPosts() {
    const posts = blogManager.getAllPosts();
    
    const postsContainer = document.getElementById('posts-container');
    if (postsContainer) {
        posts.forEach(post => {
            postsContainer.innerHTML += createPostCard(post);
        });
    }
}

// Load posts when the document is ready
document.addEventListener('DOMContentLoaded', loadPosts); 