import { useCallback } from 'react';
import Hero from '../../molecules/Hero/Hero';
import {
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import StatsRing from '../../molecules/StatsRing/StatsRing';
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
        <Stack className={classes.projectStack} spacing="md">
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
        </Stack>
        <div className={classes.skillsContainer}>
          <Text className={classes.skillsLabel}>
            Languages:
          </Text>
          <Text className={classes.skillsDescription}>
            Typescript,
            Javascript,
            HTML,
            CSS,
            Graphql,
            VHDL,
            PHP
            Phalcon
          </Text>
          <Text className={classes.skillsLabel}>
            Frameworks:
          </Text>
          <Text className={classes.skillsDescription}>
            React, Next JS, Nest JS
          </Text>
          <Text className={classes.skillsLabel}>
            Others:
          </Text>
          <Text className={classes.skillsDescription}>
            Docker, Prisma, Rest, Node, Express, Jest, ESLint Hardcore, Lerna,
            Git, Postman, Photoshop, Figma, Axios, PHP, Phalcon, Swagger, Prettier
            Prisma, Mantine, Three/Fiber, Three/Drei, Auth0, Passport JS, Bootstrap,
            Babel, Puppeteer, Webkit, SCSS, Tailwind, Styled Components,
          </Text>
        </div>
      </div>
    </ScrollArea>
  );
}