import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  scrollArea: {
    width: '100vw',
    height: 'max-content',
    overflowX: 'hidden',
  },
  projectPage: {
    overflow: 'hidden',
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
    ['@media (max-height: 420px)']: {
      marginTop: "5em",
      gap: 0,
    },
  },
  projectLabel: {
    fontWeight: "bold",
    fontSize: "2em",
  },
  /**
   * width is linked with statsRing.styles.tsx
   */
  projectCardsScrollArea: {
    height: "30em",
    width: "26em",
    [theme.fn.smallerThan("sm")]: {
      width: "100vw",
      height: "max-content",
      paddingBottom: '1em',
    },
    ['@media (max-height: 620px)']: {
      height: '17em',
    },
    ['@media (max-height: 420px)']: {
      height: '10em',
    }
  },
}));
