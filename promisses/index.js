async function TesteAsync(){
    console.log('Iniciando..');
    try{
        let example = await fetch('http://httpbin.org/get')
            console.log(example)
            console.log('Terminou a requisição')
    } catch(error){
        console.log('Caiu no catch')
        console.log(error)
    }
}

function Teste(){
    console.log('Iniciando..');
    let exammple = fetch('http://httpbin.org/get').then((res) => {
        console.log('Dentro do then')
        console.log(res)
    }).catch((err) => {
        console.log('Dentro do catch');
        console.log(err)
    });

    console.log(exammple)

    console.log('Depois da chamada')
}