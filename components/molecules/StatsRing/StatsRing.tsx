import React, {
  useState
} from "react";
import {
  RingProgress,
  Text,
  Paper,
  Center,
  Group,
  Button
} from "@mantine/core";
import {
  IconChecks,
  IconPlayerPause,
  IconTool
} from "@tabler/icons";
import { useStyles } from "./StatsRing.styles";

interface StatsRingProps {
  data: {
    id: string;
    category: string;
    label: string;
    status: "inProgress" | "onHold" | "done";
    modal?: JSX.Element | JSX.Element[];
    isOpen?: boolean;
    setOpen?: (isOpen: boolean) => void;
  }[];
}

const icons = {
  done: IconChecks,
  onHold: IconPlayerPause,
  inProgress: IconTool,
};

export default function StatsRing({ data }: StatsRingProps) {
  const { classes } = useStyles();
  const cards = data.map((stat) => {
    const {
      status,
      category,
      label,
      id,
      modal,
      isOpen,
      setOpen,
    } = stat;
    const Icon = icons[status];
    const color =
      status === "inProgress"
        ? "#00A8FF"
        : status === "onHold"
        ? "orange"
        : "green";
    return (
      <Paper
        className={classes.card}
        withBorder
        radius="md"
        p="xs"
        key={id}
      >
        <Group noWrap>
          <RingProgress
            key={color}
            size={80}
            roundCaps
            thickness={8}
            sections={[
              {
                value: 100,
                color,
              },
            ]}
            label={
              <Center>
                <Icon size={22} />
              </Center>
            }
          />
          <div>
            <Text
              style={{
                whiteSpace: "nowrap",
              }}
              key={category}
              color="dimmed"
              size="xs"
              transform="uppercase"
              weight={700}
            >
              {category}
            </Text>
            <Text
              style={{
                whiteSpace: "nowrap",
              }}
              key={label}
              weight={700}
              size="xl"
            >
              {label}
            </Text>
          </div>
        </Group>
        {modal}
      </Paper>
    );
  });
  return <div className={classes.cardsContainer}>{cards}</div>;
}
