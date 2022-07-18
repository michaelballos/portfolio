import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    container: {
      height: '100vh'
    }
  };
});
