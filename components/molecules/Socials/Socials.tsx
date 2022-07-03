import React, { ReactNode } from "react";
import { ActionIcon } from "@mantine/core";

export interface ISocialsProps {
  links: {
    link: string;
    icon: ReactNode;
  }[];
}

export default function Socials({ links }: ISocialsProps) {
  const iconLinks = links.map((iconLink) => {
    const {
      link,
      icon
    } = iconLink;
    return (
      <ActionIcon<"a">
        aria-label={link.slice(0)}
        title={link.slice(0)}
        key={link}
        sx={(theme) => ({
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2],
          },
        })}
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        size="lg"
      >
        {icon}
      </ActionIcon>
    );
  });

  return (
    <>
      {iconLinks}
    </>
  );
}
