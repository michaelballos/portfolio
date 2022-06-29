import { useCallback } from 'react';
import Hero from '../../molecules/Hero/Hero';
import {
  ScrollArea,
  Text
} from '@mantine/core';

export default function Home() {
  const scroll = useCallback(() => {
    const element = document.querySelector('#projects');
    element && element.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <ScrollArea
      style={{
        height: 'calc(200vh-56px)',
      }}
    >
      <Hero onClick={scroll} />
      <div
        id="projects"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Text>
          Projects
        </Text>
      </div>
    </ScrollArea>
  );
}