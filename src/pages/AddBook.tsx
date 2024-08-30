import BookForm from "../components/BookForm";

function addBook() {
    return(
        <div style={{display: "grid", placeItems: "center", marginLeft: "550px"}}>
            <h1>Adicionar Livro</h1>
            <BookForm/>
        </div>
    )
}

export default addBook;