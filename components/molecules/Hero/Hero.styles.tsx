import { createStyles } from "@mantine/core";

// eslint-disable-next-line import/prefer-default-export
export const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    height: "calc(100vh - 56px)",
    width: '100vw',
  },

  container: {
    height: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 2,
    position: "relative",
    [theme.fn.smallerThan("sm")]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },
    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,
    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.sm,
      maxWidth: 400,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,
    [theme.fn.smallerThan("sm")]: {},
  },
}));
