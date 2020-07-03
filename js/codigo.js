function probar(){
    alert("comprobar la union")
}
function calcular(){
    let bonocl= 0
    let cat = parseInt(document.getElementById("categoria").value);
    let con = parseInt(document.getElementById("condicion").value);
    bonocl = cat*con
    document.bonus.calcular.value=Math.round(bonocl)
}