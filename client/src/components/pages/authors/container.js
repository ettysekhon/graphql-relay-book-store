import { compose } from 'redux'
import Component from './component';
import { queryRenderer } from '../../../relay';
import { graphql } from 'react-relay';

const query = graphql`
  query containerQuery {
    authors {
      edges {
        node {
          id
        }
      }
    }
  }
`

const mapResultToProps = props => {
  const edges = (props && props.authors && props.authors.edges && props.authors.edges) || [];
  const authors = edges.map(e => e.node);
  return { authors };
};

const withData = queryRenderer(
  query,
  null,
  mapResultToProps
);

const container = compose(
  withData
)(Component);

export default container;
