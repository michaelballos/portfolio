import { createStyles } from '@mantine/core';
import bg from './bg.svg';

export const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,
      [BREAKPOINT]: {
        flexDirection: 'column',
        width: '100vw',
        backgroundColor: 'transparent',
      },
    },
    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,
      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },
    fields: {
      marginTop: -12,
    },
    fieldInput: {
      flex: 1,
      '& + &': {
        marginLeft: theme.spacing.md,
        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },
    fieldsGroup: {
      display: 'flex',
      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },
    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg - 2,
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid transparent',
      padding: theme.spacing.xl,
      flex: '0 0 500px',

      [BREAKPOINT]: {
        padding: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
        flex: '0 0 245px',
      },
    },
    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
      },
    },
    control: {
      backgroundColor: '#445b91',
      '&:hover': {
        backgroundColor: '#5974b1',
      },
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
}
);
