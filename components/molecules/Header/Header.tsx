import React, {
  useEffect,
  useState
} from "react";
import Link from "next/link";
import {
  Header as MantineHeader,
  Group,
  Container,
  Burger,
} from "@mantine/core";

import { useBooleanToggle } from "@mantine/hooks";
import ColorSchemeToggle from "../../atoms/ColorSchemeToggle/ColorSchemeToggle";
import Logo from "../../atoms/Logo/Logo";
import Socials from "../Socials/Socials";
import { useStyles } from "./Header.styles";
import { useRouter } from "next/router";
import BurgerNav from "../BurgerNav/BurgerNav";

export interface HeaderMiddleProps {
  links: {
    link: string;
    label: string;
  }[];
}

export default function Header({ links }: HeaderMiddleProps) {
  const router = useRouter();
  const [
    opened,
    toggleOpened
  ] = useBooleanToggle(false);
  const [
    active,
    setActive
  ] = useState(links[0].link);
  const {
    classes,
    cx
  } = useStyles();
  const items = links.map((link) => (
    <a
      aria-label={`Link to ${link.label}`}
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
        router.push(link.link);
      }}
    >
      {link.label}
    </a>
  ));
  const path = router.pathname;
  useEffect(() => {
    path === '/'
      ? setActive('/')
      : setActive(path)
  }, [path]);

  return (
    <MantineHeader
      className={classes.header}
      height={56}
    >
      <Container className={classes.inner}>
        <BurgerNav
          links={links}
          opened={opened}
          toggleOpened={toggleOpened}
        />
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
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <ColorSchemeToggle />
          </div>
          <Socials />
        </Group>
      </Container>
    </MantineHeader>
  );
}
