import React, {
  useMemo,
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
import { IModalDetails } from '../../organisms/Home/Home';
import { useStyles } from "./StatsRing.styles";

interface StatsRingProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  setModalDetails: (setModalDetails: IModalDetails) => void;
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

const projectDetails = [
  {
    title: 'RE Template',
    link: 'https://github.com/particlespace/real-estate-listing-platform-starter-template',
    overview: 'This was an Open Source project done at Particle Space. The project consisted of crafting a simple Next JS template for Real Estate listing platforms. ' +
      'It utilized Particle Space API for property data and Google Maps API to pinpoint the property location. ' +
      'The property modal is an incorporation of UI from a previous Chrome Extension project.',
    goal: [
      'Create an Open Source template for building Real Estate Listing applications',
      'Setup for easy integration of Particle Space API',
      'Show map location of properties'
    ],
    significance: [
      'Provides an easy starting point to integrate Particle Space API for developers at HackMidwest or anyone building a listing platform. ',
      'In terms of the UI I handled the Header, provided solutions for UI problems such as Listing ' +
      'Cards and Map responsiveness, mocked the data in a JSON file, assisted with connecting the map markers based on longitude and latitude, finished the property details modal, and created Type Safe UI data query and manipulation.',
      'Overall the project ended with a success only facing simple code conflict, typescript, and unique key problems. If the template were to be improved, my primary focus would be the aesthetics of the property details modal.',
    ],
    images: [
      '/templateHome.png',
      '/templateConsole.png',
      '/templateModal.png',
      '/templateModalTwo.png',
      '/templateMap.png',
    ]
  },
  {
    title: 'Properly',
    link: 'https://chrome.google.com/webstore/detail/properly-by-particle-spac/fgbbcngkdhfkahipapobpdbkijlanpeb',
    overview: 'This was an open source template meant for creating listing platforms',
    goal: [
      'Create Listing Template',
      'DFASDFSADF'
    ],
    significance: 'it matters okay',
    images: [
      'image',
      'image two'
    ]
  },
  {
    title: 'JN Brand',
    link: 'https://chrome.google.com/webstore/detail/properly-by-particle-spac/fgbbcngkdhfkahipapobpdbkijlanpeb',
    overview: 'This was an open source template meant for creating listing platforms',
    goal: [
      'Create Listing Template',
      'DFASDFSADF'
    ],
    significance: 'it matters okay',
    images: [
      'image',
      'image two'
    ]
  },
]

export default function StatsRing({
  data,
  isOpen,
  setOpen,
  setModalDetails,
}: StatsRingProps) {
  const {classes} = useStyles();
  const cards = data.map((stat) => {
    const {
      status, category, label, id,
    } = stat;
    const Icon = icons[status];
    const color = status === "inProgress" ? "#00A8FF" : status === "onHold" ? "orange" : "green";
    const openModelOnClick = useCallback(() => {
      const project = projectDetails.filter((project) => {
        const {title} = project;
        return label === title;
      })
      const [{...details}] = project;
      setModalDetails(details)
      setOpen(true)
    }, [setOpen])

    return (<Paper
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
            sections={[{
              value: 100, color,
            },]}
            label={<Center>
              <Icon size={22}/>
            </Center>}
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
                whiteSpace: "nowrap", fontFamily: 'tgHaidoGrotesk, sans-serif'
              }}
              key={label}
              weight={800}
              size="xl"
            >
              {label}
            </Text>
          </div>
        </Group>
      </Paper>);
  });
  return <div className={classes.cardsContainer}>{cards}</div>;
}
