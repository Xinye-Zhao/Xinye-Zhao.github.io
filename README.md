# Xinye Zhao Academic Website

Personal academic website repository for [Xinye-Zhao.github.io](https://Xinye-Zhao.github.io).

## Local preview

1. Install Ruby, Bundler, and Node.js.
2. Run:

```bash
bundle install
bundle exec jekyll serve -l -H localhost
```

3. Open `http://localhost:4000`.

## Repository structure

- `_config.yml`: site-wide configuration such as title, author info, and theme settings.
- `_data/navigation.yml`: top navigation bar entries.
- `_pages/about.md`: home page content.
- `_pages/publications.html`: publications page layout and page-level styling.
- `_pages/teaching.html`: teaching landing page.
- `_pages/honors-service.md`: honors and service page.
- `_pages/portfolio.html`: miscellaneous page content.
- `_publications/`: one Markdown file per paper/publication.
- `_teaching/`: one Markdown file per teaching item.
- `images/`: profile images, teaser figures, and miscellaneous images.
- `files/`: PDFs such as preprints, posters, or slides.
- `_includes/archive-single.html`: the template that renders each publication entry, including badges and buttons.

## Common edits

### 1. Add a paper

Create a new Markdown file in `_publications/`. A publication entry is usually one file per paper.

Typical fields to edit:

- `title`
- `date`
- `venue`
- `excerpt`
- `paperurl`
- `status` such as `Accepted to`
- `header.teaser` for a small paper figure shown on the website
- `bibtex` for the BibTeX popup button

If the paper has a PDF, put it in `files/` and link it from the publication file. If it has a teaser/schematic figure, put that image in `images/` and reference it in `header.teaser`.

### 2. Add miscellaneous content

Edit `_pages/portfolio.html`.

This page currently contains the custom Miscellaneous section, so if you want to add a new item such as a hobby, photo, or short personal note, this is the file to modify. Put any new images in `images/` and reference them from this page.

### 3. Add teaching

Create a new Markdown file in `_teaching/`.

Each teaching item is stored as a separate file in that collection. The teaching page will list the items from this folder.

### 4. Modify the content of a specific paper

Find that paper's file in `_publications/` and edit it directly.

For example, this is where you would change:

- the paper title
- author line
- venue
- status such as published / accepted / preprint
- abstract or excerpt
- preprint/project/code links
- BibTeX
- teaser image

## Other useful edits

- Change the home page intro or recent highlights: edit `_pages/about.md`
- Change the top menu tabs: edit `_data/navigation.yml`
- Change site-wide settings: edit `_config.yml`
- Change how publication cards are rendered: edit `_includes/archive-single.html`

## Template origin

This site is based on the Academic Pages / Minimal Mistakes Jekyll template stack and has been customized for this repository.
