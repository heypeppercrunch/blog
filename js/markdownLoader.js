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
            {
                id: 'why-i-have-faith',
                title: 'Why I Have Faith in Blockchain Becoming Mainstream',
                subtitle: '',
                date: '2024-04-27',
                readTime: '4 min',
                filename: 'why-i-have-faith.md'
            },
            {
                id: 'read-write-own',
                title: 'Key takeaways from reading the book <Read, Write, Own>',
                subtitle: 'We are in the good old days!',
                date: '2024-05-20',
                readTime: '10 min',
                filename: 'read-write-own.md'
            }
            // 새로운 포스트를 여기에 추가하세요
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

    getAllPosts() {
        return this.posts;
    }
} 