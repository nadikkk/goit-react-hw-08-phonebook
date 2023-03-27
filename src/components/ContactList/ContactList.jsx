import { useDispatch, useSelector } from 'react-redux';
import { fetchContactDel } from 'redux/contacts/operations';
import { selectorContact, selectorFilter } from 'redux/selector';
import css from 'components/ContactList//ContactList.module.css';
import { Button } from '@mui/material';

export function ContactList() {
  const contacts = useSelector(selectorContact);
  const dispatch = useDispatch();
  const woldFilter = useSelector(selectorFilter);

  const isDelete = code => {
    dispatch(fetchContactDel(code));
  };
  // console.log(contacts);
  const contactsAfterFiltr = contacts.filter(({ name }) =>
    name.toLowerCase().includes(woldFilter)
  );
  // console.log(contactsAfterFiltr);

  if (contactsAfterFiltr.length === 0) {
    return <p>Not contacts</p>;
  }
  return (
    <ul className={css.list}>
      {contactsAfterFiltr.map(({ id, name, phone }) => {
        return (
          <li key={id} className={css.item}>
            <span>
              {name} : {phone}
            </span>
            <Button
              variant="contained"
				  size="small"
              type="button"
              onClick={() => {
                isDelete(id);
              }}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
