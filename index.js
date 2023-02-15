const express = require('express');
const app = express();

const fs = require('@cyclic.sh/s3fs')(process.env.CYCLIC_BUCKET_NAME)

const AWS = require("aws-sdk");
const s3 = new AWS.S3()

app.get('/', async (req, res) => {
    fs.writeFileSync('my_file.txt', new Date().toISOString())
    return res.send('Hello World!');
});

app.get('/contents', async (req, res) => {
    console.log('/contents route')
    let content = fs.readFileSync('my_file.txt').toString()
     
    return res.send(content);
});

app.listen(3000, () => {});
