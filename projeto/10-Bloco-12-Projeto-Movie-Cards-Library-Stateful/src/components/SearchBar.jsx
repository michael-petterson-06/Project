// implement SearchBar component here
import React from 'react';


const todosGeneros = [
  { genero: 'Todos', valor: '' },
  { genero: 'Ação', valor: 'action' },
  { genero: 'Comédia', valor: 'comedy' },
  { genero: 'Suspense', valor: 'thriller' },
];

class SearchBar extends React.Component {
  render() {

    const { searchText, bookmarkedOnly, selectedGenre, onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    
    return (
      <form>
        <label>Incluir texto</label><br />
        <input type="text" value={searchText} onChange={onSearchTextChange}/><br /><br />
        
        <label>
          <input type="checkbox" value={bookmarkedOnly} onChange={onBookmarkedChange}/>  
          Mostrar somente favoritos
        </label><br /><br />
     
        <label>Filtrar por gênero</label><br />
        <select name="genero" id="genero" value={selectedGenre} onChange={onSelectedGenreChange}>
          {todosGeneros.map(({genero, valor}) => (
            <option key={genero} value={valor}>{genero}</option>
          ))}
        </select>
      </form>
    );
  };
};

export default SearchBar