import { useFetchContactsQuery } from '../../redux/contactsSlice';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ filter }) => {
  const { data } = useFetchContactsQuery();
  const normalizedFilter = filter.toLowerCase();

  return (
    <>
      {data && (
        <ul className={s.contactList}>
          {data
            .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
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

ContactList.propTypes = {
  filter: PropTypes.string,
};

export default connect(mapStateToProps)(ContactList);
