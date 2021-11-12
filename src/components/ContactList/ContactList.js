import ContactListItem from './ContactListItem';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsSlice';
import { useState } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const { data, error, isLoading } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      {data && (
        <ul className={s.contactList}>
          {data.map(({ id, name, phone }) => {
            return (
              <li key={id}>
                <ContactListItem
                  name={name}
                  number={phone}
                  onContactDelete={() => deleteContact(id)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

// const mapStateToProps = state => {
//   const { items, filter } = state.contacts;

//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = items.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );

//   return {
//     contacts: visibleContacts,
//   };
// };

ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  onContactDelete: PropTypes.func,
};

export default ContactList;
