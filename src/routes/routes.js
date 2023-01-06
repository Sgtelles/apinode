const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const tarefaController = require('../controllers/tarefaController')
const { text } = require('express')

router.post('/novaTarefa', tarefaController.novaTarefa)

router.get('/tarefas', tarefaController.listarTarefas)

router.get('/tarefa/:id', tarefaController.listarUmaTarefa)

router.put('/atualizar/tarefa/:id', tarefaController.atualizarTarefa)

router.delete('/delete/tarefa/:id', tarefaController.removerTarefa)

module.exports = router