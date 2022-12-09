import { makeStyles } from '@theme/makeStyles';

export const useStyles = makeStyles()((/* theme */) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      maxWidth: '100%',
      textAlign: 'center',
      '& p': { maxWidth: 300 },
    },
    title: {},
  };
});
