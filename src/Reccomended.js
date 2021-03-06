import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import { red } from "@material-ui/core/colors";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./Recomended.css";


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

const Reccomended = ({info}) => {

    const classes = useStyles();
    return(
          <div className="col-md-12" >
            <Card className={classes.root}>
              {/* <div className="row">
                <div className="col-9 col-md-9">
                  <CardHeader
                    title={info.name}
                    subheader={info.subheader}
                  />
                </div>
                <div className="col-3 col-md-3 text-right">
                  <h1 className="ver">
                    <VerifiedUserIcon />
                  </h1>
                </div>
              </div> */}

              <CardMedia
                className={classes.media}
                image={info.src}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2"  component="p">
                <div className="row">
                <div className="col-12 col-md-9">
                  <h3 className="name">{info.name}{"  "}<VerifiedUserIcon/></h3>
                </div>
                {/* <div className="col-1 col-md-3 tick">
                  <h5 className="text-center">
                    <VerifiedUserIcon/>{" "}
                  </h5>
                </div> */}
              </div>
              <div className="row">
                <div className="col-md-12">
                <h5 className="pr">₹{info.price}</h5>
                  <h7 className="dis">
                  <strike className="cut">₹{info.discount}</strike> {info.percent}% off
                  </h7>
                </div>
              </div>
                </Typography>
              </CardContent>
            </Card>
            <br/>
          </div>
    )
}

export default Reccomended;