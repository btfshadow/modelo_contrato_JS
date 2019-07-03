const request = require('supertest');
// import plain Joi 
var Joi = require('joi');

//import mochawesome optionals
const addContext = require('mochawesome/addContext');

// import the module 
var joiAssert = require('joi-assert');

//Import Project Modules
const { schemaCarrinhoVazio } = require('../Schemas/example_schema');
const { EndPoint } = require('./end_point')
const { exemplo_contas } = require('./usuarios')
const { schemaFormater, example_callback_request_get, example_callback_request_post } = require('./module')

describe('Testes de Contrato para a API de Carrinho', function () {
    it('Contrato Carrinho vazio', function (done) {
        this.timeout(10000);
        example_callback_request_post(exemplo_contas.email, exemplo_contas.senha, function (userInformation) {
            request(EndPoint.servico_A)
                .post('servico/')
                .set('Accept', 'application/json')
                .send({
                    Example: 8,
                    Example2: guideCarrinhoVazio
                }).type('json')
                .end(function (err, res) {
                    Joi.validate(res.body, shcemaExample, { abortEarly: false }, (err, data) => {
                        if (err) throw err;
                    });
                    done(err);
                })
        })
        addContext(this, schemaFormater(shcemaExample));
    });
})