import { useCallback } from 'react';
import {
  RingProgress,
  Text,
  Paper,
  Center,
  Group,
} from "@mantine/core";
import { useStyles } from "./Card.styles";
import { StatsRingProps } from '../../molecules/StatsRing/StatsRing';
import { icons } from "../../molecules/StatsRing/StatsRing";
import { projectsModalInfo } from '../../../common/projects';

const projectTitles = projectsModalInfo.map((project) => project.title)

type ProjectTitle = (typeof projectTitles)[number]

type CardProps = StatsRingProps['projectCards'][number] & {
  label: ProjectTitle,
  setModalDetails: (details: (typeof projectsModalInfo)[number]) => void,
  setModalOpen: (open: boolean) => void
};

export default function Card({
  status,
  category,
  label,
  id,
  setModalDetails,
  setModalOpen,
}: CardProps) {
  const Icon = icons[status];
  const color = status === "inProgress"
    ? "#00A8FF"
    : status === "onHold"
      ? "orange"
      : "green";

  const { classes } = useStyles();
  const project = projectsModalInfo.find((project) => {
    const { title } = project;
    return label === title;
  }) as typeof projectsModalInfo[number]; // this is known not to be undefined since typeof label is ProjectTitle
  const details = project;
  const openModalOnClick = useCallback(() => {
    setModalDetails(details);
    setModalOpen(true);
  }, [
    details,
    setModalDetails,
    setModalOpen
  ]);

  return (
    <Paper
      className={classes.card}
      withBorder
      radius="md"
      p="xs"
      key={id}
      onClick={openModalOnClick}
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
              fontFamily: 'tgHaidoGrotesk, sans-serif'
            }}
            key={label}
            weight={800}
            size="xl"
          >
            {label}
          </Text>
        </div>
      </Group>
    </Paper>
  );
}
