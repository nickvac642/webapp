import express from 'express';
import cors from 'cors';

const FormRouter = express.Router();
const app = express();
const port = 5000;
const mongoose = require('mongoose');

const From = require("./models/Form");

mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb://impeach:" + 
        process.env.MONGO_PASS + "@tide.csh.rit.edu/impeach-eboardevals?ssl=true",
        {useNewUrlParser: true}
).then( 
    () => {console.log('Database connected')},
    err => { console.log('Can not connect to the database - ' + err)}
);

app.use(cors());

app.get('/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({users: ["nick", "owen", "saucetrey"]}));
});

app.get('form', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
});

FormRouter.route('/form').post(function(req, res) {
    console.warn('it worked');
    const form = new From({
        _id: new mongoose.Types.ObjectId(),
        eboard: req.body.eboard,
        positiveText: req.body.positiveText,
        negativeText: req.body.negativeText,
        commentsText: req.body.commentsText,
        anonymous: req.body.anonymous
    });
    form.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: "Handling Post requests to /form",
        createdFrom: from
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = FormRouter;