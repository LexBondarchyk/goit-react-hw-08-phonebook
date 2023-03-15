import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';

import { getFilteredContacts } from 'redux/contacts/contact-selectors';
import { fetchAllContacts } from 'redux/contacts/contacts-operations';

import styles from './contactsPage.module.scss';

const ContactsPage = () => {
  const filterContacts = useSelector(getFilteredContacts);
  const isContactsFilter = Boolean(filterContacts.length);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <section className={styles.sectionBook}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.titleContacts}>Contacts</h2>
      <Filter />
      {isContactsFilter && <ContactList />}
      {!isContactsFilter && <p>There is no contacts.</p>}
    </section>
  );
};

export default ContactsPage;
