import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { loadOptions } from '../../services/apiService';

const SearchHeader = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '5px',
      border: '1px solid #ccc',
      boxShadow: state.isFocused ? '0 0 0 3px #EFF5FF' : null,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#EFF5FF' : null,
      color: state.isFocused ? 'black' : null,
    }),
  };
  const loadingMessage = () => 'Загрузка...';
  const optionsMessage = () =>
    'Поиск по городам осуществляется только для стран с геокодами UA, EE, LV, LT, BY, PL. Для поиска города, не входящего в этот список, вам необходимо использовать расширенный поиск.';
  return (
    <AsyncPaginate
      styles={customStyles}
      placeholder="Поиск"
      debounceTimeout={600}
      value={search}
      loadingMessage={loadingMessage}
      onChange={handleOnChange}
      noOptionsMessage={optionsMessage}
      defaultAdditional={'asdas'}
      loadOptions={loadOptions}
    />
  );
};

export default SearchHeader;
