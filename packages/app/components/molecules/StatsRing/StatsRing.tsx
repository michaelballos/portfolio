import React from 'react';
import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group
} from '@mantine/core';
import {
  IconChecks,
  IconPlayerPause,
  IconTool
} from '@tabler/icons';

interface StatsRingProps {
  data: {
    version: string;
    label: string;
    status: 'inProgress' | 'onHold' |'done';
  }[];
}

const icons = {
  done: IconChecks,
  onHold: IconPlayerPause,
  inProgress: IconTool,
};

export default function StatsRing({ data }: StatsRingProps) {
  const cards = data.map((stat) => {
    const {
      status,
      version,
      label
    } = stat;
    const Icon = icons[status];
    const color =
      status === 'inProgress'
        ? '#00A8FF'
        : status === 'onHold'
        ? 'red'
        : 'green';
    return (
      <Paper
        withBorder
        radius="md"
        p="xs"
        key={version}
      >
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[
              {
                value: 100,
                color: color
              }
            ]}
            label={
              <Center>
                <Icon size={22} />
              </Center>
            }
          />
          <div>
            <Text
              color="dimmed"
              size="xs"
              transform="uppercase"
              weight={700}
            >
              {version}
            </Text>
            <Text
              weight={700}
              size="xl"
            >
              {label}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return (
    <SimpleGrid
      cols={1}
      breakpoints={[
        {
          maxWidth: 'sm',
          cols: 1
        }
      ]}>
      {cards}
    </SimpleGrid>
  );
}