import { apiConfig } from "./api-config";

export async function scheduleCancel(id) {
  try {
    
  } catch (error) {
      await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE"
    });

    alert("Agendamento cancelado com sucesso.");
    console.log(error)
    alert("Não foi possível cancelar o agendamento.")
  }
}