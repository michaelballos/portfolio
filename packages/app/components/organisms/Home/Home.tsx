import React, { useCallback } from 'react';
import {
  ScrollArea,
  Group,
} from '@mantine/core';
import Hero from '../../molecules/Hero/Hero';
import StatsRing from '../../molecules/StatsRing/StatsRing';
import SkillsetText from '../../molecules/SkillsetText/SkillsetText';
import ProjectKey from '../../molecules/ProjectKey/ProjectKey';

import { useStyles } from './Home.styles';

export default function Home() {
  const { classes } = useStyles();
  const scrollToProject = useCallback(() => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // eslint-disable-next-line no-console
      console.log('element not found');
    }
  }, []);
  return (
    <ScrollArea
      style={{
        marginTop: 56, height: 'max-content',
      }}
    >
      <Hero onClick={scrollToProject} />
      <div
        className={classes.projectPage}
        id="projects"
      >
        <Group
          className={classes.projectAndKey}
          noWrap
          spacing="md"
        >
          <ScrollArea className={classes.projectCardsScrollArea}>
            <StatsRing
              data={[
                {
                  id: '1',
                  version: '1.0.0',
                  label: 'Properly',
                  status: 'done',
                }, {
                  id: '2',
                  version: '5.4.1',
                  label: 'Thundurus',
                  status: 'onHold',
                }, {
                  id: '3',
                  version: '1.0.0',
                  label: 'Properly',
                  status: 'inProgress',
                }, {
                  id: '4',
                  version: '5.4.1',
                  label: 'Thundurus',
                  status: 'onHold',
                }, {
                  id: '5',
                  version: '1.0.0',
                  label: 'Properly',
                  status: 'done',
                }, {
                  id: '6',
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
