import React from "react";
import { graphql, Link, PageProps } from "gatsby";

export const query = graphql`
  query TopPage {
    allPrismicEntry {
      nodes {
        uid
      }
    }
  }
`;

interface IIndexPageProps extends PageProps {
  data: any; // TODO: type
}
const IndexPage: React.FC<IIndexPageProps> = ({ data }) => (
  <main>
    <title>Home Page</title>
    <h1>Entries</h1>
    <ul>
      {data.allPrismicEntry.nodes.map((node) => {
        const href = `/entry/${node.uid}`;
        return (
          <li key={node.uid}>
            <Link to={href}>{href}</Link>
          </li>
        );
      })}
    </ul>
  </main>
);

export default IndexPage;
