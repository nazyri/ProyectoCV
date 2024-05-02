let fechaCompleta = document.getElementById("fecha")
let fecha = new Date();


 fechaCompleta.innerHTML = fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear()