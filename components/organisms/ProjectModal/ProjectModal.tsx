import { useCallback } from 'react';
import {
  Modal,
  Text
} from '@mantine/core';

export interface  IRETemplateProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export default function ProjectModal({
  isOpen,
  setOpen
}: IRETemplateProps) {
  const onClose = useCallback(() => {
    console.log('Closed modal')
    setOpen(false);
  }, [setOpen]);
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title="Introduce yourself!"
    >
      <Text>
        RE Template Modal
      </Text>
    </Modal>
  );
}
