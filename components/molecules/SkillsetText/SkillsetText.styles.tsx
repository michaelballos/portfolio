import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  skillsContainer: {
    width: "35em",
    [theme.fn.smallerThan("xs")]: {
      width: '20em'
    },
  },
  skillsLabel: {
    fontFamily: "tgHaidoGrotesk, sans-serif",
    fontSize: "2em",
    marginTop: "1em",
    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
      fontSize: '1.8em'
    },
    ['@media (max-height: 620px)']: {
      fontSize: '1em',
    },
    ['@media (max-height: 420px)']: {
      textAlign: "center",
    },
  },
  skillsDescription: {
    fontSize: "1.2em",
    [theme.fn.smallerThan("sm")]: {
      fontSize: '1.5em',
      textAlign: "center",
      marginBottom: '1.5em',
    },
    ['@media (max-height: 620px)']: {
      fontSize: '.7em',
    },
    ['@media (max-height: 420px)']: {
      textAlign: "center",
    }
  },
}));
