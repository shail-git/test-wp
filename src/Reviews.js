import React from "react";
import "./Reviews.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import StarRoundedIcon from "@material-ui/icons/StarRounded";


const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


const Reviews = ({ info }) => {
  const classes = useStyles();

  return (
    <>
    
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <h7>{info.name}, {info.location}</h7>
            </Typography>
            <Typography variant="h5" component="h2">
              <h3 className="review-star">
                {info.rating} <StarRoundedIcon />
              </h3>
            </Typography>
            {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
            <Typography variant="body2" component="p">
              <p className="review-body">
              {info.body}
              </p>

              <h7 className="review-ver">
                <VerifiedUserIcon /> Verified Pocket User
              </h7>
            </Typography>
          </CardContent>
        </Card>
        <br/>
      
      </div>
      
    </>
  );
};

export default Reviews;
