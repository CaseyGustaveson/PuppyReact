import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../slice/searchTermSlice';


const SearchBar = () => {
    const dispatch = useDispatch()

    return (
        <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
            onChange={e => dispatch(setSearchTerm(e.target.value))}
        />
    );
}

SearchBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    onSearchChange: PropTypes.func,
  };

export default SearchBar;