import React from 'react';
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group
} from '@mantine/core';
import {
  BrandTwitter,
  BrandYoutube,
  BrandInstagram
} from 'tabler-icons-react';
import Logo from '../../atoms/Logo/Logo';
import Socials from '../Socials/Socials';
import { useStyles} from './Footer.styles';

interface FooterLinksProps {
  data: {
    title: string;
    links: {
      target?: string;
      label: string;
      link: string;
    }[];
  }[];
}

export default function Footer({ data }: FooterLinksProps) {
  const { classes } = useStyles();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        aria-label={link.label}
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        target={link.target === 'blank' ? '_blank' : undefined}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Logo size="25px" />
          <Text size="xs" color="dimmed" className={classes.description}>
            Feel free to message me about bugs, ideas, or work.
            In the meantime i'll be building applications 👨‍💻...
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 Michael Ballos. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Socials />
        </Group>
      </Container>
    </footer>
  );
}
