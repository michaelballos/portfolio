import React, {
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
  SyntheticEvent,
} from 'react';
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
import {
  EventHandler
} from '../../../../../../../Applications/IntelliJ IDEA.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react';
import { ContactIconsList } from '../../atoms/ContactIcons/ContactIcons';
import bg from './bg.svg';

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,
      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },
    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,
      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },
    fields: {
      marginTop: -12,
    },
    fieldInput: {
      flex: 1,
      '& + &': {
        marginLeft: theme.spacing.md,
        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },
    fieldsGroup: {
      display: 'flex',
      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },
    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg - 2,
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid transparent',
      padding: theme.spacing.xl,
      flex: '0 0 280px',

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },
    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },
    control: {
      backgroundColor: '#445b91',
      '&:hover': {
        backgroundColor: '#5974b1',
      },
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export interface IFetch {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const { classes } = useStyles();
  const resetForm = (): void => {
    console.log('Post was a Success! 🙌');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSubmitted(true);
  }
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setSubmitted(true);
    const data = {
      name,
      email,
      message
    }
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res: Response) => {
      console.log('Response Recieved...')
      res.status === 200
        ? resetForm
        : console.log('Post Failed 🫥')
    });
  };


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
          className={classes.form}
          onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
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
                label="Your name"
                placeholder="Your name"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
              />
              <TextInput
                label="Your email"
                placeholder="hello@mantine.dev"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                required
              />
            </SimpleGrid>
            <TextInput
              mt="md"
              label="Subject"
              placeholder="Subject"
              onChange={(event: ChangeEvent<HTMLInputElement>) => setSubject(event.target.value)}
              required
            />
            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)}
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
                onClick={(event: SyntheticEvent) => handleSubmit(event)}
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