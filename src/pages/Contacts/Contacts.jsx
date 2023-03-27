import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectorContactLoader } from 'redux/selector';
import { Loader } from 'components/Loader/Loader';
import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function Contacts () {
  const dispatch = useDispatch();
  const loader = useSelector(selectorContactLoader);
  const { isLoggedIn } = useAuth();
  //   const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //   const addContact = contact => {
  //     setContacts(prevState => {
  //       return [contact, ...prevState];
  //     });
  //   };

  //   const deleteContact = code => {
  //     //  console.log(code);
  //     setContacts(prevState => {
  //       return prevState.filter(({ id }) => id !== code);
  //     });
  //   };
  //   const isFilterContacts = wordFilter => {
  //     //  console.log(wordFilter);
  //     setFilter(wordFilter.toLowerCase());
  //   };

  //   const contactsAfterFiltr = contacts.filter(({ name }) => {
  //     return name.toLowerCase().includes(filter);
  //   });
  if (!isLoggedIn) {
	return <Navigate to="/" replace />;
 }
  return (
    <section className={css.contacts}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loader && <Loader />}
      {/* {contactsAfterFiltr.length === 0 ? (
        <p>Not contacts</p>
      ) : ( */}
      {!loader && <ContactList />}
    </section>
  );
}
