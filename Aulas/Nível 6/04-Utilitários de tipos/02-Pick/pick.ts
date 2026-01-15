interface Book { //Omit para reaproveitar uma tipagem omitindo propiedades
    title: string,
    pages: number,
    author: string,
    description: string
}

const book: Omit<Book, "description" | "pages" > = {title: "TS", author: "Calore" } // Se acaso não quiser informar a description, usamos o Omit antes da interfacer + a propiedade