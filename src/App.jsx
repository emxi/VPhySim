import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, simulateRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import SimulateLayout from './layouts/SimulateLayout';
// import { ToastContainer } from 'react-toastify';

export default function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
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

                    {simulateRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = SimulateLayout;

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

                    {/* {privateRoutes.map((route, index) => {
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
                                    <AuthLayout>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </AuthLayout>
                                }
                            />
                        );
                    })} */}
                </Routes>
                {/* <ToastContainer hideProgressBar /> */}
            </div>
        </Router>
    );
}
