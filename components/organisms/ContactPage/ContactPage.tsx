import ContactForm from '../../molecules/ContactForm/ContactForm';
import { useStyles } from './ContactPage.styles';

export default function ContactPage() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <ContactForm />
    </div>
  );
}
