import { useState } from 'react';
// import { nanoid } from 'nanoid';
import css from 'components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContact } from 'redux/selector';
import { fetchContactAdd } from 'redux/contacts/operations';
import { Button } from '@mui/material';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const changeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const contacts = useSelector(selectorContact);

  const newContact = {
    name,
    number,
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(fetchContactAdd(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form action="" onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="">Name</label>
      <input
        className={css.input}
        onChange={changeInput}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="">Number</label>
      <input
        className={css.input}
        onChange={changeInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
      />
      <Button type="submit" variant="contained" fullWidth={false}>
        Add contact
      </Button>
    </form>
  );
}
