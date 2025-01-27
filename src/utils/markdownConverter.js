const marked = require('marked');
const fs = require('fs');
const path = require('path');

class MarkdownConverter {
    constructor() {
        this.template = fs.readFileSync(path.join(__dirname, '../templates/post.html'), 'utf-8');
    }

    async convertMarkdownToHtml(markdownFile) {
        const markdown = fs.readFileSync(markdownFile, 'utf-8');
        const content = marked.parse(markdown);
        
        // Extract metadata from markdown (first few lines)
        const metadata = this.extractMetadata(markdown);
        
        // Generate HTML using template
        const html = this.template
            .replace('{{title}}', metadata.title)
            .replace('{{date}}', metadata.date)
            .replace('{{readTime}}', metadata.readTime)
            .replace('{{content}}', content);
            
        return html;
    }

    extractMetadata(markdown) {
        // Basic metadata extraction - you can enhance this
        const firstLine = markdown.split('\n')[0];
        const title = firstLine.replace('# ', '');
        
        return {
            title,
            date: new Date().toLocaleDateString(),
            readTime: this.calculateReadTime(markdown) + ' min read'
        };
    }

    calculateReadTime(markdown) {
        const words = markdown.split(/\s+/).length;
        return Math.ceil(words / 200); // Assuming 200 words per minute
    }
}

module.exports = MarkdownConverter; 
