import React from 'react';
import Layout from '../components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Payment } from '../components/Payment/Payment';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { HeadFC } from 'gatsby';
import Seo from '../components/Seo/Seo';

interface Interface {
    location: PageProps['location'];
}

const PaymentPage = ({ location }: Interface) => {
    // const { state = {} } = location;
    // const { mode } = state;

    return (
        <Layout mode={location?.state?.mode}>
            <Provider store={store}>
                <ErrorBoundary>
                    <Payment />
                </ErrorBoundary>
            </Provider>
        </Layout>
    );
};
export const Head: HeadFC = () => (
    <Seo title="Payment" description="Доставка и оплата" />
);
export default PaymentPage;
