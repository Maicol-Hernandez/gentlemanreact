import { useRef, useState } from "react";

// objectivo: nos permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente
// SIN causar un re-render
// objectivo 2: hacer referencia a un elemento del DOM

// Ejemplo:
// Un marcador de un libro que utilizamos para guardar la ultima posicion de la lecta actual
// NO modifica el contenido del libro
export const BookReader = () => {
    const currentPageRef = useRef<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handleNextPage = () => {
        currentPageRef.current += 1;
        console.log(`Next page ${currentPageRef.current}`);
    }

    const handlePreviousPage = () => {
        if (currentPageRef.current === 1) {
            console.log(`You are at the first page ${currentPageRef.current}`);
            return;
        }

        currentPageRef.current -= 1;
        console.log(`Previous page ${currentPageRef.current}`);
    }

    const handleGoToPage = (page: number) => {
        if (page < 1) {
            console.log('You cannot go to a negative page');
            return;
        }

        currentPageRef.current = page;
        setCurrentPage(page);
        // console.log(`Go to page ${currentPageRef.current}`);
    }

    return (
        <div>
            <h2>Book Reader</h2>
            <p>Current page: {currentPageRef.current}</p>
            <p>Current page [STATE]: {currentPage}</p>
            <button onClick={handlePreviousPage}>Previous page</button>
            <button onClick={handleNextPage}>Next page</button>
            <button onClick={() => handleGoToPage(50)} >Go to page</button>
        </div>
    )
}