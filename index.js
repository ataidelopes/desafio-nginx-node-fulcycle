const people = require('./db/people-db');
const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

people.insertPeople();

app.get('/', (req, resp) => {
    const people = people.selectPeoples();
    resp.send('./index.html', {people})
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
