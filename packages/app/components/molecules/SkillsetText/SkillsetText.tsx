import React from 'react';
import { Text } from '@mantine/core';
import { useStyles } from './SkillsetText.styles';

export default function SkillsetText() {
  const { classes } = useStyles();
  return (
    <div className={classes.skillsContainer}>
      <Text className={classes.skillsLabel}>
        Languages:
      </Text>
      <Text className={classes.skillsDescription}>
        Typescript,
        Javascript,
        HTML,
        CSS,
        Graphql,
        VHDL,
        PHP
        Phalcon
      </Text>
      <Text className={classes.skillsLabel}>
        Frameworks:
      </Text>
      <Text className={classes.skillsDescription}>
        React, Next JS, Nest JS
      </Text>
      <Text className={classes.skillsLabel}>
        Others:
      </Text>
      <Text className={classes.skillsDescription}>
        Docker, Prisma, Rest, Node, Express, Jest, ESLint Hardcore, Lerna,
        Git, Postman, Photoshop, Figma, Axios, PHP, Phalcon, Swagger, Prettier
        Prisma, Mantine, Three/Fiber, Three/Drei, Auth0, Passport JS, Bootstrap,
        Babel, Puppeteer, Webkit, SCSS, Tailwind, Styled Components,
      </Text>
    </div>
  );
}
