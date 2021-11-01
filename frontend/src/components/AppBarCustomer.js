/* eslint-disable no-unused-vars */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import strings from '../assets/strings';
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles';
import styles from '../assets/styles';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={styles.Header} color='primary'>
      <Toolbar style={styles.Toolbar}>
            
          <Typography  component="div" sx={{ flexGrow: 1 , fontSize:24}}>
            <Link 
              underline="none" 
              variant="h5" 
              color="inherit" 
              href="/customer/home"
              sx={{ fontSize: 24 }}>
            {strings.Common.websiteName}
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show number of products in cart" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              // aria-controls={mobileMenuId}
              // aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>


          {/* <Button color="secondary">{strings.Common.signup}</Button>
         <Button color="secondary">{strings.Common.signup}</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>

  );
}
