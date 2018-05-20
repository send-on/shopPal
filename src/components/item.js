import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

require('../css/item.css');

const styles = {
  card: {
    maxWidth: 200,
    height: 330,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function Item(props) {
  const { classes, item } = props;
  let imageUrl = 'https://s3-us-west-1.amazonaws.com/shoppal/bowser.jpg';
    if (item.type === 'meat') {
      imageUrl = 'https://s3-us-west-1.amazonaws.com/shoppal/meat.png'
    } else if (item.type === 'dessert') {
      imageUrl = 'https://s3-us-west-1.amazonaws.com/shoppal/dessert.png'
    } else if (item.type === 'pastry') {
      imageUrl = 'https://s3-us-west-1.amazonaws.com/shoppal/bread.jpg'
    } else if (item.type === 'beverage') {
      imageUrl = 'https://s3-us-west-1.amazonaws.com/shoppal/juice.jpg'
    }

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {item.item}
          </Typography>
          <Typography component="p">
            <p><b>Store:</b> {item.store}</p>
            <p><b>Quantity:</b> 5</p>
            <p><b>Who Wants:</b> Oliver</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Add One
          </Button>
          <Button size="small" color="primary">
            Minus One
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);






//
//
//
//
// import React from 'react';
// import ReactDOM from 'react-dom';
//
//
//
// const Item = ({ item }) => (
//   <div className="item">
//     <div className="item-container">
//       {item.id}{item.store}{item.item}
//     </div>
//   </div>
// )
// module.exports = Item
