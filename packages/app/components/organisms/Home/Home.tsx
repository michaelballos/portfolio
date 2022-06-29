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
        <Stack spacing="md">
          <Text className={classes.projectLabel}>
            Projects
          </Text>
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
                version: '3.0.2',
                label: 'QrScribe',
                status: 'inProgress',
              },
              {
                version: '3.0.2',
                label: 'QrScribe',
                status: 'inProgress',
              },
              {
                version: '3.0.2',
                label: 'QrScribe',
                status: 'inProgress',
              },
              {
                version: '3.0.2',
                label: 'QrScribe',
                status: 'inProgress',
              },
              {
                version: '3.0.2',
                label: 'QrScribe',
                status: 'inProgress',
              }
           ]}
          />
        </ScrollArea>
        </Stack>
        <div
          style={{
            width: '30em',
          }}
        >
          <Text
            style={{
              fontFamily: 'tgHaidoGrotesk, sans-serif',
              fontSize: '2em',
            }}
          >
            Languages:
          </Text>
          <Text
            style={{
              fontSize: '1.2em',
            }}
          >
            Typescript,
            Javascript,
            HTML,
            CSS,
            Graphql,
            VHDL,
            PHP
            Phalcon
          </Text>
          <Text
            style={{
              fontFamily: 'tgHaidoGrotesk, sans-serif',
              fontSize: '2em',
            }}
          >
            Frameworks:
          </Text>
          <Text
            style={{
              fontSize: '1.2em',
            }}
          >
            React, Next JS, Nest JS
          </Text>
          <Text
            style={{
              fontFamily: 'tgHaidoGrotesk, sans-serif',
              fontSize: '2em',
            }}
          >
            Others:
          </Text>
          <Text
            style={{
              fontSize: '1.2em',
            }}
          >
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