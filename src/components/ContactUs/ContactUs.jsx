import ContactForm from './ContactForm';
import styles from './ContactUs.module.scss';

const ContactUs = () => {
  return (
    <section
      id='contact'
      className={styles.contactUs}
    >
      <div className={`${styles.content} container`}>
        <ContactForm variant='default' />
      </div>
    </section>
  );
};

export default ContactUs;
