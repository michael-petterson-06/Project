// implement AddMovie component here
import React from 'react';

const todosGeneros = [
    { genero: 'Ação', valor: 'action' },
    { genero: 'Comédia', valor: 'comedy' },
    { genero: 'Suspense', valor: 'thriller' },
];

const INITIAL_STATE = {
    subtitle: '',
    title: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
}
class AddMovie extends React.Component {
  constructor (props) {
    super(props);
    this.state = INITIAL_STATE;
  };

  changeState(event, chave) {
    const { value } = event.target;
    this.setState({ [chave]: (chave === 'rating' ? parseFloat(value) : value) });
  }

  adicionarFilme = () => {
    this.props.onClick(this.state);
    this.setState(INITIAL_STATE);
  }


  render() {
    //   const { onClick } = this.props;
      const { subtitle, title, imagePath, storyline, rating, genre} = this.state;
    return (
      <form>
        <label>Título
        <input type="text" value={title} name='title' onChange={(event) => this.changeState(event, 'title')}/>
        </label>
        <label>Subtítulo</label>
        <input type="text" value={subtitle} name='subtitle' onChange={(event) => this.changeState(event, 'subtitle')}/>

        <label>Imagem</label>
        <input type="text" value={imagePath} name='imagePath' onChange={(event) => this.changeState(event, 'imagePath')}/>
        
        <label>Sinopse</label>
        <textarea  value={storyline} name='storyline' onChange={(event) => this.changeState(event, 'storyline')}></textarea>

        <label>Avaliação</label>
        <input type="number" value={rating} name='rating' onChange={(event) => this.changeState(event, 'rating')} />

        <label htmlFor="">Gênero</label>
        <select name='genre' id='genre' value={genre} onChange={(event) => this.changeState(event, 'genre')}>
           {todosGeneros.map(({genero, valor}) => (
           <option key={genero} value={valor}>{genero}</option>
          ))}
        </select>

        <button type="button" onClick={this.adicionarFilme}>Adicionar filme</button>
        
      </form>
    );
  };
};

export default AddMovie;
