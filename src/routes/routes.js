import { Home, Comic, Login, Register, Model, Shop, WatchAnime, Search } from '~/pages';
import OnlyHeaderLayout from '~/Layouts/OnlyHeaderLayout';
import config from '~/config';
const pulicPages = [
    {
        path: config.routes.Home,
        component: Home,
    },
    {
        path: config.routes.Comic,
        component: Comic,
    },
    {
        path: config.routes.Login,
        component: Login,
        layout: OnlyHeaderLayout,
    },
    {
        path: config.routes.Register,
        component: Register,
        layout: OnlyHeaderLayout,
    },
    {
        path: config.routes.Model,
        component: Model,
    },
    {
        path: config.routes.Shop,
        component: Shop,
    },
    {
        path: config.routes.Search,
        component: Search,
    },
    {
        path: config.routes.WatchAnime,
        component: WatchAnime,
    },
];
const privatePages = {};
export { pulicPages, privatePages };
