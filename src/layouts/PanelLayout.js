import { Grid, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Navbar from 'components/navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Media from 'pages/media/Media';
import Sidebar from 'components/sidebar/Sidebar';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
    overflow: 'hidden',
  },
  contentWrapper: {
    width: '100%',
    overflow: 'auto',
    padding: theme.spacing(3, 2),
    marginTop: 80,
    [theme.breakpoints.up('md')]: {
      marginRight: props => (props.sidebarOpen ? 255 : 0),
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  navbarShift: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('md')]: {
      width: props => (props.sidebarOpen ? 'calc(100% - 255px)' : '100%'),
    },
  },
}));

const PanelLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const classes = useStyles({ sidebarOpen });

  return (
    <Grid container wrap="nowrap" className={classes.container}>
      <Navbar
        className={classes.navbarShift}
        switchSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <Sidebar open={sidebarOpen} />

      <Grid item className={classes.contentWrapper}>
        <Switch>
          <Route path="/panel/media" component={Media} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default PanelLayout;
