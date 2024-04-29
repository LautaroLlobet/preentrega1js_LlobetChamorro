preciototal=0;
function contratacion (){
    
    while(isNaN(dias) || dias<=0 || dias>5){
        dias= parseInt(prompt('Error. Por favor, ingrese cuantos dias de cobertura desea contratar en la semana, entre 1 y 5: ',''))
    }
    for(i=1;i<=dias;i++){
        camaras = parseInt(prompt('Cuantas camaras quisieras para la cobertura del dia '+i+'?',''));
        while(isNaN(camaras) || camaras<1){
            camaras= parseInt(prompt('Error, ingrese un numero valido',''));
        }
        precio= camaras*8500;
        document.write('El dia n '+i+' se contrataran '+camaras+' camaras por el precio de $'+precio+'<br>');
        preciototal= preciototal+precio;
    }
    document.write('El precio total por alquilar camaras durante '+dias+' dias sera de $'+preciototal);
}

alert('bienvenido al sistema de covertura de servicios. \n A continuacion deberas elegir que cuantos dias de cobertura deseas contratar y cuantas camaras se utilizaran en la cobertura de tu evento. Cada camara vale $8500.');
let dias= parseInt(prompt('Ingrese cuantos dias de cobertura desea contratar en la semana, entre 1 y 5: ',''))
contratacion();