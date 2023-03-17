import React from 'react'
import debounce from 'lodash.debounce';

import styles from './Search.module.scss'
import { SearchContext } from '../../App';

import searchIcon from '../../img/search-icon.svg';
import clearButton from '../../img/clear-button.svg';

const Search = () => {
    const [value, setValue] = React.useState('');
    const {setSearchValue} = React.useContext(SearchContext);
    const inputRef = React.useRef();

    const onClickClear = () => {
        setSearchValue('');
        setValue('');
        inputRef.current.focus();
    };

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 250),
        [],
    );
    
    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    return (
        <div className={styles.root}>
            <img className={styles.icon} src={searchIcon} alt="search"></img>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input}
                placeholder="Поиск пиццы..."
            />
            {value && (
                <img className={styles.clear} onClick={onClickClear} src={clearButton} alt="clear"></img>
            )}
        </div>
    );
};

export default Search; 