import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { linkResolver } from "../linkResolver";

export const query = graphql`
  query EntryDetail($id: String!) {
    prismicEntry(id: { eq: $id }) {
      _previewable
      data {
        body {
          html
        }
      }
      uid
    }
  }
`;

interface IEntryPageProps {
  data: any; // TODO: type
}
const EntryPage: React.FC<IEntryPageProps> = ({ data }) => {
  return (
    <>
      <h1>Entry Page: {data.prismicEntry.uid}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.prismicEntry.data.body.html }}
      ></div>
      <hr />
      <p>
        <Link to="/">index</Link>
      </p>
    </>
  );
};

export default withPrismicPreview(EntryPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
  },
]);
