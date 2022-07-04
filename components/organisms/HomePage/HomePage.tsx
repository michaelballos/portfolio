import React, {
  useCallback,
  useState
} from "react";
import {
  ScrollArea,
  Group
} from "@mantine/core";
import Hero from "../../molecules/Hero/Hero";
import StatsRing from "../../molecules/StatsRing/StatsRing";
import SkillsetText from "../../molecules/SkillsetText/SkillsetText";
import ProjectKey from "../../molecules/ProjectKey/ProjectKey";
import ProjectModal from '../ProjectModal/ProjectModal';
import { useStyles } from "./Home.styles";

export interface IModalDetails {
  title: string;
  overview: string;
  link: string;
  goal: string[];
  significance: string[];
  images: string[];
}

const projectCards = [
  {
    id: "10",
    category: "Particle Space",
    label: "RE Template",
    status: "inProgress",
  },
  {
    id: "9",
    category: "Particle Space",
    label: "Properly",
    status: "done",
  },
  {
    id: "8",
    category: "Web Development",
    label: "JN Brand",
    status: "inProgress",
  },
  {
    id: "7",
    category: "UI Library",
    label: "Thundurus",
    status: "onHold",
  },
  {
    id: "6",
    category: "Bot Crawler",
    label: "Archillect Bot",
    status: "done",
  },
  {
    id: "5",
    category: "Particle Space",
    label: "Documentation",
    status: "done",
  },
  {
    id: "4",
    category: "Hackathon",
    label: "Electa",
    status: "done",
  },
  {
    id: "3",
    category: "Learning",
    label: "React Calculator",
    status: "done",
  },
  {
    id: "2",
    category: "Learning",
    label: "React Counter",
    status: "done",
  },
  {
    id: "1",
    category: "Learning",
    label: "counter",
    status: "done",
  },
]

export default function HomePage() {
  const [
    isOpen,
    setOpen
  ] = useState(false);
  const [
    modalDetails,
    setModalDetails
  ] = useState({
    title: 'coding is fun',
    overview: 'heres a jet engine',
    link: 'https://www.youtube.com/watch?v=MgL0GW248mE',
    goal: [
      'you',
      'get',
      'it'
    ],
    significance: [
      'it matters bro',
      'take my word',
      'stop questioning everything'
    ],
    images: [
      '/templateHome.png',
      '/templateMap.png',
    ]
  });

  const { classes } = useStyles();
  const scrollToProject = useCallback(() => {
    const element = document.querySelector("#projects");
    element && element.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <ScrollArea className={classes.scrollArea}>
      <Hero onClick={scrollToProject} />
      <div
        className={classes.projectPage}
        id="projects"
      >
        <Group
          className={classes.projectAndKey}
          noWrap
        >
          <ScrollArea className={classes.projectCardsScrollArea}>
            <StatsRing
              setModalDetails={setModalDetails}
              isOpen={isOpen}
              setOpen={setOpen}
              projectCards={projectCards}
            />
          </ScrollArea>
          <ProjectKey />
        </Group>
        <SkillsetText />
      </div>
      <ProjectModal
        modalDetails={modalDetails}
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </ScrollArea>
  );
}
