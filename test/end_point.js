const example_end_point_bandeira1 = {
    servico_A:'https://apiA.com.br/',
}

const example_end_point_bandeira2 = {
    servico_A:'https://apiB.com.br/',
}

var retorno = function() {
    var ambiente = process.env.AMBIENTE;
    console.log('ambiente =' +ambiente)
    if(ambiente == 'bandeira1') return example_end_point_bandeira1;

    if(ambiente == 'bandeira2') return example_end_point_bandeira2;

    return EP_casasbahia;
}

var EndPoint = retorno()

module.exports = { EndPoint };