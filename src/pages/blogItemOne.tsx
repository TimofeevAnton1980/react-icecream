import Layout from '../components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { HeadFC } from 'gatsby';
import Seo from '../components/Seo/Seo';
import React from 'react';
import { BlogItemOne } from '../components/BlogItemOne/BlogItemOne';

interface Interface {
    location: PageProps['location'];
}

const blogItemOne = ({ location }: Interface) => {
    // const { state = {} } = location;
    // const { mode } = state;
    return (
        <Layout mode={location?.state?.mode}>
            <Provider store={store}>
                <ErrorBoundary>
                    <BlogItemOne blogDate={location?.state?.blogDate} blogName={location?.state?.blogName}/>
                </ErrorBoundary>
            </Provider>
        </Layout>
    );
};
export const Head: HeadFC = () => (
    <Seo title="Blog Item" description="Новость блога" />
);
export default blogItemOne;