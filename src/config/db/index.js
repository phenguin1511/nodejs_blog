const mongoose = require('mongoose'); // Import mongoose



async function connect() {
      try {
            await mongoose.connect('mongodb://localhost:27017/f8_education', {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
            });
            console.log('Connect successfully!!!');
      } catch (error) {
            console.log('Connect failure!!!');
      }
}

module.exports = {
      connect
}