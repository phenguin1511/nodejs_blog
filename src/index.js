const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// Template Engine
app.engine('hbs', engine({
      extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); // Đảm bảo có thư mục "views"

console.log(__dirname)
app.use(morgan('combined'));

app.get('/', (req, res) => {
      res.render('home'); // Đảm bảo có file "views/home.handlebars"
});

app.get('/news', (req, res) => {
      res.render('news'); // Đảm bảo có file "views/home.handlebars"
});

app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
});
