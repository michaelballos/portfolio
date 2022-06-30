import { useCallback } from 'react';
import {
  Modal,
  Text,
  Group,
  Button,
  Stack
} from '@mantine/core';
import { IModalDetails } from '../../organisms/Home/Home';
import { useStyles } from './ProjectModal.styles';



export interface  IRETemplateProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  modalDetails: IModalDetails;
}

/**
const modalDetails = {
  title: 'Project Example',
  link: 'link to projcet',
  overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  goal: [
    'Become the best developer',
    'Code til I die',
    'No code no gain',
    'YURRRR'
  ],
  significance: 'very well get good',
  images: [
    'image =!',
    'twoooo'
  ]
}
*/

export default function ProjectModal({
  isOpen,
  setOpen,
  modalDetails
}: IRETemplateProps) {
  const { classes } = useStyles();
  const onClose = useCallback(() => {
    console.log('Closed modal')
    setOpen(false);
  }, [setOpen]);
  const {
    title,
    overview,
    goal,
    significance
  } = modalDetails;
  const goalFormatted = goal.map((goal) => {
    return (
      <Text key={goal}>
        - {goal}
      </Text>
    );
  })
  return (
    <Modal
      styles={{
        modal: {
          width: '70em'
        },
        title: {
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          fontFamily: 'tgHaidoGrotesk, sans-serif',
          fontSize: '1.3em',
          marginLeft: '35px',
          ['@media (max-width: 450px)']: {
            fontSize: '1em',
          }
        },
      }}
      opened={isOpen}
      onClose={onClose}
      title={title}
    >
      <Stack>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <a
            href='https://www.google.com'
            target='_blank'
          >
            View Project
          </a>
        </div>
        <Stack>
          <Text className={classes.heading}>
            Overview
          </Text>
          <Text className={classes.description}>
            {overview}
          </Text>
          <Text className={classes.heading}>
            Goal
          </Text>
          <div className={classes.description}>
            {goalFormatted}
          </div>
          <Text className={classes.heading}>
            Significance
          </Text>
          <div className={classes.description}>
            {significance}
          </div>
        </Stack>
      </Stack>
    </Modal>
  );
}
