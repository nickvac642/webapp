import express from 'express';
import cors from 'cors';

const app = express();
const bodyParser = require('body-parser');
const port = 5000;
const mongoose = require('mongoose');

const Form = require('./models/Form');

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://impeach:s64ywk7zfwq57yw4rdyd29ufh7xmrep9@tide.csh.rit.edu/impeach-eboardevals?ssl=true',
        {useNewUrlParser: true}
).then( 
    () => {console.log('Database connected')},
    err => { console.log('Can not connect to the database - ' + err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    console.warn('it worked');
    const form = new Form({
        _id: new mongoose.Types.ObjectId(),
        eboard: req.body.eboard,
        positiveText: req.body.positiveText,
        negativeText: req.body.negativeText,
        commentsText: req.body.commentsText,
        anonymous: req.body.anonymous
    });
    form.save(function(err, form){
        if(err) return console.error(err);
        console.log(form + " saved to form collection");
    })
    res.redirect('/');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));