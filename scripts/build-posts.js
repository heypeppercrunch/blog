const MarkdownConverter = require('../src/utils/markdownConverter');
const fs = require('fs');
const path = require('path');

async function buildPosts() {
    const converter = new MarkdownConverter();
    const postsDir = path.join(__dirname, '../posts');
    const outputDir = path.join(__dirname, '../public/posts');

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Get all markdown files
    const markdownFiles = fs.readdirSync(postsDir)
        .filter(file => file.endsWith('.md'));

    // Convert each markdown file to HTML
    for (const file of markdownFiles) {
        const markdown = path.join(postsDir, file);
        const html = await converter.convertMarkdownToHtml(markdown);
        
        // Save as HTML file in public/posts directory
        const outputFile = path.join(outputDir, file.replace('.md', '.html'));
        fs.writeFileSync(outputFile, html);
        
        // Also copy the HTML file to the root posts directory
        const rootPostsDir = path.join(__dirname, '../posts');
        if (!fs.existsSync(rootPostsDir)) {
            fs.mkdirSync(rootPostsDir, { recursive: true });
        }
        fs.writeFileSync(path.join(rootPostsDir, file.replace('.md', '.html')), html);
        
        console.log(`Converted ${file} to HTML`);
    }
}

buildPosts().catch(console.error);