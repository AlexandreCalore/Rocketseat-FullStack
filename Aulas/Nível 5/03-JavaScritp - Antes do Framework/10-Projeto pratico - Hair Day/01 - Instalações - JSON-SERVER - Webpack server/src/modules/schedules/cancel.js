import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
const periods = document.querySelector("periods");

//Gera o evento de click para cada lista (manhã tarde e noite)
periods.forEach((period) => {
  //Captura o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if(events.target.classList.contains("cancel-icon")) {
      //Obtém a li pai do elemento clicado.
      const item = event.target.closest("li");

      //Pegamos o ID do agendamento para remover
      const { id } = item.dataset;

      //Confirma que o ID foi cancelado
      if(id){
        //Confirma se o usuário quer realmente cancelar
        const isConfirm = confirm(
          "Deseja realmente cancelar este agendamento?"
        )
        if(isConfirm){
          // Faz a requisição na API para cancelar
          await scheduleCancel({ id })
          
          //Recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  })
})