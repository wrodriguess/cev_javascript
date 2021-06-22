//Rode os comandos no Node
let salario = 1545.5

salario.toFixed(2) //2 casas decimais

salario.toFixed(2).replace('.', ',') //Substitui . na casa dos decimais por ,

salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) //Formata o valor em formato de moeda brasileira
salario.toLocaleString('pt-br', {style: 'currency', currency: 'USD'}) //Formata o valor em formato de moeda americana
salario.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'}) //Formata o valor em formato de moeda europeia