import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'row',
      width: '30em'
    }
  },

  card: {
    width: '19em'
  }
}));
