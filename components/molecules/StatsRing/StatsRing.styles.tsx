import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    width: "max-content",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "row",
      width: "30em",
    },
  },

  card: {
    width: "24em",
    border: '1px solid #2d2d2d',
    boxShadow: "0px 0px 15px rgb(46 45 45 / 50%)",
    wordWrap: "unset",
  },
}));
