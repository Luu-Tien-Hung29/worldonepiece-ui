import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { pulicPages } from '~/routes';
import DefaultLayout from '~/Layouts/DefaultLayout';
import SnackbarComponent from './components/SnackbarComponent';
import { useSelector } from 'react-redux';
import { isLoading, snackBar } from './components/store/selector';
import Loading from './components/Loading';
function App() {
    const runSnackBar = useSelector(snackBar);
    const loading = useSelector(isLoading);
    return (
        <Router>
            <div className="App">
                <Loading open={loading} />
                <SnackbarComponent
                    runSnackBar={runSnackBar.open}
                    content={runSnackBar.message}
                    severity={runSnackBar.severity}
                />
                <Routes>
                    {pulicPages.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
