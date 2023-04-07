import { Backdrop, CircularProgress } from '@mui/material';

function Loading({ open, ...props }) {
    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
            <CircularProgress color="error" />
        </Backdrop>
    );
}

export default Loading;
