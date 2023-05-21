import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Layout from '../components/Layout/Layout';
import { CatalogContainer } from '../containers/CatalogContainer/CatalogContainer';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { HeadFC } from 'gatsby';
import Seo from '../components/Seo/Seo';

interface Interface {
    location: PageProps['location'];
}

const Catalog2 = ({ location }: Interface) => {
    return (
        <Layout mode={location?.state?.mode}>
            <Provider store={store}>
                <ErrorBoundary>
                    <CatalogContainer
                        productIdHit={location?.state?.productIdHit}
                        productIdsStock={location?.state?.productIdsStock}
                    />
                </ErrorBoundary>
            </Provider>
        </Layout>
    );
};
export const Head: HeadFC = () => (
    <Seo title="Catalog2" description="Каталог товаров" />
);
export default Catalog2;
