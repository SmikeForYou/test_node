const User = require('../domain/models/user');
const client = require("../connections");
const bcrypt = require('bcrypt');



const signUp = async (email, password) => {
    const preparedPassword =  await bcrypt.hash(password, 10);
    const user = new User(0, email, preparedPassword);
    const res = await client.query('INSERT INTO "user"(email, password) VALUES($1, $2) RETURNING id', [user.email, user.password])
    user.id = res.rows[0].id
    return user
}

const signIn = async (email, password) => {
    const res = await client.query('SELECT * FROM "user" WHERE email = $1', [email])
    if (res.rows.length === 0) {
        return null
    }
    const user = res.rows[0]
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (isPasswordCorrect) {
        return user
    }
    return null
}


module.exports = {
    signUp: signUp,
    signIn: signIn
}