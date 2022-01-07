const db = require("./db");

async function selectPeoples(){
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM people;');
    return rows;
}

async function insertPeople(){
    const conn = await db.connect();
    const sql = `INSERT INTO people(name) values('Rodrigo')`

    await conn.query(sql)
    conn.end();
}

module.exports = {selectPeoples, insertPeople}
