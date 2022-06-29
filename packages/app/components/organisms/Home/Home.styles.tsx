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
      fontSize: theme.fontSizes.xs,
      gap: '2em',
    },
  },

  projectStack: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '6em',
    [theme.fn.smallerThan('sm')]: {
      marginTop: '15em',
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
      width: '100%',
      height: 'max-content',
    }
  },

  skillsContainer: {
    width: '30em',
  },

  skillsLabel: {
    fontFamily: 'tgHaidoGrotesk, sans-serif',
    fontSize: '2em',
  },

  skillsDescription: {
    fontSize: '1.2em',
  }
}));