import { Notify } from 'notiflix';
import { useSearchParams } from 'react-router-dom';

export default function SearchInput({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams()
  let searchQuery = searchParams.get('query') ?? '';

  const handleMovieChange = event => {
    if (event.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({query: event.target.value})
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      Notify.warning('Please enter a value', { position: 'center-center' });
      return;
    }
    onSubmit(searchQuery); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={handleMovieChange}
        value={searchQuery}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}
