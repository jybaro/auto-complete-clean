import React, { useState } from 'react';
import { TextField, Tooltip } from '@mui/material';

import { useTranslation } from 'react-i18next';
import {
  fetchSearchResult,
  resetSearch,
} from '../../reducers/search/search.actions';
import { useAppDispatch } from '../../store/hooks';
import { ResultList } from './components/result-list';

export const Autocomplete = (props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [charNumber, setCharNumber] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value.trim();

    setCharNumber(value.length);

    if (value.length >= 3) {
      dispatch(fetchSearchResult(value));
    } else {
      dispatch(resetSearch());
    }
  };

  return (
    <div>
      <Tooltip
        open={charNumber !== 0 && charNumber < 3}
        title="Type at least three characters"
        arrow
      >
        <TextField
          id="autocomplete-inbox"
          label={t('autocomplete.label', 'Product name')}
          variant="standard"
          onChange={handleInputChange}
          autoComplete="off"
          inputProps={{ 'aria-label': t('autocomplete.label', 'Product name') }}
        />
      </Tooltip>
      {charNumber < 3 ? '' : <ResultList />}
    </div>
  );
};
