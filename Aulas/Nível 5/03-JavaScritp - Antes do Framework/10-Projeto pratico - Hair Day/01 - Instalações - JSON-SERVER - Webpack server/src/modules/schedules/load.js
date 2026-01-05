import { hoursLoad } from "../form/hours-load";

//seleciona o input de data
const selectedDate = document.getElementById("date");
export function schedulesDay(){
  //Obtém a data do input
  const date = selectedDate.value
  //Busca na API os agendamentos para carregar do lado direito
  hoursLoad({ date });
  }