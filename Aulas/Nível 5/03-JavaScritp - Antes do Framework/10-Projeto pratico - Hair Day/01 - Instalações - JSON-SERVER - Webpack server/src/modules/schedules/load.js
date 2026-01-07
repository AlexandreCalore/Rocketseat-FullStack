import { scheduleFetchByDay } from "../../services/service-schedules.js";
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "../schedules/show.js"
//seleciona o input de data
const selectedDate = document.getElementById("date");
export async function schedulesDay(){
  //Obtém a data do input
  const date = selectedDate.value
  //Busca na API os agendamentos para carregar do lado direito
  const dailySchedules = await scheduleFetchByDay({date});

  //Exibe os agendamentos
  schedulesShow({ dailySchedules });

  //Renderiza na API os agendamentos
  hoursLoad({ date, dailySchedules });
  }