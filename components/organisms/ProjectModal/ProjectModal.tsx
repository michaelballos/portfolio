import { useCallback } from 'react';
import {
  Modal,
  Text,
  Group,
  Button,
  Stack
} from '@mantine/core';
import Image from 'next/image';
import { IModalDetails } from '../../organisms/Home/Home';
import { useStyles } from './ProjectModal.styles';

export interface  IRETemplateProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  modalDetails: IModalDetails;
}

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
    link,
    overview,
    goal,
    significance,
    images
  } = modalDetails;
  const goalFormatted = goal.map((goal) => {
    return (
      <Text key={goal}>
        - {goal}
      </Text>
    );
  })
  const imagesToRender = images.map((image) => {
    return (
      <Image
        key={image}
        src={image}
        width={300}
        height={200}
        layout='responsive'
        objectFit='contain'
      />
    )
  })
  return (
    <Modal
      styles={{
        modal: {
          width: '120em',
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
            className={classes.link}
            href={link}
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {imagesToRender}
        </div>
      </Stack>
    </Modal>
  );
}
