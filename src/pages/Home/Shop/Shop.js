import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import BoxHeadComponent from '~/components/BoxHeadComponent';
import { useStore } from '~/hooks';
import { actions } from '~/components/store';
import ButtonFoot from '../ButtonFoot';

const cx = classNames.bind(styles);
function Shop() {
    const itemShops = [
        {
            images: images.modelLuffy,
            title: 'model luffy',
            description: 'height: 30cm',
            price: '$40',
        },
        {
            images: images.modelZoro,
            title: 'model zoro',
            description: 'height: 25cm',
            price: '$35',
        },
        {
            images: images.modelSabo,
            title: 'model sabo',
            description: 'height: 40cm',
            price: '$60',
        },
        {
            images: images.modelEnel,
            title: 'model enel',
            description: 'height: 40cm',
            price: '$55',
        },
    ];
    const [state, dispatch] = useStore();
    return (
        <div className={cx('wrapper')}>
            <BoxHeadComponent title="from to Shop" className="mg-top" />
            <div className={cx('conten__shop', 'gird')}>
                <div className={cx('shop__section', 'row')}>
                    {itemShops.map((itemShop, index) => (
                        <div key={index} className={cx('shop__iteam', 'col', 'l-3 ')}>
                            <div className={cx('shop__img')}>
                                <img src={itemShop.images} className={cx('shop__img--img')} alt="" />
                                <button
                                    onClick={() => dispatch(actions.totalItemCart(state.numberShop))}
                                    className={cx('shop--add-cart')}
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    add to cart
                                </button>
                            </div>
                            <div className={cx('shop__description')}>
                                <h5 className={cx('shop__desciption--head')}>{itemShop.title}</h5>
                                <h6 className={cx('head__description')}>{itemShop.description}</h6>
                                <p>{itemShop.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <ButtonFoot title="More products" />
            </div>
        </div>
    );
}

export default Shop;
