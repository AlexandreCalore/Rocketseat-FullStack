export function hoursClick(){
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach(( available ) => {
    available.addEventListener("click", (selected) => {

      //Remove a classe hour selected de todas as li não selecionadas
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      //Adiciona a classe hour selected na li clicada
      selected.target.classlist.add("hour-selected")
  })    
})
}