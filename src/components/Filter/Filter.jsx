import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { InputFilter, LabelFilter } from './Filter.styled';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <LabelFilter>
      Find contacts by name
      <br />
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      ></InputFilter>
    </LabelFilter>
  );
};

// export const Filter = ({ value, onChange }) => (
//   <LabelFilter>
//     Find contacts by name
//     <br />
//     <InputFilter
//       type="text"
//       name="filter"
//       value={value}
//       onChange={onChange}
//     ></InputFilter>
//   </LabelFilter>
// );
