import React from "react";
import Image from 'next/image';
import {
  Overlay,
  Container,
  Title,
  Button,
  Text
} from "@mantine/core";
import { useStyles } from "./Hero.styles";

export interface HeroProps {
  onClick: () => void;
}

export default function Hero({ onClick }: HeroProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Image
        src='/hero.webp'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt='Hero'
        priority={true}
      />
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>
          Michael Ballos
          <br />
          Software Developer
        </Title>
        <Text
          className={classes.description}
          size="xl"
          mt="xl"
        >
          I{`'`}m a Full-Stack Software Developer with a passion for design and end to end
          production of software and applications.
        </Text>
        <div className={classes.controlContainer}>
          <Button
            variant="gradient"
            size="xl"
            radius="xl"
            className="heroButton"
            onClick={onClick}
          >
            View my Stack
          </Button>
        </div>
      </Container>
    </div>
  );
}
