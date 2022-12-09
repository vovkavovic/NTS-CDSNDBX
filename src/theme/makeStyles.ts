import { theme } from '@theme/index';
import { createMakeAndWithStyles } from 'tss-react';


function useTheme() {
  return theme;
}

export const {
  makeStyles, withStyles, useStyles,
} = createMakeAndWithStyles({ useTheme: useTheme });
