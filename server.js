const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const app = express();
const path = require('path')

app.use(cors())
// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/auth', require('./routes/auth'));

if(process.env.NODE_ENV === 'production') {
    // serve static Build
    app.use(express.static('client/build'))
    // change to clien/build/index.html later
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
