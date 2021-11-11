import ContactListItem from './ContactListItem';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import PropTypes, { arrayOf } from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ContactListItem
              name={name}
              number={number}
              onContactDelete={() => onContactDelete(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onContactDelete: id => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  onContactDelete: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
