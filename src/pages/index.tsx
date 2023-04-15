import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Layout from "../components/Layout/Layout";
import { HeadFC } from "gatsby";
import Seo from "../components/Seo/Seo";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { Main } from "../components/Main/Main";

interface Interface {
  location: PageProps["location"];
}
const IndexPage = ({ location }: Interface) => {
  return (
    <Layout mode={location?.state?.mode}>
      <Provider store={store}>
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </Provider>
    </Layout>
  );
};
export const Head: HeadFC = () => (
  <Seo title="Home" description="Магазин мороженого" />
);
export default IndexPage;
