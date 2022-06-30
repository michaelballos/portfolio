import {
  Text,
  Group,
  RingProgress,
} from "@mantine/core";
import React from "react";
import { useStyles } from './ProjectKey.styles';

export default function ProjectKey() {
  const { classes } = useStyles();
  const keys = [
    {
      color: "#00A8FF",
      label: "In Progress",
      groupKey: "blueProg",
    },
    {
      color: "green",
      label: "Completed",
      groupKey: "greenProg",
    },
    {
      color: "orange",
      label: "On Hold",
      groupKey: "orangeProg",
    },
  ];
  const projectKey = keys.map((key) => {
    const {
      color,
      label,
      groupKey
    } = key;
    return (
      <Group
        key={groupKey}
        spacing={3}
        noWrap
      >
        <RingProgress
          key={color}
          size={20}
          roundCaps
          thickness={3}
          sections={[
            {
              value: 100,
              color,
            },
          ]}
        />
        <Text
          key={label}
          className={classes.label}
        >
          {label}
        </Text>
      </Group>
    );
  });

  return (
    <div>
      <div className={classes.projectKey}>
        {projectKey}
      </div>
    </div>
  );
}
