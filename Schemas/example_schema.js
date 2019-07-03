const Joi = require('joi');

const shcemaExample = Joi.object(
  {
    programasFidelidades: Joi.array().items(Joi.object(
      {
        totalPontos: Joi.number().integer().required(),
        descricaoPontos: Joi.string().required(),
        nome: Joi.string().required(),
        urlLogoGrande: Joi.string().required(),
        urlLogoMedio: Joi.string().required(),
        urlLogoIcone: Joi.string().required(),
        idParceiro: Joi.number().integer().required(),
      }
    ).unknown()).required()
  }
).unknown().required()

module.exports = { shcemaExample };