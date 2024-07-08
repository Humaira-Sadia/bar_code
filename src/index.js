const express = require("express");
const ejs = require("ejs");
const path = require('path');
const qrcode = require('qrcode');
const exp = require("constants");
const app = express();
const fs = require('fs');

const port = process.env.port || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.set("view engine", "ejs");
app.set("views", "view");

app.get("/",(req,res) =>{
    res.render("index");
})


app.post('/scan', (req,res) => {
    const input_text = req.body.text;
    qrcode.toDataURL(input_text,(err,src) => {
        res.render('scan',{
            qr_code: src,
        });

        const qrCodeImagePath = './qrcode.png';
        const downloadPath = './downloaded_qrcode.png';

        
    })
})
app.listen(port, console.log(`listening on port ${port}`));