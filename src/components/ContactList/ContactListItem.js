import { useDeleteContactMutation } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <div className={s.item}>
      {name}: {phone}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
