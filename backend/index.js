const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

//To avoid cors error while fetch
app.use(cors());
//To use req.body you need to use this middleware
app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});