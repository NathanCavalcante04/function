//1 - crie uma função que exiba uma mensagem no console

function mostrarNome(nome){
    console.log(`Olá, ${nome}, estou mexendo no console!`)
}

mostrarNome("neymar")



//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function mostrar(name){
    console.log(`Me chamo, ${name}, prazer`)
}

mostrar("nathan")


//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console


function mostrarConsole(nome, idade, estiloMusical){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e meu estilo músical favorito é o ${estiloMusical}`)
}

mostrarConsole(`nathan`, `17`, `rap`)
 
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function mostrarFunction(filmeFavorito, musica){
    console.log(`Meu filme favorito é ${filmeFavorito} e minha música favorita é ${musica}`)
}

mostrarFunction(`a forca`, `monstro`)

//BÔNUS
//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)

function triple(num){
    return num*5
}

console.log(triple(3))