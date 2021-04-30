const express = require ('express');
const path = require ('path');
const app = express();

//settinggs
app.set('port', 80);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))    
});
