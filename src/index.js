import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;
const mongoose = require('mongoose');

const From = require("./models/Form");

mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb://impeach:" + 
        process.env.MONGO_PASS + "@tide.csh.rit.edu/impeach-eboardevals?ssl=true",
        {useNewUrlParser: true}
)
.catch(err => console.log(err));

app.use(cors());

app.get('/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({users: ["nick", "owen", "saucetrey"]}));
});

app.post('/form', (req, res, next) => {
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