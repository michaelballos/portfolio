import { useCallback } from 'react';
import {
  Modal,
  Text,
  Group,
  Button,
  Stack,
  RingProgress
} from '@mantine/core';
import Image from 'next/image';
import { IModalDetails } from '../../organisms/HomePage/HomePage';
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
  const goalFormatted = goal.map((goal, index) => {
    return (
      <Group
        noWrap
        key={index}
        style={{
          marginBottom: '10px',
        }}
      >
        <RingProgress
          key={`${goal} ${new Date().getTime()}`}
          size={20}
          roundCaps
          thickness={3}
          sections={[
            {
              value: 100,
              color: '#7c90c0',
            },
          ]}
        />
        <Text key={goal}>
          {goal}
        </Text>
      </Group>
    );
  })
  const projectSignificance = significance.map((quote) => {
    return (
      <Text
        key={quote}
        className={classes.description}
      >
        {quote}
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
        loading='lazy'
      />
    )
  })
  return (
    <Modal
      styles={{
        modal: {
          width: '80em',
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
            Significance &rarr; Contribution &rarr; Flaws
          </Text>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1em',
            }}
          >
            {projectSignificance}
          </div>
        </Stack>
        <div
          style={{
            width: '100%'
          }}
        >
          {imagesToRender}
        </div>
      </Stack>
    </Modal>
  );
}
