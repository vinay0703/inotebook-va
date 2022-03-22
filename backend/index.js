const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const path = require('path');

connectToMongo();
const app = express();
const port = process.env.port || 5000;

//To avoid cors error while fetch
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
//To use req.body you need to use this middleware
app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/contact', require('./routes/contact'));

//For any other path redirect to index.html
app.get('/*', (req, res)=>{
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});