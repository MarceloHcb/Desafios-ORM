const BookService = require("../services/books.service");

const getAll = async (req, res) => {
try {
    const author  = req.query.q;    
    let books;
    if (author) {
        books = await BookService.getByAuthor(author);
    } else {
        books = await BookService.getAll();
    }
    if (books.length < 1) return res.status(404).json("Não há livros cadastrados");

    return res.status(200).json(books);
} catch (e) {
    return res.status(500).json({ mesage: e });
}
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
    if (!book) return res.status(404).json({ message: "Livro não encontrado" });
    return res.status(200).json(book);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  try {
    const newBook = await BookService.createBook(title, author, pageQuantity);
    return res.status(201).json(newBook);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updatedBook = await BookService.updateBook(
      id,
      title,
      author,
      pageQuantity
    );
    if (!updatedBook)
      return res.status(404).json({ message: "Livro não encontrado" });
    return res.status(200).json({ message: "Livro atualizado com sucesso!" });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await BookService.deleteBook(id);
    return res
      .status(200)
      .json({ message: `Livro ${id} excluido com sucesso!` });
  } catch (e) {
    return res.status(500).json({ mesage: e });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
