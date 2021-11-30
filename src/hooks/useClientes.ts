import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOurForm from "./useTabelaOurForm"

export default function useClientes(){
  const repo: ClienteRepositorio = new ColecaoCliente()

  const {tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTabelaOurForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

 
  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes =>{
    setClientes(clientes)
    exibirTabela()
  })
}


  function selecionarCliente(cliente: Cliente){
    console.log(cliente.nome)
    setCliente(cliente)
    exibirFormulario()
  }

  async function excluirCliente(cliente: Cliente){
    console.log(`excluir ${cliente.nome}`)
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente(cliente: Cliente){
    console.log(cliente)
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  async function salvarCliente(cliente: Cliente){
    console.log(cliente)
    await repo.salvar(cliente)
    obterTodos()
  }

  return {
    cliente,
    clientes,
    selecionarCliente,
    excluirCliente,
    novoCliente,
    salvarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela
  }

}