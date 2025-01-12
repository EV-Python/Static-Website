const fs = require('fs-extra');
const path = require('path');
const marked = require('marked');
const frontMatter = require('front-matter');

// Configure paths
const contentDir = path.join(__dirname, 'content');
const distDir = path.join(__dirname, 'dist');
const templatePath = path.join(__dirname, 'index.html');

async function build() {
    try {
        // Create dist directory if it doesn't exist
        await fs.ensureDir(distDir);

        // Copy static assets
        await fs.copy(path.join(__dirname, 'css'), path.join(distDir, 'css'));
        await fs.copy(path.join(__dirname, 'js'), path.join(distDir, 'js'));
        
        // Copy index.html to dist
        await fs.copy(templatePath, path.join(distDir, 'index.html'));

        // Process markdown files
        const markdownFiles = await fs.readdir(contentDir);
        for (const file of markdownFiles) {
            if (file.endsWith('.md')) {
                const content = await fs.readFile(path.join(contentDir, file), 'utf-8');
                const { attributes, body } = frontMatter(content);
                const htmlContent = marked.parse(body);
                
                // Create HTML file
                const htmlFileName = file.replace('.md', '.html');
                await fs.writeFile(
                    path.join(distDir, htmlFileName),
                    htmlContent
                );
            }
        }

        console.log('Build completed successfully!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

build(); 