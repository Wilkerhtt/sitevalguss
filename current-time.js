
    const data = new Date();
  
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
  
    const hora = String(data.getHours()).padStart(2, '0');
    const minut = String(data.getMinutes()).padStart(2, '0');
  
    document.getElementById("constante").innerText = dia;
    document.getElementById("mes1").innerText = mes;
    document.getElementById("ano1").innerText = ano;
    document.getElementById("horas").innerText = hora;
    document.getElementById("min").innerText = minut;
 
