import Layout from '../components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { HeadFC } from 'gatsby';
import Seo from '../components/Seo/Seo';
import React from 'react';
import { Promotion } from '../components/Promotion/Promotion';

interface Interface {
    location: PageProps['location'];
}

const PromotionPage = ({ location }: Interface) => {
    return (
        <Layout mode={location?.state?.mode}>
            <Provider store={store}>
                <ErrorBoundary>
                    <Promotion />
                </ErrorBoundary>
            </Provider>
        </Layout>
    );
};
export const Head: HeadFC = () => <Seo title="Promotion" description="Акция" />;
export default PromotionPage;
