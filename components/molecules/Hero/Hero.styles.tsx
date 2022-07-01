import { createStyles } from "@mantine/core";

// eslint-disable-next-line import/prefer-default-export
export const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    height: "calc(100vh - 56px)",
    width: "100vw",
  },

  container: {
    height: 700,
    width: '100vw',
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: "relative",
    [theme.fn.smallerThan("sm")]: {
      height: 500,
      width: 450,
      paddingBottom: theme.spacing.xl * 3,
    },
  },


  title: {
    width: "100%",
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
    },
    [theme.fn.smallerThan("xs")]: {
      fontSize: 25,
    },
  },

  description: {
    color: theme.white,
    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.sm,
    },
    [theme.fn.smallerThan("xs")]: {
      width: 300,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,
    backgroundImage: 'linear-gradient(45deg, #293758 0%, #445b91 100%)',
    [theme.fn.smallerThan("sm")]: {},
  },
}));
