import {
  Paper,
  createStyles
} from '@mantine/core';
import { HeaderMiddleProps } from '../Header/Header';
import Link from 'next/link';
import { useStyles } from './BurgerNav.styles';

export interface IBurgerNavProps {
  opened: boolean;
  toggleOpened: (opened: boolean) => void;
  links: HeaderMiddleProps['links'];
}
const formatLink = (link: string) => {
  const removeSlash = link.replace(/\/$/, '');
  return removeSlash.charAt(1).toUpperCase() + removeSlash.slice(2);
}
/**
 * This component is used to render the burger navigation.
 * @param {boolean} opened
 * @param {(opened: boolean) => void} toggleOpened
 * @param {any} links
 * @returns {JSX.Element}
 * @constructor
 */
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
