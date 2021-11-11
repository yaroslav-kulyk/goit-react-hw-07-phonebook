import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-actions';
import PropTypes, { arrayOf } from 'prop-types';
import s from './ContactForm.module.css';

function ContactForm({ contacts, onFormSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (checkIfContactExists()) {
      return alert(`${name} already in contacts`);
    }

    onFormSubmit({ name, number });

    reset();
  };

  const checkIfContactExists = () => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={s.input}
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          className={s.input}
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onFormSubmit: contact => dispatch(addContact(contact)),
});

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  contacts: arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
