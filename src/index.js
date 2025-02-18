const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = 3000;
const db = require('./config/db');
const methodOverride = require('method-override');


app.use(express.urlencoded({
      extended: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
// Connect to DB
db.connect();

// Template Engine
app.engine('hbs', engine({
      extname: '.hbs',
      helpers: {
            sum: (a, b) => a + b,
      }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // Đảm bảo có thư mục "views"

route(app);

app.listen(port, () => {
      console.log(`App listening on port ${port}`);
});
