
// formatea la cantindad en dolares 


const formatearCash= (valor)=>{

    const formatter= new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    })
    return formatter.format(valor)
}

// Calculando total de las cuotas

const calcularCuota = (cantidad, mensualidad)=>{

let total;

if(cantidad < 5000){
total= cantidad * 1.8
}else if(cantidad >= 5000 && cantidad < 10000){
    total= cantidad * 1.6
}else if(cantidad >= 10000 && cantidad < 15000){
    total= cantidad * 1.4
}else{
    total= cantidad * 1.2
}

if(mensualidad === 3){
total*=1.1
}else if(mensualidad === 6){
    total*=1.3
}else{
total *= 1.5
}
return total
}

export {formatearCash, calcularCuota}