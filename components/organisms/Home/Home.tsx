import React, {
  useCallback,
} from "react";
import {
  ScrollArea,
  Group
} from "@mantine/core";
import Hero from "../../molecules/Hero/Hero";
import StatsRing from "../../molecules/StatsRing/StatsRing";
import SkillsetText from "../../molecules/SkillsetText/SkillsetText";
import ProjectKey from "../../molecules/ProjectKey/ProjectKey";
import { useStyles } from "./Home.styles";
import styles from './HideStatusScroll.module.css';

export default function Home() {
  const { classes } = useStyles();
  const scrollToProject = useCallback(() => {
    const element = document.querySelector("#projects");
    element && element.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div
       className={styles.scrollArea}
    >
      <Hero onClick={scrollToProject} />
      <div className={classes.projectPage} id="projects">
        <Group
          className={classes.projectAndKey}
          spacing="md"
          noWrap
        >
          <ScrollArea className={classes.projectCardsScrollArea}>
            <StatsRing
              data={[
                {
                  id: "1",
                  category: "Particle Space",
                  label: "RE Template",
                  status: "inProgress",
                },
                {
                  id: "2",
                  category: "Particle Space",
                  label: "Properly",
                  status: "done",
                },
                {
                  id: "3",
                  category: "Web Development",
                  label: "JN Brand",
                  status: "inProgress",
                },
                {
                  id: "4",
                  category: "UI Library",
                  label: "Thundurus",
                  status: "onHold",
                },
                {
                  id: "5",
                  category: "Bot Crawler",
                  label: "Archillect Bot",
                  status: "done",
                },
                {
                  id: "6",
                  category: "Particle Space",
                  label: "Documentation",
                  status: "done",
                },
                {
                  id: "7",
                  category: "Hackathon",
                  label: "Electa",
                  status: "done",
                },
                {
                  id: "8",
                  category: "Learning",
                  label: "React Calculator",
                  status: "done",
                },
                {
                  id: "10",
                  category: "Learning",
                  label: "Counter",
                  status: "done",
                },
              ]}
            />
          </ScrollArea>
          <ProjectKey />
        </Group>
        <SkillsetText />
      </div>
    </div>
  );
}
