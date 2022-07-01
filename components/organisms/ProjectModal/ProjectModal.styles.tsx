import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  heading: {
    fontFamily: 'tgHaidoGrotesk, sans-serif',
  },

  link: {
    padding: '.3em',
    paddingLeft: '1em',
    paddingRight: '1em',
    borderRadius: '.3em',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? '#485c8c'
        : '#f5c0c6',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? '#355091'
          : '#eda1aa',
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
