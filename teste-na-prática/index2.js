function CalcularGastoCombustivel(distancia, tipoCombustivel){
    
    if(tipoCombustivel == 'GASOLINA'){
        distancia = (distancia/1000) / 16
    } else{
        distancia = (distancia/1000) / 11
    }
}

module.exports = {CalcularGastoCombustivel}