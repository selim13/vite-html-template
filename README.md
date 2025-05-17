# Vite HTML Template

A starter template for a static HTML site using Vite and Handlebars.

## Installation

```bash
pnpm install
pnpm upgrade --latest
pnpm dev
```

## Commands

* `pnpm dev` — Run Vite in development mode.
* `pnpm build` — Build the project for production in the `./dist` folder.
* `pnpm preview` — Start a local server to preview the production build from the `./dist` folder.
* `pnpm svgo` — Optimize all SVG images in the `./src/assets/images` folder.
* `pnpm icons` — Generate a CSS class map for SVG icons.

## Icons

This project uses mask-based SVG icons.
Every SVG image placed in the `./src/assets/images/icons/<size>/` directory can be used in markup as `.i.i--image-size`.

Running the `pnpm icons` command will invoke a script that updates the CSS icon class map located at
`./src/assets/styles/components/_i.scss`.

For example, if you have the file: `./src/assets/images/icons/24/burger.svg`

After updating the class map, there will we the icon class:

```css
.i--burger-24 {
  width: 24px;
  height: 24px;
  mask-image: url("assets/images/icons/24/burger.svg");
}
```

You can then use the icon in HTML as follows:

```html
<div class="i i--burger-24"></div>
```
