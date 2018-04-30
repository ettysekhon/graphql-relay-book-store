const styles = theme => ({
  container: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16
  }),
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh)',
    width: 'auto',
    backgroundColor: theme.palette.primary.main
  },
});

export default styles;
