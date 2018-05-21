import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const axios = require('axios')

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

// function Item(props) {
class Item extends React.Component<Props> {
	constructor(props) {
		super(props);
    this.state = {
      store: this.props.item.store,
      item: this.props.item.item,
      quantity: this.props.item.quantity,
      type: this.props.item.type,
      exists: true,
      wait: false
    };
    this._modifyQuantity = this._modifyQuantity.bind(this);
  }

  _modifyQuantity(add) {
    let newQuantity = !!add ? ++this.state.quantity : --this.state.quantity
    if (newQuantity <= 0) {
      newQuantity = 0;
    }
    if (!this.state.wait) {
      const context = this;
      setTimeout(() => {
        alert(this.state.quantity);
        context.setState({wait: false});
        context.props.modifyQuantityServer(this.props.item.itemId, this.state.quantity)
      }, 1000);
    }
    this.setState({
      quantity: newQuantity,
      exists: true,
      wait: true,
    })
  }

  render() {
    const { classes, item } = this.props;

    let minusOne = this.state.exists ?  'Remove One' : 'Delete Item'

    let imageUrl = 'https://s3-us-west-1.amazonaws.com/shoppal/bowser.jpg';
      if (this.state.type === 'meat') {
        imageUrl = 'https://s3-us-west-1.amazonaws.com/shoppal/meat.png'
      } else if (this.state.type === 'dessert') {
        imageUrl = 'https://s3-us-west-1.amazonaws.com/shoppal/dessert.png'
      } else if (this.state.type === 'pastry') {
        imageUrl = 'https://s3-us-west-1.amazonaws.com/shoppal/bread.jpg'
      } else if (this.state.type === 'beverage') {
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
              {this.state.item}
            </Typography>
            <Typography component="p">
              <p><b>Store:</b> {this.state.store}</p>
              <p><b>Quantity:</b> {this.state.quantity}</p>
              <p><b>Who Wants:</b> Oliver</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => this._modifyQuantity(true)} size="small" color="primary">
              Add One
            </Button>
            <Button onClick={() => this._modifyQuantity(false)} size="small" color="primary">
              {minusOne}
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}


Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);
