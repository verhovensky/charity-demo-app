import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Pressable, TextInput} from 'react-native';
import {useRef, useState} from 'react';
import style from './style';
import {scalefontSize} from '../../styles/scale';
import PropTypes from 'prop-types';

const Search = props => {
  const textInputRef = useRef(null);
  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const [search, setSearch] = useState('');
  const handleSearch = value => {
    setSearch(value);
    props.onSearch(value);
  };

  return (
    <Pressable onPress={handleFocus} style={style.searchInputContainer}>
      <FontAwesomeIcon
        icon={faSearch}
        color="#25C0FF"
        size={scalefontSize(22)}
      />
      <TextInput
        value={search}
        onChangeText={value => handleSearch(value)}
        ref={textInputRef}
        style={style.searchInput}
        placeholder="Search"
      />
    </Pressable>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  onSearch: () => {},
  placeholder: 'Search',
};

export default Search;
