import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como senado a data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

// Define a data mínima como sendo a data atual.
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

form.onsubmit = (event) => {
    // Previnindo comportamento padrão de carregar página ao enviar o formulário
    event.preventDefault()
}