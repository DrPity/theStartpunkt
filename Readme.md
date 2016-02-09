## Tasks (gulp)

---

### default:
- Scss (css precompilation)
- Browserify to wrap node-type -> `require('something')` e.g. bower components
- Jshint for JS validation
- Watches and serves all files on change
- BrowserSync for browser testing and live load

---

### install
- additionally install to a distribution path
- uglify,minify and optimize html,css,js and images

---

## Getting started
- Get the repository: `git clone https://github.com/DrPity/theStartpunkt`
- Install dependencies: `cd theStartpunkt && npm install && bower install`
- Build & serve (default-task): `gulp`
- Build, deploy, optimize (install-task): `gulp install --env=production --path=/some/path/to/your/desired/folder` default path is `./dist/`

---

## Additional information

- Vues.js as MVVM two way data binding - use with directives
- Dependencies as combination of npm/github and bower
