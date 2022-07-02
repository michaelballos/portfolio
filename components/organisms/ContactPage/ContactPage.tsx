import {
  Center
} from '@mantine/core';
import ContactForm from '../../molecules/ContactForm/ContactForm';

export default function ContactPage() {
  return (
    <Center
      style={{
        height: 'calc(100vh - 56px)'
      }}
    >
      <ContactForm />
    </Center>
  );
}