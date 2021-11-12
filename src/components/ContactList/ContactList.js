import { useFetchContactsQuery } from '../../redux/contactsSlice';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ filter }) => {
  const { data } = useFetchContactsQuery();

  return (
    <>
      {data && (
        <ul className={s.contactList}>
          {data
            .filter(contact => contact.name.toLowerCase().includes(filter))
            .map(({ id, name, phone }) => {
              return (
                <li key={id}>
                  <ContactListItem id={id} name={name} phone={phone} />
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});
// const { filter, items } = state.contacts;

// const normalizedFilter = filter.toLowerCase();
// const visibleContacts = items.filter(contact =>
//   contact.name.toLowerCase().includes(normalizedFilter),
// );

// return {
//   contacts: visibleContacts,
// };

ContactList.propTypes = {
  filter: PropTypes.string,
};

export default connect(mapStateToProps)(ContactList);
