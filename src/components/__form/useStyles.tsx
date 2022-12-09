import { makeStyles } from '@theme/makeStyles';

export const useStyles = makeStyles<{}>()((/* theme, props, classes */) => {
  return {
    formRoot: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'flex-start',
    },
  };
});
