import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  skillsContainer: {
    width: "35em",
  },

  skillsLabel: {
    fontFamily: "tgHaidoGrotesk, sans-serif",
    fontSize: "2em",
    marginTop: "1em",
    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
    },
  },

  skillsDescription: {
    fontSize: "1.2em",
    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
      marginBottom: '1.5em',
    },
  },
}));
