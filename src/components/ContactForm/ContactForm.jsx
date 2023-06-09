import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  ErrorMessage,
  Label,
  Field,
  AddButton,
} from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required field!'),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onAddContact = newContact => {
    contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        id: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAddContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Field name="name"></Field>
          <ErrorMessage name="name" component="span" />
        </Label>
        <Label>
          Number
          <Field type="tel" name="number"></Field>
          <ErrorMessage name="number" component="span" />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    </Formik>
  );
};
