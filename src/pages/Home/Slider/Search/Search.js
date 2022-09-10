import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popper from '~/components/Popper';
import search from '~/sevieces/searchSeviece';
import { useDebounce } from '~/hooks';
import AccountItem from '~/components/AccountItem';
import config from '~/config';

const cx = classNames.bind(styles);
function Search() {
    const inputElement = useRef();
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResults([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const results = await search(debounce);
            setSearchResults(results);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);
    const handleResult = () => {
        setShowResults(false);
    };
    const handleToProfile = () => {
        setSearchResults([]);
        setSearchValue('');
    };
    return (
        <HeadlessTippy
            visible={showResults && searchResults.length > 0}
            interactive={true}
            appendTo={() => document.body}
            render={(attrs) => (
                <div className={cx('search-tippy')} tabIndex="-1" {...attrs}>
                    <Popper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result} onClick={handleToProfile} />
                        ))}
                    </Popper>
                </div>
            )}
            onClickOutside={handleResult}
        >
            <div className={cx('search-box')}>
                <input
                    ref={inputElement}
                    value={searchValue.trim() && searchValue}
                    spellCheck={false}
                    type="text"
                    placeholder="Search"
                    className={cx('search__input')}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onClick={() => setShowResults(true)}
                />
                {!!searchValue.trim() && !!searchValue && !loading && (
                    <button
                        className={cx('search-button')}
                        onClick={() => {
                            setSearchValue('');
                            inputElement.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {!!searchValue.trim() && !!loading && (
                    <button className={cx('search__loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}

                <Link to={config.routes.Search}>
                    <button className={cx('search-button')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </Link>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
