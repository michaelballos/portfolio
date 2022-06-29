import { useCallback } from 'react';
import Hero from '../../molecules/Hero/Hero';
import {
  ScrollArea,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import StatsRing from '../../molecules/StatsRing/StatsRing';

export default function Home() {
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
        id="projects"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20em',
          height: '100vh',
        }}
      >
        <Stack spacing="md">
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: '2em',
            }}
          >
            Projects
          </Text>
        <ScrollArea
         style={{
           height: '30em',
           width: '20em',
         }}
        >
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
        <div>
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
        </div>
      </div>
    </ScrollArea>
  );
}