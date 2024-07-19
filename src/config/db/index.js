const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/blog_dev');
        console.log('connect succeessfully');
    } catch (error) {
        console.log('connect failure');
    }
}

module.exports = { connect }