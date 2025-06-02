document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".registration-form");
    const resumoDiv = document.getElementById("resumo-dados");
    const tabelaResumo = document.getElementById("tabela-resumo");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Limpa a tabela antes de preencher de novo
      tabelaResumo.innerHTML = "";
  
      const formData = new FormData(form);
      const dados = {};
  
      // Converte os dados do formulário em objeto
      for (let [key, value] of formData.entries()) {
        if (dados[key]) {
          // Para radio com mesmo name
          dados[key] += ", " + value;
        } else {
          dados[key] = value;
        }
      }
  
      // Traduções (opcional)
      const traducoes = {
        "nome-completo": "Nome Completo",
        "cupom": "Cupom de Desconto",
        "email": "E‑mail",
        "data-prova": "Data da Prova",
        "data-nascimento": "Data de Nascimento",
        "horario-prova": "Horário da Prova",
        "celular": "Celular Principal",
        "telefone-residencial": "Telefone Residencial",
        "local-prova": "Local da Prova",
        "cpf": "CPF",
        "genero": "Gênero",
        "rg": "RG",
        "nacionalidade": "Nacionalidade",
        "cep": "CEP",
        "endereco": "Endereço",
        "numero": "Número",
        "complemento": "Complemento",
        "bairro": "Bairro",
        "cidade": "Cidade",
        "forma-ingresso": "Forma de Ingresso",
        "curso": "Curso",
        "habilitacao": "Habilitação",
        "nome-social": "Utiliza Nome Social?",
        "necessidades": "Necessidades Especiais?",
        "modalidade-prova": "Modalidade da Prova"
      };
  

      for (let campo in dados) {
        const label = traducoes[campo] || campo;
        const valor = dados[campo];
  
        const row = document.createElement("tr");
        const cell1 = document.createElement("th");
        const cell2 = document.createElement("td");
  
        cell1.textContent = label;
        cell2.textContent = valor;
  
        row.appendChild(cell1);
        row.appendChild(cell2);
        tabelaResumo.appendChild(row);
      }

      resumoDiv.style.display = "block";

      resumoDiv.scrollIntoView({ behavior: "smooth" });
    });
  });
  