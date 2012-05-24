# MathJax-Google-Reader

This is a Google Chrome extension that loads MathJax into Google Reader, so
that any RSS feeds with standard MathJax (LaTeX or MathML) notation will have
the notation rendered.

## Motivation

I read a lot of blogs with LaTeX rendered math symbols (usually with MathJax),
but I like to read them in Google Reader because I'd prefer not to open a new
tab for each blog post.

## Installation

1. Clone this github repo!
1. Visit `chrome://extensions` in your Chrome browser.
1. Check the "Developer mode" box, if it isn't already.
1. Click the "Load Unpacked Extension" button, and navigate to the directory
containing this repo.
1. Single click on the repo directory, and click "Open".
1. You're done!

## Current issues (that should be fixed soon)

1. Investigate smarter ways of re-rendering (currently, re-render every 10s).
Methods will likely have to use the Google Reader DOM.
1. See if there is a way to do this besides injecting `script` tags everywhere.
