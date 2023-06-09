import { Contact, DeleteBtn, Number } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = [...contacts].filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {getVisibleContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          {name}: <Number>{number}</Number>
          <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
            <RiDeleteBin6Line />
          </DeleteBtn>
        </Contact>
      ))}
    </ul>
  );
};
