import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  heading: {
    fontFamily: 'tgHaidoGrotesk, sans-serif',
  },

  link: {
    color: 'white',
    fontWeight: 600,
    padding: '.3em',
    paddingLeft: '1em',
    paddingRight: '1em',
    borderRadius: '.3em',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? '#485c8c'
        : '#8c9fcc',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? '#54658a'
          : '#6578a2',
    },
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
