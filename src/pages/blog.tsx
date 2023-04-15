import Layout from '../components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { HeadFC } from 'gatsby';
import Seo from '../components/Seo/Seo';
import React from 'react';
import { Blog } from '../components/Blog/Blog';

interface Interface {
    location: PageProps['location'];
}

const BlogPage = ({ location }: Interface) => {
    // const { state = {} } = location;
    // const { mode } = state;

    return (
        <Layout mode={location?.state?.mode}>
            <Provider store={store}>
                <ErrorBoundary>
                    <Blog />
                </ErrorBoundary>
            </Provider>
        </Layout>
    );
};
export const Head: HeadFC = () => (
    <Seo title="Blog" description="Блог" />
);
export default BlogPage;