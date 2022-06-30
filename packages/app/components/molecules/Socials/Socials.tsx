import React, {
  ReactNode,
} from 'react';
import { ActionIcon } from '@mantine/core';

export interface ISocialsProps {
  links: {
    link: string
    icon: ReactNode
  }[];
}

export default function Socials({ links }: ISocialsProps) {
  const iconLinks = links.map((iconLink) => {
    const {
      link,
      icon,
    } = iconLink;
    return (
      <ActionIcon<'a'>
        sx={(theme) => ({
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2],
          },
        })}
        component="a"
        href={link}
        target="_blank"
        size="lg"
      >
        {icon}
      </ActionIcon>
    );
  });
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {iconLinks}
    </>
  );
}
