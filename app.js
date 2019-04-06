const express = require('express'),
                path = require('path'),
                sass = require('node-sass-middleware'),
                app = express();

app.use(
    sass({
        src: path.join(__dirname,'public','assets'),
        dest: path.join(__dirname,'public','stylesheets'),
        debug: true,
        outputStyle: 'compressed',
        prefix: '/stylesheets'
    })
);

app.use('/', express.static(path.join(__dirname,'/public')));
app.use(
    '/assets', 
    express.static(path.join(__dirname, '/node_modules/govuk-frontend/assets'))
);

const port = process.env.PORT || 3000;
app.listen(port);