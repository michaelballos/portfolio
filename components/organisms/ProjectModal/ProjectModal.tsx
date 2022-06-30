import { useCallback } from 'react';
import {
  Modal,
  Text
} from '@mantine/core';

export interface  IRETemplateProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  modalDetails: {
    title: string;
    goal: [string]
  }
}

const modalDetails = {
  title: 'Project Example',
  overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  goal: [
    'Become the best developer',
    'Code til I die',
    'No code no gain',
    'YURRRR'
  ],
}

export default function ProjectModal({
  isOpen,
  setOpen,
}: IRETemplateProps) {
  const onClose = useCallback(() => {
    console.log('Closed modal')
    setOpen(false);
  }, [setOpen]);
  const {
    title,
    overview,
  } = modalDetails;
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
          fontSize: '1.5em'
        }
      }}
      opened={isOpen}
      onClose={onClose}
      title={title}
    >
      <Text
        style={{
          fontFamily: 'tgHaidoGrotesk, sans-serif',
        }}
      >
        Overview
      </Text>
      <Text
        style={{
          paddingLeft: '1.2em',
          paddingRight: '1.2em'
        }}
      >
        {overview}
      </Text>
    </Modal>
  );
}
