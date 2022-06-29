import React, { useState } from 'react';
import {
  Header as MantineHeader,
  Group,
  ActionIcon,
  Container,
  Burger,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import ColorSchemeToggle from '../../atoms/ColorSchemeToggle/ColorSchemeToggle';
import {
  BrandTwitter,
  BrandLinkedin,
} from 'tabler-icons-react';
import {
  IconMail
} from '@tabler/icons';
import Logo from '../../atoms/Logo/Logo';
import { useStyles } from './Header.styles';

interface HeaderMiddleProps {
  links: {
    link: string;
    label: string
  }[];
}

export default function Header({
  links,
}: HeaderMiddleProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <MantineHeader
      className={classes.header}
      height={56}
    >
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          size="sm"
          className={classes.burger}
        />
        <Group
          className={classes.links}
          spacing={5}
        >
          {items}
        </Group>

        <Logo size="27px" />

        <Group
          className={classes.social}
          spacing={0}
          position="right"
          noWrap
        >
          <div
            style={{
              display: 'flex',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          >
            <ColorSchemeToggle />
          </div>
          <ActionIcon<'a'>
            component="a"
            href="https://www.twitter.com/michael_ballos"
            target="_blank"
            size="lg"
          >
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon<'a'>
            component="a"
            href="https://www.linkedin.com/in/michaelballos/"
            target="_blank"
            size="lg"
          >
            <BrandLinkedin size={18} />
          </ActionIcon>
          <ActionIcon
            size="lg"
          >
            <IconMail size={18} />
          </ActionIcon>
        </Group>
      </Container>
     </MantineHeader>
  );
}