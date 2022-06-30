import {
  Text,
  Group,
  RingProgress,
  createStyles,
} from '@mantine/core';
import React from 'react';

export const useStyles = createStyles((theme) => ({
  projectKey: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },

  label: {
    fontSize: '15px',
    width: 'max-content',
    flexWrap: 'nowrap',
  },
}));

export default function ProjectKey() {
  const { classes } = useStyles();
  const keys = [
    {
      color: '#00A8FF',
      label: 'In Progress',
      groupKey: 'blueProg',
    },
    {
      color: 'green',
      label: 'Completed',
      groupKey: 'greenProg',
    },
    {
      color: 'orange',
      label: 'On Hold',
      groupKey: 'orangeProg',
    },
  ];
  const projectKey = keys.map((key) => {
    const {
      color,
      label,
      groupKey,
    } = key;
    return (
      <Group
        key={groupKey}
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
