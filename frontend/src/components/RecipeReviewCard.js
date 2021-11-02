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

export default function RecipeReviewCard(props) {
  var base64Icon = `${props.product.photo}`;
  console.log(base64Icon)
  return (
    <Card sx={{ minWidth:250, maxWidth:275, maxHeight:300 }}>
      <CardMedia
        component="img"
        height="140"
        image={base64Icon}
        alt="product Image"
      />
      
      <CardContent  sx={{ flexGrow: 1 }}>
        <Typography gutterBottom >
          <Link underline="none" href={`/product/${props.product._id}`} variant="h6" color="inherit" >
            {trimWords(props.product.name, 3, '...')}
          </Link>
        </Typography>
        <Typography variant="h5" color="secondary" style={styles.ProductPrice}>
         $ {props.product.price}
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button style={styles.CardButton} size ="small" variant="outlined" color="secondary">Add to Cart</Button>
        
      </CardActions>
    </Card>
  );
}
