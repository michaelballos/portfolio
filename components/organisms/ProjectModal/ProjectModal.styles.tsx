import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  heading: {
    fontFamily: 'tgHaidoGrotesk, sans-serif',
  },

  description: {
    padding: '1.2em',
    backgroundColor:
      theme.colorScheme === 'dark'
      ? '#1a1b1e'
      : 'white',
    borderRadius: '1em',
    boxShadow:
      theme.colorScheme === 'dark'
        ? '0 0 50px rgb(0 0 0 / 74%)'
        : '0 0 50px rgb(145 145 145 / 44%)',
  },
}));
