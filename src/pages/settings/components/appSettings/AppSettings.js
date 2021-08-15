import { Button, Grid } from '@material-ui/core';
import { useUserDispatch } from 'contexts/UserContext';
import { useTranslation } from 'react-i18next';
import { logout } from 'reducers/UserReducer';
import Langs from './components/Langs';
import Themes from './components/Themes';

const AppSettings = () => {
  const { t } = useTranslation();

  const dispatch = useUserDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Themes />
      </Grid>

      <Grid item>
        <Langs />
      </Grid>

      <Grid item>
        <Button onClick={handleLogout} color="primary" variant="contained">
          {t('setting.logout')}
        </Button>
      </Grid>
    </Grid>
  );
};

export default AppSettings;
