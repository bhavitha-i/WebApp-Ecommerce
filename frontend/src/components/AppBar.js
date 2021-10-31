import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import strings from '../assets/strings';
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles';
import styles from '../assets/styles';
import { Link } from 'react-router-dom';


export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={styles.Header} color='primary'>
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            {strings.Common.websiteName}
          </Typography>
          
          <Link to="/vendor/login">
                <Button color="secondary">{strings.Common.login}</Button>
            </Link>

            <Link to="/vendor/signup">
                <Button color="secondary">{strings.Common.signup}</Button>
            </Link>

        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>

  );
}
