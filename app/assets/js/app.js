requirejs.config({
    "baseUrl": "/static/js/libs",
    "paths": {
      "app": "../app"
    },
    "shim": {
        'main': ['jquery', 'handlebars', 'ember']
    }
});

// Load the main app module to start the app
requirejs(["cs!app/main"]);