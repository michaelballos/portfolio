import React, {
  useState,
  useCallback
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
import ProjectModal from '../../organisms/ProjectModal/ProjectModal';
import { useStyles } from "./StatsRing.styles";

interface StatsRingProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  setModalDetails: (modalDetails: boolean) => void;
  data: {
    id: string;
    category: string;
    label: string;
    status: "inProgress" | "onHold" | "done";
  }[];
}

const icons = {
  done: IconChecks,
  onHold: IconPlayerPause,
  inProgress: IconTool,
};

export default function StatsRing({
  data,
  isOpen,
  setOpen
}: StatsRingProps) {
  const { classes } = useStyles();
  const cards = data.map((stat) => {
    const {
      status,
      category,
      label,
      id,
    } = stat;
    const Icon = icons[status];
    const color =
      status === "inProgress"
        ? "#00A8FF"
        : status === "onHold"
        ? "orange"
        : "green";
    const openModelOnClick = useCallback(() => {
      console.log('opened modal')
      setOpen(true)
    }, [setOpen])
    return (
      <Paper
        className={classes.card}
        withBorder
        radius="md"
        p="xs"
        key={id}
        onClick={openModelOnClick}
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
      </Paper>
    );
  });
  return <div className={classes.cardsContainer}>{cards}</div>;
}
