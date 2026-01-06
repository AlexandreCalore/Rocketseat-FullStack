import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedulers-day.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

// Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como senado a data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

// Define a data mínima como sendo a data atual.
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

form.onsubmit = async (event) => {
    // Previnindo comportamento padrão de carregar página ao enviar o formulário
    event.preventDefault()

    try {
      //Recuperando o nome do cliente  
      const name = clientName.value.trim()

      if (!name) {
        return alert("Por favor, informe o nome do cliente")
      }

      //Recupera o horário selecionado

      const hourSelected = document.querySelector(".hour-selected")

      //Verifica se o horário foi selecionado
      if(!hourSelected){
        return alert("Por favor, selecione um horário")
      }
      //Recuperando somente a hora
      const [hour] = hourSelected.innerText.split(":")

      //Insere a hora na data

      const when = dayjs(selectedDate.value).set("hour", hour).format()

      //Gera um ID
      const id = new Date().getTime()
      
      await scheduleNew({
        id, 
        name, 
        when})
      
    } catch (error) {
     alert("Erro ao enviar o formulário")   
     console.log(error)
    }
}