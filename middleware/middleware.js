const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/log', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
