import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from '../../config/redux/store';
import setAutoCompleteQueryAction from '../../config/redux/action/autoCompleteQuery';
import { getDataAutoCompleteState } from '../../config/redux/reducer/setAutoCompleteQuery';
import { setContentSearched } from '../../config/redux/reducer/setContentSearched';

import useDebounce from '../../utils/useDebounce';

import {
  ButtonSearch,
  SearchBar,
  SearchInput,
  SearchSugestion,
  SearchWrap,
} from '../../styles/Search/search.styled';

interface ISearch {
  titleQuery: string;
}

const IndexSearch = ({ titleQuery }: ISearch) => {
  const [inputSearch, setInputSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  let router = useRouter();
  const dispatch = useDispatch();
  const { dataAutoComplete } = useSelector(getDataAutoCompleteState);

  useDebounce(() => setSearchQuery(inputSearch), 1000, [inputSearch]);

  useEffect(() => {
    dispatch(setAutoCompleteQueryAction(searchQuery));
  }, [dispatch, searchQuery]);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      router.push(`/search/${inputSearch}`);
      setInputSearch('');
    }
  };

  return (
    <SearchWrap>
      <SearchBar>
        <SearchInput
          placeholder="Search all the GIFs and stickers"
          defaultValue={titleQuery}
          onChange={(e: any) => {
            setInputSearch(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <ButtonSearch
          onClick={() => {
            router.push(`/search/${inputSearch}`);
            setInputSearch('');
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} size={'xl'} />
        </ButtonSearch>
      </SearchBar>

      {dataAutoComplete.length === 0 ? null : (
        <SearchSugestion>
          {dataAutoComplete.map((list) => (
            <Link
              href={`/search/${list.name.replace(/ /g, '-')}`}
              key={list.name}
            >
              <p>{list.name}</p>
            </Link>
          ))}
        </SearchSugestion>
      )}
    </SearchWrap>
  );
};

export default IndexSearch;
