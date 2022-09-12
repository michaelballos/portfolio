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
import ProjectModal from '../../molecules/ProjectModal/ProjectModal';
import { useStyles } from "./Home.styles";
import { projectsCardInfo } from '../../../common/projects';

export interface IModalDetails {
  title: string;
  overview: string;
  link: string;
  goal: string[];
  significance: string[];
  images: string[];
}


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
              setOpen={setOpen}
              projectCards={projectsCardInfo}
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
