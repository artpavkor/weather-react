import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../services/apiService';

const SearchHeader = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?languageCode=ru&countryIds=UA,EE,LV,LT,BY&sort=name&offset=0&limit=5&minPopulation=1000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const data = await response.json();

      return {
        options: data.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name} ${city.countryCode}`,
        })),
      };
    } catch (err) {
      console.error(err);
      return { options: [] };
    }
  };

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
  return (
    <AsyncPaginate
      styles={customStyles}
      placeholder="Поиск"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default SearchHeader;
