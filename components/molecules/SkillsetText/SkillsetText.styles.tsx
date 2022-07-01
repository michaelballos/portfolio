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
      fontSize: '1.5em'
    },
  },

  skillsDescription: {
    fontSize: "1.2em",
    [theme.fn.smallerThan("xs")]: {
      fontSize: '1.2em',
      textAlign: "center",
      marginBottom: '1.5em',
    },

  },
}));
