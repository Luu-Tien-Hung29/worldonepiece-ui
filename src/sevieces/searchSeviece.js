import * as request from '~/untils/httpRequest';

const search = async (q, type = 'less') => {
    const res = await request.get('users/search', {
        params: {
            q: q,
            type: type,
        },
    });
    try {
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
search();
export default search;
