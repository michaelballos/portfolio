import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  projectKey: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
  },

  label: {
    fontSize: "13px",
    width: "max-content",
    flexWrap: "nowrap",
  },
}));
