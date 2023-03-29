import styled from '@emotion/styled';
import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const DetailTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '22px',
  lineHeight: '26px',
  color: colors.black,
  paddingTop: '14px',
  paddingBottom: '5px',
  borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)',
}));

export const DetailLabel = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14px',
  color: colors.black,
  paddingTop: '11px',
  paddingBottom: '5px',
}));

export const DetailImage = styled.img(() => ({
  borderRadius: '7px',
  width: '283px',
  height: '178px',
  filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))',
}));
