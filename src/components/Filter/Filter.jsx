import PropTypes from 'prop-types';
import { InputFilter, LabelFilter } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <LabelFilter>
    Find contacts by name
    <br />
    <InputFilter
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
    ></InputFilter>
  </LabelFilter>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
