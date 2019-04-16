# Presentation Boilerplate
> Boilerplate for a presentation using [Spectacle](http://formidable.com/open-source/spectacle/)

This boilerplate is based on [spectacle-boilerplate](https://github.com/FormidableLabs/spectacle-boilerplate) with the following addtions:
- Customized [spectacle-code-slide](https://github.com/jamiebuilds/spectacle-code-slide) plugin added to project with Prism language overrides to enable code highlighting for Elm, Kotlin, Rust, Clojure, F#, and ReasonML
- Code linted according to [Omaha JS Prime Grade standards](https://github.com/omahajs/eslint-config-omaha-prime-grade)

## Getting Started

After downloading the boilerplate, your first order of business is to open a terminal and run
```bash
npm install
```

Next, run
```bash
rm -R .git
```
to remove the existing version control.

Then, to start up the local server, run
```bash
npm start
```

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll.

## Build & Deployment

Building the dist version of the project is as easy as running
```bash
npm run build
```

If you want to deploy the slideshow to [surge](http://surge.sh/), run
```bash
npm run deploy
```
