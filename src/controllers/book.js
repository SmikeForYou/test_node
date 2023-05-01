const Book = require('../domain/models/book')
const client = require('../connections')
const createBook = async (title, year) => {
    // const error = otvalidirovano()
    const book = new Book(0, title, year)
    const res = await client.query("INSERT INTO book(title, year) VALUES($1, $2) RETURNING id", [book.title, book.year])
    book.id = res.rows[0].id
    return book
}

const getBooks = async (title) => {
    return await client.query("SELECT * from book WHERE title ILIKE %'$1'%", [title])
}


module.exports = {
    createBook: createBook
}