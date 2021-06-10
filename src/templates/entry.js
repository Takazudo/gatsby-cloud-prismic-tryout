import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query EntryDetail($uid: String!) {
    prismicEntry(id: { eq: $uid }) {
      data {
        body {
          html
        }
      }
    }
  }
`;
const EntryPage = ({ data }) => {
  console.log(data);

  return (
    <>
      <h1>Entry!</h1>
      <p>boom!</p>
    </>
  );
};

export default EntryPage;
