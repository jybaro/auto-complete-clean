import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';

interface AutocompleteProps {
  data: string[];
}

interface ListItemProps {
  item: string;
  search: string;
  onClick: () => void;
  isSelected: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  item,
  search,
  onClick,
  isSelected,
}) => {
  const regex = new RegExp(`(${search})`, 'gi');
  const parts = item.split(regex);

  return (
    <li
      style={{
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#f0f0f0' : 'white',
      }}
      onClick={onClick}
    >
      {parts.map((part, index) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <strong key={index}>{part}</strong>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </li>
  );
};

export const AutocompleteClean: React.FC<AutocompleteProps> = ({ data }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (search && search.length >= 1) {
      const fetchData = async () => {
        const filteredData = data.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        );
        if (
          filteredData.length === 1 &&
          filteredData[0].toLocaleLowerCase() === search.toLowerCase()
        ) {
          setResults([]);
        } else {
          setResults(filteredData);
        }
      };
      fetchData();
    } else {
      setResults([]);
    }
  }, [search, data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSelectedIndex(-1);
  };

  const handleListItemClick = (item: string) => {
    setSearch(item);
    setSelectedIndex(data.findIndex((element) => element === item) ?? -1);
    setResults([]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex < results.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleListItemClick(results[selectedIndex]);
      setSelectedIndex(-1);
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{
          width: '100%',
          padding: '10px',
          boxSizing: 'border-box',
        }}
      />
      <ul
        style={{
          position: 'absolute',
          zIndex: 1,
          listStyleType: 'none',
          backgroundColor: 'white',
          padding: 0,
          margin: 0,
          width: '100%',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px',

          maxHeight: '200px',
          overflowY: 'auto',
        }}
      >
        {results.map((item, index) => (
          <ListItem
            key={item}
            item={item}
            search={search}
            isSelected={index === selectedIndex}
            onClick={() => handleListItemClick(item)}
          />
        ))}
      </ul>
    </div>
  );
};
