import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handeler = setTimeout(() => setDebounceValue(value), delay);
        return () => {
            clearTimeout(handeler);
        };
        // eslint-disable-next-line
    }, [value]);
    return debounceValue;
}
useDebounce.propTypes = {
    value: PropTypes.array.isRequired,
    delay: PropTypes.number,
};
export default useDebounce;
