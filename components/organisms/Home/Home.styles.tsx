import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  projectPage: {
    backgroundColor: theme.colorScheme === "light" ? "#292d4a" : "",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15em",
    height: "100vh",
    color: theme.colorScheme === "light" ? "white" : "",
    [theme.fn.smallerThan("lg")]: {
      flexDirection: "column",
      fontSize: theme.fontSizes.xs,
      gap: "1em",
    },
  },

  projectAndKey: {
    display: "flex",
    marginTop: "3em",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  projectLabel: {
    fontWeight: "bold",
    fontSize: "2em",
  },

  projectCardsScrollArea: {
    height: "30em",
    width: "25em",
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      height: "max-content",
    },
  },
}));
