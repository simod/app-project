{
    "baseUrl": "app",
    "out": "main-built.js",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    "optimize": "none",

    // point to the shim config we set up before
    //"mainConfigFile": "app.js",

    "name": "main",
    paths: {
        jquery: "../libs/jquery",
        handlebars: "../libs/handlebars",
        ember: "../libs/ember"
    },
}