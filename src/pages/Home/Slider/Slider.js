import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { faAnchor, faBookDead, faJedi, faLemon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '~/assets/images';
import Search from './Search';
import config from '~/config';

const cx = classNames.bind(styles);

function Slider() {
    const itemBoxSliders = [
        {
            title: 'Harbor',
            icon: <FontAwesomeIcon icon={faAnchor} />,
            to: '/',
        },
        {
            title: 'Model',
            icon: <FontAwesomeIcon icon={faJedi} />,
            to: config.routes.Model,
        },
        {
            title: 'Dark fruit',
            icon: <FontAwesomeIcon icon={faLemon} />,
            to: config.routes.Home,
        },
        {
            title: 'Comic',
            icon: <FontAwesomeIcon icon={faBookDead} />,
            to: config.routes.Comic,
        },
    ];
    return (
        <div className={cx('slider')}>
            <img className={cx('slider-img')} src={images.slider} alt="ảnh slider" />
            <div className={cx('slider-search')}>
                <h2 className={cx('search-header')}>Search for what you want</h2>
                <h3 className={cx('search-description')}>Check our best promotions</h3>
                <div className={cx('search')}>
                    <Search />
                </div>

                <div className={cx('box', 'gird', 'row')}>
                    {itemBoxSliders.map((itemBoxSlider, index) => (
                        <div key={index} className={cx('box-item', 'col', 'l-1 ')}>
                            <Link to={itemBoxSlider.to}>
                                <div className={cx('box-icon')}>
                                    <i>{itemBoxSlider.icon}</i>
                                    <p>{itemBoxSlider.title}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider;
