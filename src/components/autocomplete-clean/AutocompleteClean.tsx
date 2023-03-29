import React, { useState, useEffect, useRef } from 'react';
import { AutocompleteCleanProps, ListItemProps } from '../../models/autocomplete-clean.interface';

const ListItem: React.FC<ListItemProps> = ({ item, search }) => {
  const regex = new RegExp(`(${search})`, 'gi');
  const parts = item.split(regex);

  return (
    <li
    style={{
        padding: '10px',
        cursor: 'pointer',
      }}
    >
      {parts.map((part, index) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <strong key={index}>{part}</strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </li>
  );
};

export const AutocompleteClean: React.FC<AutocompleteCleanProps> = ({ data }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [focusIndex, setFocusIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchResults = async (search: string) => {
    if (search.length === 0) {
      setResults([]);
      return;
    }

    // Simulate asynchronous data fetching
    setTimeout(() => {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase()),
      );
      setResults(filteredResults);
    }, 300);
  };

  useEffect(() => {
    fetchResults(search);
  }, [search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setFocusIndex((prevIndex) => Math.min(prevIndex + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      setFocusIndex((prevIndex) => Math.max(prevIndex - 1, -1));
    } else if (e.key === 'Enter') {
      if (focusIndex >= 0) {
        setSearch(results[focusIndex]);
        setResults([]);
      }
    }
  };

  const handleBlur = () => {
    setFocusIndex(-1);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
        }}
        aria-label="Search"
      />
      <ul
        style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          border: '1px solid #ccc',
          borderTop: 'none',
          position: 'absolute',
          width: '100%',
          maxHeight: '200px',
          overflowY: 'scroll',
          zIndex: 1,
          background: 'white',
        }}
        role="listbox"
        aria-labelledby="search"
      >
        {results.map((result, index) => (
          <ListItem
            key={result}
            item={result}
            search={search}
          />
        ))}
      </ul>
    </div>
  )}
