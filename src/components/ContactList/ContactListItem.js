import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onContactDelete }) => {
  return (
    <div className={s.item}>
      {name}: {number}
      <button type="button" onClick={onContactDelete}>
        Delete
      </button>
    </div>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func,
};

export default ContactListItem;
