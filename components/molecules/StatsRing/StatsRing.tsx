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
import ProjectModal from '../../molecules/ProjectModal/ProjectModal';
import { IModalDetails } from '../../organisms/HomePage/HomePage';
import { useStyles } from "./StatsRing.styles";
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
  projectCards: {
    id: string;
    category: string;
    label: string;
    status: IconsKey;
  }[];
}

export default function StatsRing({
  projectCards,
  isOpen,
  setOpen,
  setModalDetails,
}: StatsRingProps) {
  const { classes } = useStyles();
  const cards = projectCards.map((card) => (
    <Card
      key={card.id}
      status={card.status}
      category={card.category}
      label={card.label}
      id={card.id}
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
