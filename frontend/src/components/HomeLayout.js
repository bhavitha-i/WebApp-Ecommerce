/* eslint-disable no-unused-vars */
import * as React from 'react';
import styles from '../assets/styles';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';



export default function HomeLayout() {
    return (

    <div maxWidth="sm" style={styles.HomeBackground}>
        <div style={{ position:"absolute",top:"50%",left:"50%"}}>
            <Button href="customer/signup" variant="contained" color="secondary">Sign Up</Button>
        </div>
    </div>
);
}