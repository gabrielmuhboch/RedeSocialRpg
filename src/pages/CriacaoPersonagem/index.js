import React, { Component } from 'react'
/*Essa tela deve aparecer depois de o Cadastro ser realizado,
com email confirmado e tudo */

class CriacaoForm extends Component{

    state = {
        /*Ainda não decidimos quais serão as informações dos personagens,
        então vou colocar apenas essas temporariamente */
        nome: "",
        idade: "",
        especie: "",
        classe: ""
    }

    setNome(e){
        this.setState( { nome: e.target.value } )
    }

    setIdade(e){
        this.setState( { idade: e.target.value } )
    }

    setEspecie(e){
        this.setState( { especie: e.target.value } )
    }

    setClasse(e){
        this.setState( { classe: e.target.value } )
    }

    criarPersonagem(){
        console.log("Criando Personagem")
    }

    render(){
        const { nome, idade, especie, classe } = this.state
        /*Pensei em mudar alguns dos types desse formulário para ser do tipo de múltipla escolha,
        daí o usuário não pode simplesmente escrever quaquer coisa */
        return(
            <React.Fragment>
                
                <h1>Criação de Personagem</h1>
                <hr />
                <input type="text" placeholder="Nome do Personagem" value={nome} onChange={e => this.setNome(e)} />
                <br />
                <input type="text" placeholder="idade" value={idade} onChange={e => this.setIdade(e)} />
                <br />
                <input type="text" placeholder="espécie" value={especie} onChange={e => this.setEspecie(e)} />
                <br />
                <input type="text" placeholder="classe" value={classe} onChange={e => this.setClasse(e)} />
                <br />
                <button onClick={this.criarPersonagem} >Criar Personagem</button>
            </React.Fragment>
        )
    }

}

export default CriacaoForm