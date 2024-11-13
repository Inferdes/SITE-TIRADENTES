// script.js

// Simulação de atividades da semana
const atividadesSemana = [
    { data: "Segunda-feira, 13/11", atividade: "Aula de Teatro - 9h" },
    { data: "Terça-feira, 14/11", atividade: "Oficina de Dança - 14h" },
    { data: "Quarta-feira, 15/11", atividade: "Reunião de Pais - 18h" },
    { data: "Quinta-feira, 16/11", atividade: "Encontro de Clubes de Leitura - 10h" },
    { data: "Sexta-feira, 17/11", atividade: "Apresentação Musical dos Alunos - 15h" },
  ];
  
  // Função para gerar a lista de atividades
  function carregarAtividades() {
    const listaAtividades = document.getElementById("atividades-lista");
    
    atividadesSemana.forEach(atividade => {
      const div = document.createElement("div");
      div.classList.add("atividade");
      div.innerHTML = `<strong>${atividade.data}</strong>: ${atividade.atividade}`;
      listaAtividades.appendChild(div);
    });
  }
  
  // Chama a função para carregar as atividades
  window.onload = carregarAtividades;
  