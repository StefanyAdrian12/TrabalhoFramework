import './App.css';
import { Component } from 'react';
import { Lista } from './components/Lista';
import { Busca } from './components/Busca';
import { Cabecalho } from './components/Cabecalho';
import { Rodape } from './components/Rodape';

class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

carregaODAs(){
  const {busca} = this.state;
  fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
  .then(response => response.json())
  .then(odas => this.setState({odas}))
}

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const {odas} = this.state;
    return (
      <section>
          <Cabecalho/>
          <Busca
            busca={this.state.busca}
            buscaODA={this.buscaODA}
          />
          <div className = "posts">
            { odas.map(oda =>(
              <Lista
              key={oda._id}
              id={oda._id}
              nome={oda.nome}
              usuario={oda.usuario}
              descricao={oda.descricao}
              data_inclusao={oda.data_inclusao}
              palavras_chave={oda.palavras_chave}
              />
            )
          )
        }
        </div>
            <Rodape/>
        </section>

    )
  }
}

export default App;
