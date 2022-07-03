import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
} from '@mantine/core';
import { ContactIconsList } from '../../atoms/ContactIcons/ContactIcons';
import { useForm } from '@formspree/react';
import { useStyles } from './ContactForm.styles';

export default function ContactForm() {
  const [form, setUseForm ] = useForm('{moqroapl}');
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      radius="lg"
    >
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text
            size="lg"
            weight={700}
            className={classes.title}
            sx={{
              color: '#fff'
            }}
          >
            Contact information
          </Text>
          <ContactIconsList variant="white" />
        </div>
        <form
          method="POST"
          className={classes.form}
          action="https://formspree.io/f/moqroapl"
        >
          <Text
            size="lg"
            weight={700}
            className={classes.title}
          >
            Get in touch
          </Text>
          <div className={classes.fields}>
            <SimpleGrid
              cols={2}
              breakpoints={[{
                maxWidth: 'sm',
                cols: 1
              }]}
            >
              <TextInput
                name="name"
                label="Your name"
                placeholder="Your name"
              />
              <TextInput
                name="email"
                label="Your email"
                placeholder="Your email"
                required
              />
            </SimpleGrid>
            <TextInput
              name="subject"
              mt="md"
              label="Subject"
              placeholder="Subject"
              required
            />
            <Textarea
              name="message"
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              required
              minRows={3}
            />
            <Group
              position="right"
              mt="md"
            >
              <Button
                type="submit"
                className={classes.control}
              >
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}