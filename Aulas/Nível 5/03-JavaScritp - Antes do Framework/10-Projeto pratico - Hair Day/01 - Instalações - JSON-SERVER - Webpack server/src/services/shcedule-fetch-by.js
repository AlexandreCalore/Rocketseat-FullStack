import { baseURL } from "./api-config.js"
import dayjs from "dayjs";

export async function scheduleFetchByDay({ date }) {
  try {
    //Fazendo a requisição para buscar os agendamentos do dia
    const response  = await fetch(`${apiConfig.baseURL}/schedules`)

    //Converte para JSON
    const data = await response.json()

    //Filtra os agendamentos do dia selecionado
    const daylySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))
  } catch (error) {
    console.log(error)
    alert("Não foi possível carregar os agendamentos do dia.")
  }
}