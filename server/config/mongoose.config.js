const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {console.log('Established connection to database')})
    .catch(err => console.log('Something went wrong with database connection', err));