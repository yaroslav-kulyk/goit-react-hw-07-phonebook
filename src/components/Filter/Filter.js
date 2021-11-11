import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.filter}>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={s.filterInput}
    ></input>
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
