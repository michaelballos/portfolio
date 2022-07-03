import {
  Paper,
  createStyles
} from '@mantine/core';
import { HeaderMiddleProps } from '../Header/Header';
import Link from 'next/link';
export const useStyles = createStyles((theme) => ({
  container: {
    position: 'absolute',
    top: 56,
    left: 0,
    width: '100vw',
    height: 'calc(100vh - 56px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    gap: '2em',
    [theme.fn.largerThan("sm")]: {
      display: 'none',
    },
  },
  rainRainGoAway: {
    display: 'none'
  },
  link: {
    fontSize: '3em',
    fontWeight: 500,
    fontFamily: 'Roboto, sans-serif',
  }
}));
export interface IBurgerNavProps {
  opened: boolean;
  toggleOpened: (opened: boolean) => void;
  links: HeaderMiddleProps['links'];
}
const formatLink = (link: string) => {
  const removeSlash = link.replace(/\/$/, '');
  return removeSlash.charAt(1).toUpperCase() + removeSlash.slice(2);
}
export default function BurgerNav({
  opened,
  toggleOpened,
  links,
}: IBurgerNavProps) {
  const {
    classes,
  } = useStyles();
  const navLinks = links.map((href) => {
  const {
    link,
    label
  } = href;
    return (
      <Link
        key={label}
        href={link}
      >
        <a
          className={classes.link}
          onClick={() => {
            toggleOpened(false);
          }}
        >
          {formatLink(link)}
        </a>
      </Link>
    );
  });
  return (
    <Paper
      className={
        opened
          ? classes.container
          : classes.rainRainGoAway
      }
    >
      {navLinks}
    </Paper>
  );
}