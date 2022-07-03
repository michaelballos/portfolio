import {
  Center
} from '@mantine/core';
import ContactForm from '../../molecules/ContactForm/ContactForm';
import { useStyles } from './ContactPage.styles';

export default function ContactPage() {
  const { classes } = useStyles();

  return (
    <Center className={classes.container}>
      <ContactForm />
    </Center>
  );
}