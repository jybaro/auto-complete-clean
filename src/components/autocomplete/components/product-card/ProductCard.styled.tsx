import styled from '@emotion/styled';

import { Card, Typography } from '@mui/material';

export const ProductImage = styled.img(() => ({
  borderRadius: '7px',
  maxWidth: '283px',
  height: '178px',
  filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))',
}));

export const ProductTitle = styled(Typography)(() => ({
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '16px',
  color: 'black',
  paddingTop: '14px',
  paddingBottom: '5px',
  textTransform: 'uppercase',
}));

export const ProductDetail = styled(Typography)(() => ({
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '16px',
  color: 'black',
  paddingTop: '14px',
  paddingBottom: '5px',
}));

export const ProductContainer = styled(Card)(() => ({
  padding: '13px 11px',
  width: 'calc(307px - 22px)',
  height: '415px',
  background: 'white',
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  textAlign: 'center',
  margin: '10px;',
  justifyContent: 'left',
}));
