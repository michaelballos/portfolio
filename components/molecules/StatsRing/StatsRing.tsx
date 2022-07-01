import React, {
  useMemo,
  useState,
  useCallback,
  useEffect
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
  IconTool,
  TablerIcon
} from "@tabler/icons";
import ProjectModal from '../../organisms/ProjectModal/ProjectModal';
import { IModalDetails } from '../../organisms/HomePage/HomePage';
import {
  useCardStyles,
  useStyles
} from "./StatsRing.styles";
import Card from '../../molecules/Card/Card';

export const icons = {
  done: IconChecks,
  onHold: IconPlayerPause,
  inProgress: IconTool,
} as Record<string, TablerIcon>;

const iconsKeys = Object.keys(icons);

export type IconsKey = typeof iconsKeys[number];

export interface StatsRingProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  setModalDetails: (setModalDetails: IModalDetails) => void;
  data: {
    id: string;
    category: string;
    label: string;
    status: IconsKey;
  }[];
}

export default function StatsRing({
  data,
  isOpen,
  setOpen,
  setModalDetails,
}: StatsRingProps) {
  const { classes } = useStyles();
  const cards = data.map((stat) => (
    <Card
      key={stat.id}
      status={stat.status}
      category={stat.category}
      label={stat.label}
      id={stat.id}
      setModalDetails={setModalDetails}
      setModalOpen={setOpen}
    />
  ));

  return (
    <div className={classes.cardsContainer}>
      {cards}
    </div>
  );
}
