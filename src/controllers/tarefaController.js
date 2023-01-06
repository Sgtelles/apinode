const database = require('../database/connection')

class tarefaController {
    novaTarefa(request, response){
        const {tarefa, descricao, responsavel} = request.body

        console.log(tarefa, descricao, responsavel)

        database.insert({tarefa, descricao, responsavel}).table("tarefas").then(data=>{
            console.log(data)
            response.json({mensagem:"tarefa criada com sucesso!"})
        }).catch(error=>{
            response.json(error)
        })
    }

    listarTarefas(request,response){
        database.select("*").table("tarefas").then(tarefas=>{
            console.log(tarefas)
            response.json(tarefas)
        }).catch(error=>{
            response.json(error)
        })
    }

    listarUmaTarefa(request, response){
        const id = request.params

        database.select("*").table("tarefas").where({id:id}).then(tarefa=>{
            response.json(tarefa)
        }).catch(error=>{
            response.json(error)
        })
    }

    atualizarTarefa(request, response){
        const id = request.params
        const {descricao} = request.body

        database.where({id:id}).update({descricao:descricao}).table("tarefas").then(data=>{
            response.json({message:"tarefa atualizada com sucesso"})
        }).catch(error=>{
            response.json(error)
        })
    }

    removerTarefa(request,response){
        const id = request.params

        database.where({id:id}).del().table("tarefas").then(data=>{
            response.json({message:"Tarefa Removida com sucesso"})
        }).catch(error=>{
            response.json(error)
        })
    }
}

module.exports = new tarefaController()