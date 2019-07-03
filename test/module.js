const request = require('supertest');
const { EndPoint } = require('./end_point.js')

schemaFormater = (currentSchema) => {

    var esquema = JSON.stringify(convert(currentSchema));

    esquema = esquema.split("additionalProperties");
    esquema = esquema[0];
    esquema = esquema.replace(/\[/g, '');
    esquema = esquema.replace(/\]/g, '');
    esquema = esquema.replace(/{"type":"object","properties":{/g, '');
    esquema = esquema.replace(/"additionalProperties":true,"patterns":,"required":/g, '');
    esquema = esquema.replace(/"array","boolean","number","object","string","null"/g, ' Any.Allow');
    esquema = esquema.replace(/"additionalProperties":true,"patterns":,/g, '');
    esquema = esquema.replace(/,/g, '\n');
    esquema = esquema.replace(/"type":"/g, 'type = ');
    esquema = esquema.replace(/"/g, '');
    esquema = esquema.replace(/:/g, '');
    esquema = esquema.replace(/}/g, '');
    esquema = esquema.replace(/{/g, ' ');

    return esquema;

}

var example_callback_request_get = function (tokenLogin, callback) {
    request(EndPoint.https_b2c_casas)
        .get('service/')
        .set('AuthTicket', tokenLogin.token)
        .end(function (err, res) {
            var example = res.body.Produtos[0].IdFavorito
            if (callback) callback(example)
        });
}

var example_callback_request_post = function (tokenLogin, callback) {
    request(EndPoint.http_b2c_casas)
        .post('service/')
        .set('AuthTicket', tokenLogin.token)
        .set('Content-Type', 'application/json')
        .send({
            example: [
                {
                    example: 302010
                }
            ]
        })
        .end(function (err, res) {
            var idFavorito = res.body.FavoritosIds[0]
            if (callback) callback(idFavorito)
        });
}

module.exports = { schemaFormater, example_callback_request_post, example_callback_request_get }