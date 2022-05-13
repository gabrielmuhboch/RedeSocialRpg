import React, { Component } from 'react'

class CriarPersonagem extends Component{


    state = {
        nome: "",
        idade: "",
        classe: "",
        raca: ""
    }

    setNome(e){
        this.setState( { nome: e.target.value } )
    }

    setIdade(e){
        this.setState( { idade: e.target.value } )
    }

    setClasse(e) {
        this.setState( { classe: e.target.value } )
    }

    setRaca(e){
        this.state( { raca: e.target.value } )
    }

    criarPersonagem(){
        //fazer aqui o cadastro dos personagens
    }

    render(){

        const { nome, idade, classe, raca  } = this.state
        return(
            <div>
                <h1>Criar Personagem</h1>
                <hr />
                <input type="text" placeholder="Nome" value={nome} onChange={e => this.setNome(e)} />
                <br />
                <input type="text" placeholder="Idade" value={idade} onChange={e => this.setIdade(e)} />
                <br />
                <input type="text" placeholder="Classe" value={classe} onChange={e => this.setClasse(e)} />
                <br />
                <input type="text" placeholder="Raça" value={raca} onChange={e => this.setRacao(e)} />
                <br />
                <button onClick={this.criarPersonagem} >Criar Novo Personagem</button>
            </div>
        )
    }
}

export default CriarPersonagem