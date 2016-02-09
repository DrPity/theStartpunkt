## Tasks (gulp)

---

### default:
- Scss (css precompilation)
- Browserify to wrap node-style -> `require('something')` e.g. bower components
- Jshint for JS validation
- Watches and serves all files on change
- BrowserSync for browser testing and live load


### install
- Additionally install to a distribution path
- Uglify,minify and optimize html,css,js and images

---

## Getting started
- Get the repository: `git clone https://github.com/DrPity/theStartpunkt`
- Install dependencies: `cd theStartpunkt && npm install && bower install`
- Build & serve (default-task): `gulp`
- Build, deploy, optimize (install-task): `gulp install --env=production --path=/some/path/to/your/desired/folder` default path is `./dist/`

---

## Additional information

- Vues.js as MVVM so two way data binding with directives etc. (Good stuff)
- Dependencies as a combination of npm and bower
