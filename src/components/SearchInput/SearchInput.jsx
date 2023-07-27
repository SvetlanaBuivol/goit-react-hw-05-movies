import { useState } from 'react';
import { Notify } from 'notiflix';

export default function SearchInput({onSubmit}) {
  const [query, setQuery] = useState('');

  const handleMovieChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      Notify.warning('Please enter a value', { position: 'center-center' });
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={handleMovieChange}
        value={query}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}
