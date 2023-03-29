import styled from '@emotion/styled';

import { Card } from '@mui/material';

export const ListContainer = styled(Card)(() => ({
  padding: '13px 11px',
  display: 'grid',
  gridAutoFlow: 'column',
  justifyContent: 'left',
  overflow: 'overlay',
}));
