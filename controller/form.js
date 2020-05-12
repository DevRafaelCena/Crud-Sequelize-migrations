//const Sequelize = require("sequelize")  //importa sequelize
//const config = require('../config/database') //importa as configrações do banco
const {Email} = require('../models') //importa o index.js
var path = require( 'path' );



let formController = {
    formCadastro: async (req, res)=>{
       // const db = new Sequelize(config)
        const result = await Email.findAll()        
       
        return res.render('form',{result})

    },
    gravar: async (req, res)=>{
        const {email,senha} = req.body

    
      const resultado = await Email.create({
          
            email,
            senha
        })  
        console.log("execução do gravar : " + resultado)

        return res.redirect('cadastrar')

    },
    destroy:async (req, res)=>{
        const {id} = req.params

    
      const resultado = await Email.destroy({
          where:{
              id:id
          }
          
        })  
        console.log("execução do delete : " + resultado)

        return res.redirect('/form/cadastrar')

    },
    editar:async (req, res)=>{
        const {id} = req.params

    
      const resultado = await Email.destroy({
          where:{
              id:id
          }
          
        })  
        console.log("execução do delete : " + resultado)

        return res.redirect('/form/cadastrar')

    } 

    
}
module.exports = formController    
