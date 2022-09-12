import { useCallback } from 'react';
import {
  Modal,
  Text,
  Group,
  Stack,
  RingProgress,
  Skeleton
} from '@mantine/core';
import Image from 'next/image';
import { IModalDetails } from '../../organisms/HomePage/HomePage';
import { useStyles } from './ProjectModal.styles';

export interface  IRETemplateProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  modalDetails: IModalDetails;
}

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

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
  const shimmer = (
    w: number,
    h: number
  ) => `
    <svg 
      width="${w}" 
      height="${h}" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink"
      >
      <defs>
        <linearGradient id="g">
          <stop 
            stop-color="#333" 
            offset="20%" 
            />
          <stop
           stop-color="#222" 
           offset="50%" 
           />
          <stop 
            stop-color="#333" 
            offset="70%" 
          />
        </linearGradient>
      </defs>
      <rect
        width="${w}"
        height="${h}" 
        fill="#333" 
      />
      <rect 
        id="r" 
        width="${w}" 
        height="${h}" 
        fill="url(#g)" 
      />
      <animate 
        xlink:href="#r" 
        attributeName="x"
        from="-${w}" 
        to="${w}" 
        dur="1s" 
        repeatCount="indefinite" 
      />
    </svg>`

  const imagesToRender = images.map((image) => {
    return (
      <Skeleton
        visible={!isOpen}
        key={image}
      >
        <Image
          key={image}
          src={image}
          width={300}
          height={200}
          layout='responsive'
          objectFit='contain'
          loading='lazy'
          alt={image}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 500))}`}
        />
      </Skeleton>
    )
  })

  return (
    <Modal
      styles={(theme) => ({
        modal: {
          width: '80em',
          height: 'max-content',
          backgroundColor: 'transparent'
        },
        title: {
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          fontFamily: 'tgHaidoGrotesk, sans-serif',
          fontSize: '1.3em',
          marginLeft: '35px',
          color:
            theme.colorScheme === 'dark'
              ? '#c1c2c5'
              : 'white',
          ['@media (max-width: 450px)']: {
            fontSize: '1em',
          }
        },
      })}
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
            rel='noopener noreferrer'
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
            width: '100%',
            height: 700,
          }}
        >
          {imagesToRender}
        </div>
      </Stack>
    </Modal>
  );
}
