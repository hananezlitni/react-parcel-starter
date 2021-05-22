# React + Parcel Starter

A minimal React starter, bundled with Parcel, that I usually use in my React projects. I like to keep my projects as minimal as possible and consisting of just the configurations I need, which is why I created this starter project.

## Configurations

- React (v17)
- Parcel
- SCSS modules
- ESLint
- Prettify

## Folder Structure in `/src`

```bash
├── src
│   ├── components
│   │   └── componentA
│   │       ├── componentA.js
│   │       └── componentA.module.scss
│   │       componentB
│   │       ├── componentB.js
│   │       └── componentB.module.scss
│   └── styles
│       ├── main.scss #Global styles
│       └── variables.scss #SCSS variables
│   ├── App.js # Start editing here
│   └── index.html
└──
```

## Project Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:1234
npm run dev

# build for production
npm run build
```

You can get started by editing `/src/App.js`.