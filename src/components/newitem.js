import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
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


function NewItem(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        {/* <CardMedia
          className={classes.media}
          image='https://s3-us-west-1.amazonaws.com/shoppal/juice.jpg'
          // image="https://s3-us-west-1.amazonaws.com/shoppal/addbutton.png"
          title="Add New Item"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="headline" component="h4">
            Add new Item
          </Typography>
          <Typography component="p">
            <p>Store: </p>
            <p>Item: </p>
            <p>QTY: </p>
            <p>Type: </p>

          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
            <AddIcon />
          </Button>
          {/* <Button size="small" color="primary">
            Add to List
          </Button> */}
          {/* <Button size="small" color="primary">
            Learn More
          </Button> */}
        </CardActions>
      </Card>
    </div>
  );
}

NewItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewItem);






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
