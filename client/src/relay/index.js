import React from 'react';
import {
  QueryRenderer,
  createFragmentContainer,
  commitMutation,
  createRefetchContainer,
  createPaginationContainer,
} from 'react-relay';

import environment from './environment';

export const queryRenderer = (rootQuery, variables, mapResultToProps = props => props) =>
  Component => class RelayRoot extends React.Component {
    static displayName = `RelayRoot(${Component.displayName})`

    render() {

      const vars = typeof variables === 'function' ? variables(this.props) : variables;

      return (
        <QueryRenderer
          environment={environment}
          query={rootQuery}
          variables={vars}
          render={({ error, props }) => {
            if (!props && !error) {
              return null;
            }

            return (
              <Component
                {...mapResultToProps(props)}
                {...this.props}
                error={error}
              />
            );
          }}
        />
      );
  }
};

export const fragmentContainer = (query, mapResultToProps = props => props) => Component => createFragmentContainer(
  props => <Component {...mapResultToProps(props)} />,
  query,
);

export const refetchContainer = (renderVariables, query) => Component => createRefetchContainer(
  Component,
  renderVariables,
  query,
);

export const paginationContainer = (query, connectionConfig) => Component => createPaginationContainer(
  Component,
  query,
  connectionConfig,
);

export const createMutation = (
  mutation,
  variables,
  optimisticResponse,
  optimisticUpdater,
  updater,
) => new Promise((res, rej) => {

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (result, errors) => {
        if (errors) {
          return rej(errors);
        }

        res(result);
      },
      onError: rej,
      optimisticResponse,
      optimisticUpdater,
      updater,
    },
  );
});
