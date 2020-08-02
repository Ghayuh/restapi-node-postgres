const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'firstapi',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    // console.log(response);
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

const createUser = async (req, res) => {
    const { name, email } = req.body;

    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {name, email}
        }
    })
};

const updateUsers = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;

    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    res.json(`User ${id} Updated Succesfully`);
};

const deleteUsers = async (req, res) => {
    const name = req.params.name;

    const response =  await pool.query('DELETE FROM users WHERE name = $1', [name]);
    res.json(`${name} has been deleted`);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUsers,
    updateUsers
}