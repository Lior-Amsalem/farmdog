# Google maps polygon
Basic angualr polygon google map that set coordination base on json data.
This application based on angular seed.

# How to

1. Git clone the project.
2. Go to the project folder.
3. Run `npm install`.
4. Run `bower install` for bower dependencies.
5. Run `npm start` to start the server.
6. Go to `http://localhost:8000/#!/map` and see the application.


# More
1. Build in angular 1.5.
2. Folder by feature, our main code can be found in `map` folder and contain main js file, template, directives, service and more.
3. I use bower in order to download and manage client side dependencies (like angular).

# Files
`map/map.html` contain the main map template.
`map/map.js` contain controller and main js files.
`map/panel-directive.js` is the panel directive.
`map/panel.html` have all the panel html.
`map/servicer.js` holds the route that we want to get the data from - currently just plain stub object.
`app.css` holds our application css (for large application I prefer sass/less)
`app.js` holds our main application javascript.
`index.html` is the application main template, imports all relevant files.