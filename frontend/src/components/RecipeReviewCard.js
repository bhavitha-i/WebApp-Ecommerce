import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import trimWords from 'trim-words';

export default function RecipeReviewCard(props) {
  var base64Icon = `${props.product.photo}`;
  console.log(base64Icon)
  return (
    <Card sx={{ minWidth:250, maxWidth: 275, maxHeight:275 }}>
      <CardMedia
        component="img"
        height="140"
        image={base64Icon}
        alt="green iguana"
      />
        <Link underline="none" href={`/product/${props.product._id}`} variant="body2">
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
        {trimWords(props.product.name, 3, '...')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         { `price:  ${props.product.price}
          quantity: ${props.product.price}`
          }
        </Typography>
      </CardContent>
</Link>
      <CardActions>
      
      
    
        <Button size="small">Add to Cart</Button>
        
      </CardActions>
    </Card>
  );
}
