import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import css from 'components/Filter/Filter.module.css';

export function Filter({ isFilter }) {
  const dispatch = useDispatch();
  const changeInput = e => {
    const wordFilter = e.currentTarget.value.trim();
    dispatch(addFilter(wordFilter.toLowerCase()));
  };
  return (
    <div className={css.filter}>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" onChange={changeInput} />
    </div>
  );
}

