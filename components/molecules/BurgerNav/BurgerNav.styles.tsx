import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    position: 'absolute',
    paddingBottom: 10,
    paddingTop: 10,
    top: 56,
    left: 0,
    width: '100vw',
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    gap: '.5em',
    [theme.fn.largerThan("sm")]: {
      display: 'none',
    },
  },
  rainRainGoAway: {
    display: 'none'
  },
  link: {
    fontSize: '1.5em',
    fontWeight: 500,
    fontFamily: 'Roboto, sans-serif',
  }
}));
