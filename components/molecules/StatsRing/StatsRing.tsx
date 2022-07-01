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
      'Provides an easy starting point to integrate Particle Space API for developers at HackMidwest or anyone building a listing platform.',
      'In terms of the UI I handled the Header, provided solutions for UI problems such as Listing Cards and Map responsiveness, mocked the data in a JSON file, assisted with connecting the map markers based on longitude and latitude, finished the property details modal, and created Type Safe UI data query and manipulation.',
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
    overview: `Properly is a Chrome Extension that automates the Query for property data inside of Gmail. It stays open while surfing through Gmail and any addresses inside an Email${`'`}s Subject or Body line is detected by the extension and Particle Space${`'`}s API is Queried for data in the background.`,
    goal: [
      'Build a product for non-technical users with the Particle Space API',
      'Detect adresses inside of Gmail',
      'Automate the query for property data using a Particle Space Dev account',
    ],
    significance: [
      `Particle Space${`'`}s service is an API only usable by people with a technical background. This extension is a cool tool that a lay person can use day to day with the focus on targetting 
       Real Estate Agents, Investors, and potential Home Buyers or Tenants`,
      `I was tasked with creating Properly${`'`}s UI design and chose Mantine for the Frontend UI Library. Isaac Spiegel (Particle Space Developer) and I pair programmed the majority of Properly and completed the extension in a week using React as the Framework. While Isaac started on the Particle Space logo injection into the side Navigation, I started the initial design in an isolated Storybook environment. 
       Grace (Particle Space Developer) created the logic for the detection of adresses. I noticed the detection didn${`'`}t work when Gmail${`'`}s UI was configured for a split Reading Pane which Grace fixed. I also worked on the logic for Querying and Hydrating the data into their designated Accordian categories. The last feature I contributed to the extension was a Button to copy all the data to the client's clipboard with formatted text using js-yaml.`,
      `One of the issued we faced with the Extension was if the Chrome Web Store allowed DOM manipulation. Fortunately they did and we took inspiration from Hubspot and injected our logo into the side Navigation which opened the main side drawer. One of the bigger issues on top of that is our drawer opens and hovers over the rest of the page unlike Hubspot where thier side drawer pushed the the page and made room for the drawer onOpen. ` +
      `We didn${`'`}t want to hyper focus on an issue that wasn${`'`}t a breaking problem but if there was more time to spare I believe having a drawer that doesn${`'`}t cover any UI would result in a better user experience. `
    ],
    images: [
      '/properlyNoDetect.png',
      '/properly.png',
      '/properlyBummer.png',
      '/properlyCopy.png',
      '/properlyDropdown.png',
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
    significance: [
      'it matters okay',
      'ypdfasdf',
      'gsdfdfasd',
    ],
    images: [
      '/john.png',
      '/johnCollage.png',
      '/johnVideos.png',
      '/johnContact.png',
    ]
  },
]

export default function StatsRing({
  data,
  isOpen,
  setOpen,
  setModalDetails,
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
      const project = projectDetails.filter((project) => {
        const { title } = project;
        return label === title;
      })
      const [{...details}] = project;
      setModalDetails(details)
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
  });
  return <div className={classes.cardsContainer}>{cards}</div>;
}
