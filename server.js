/*
app.use(express.static(path.join(__dirname + './public')));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
 */
import express from 'express';
const app = express();
const port = 8080;
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static(path.join(__dirname + './public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + './public'));
});

app.listen(port, (err) => {
    if(!err){
        console.log(`Server listening port 8080`)
    }else {
        console.log('Error al escuchar el puerto')
    }
})