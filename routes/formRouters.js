const express = require('express')
const formController = require('../controller/form');
const path = require('path')
//const multer = require('multer')

let route = express.Router()
//rotas a partir daqui!

//crud cardapio


//read
route.get('/cadastrar', formController.formCadastro)
route.post('/cadastrar', formController.gravar)
route.delete('/deletar/:id', formController.destroy)
route.Put('/editar/:id', formController.editar)
//cadastro get e post
//route.get('/cadastro', cardapioController.formCadastro)
//route.post('/cadastro', upload.any(), cardapioController.salvarCadastro)
//delete
//route.delete('/deletar/:posicao', cardapioController.deletarPizza)
//update
//route.get('/alterar/:posicao', cardapioController.formAlteracao)
//route.put('/alterar', cardapioController.alterarPizza)

module.exports = route