import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  projectPage: {
    backgroundColor:
      theme.colorScheme === 'light'
        ? '#292d4a'
        : '',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15em',
    height: '100vh',
    color:
      theme.colorScheme === 'light'
        ? 'white'
        : '',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      height: '200vh',
      fontSize: theme.fontSizes.xs,
    },
  },

  projectLabel: {
    fontWeight: 'bold',
    fontSize: '2em',
  },

  projectCardsScrollArea: {
    height: '30em',
    width: '20em',
    [theme.fn.smallerThan('sm')]: {
      overflow: 'hidden !important',
      height: 'max-content',
      width: 'max-content',
    }
  }

}));