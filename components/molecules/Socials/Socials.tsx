import React, { ReactNode } from "react";
import { ActionIcon } from "@mantine/core";
import {
  BrandTwitter,
  BrandLinkedin,
} from "tabler-icons-react";
import {
  IconMail,
  IconBrandGithub,
} from "@tabler/icons";

export interface ISocialsProps {
  links: {
    link: string;
    icon: ReactNode;
  }[];
}

const links = [
    {
      link: "https://github.com/michaelballos",
      icon: <IconBrandGithub aria-label="github" size={20} />,
    },
{
  link: "https://www.linkedin.com/in/michaelballos/",
    icon: <BrandLinkedin aria-label="linkedin" size={20} />,
},
{
  link: "https://twitter.com/michael_ballos",
    icon: <BrandTwitter aria-label="twitter" size={20} />,
},
{
  link: "mailto:ballos.michael@gmail.com",
    icon: <IconMail aria-label="email" size={20} />,
},
]

export default function Socials() {
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
