import * as React from "react";
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from "gatsby-plugin-prismic-previews";
import { linkResolver } from "../linkResolver";
import EntryPage from "../templates/entry";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <>
      <h1>404 Page</h1>
      <p>404!</p>
      <hr />
      <p>
        <Link to="/">index</Link>
      </p>
    </>
  );
};

export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      entry: EntryPage,
    }),
  },
]);
