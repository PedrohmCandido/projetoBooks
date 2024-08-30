import BookForm from "../components/BookForm";

function editBook(){
    return (
        <div style={{display: "grid", placeItems: "center", marginLeft: "550px"}}> 
            <h1>Editar livro</h1>
            <BookForm/>
        </div>
    )
}

export default editBook;