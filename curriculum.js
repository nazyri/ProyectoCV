
console.log(Date());
let fecha = new Date();
console.log(fecha);
// dia del mes
console.log(fecha.getDate());
// dia de la semana D L M Mi J V S-> 0 1 2 3 4 5 6
console.log(fecha.getDay());
//mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());