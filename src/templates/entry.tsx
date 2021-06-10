import React from "react";
import { graphql, Link, PageProps } from "gatsby";

export const query = graphql`
  query EntryDetail($id: String!) {
    prismicEntry(id: { eq: $id }) {
      data {
        body {
          html
        }
      }
      uid
    }
  }
`;

interface IEntryPageProps extends PageProps {
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

export default EntryPage;
