import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1vw",
    width: "max-content",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "row",
      width: "30em",
    },
  },

}));

export const useCardStyles = createStyles((theme) => ({
  card: {
    /**
     * width one less than projectCardScrollArea in Home.styles.tsx
     */
    width: "25em",
    border: '1px solid #2d2d2d',
    boxShadow: "0px 0px 15px rgb(0 0 0 / 47%)",
    '&:hover': {
      cursor: "pointer",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2],
    }
  },
}));