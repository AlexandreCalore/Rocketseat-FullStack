const periods = document.querySelector("periods");

//Gera o evento de click para cada lista (manhã tarde e noite)
periods.forEach((period) => {
  //Captura o evento de clique na lista
  period.addEventListener("click", (event) => {
    if(events.target.classList.contains("cancel-icon")) {
      //Obtém a li pai do elemento clicado.
      const item = event.target.closest("li");
      const { id } = item.dataset;

      if(id){
        const isConfirm = confirm("Deseja realmente cancelar este agendamento?"
        )
        if(isConfirm){
          console.log("Cancelando de agendamento confirmado");
        }
      }
    }
  })
})