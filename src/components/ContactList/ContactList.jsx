import PropTypes from 'prop-types';
import { Contact, DeleteBtn, Number } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id}>
        {name}: <Number>{number}</Number>
        <DeleteBtn type="button" onClick={() => onDelete(id)}>
          Delete
        </DeleteBtn>
      </Contact>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
