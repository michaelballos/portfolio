import { useCallback } from 'react';
import Hero from '../../molecules/Hero/Hero';
import {
  ScrollArea,
  Stack,
  Group
} from '@mantine/core';
import StatsRing from '../../molecules/StatsRing/StatsRing';
import SkillsetText from '../../molecules/SkillsetText/SkillsetText';
import ProjectKey from '../../molecules/ProjectKey/ProjectKey';
import { useStyles } from './Home.styles';

export default function Home() {
  const { classes } = useStyles();
  const scroll = useCallback(() => {
    const element = document.querySelector('#projects');
    element && element.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <ScrollArea
      style={{
        marginTop: 56,
        height: 'max-content',
      }}
    >
      <Hero onClick={scroll} />
      <div
        className={classes.projectPage}
        id="projects"
      >
        <Group
          className={classes.projectAndKey}
          spacing="md"
          noWrap
        >
          <ScrollArea className={classes.projectCardsScrollArea}>
            <StatsRing
              data={[
                {
                  version: '1.0.0',
                  label: 'Properly',
                  status: 'done',
                },
                {
                  version: '5.4.1',
                  label: 'Thundurus',
                  status: 'onHold',
                },
                {
                  version: '1.0.0',
                  label: 'Properly',
                  status: 'inProgress',
                },
                {
                  version: '5.4.1',
                  label: 'Thundurus',
                  status: 'onHold',
                },
                {
                  version: '1.0.0',
                  label: 'Properly',
                  status: 'done',
                },
                {
                  version: '5.4.1',
                  label: 'Thundurus',
                  status: 'onHold',
                },
              ]}
            />
          </ScrollArea>
          <ProjectKey />
        </Group>
        <SkillsetText />
      </div>
    </ScrollArea>
  );
}