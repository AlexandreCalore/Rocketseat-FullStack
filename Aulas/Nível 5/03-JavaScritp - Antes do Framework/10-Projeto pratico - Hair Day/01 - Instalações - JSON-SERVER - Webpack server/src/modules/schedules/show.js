import dayjs from "dayjs";

//Seleciona as sessões manhã tarde e noite

const periodMorning = document.getElementById(".period-morning");
const periodAfternoon = document.getElementById(".period-afternoon");
const periodEvening = document.getElementById(".period-evening");

export function schedulesShow({dailySchedules}){
  try {
    //Limpa as listas
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodEvening.innerHTML = "";

    //Renderizar os agendamentos por perído

    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      //Adiciona o ID do agendamenti

      item.setAttribute("data-id", schedule.id);
      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      //Cria o ícone de cancelar o agendamento
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      //Adicionando o tempo, nome e ícone no item
      item.append(time,name, cancelIcon)

      //Obtém o m somente a hora
      const hour = dayjs(schedule.when).hour();

      //Renderiza o agendamento na sessão (manhã tarde ou noite)

      if(hour <= 12){
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodEvening.appendChild(item);
      }
    })
  } catch (error) {
    alert("Não foi possível carregar os agendamentos do dia selecionado.");
    console.error(error);    
  }
}