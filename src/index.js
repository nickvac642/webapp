import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors())

app.get('/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({users: ["nick", "owen", "saucetrey"]}));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));