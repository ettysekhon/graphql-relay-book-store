import React from 'react';
import PropTypes from 'prop-types';

const Author = ({ author }) => (
  <div>{author.id}</div>
);

const Authors = ({ authors }) => (
  authors.map(author => <Author key={author.id} author={author} />)
);

Authors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
};

export default Authors;
