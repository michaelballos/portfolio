import { createStyles } from '@mantine/core';

// eslint-disable-next-line import/prefer-default-export
export const useStyles = createStyles((theme) => ({
  title: {
    color:
      theme.colorScheme === 'dark'
        ? theme.white
        : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
}));
