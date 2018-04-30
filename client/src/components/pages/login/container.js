import { compose } from 'redux'
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles'

import styles from './styles';
import Component from './component';

const mapDispatchToProps = ({ auth: { login }}) => ({
  login: () => login(),
});

const container = compose(
  connect(null, mapDispatchToProps),
  withStyles(styles)
)(Component);

export default container;
