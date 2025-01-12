# Simple Static Website

A lightweight website built with HTML, CSS, and JavaScript, using Markdown for content management.

## Project Structure

```
Static-Site/
├── index.html          # Main landing page
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── main.js        # JavaScript for handling Markdown
├── content/           # Markdown content files
│   ├── about.md
│   ├── faq.md
│   └── blog/         # Blog posts directory
│       └── index.md  # Blog listing
```

## How to Add Content

### Adding Pages

1. Create a new Markdown file in the `content/` directory
2. Add the page to the navigation in `index.html`
3. Add the content path to the `contentPaths` object in `main.js`

### Adding Blog Posts

1. Create a new Markdown file in `content/blog/`
2. Update `content/blog/index.md` with a link to your new post

## Running Locally

You can run this site using any simple HTTP server. For example:
- Using Python: `python -m http.server`
- Using Node.js: `npx serve`



## To Do
1. Make a simple landing page
2. Make a template for a blog post
3. Make a markdown -> HTML converter
4. Simple integration for Convertkit
5. Add a contact form

## Customization
- Edit `css/style.css` to change the site's appearance
- Modify the navigation in `index.html`
- Update the JavaScript in `main.js` to add new features