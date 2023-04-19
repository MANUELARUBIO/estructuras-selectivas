let edad 

//asignar información

edad= Number(prompt('ingrese su edad'))

//proceso
if(edad<10){
    alert('eres un niño')
}else if(edad>=10 && edad <15){
    alert('eres un preadolescente')
}else if (edad>=15 && edad <18){
    alert('eres un adolescente')
}else if (edad>=18 && edad<50){
    alert('eres un adulto')
}else if(edad>=50){
    alert('eres un adulto mayor')
}