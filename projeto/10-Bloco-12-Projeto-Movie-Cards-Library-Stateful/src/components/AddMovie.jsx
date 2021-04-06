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


  adicionarFilme = () => {
    this.props.onClick(this.state);
    this.setState(INITIAL_STATE);
  }
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      [event.target.name]: (event.target.type === 'number' ? parseFloat(value) : value) })
   }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre} = this.state;
    return (
      <form>
        <label>Título
        <input type="text" value={title} name='title' onChange={this.handleChange}/>
        </label>
        <label>Subtítulo</label>
        <input type="text" value={subtitle} name='subtitle' onChange={this.handleChange}/>

        <label>Imagem</label>
        <input type="text" value={imagePath}  name='imagePath'  onChange={this.handleChange}/>
        
        <label>Sinopse</label>
        <textarea  value={storyline} name='storyline' maxLength='100' onChange={this.handleChange}></textarea>

        <label>Avaliação</label>
        <input type="number" value={rating} name='rating' onChange={this.handleChange}/>

        <label htmlFor="">Gênero</label>
        <select name='genre' id='genre' value={genre} onChange={this.handleChange}>
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
