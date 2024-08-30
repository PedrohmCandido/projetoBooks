import { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/api';
import { Link } from 'react-router-dom';

interface Book {
    id: string,
    titulo: string,
    autor: string,
    ano: number,
    genero: string,
    paginas: number
}

function BookList() {
    const [books, setBooks] = useState<Book[]>([]);
    
    useEffect(() => {
        loadBooks();
    });

    const loadBooks = async () => {
        const response = await getBooks();
        setBooks(response.data)
    };

    const handleDelete = async (id: string) => {
        await deleteBook(id);
        loadBooks();
    };

    return (
        <div style={{display: "grid", placeItems: "center", margin: "0px 300px"}}>
            <h1> Lista de Livros</h1>
            <Link to="add/"> Adicionar livro</Link>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        Título: {book.titulo} | Gênero: {book.genero} | Autor: {book.autor} | Ano lançamento: {book.ano} | paginas: {book.paginas}
                        <Link to={`/edit/${book.id}`} style={{marginLeft: "10px", marginRight: "10px"}}>Editar</Link>
                        <button onClick={() => handleDelete(book.id)}>Deletar Livro</button>
                    </li>
                ))}
            </ul>
        </div>
    )


}

export default BookList;
