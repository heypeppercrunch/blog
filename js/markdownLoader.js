class BlogManager {
    constructor() {
        this.posts = [
            {
                id: 'building-in-web3',
                title: 'Building in Web3: 9 Key Areas for Crypto Product Management',
                subtitle: 'Practical Strategies for PMs: Bridging Traditional Product Management with Web3 Innovations',
                date: '2024-03-19',
                readTime: '15 min',
                filename: 'building-in-web3.md'
            },
            // Add more posts here
        ];
    }

    async loadPost(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return null;

        try {
            const response = await fetch(`/posts/${post.filename}`);
            const markdown = await response.text();
            return {
                ...post,
                content: markdown
            };
        } catch (error) {
            console.error('Error loading post:', error);
            return null;
        }
    }

    generatePostHTML(post) {
        return `
            <div class="post-meta">
                <h1>${post.title}</h1>
                <div class="post-subtitle">${post.subtitle}</div>
                <div class="post-meta-info">
                    <span>📚 ${post.readTime}</span>
                    <span>🗓️ ${post.date}</span>
                </div>
            </div>
            <div class="blog-content">
                ${marked.parse(post.content)}
            </div>
        `;
    }
} 