import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import trimWords from 'trim-words';
import styles from '../assets/styles';

export default function AddressCard(props) {

  return (
    <Card sx={{ minWidth:150, maxWidth:200, maxHeight:200 }}>
      {console.log(props, " -- pop")}
      <CardContent  sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
          {props.address.firstName} {props.address.lastName}
        </Typography>

        <Typography variant="body2"> {props.address.street1} </Typography>
        <Typography variant="body2"> {props.address.street2} </Typography>
        <Typography variant="body2">   {props.address.city}, {props.address.state} </Typography>
        <Typography variant="body2">  {props.address.zipcode} - {props.country} </Typography>
       

      </CardContent>
      <CardActions>
        <Button style={styles.CardButton} size ="small" variant="outlined" color="secondary">Edit </Button>
        <Button style={styles.CardButton} size ="small" variant="outlined" color="secondary">Delete</Button>
        
      </CardActions>
    </Card>
  );
}
