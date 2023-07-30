import { useState } from 'react';
import { Notify } from 'notiflix';
import { useSearchParams } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';
import { Form, Input, SearchButton, SearchInputWrapper } from './SearchInput.styled';

export default function SearchInput({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const[searchQuery, setSearchQuery] = useState(()=>searchParams.get('query') ?? '')

  const handleMovieChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      Notify.warning('Please enter a value', { position: 'center-center' });
      return;
    }
    setSearchParams({ query: searchQuery });
    
    onSubmit(searchQuery); 
     setSearchQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchInputWrapper>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleMovieChange}
        value={searchQuery}
      />
        <SearchButton type="submit">
          <RiSearchLine/>
        <span>Search</span>
        </SearchButton>
        </SearchInputWrapper>
    </Form>
  );
}
