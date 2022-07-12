import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    /**
     * width one less than projectCardScrollArea in Home.styles.tsx
     */
    width: "28em",
    marginLeft: "1em",
     border: '1px solid #2d2d2d',
     boxShadow: "0px 0px 15px rgb(0 0 0 / 47%)",
    '&:hover': {
      cursor: "pointer",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2],
    }
  }
}));
