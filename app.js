const express = require('express'),
                path = require('path'),
                sass = require('node-sass-middleware'),
                app = express();

const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname,'/public')));
app.use(
    '/assets', 
    express.static(path.join(__dirname, '/node_modules/govuk-frontend/assets'))
);

app.use(
    sass({
        src: path.join(__dirname, '/public/assets'),
        dest: path.join(__dirname,'/public/stylesheets'),
        debug: true
    })
);

app.listen(port);