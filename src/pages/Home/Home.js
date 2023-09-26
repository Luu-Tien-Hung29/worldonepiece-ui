/* eslint-disable react-hooks/exhaustive-deps */
import Slider from './Slider';
import Gang from './Gang';
import Shop from './Shop';
import Comic from './Comic';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '~/components/store/action';
import { userState } from '~/components/store/selector';

function Home() {
    const dispatch = useDispatch();
    const user = useSelector(userState);
    useEffect(() => {
        dispatch(getUser());
    }, []);
    console.log('user:::::', user);
    return (
        <div className="content">
            <Slider />
            <Gang />
            <Shop />
            <Comic />
        </div>
    );
}

export default Home;
