import React, { useState } from "react";
import AutoCarousel from "../ControlledCarousel";
import ReviewComponent from "./ReviewComponent";
import ReccomendedCarousel from "./ReccomendedCarousel";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import BNModal from "../BuyNowModal/BuyNowModal";
import "./CreateDetails.css";
const Reccomend = [
  {
    name: "Package Name",
    to: "/createdetails",
    src: "https://picsum.photos/200/280/?blur",
    rate: "4.7",
    price: 2499,
    discount: 2999,
    percent: 17,
    subheader: "Vendor: #WP45 Pack: #WP45",
  },
  {
    name: "Package Name",
    to: "/createdetails",
    src: "https://picsum.photos/200/280/?blur",
    rate: "4.7",
    price: 2499,
    discount: 2999,
    percent: 17,
    subheader: "Vendor: #WP45 Pack: #WP45",
  },

  {
    name: "Package Name",
    to: "/createdetails",
    src: "https://picsum.photos/200/280/?blur",
    rate: "4.7",
    price: 2499,
    discount: 2999,
    percent: 17,
    subheader: "Vendor: #WP45 Pack: #WP45",
  },
  {
    name: "Package Name",
    to: "/createdetails",
    src: "https://picsum.photos/200/280/?blur",
    rate: "4.7",
    price: 2499,
    discount: 2999,
    percent: 17,
    subheader: "Vendor: #WP45 Pack: #WP45",
  },

  {
    name: "Package Name",
    to: "/createdetails",
    src: "https://picsum.photos/200/280/?blur",
    rate: "4.7",
    price: 2499,
    discount: 2999,
    percent: 17,
    subheader: "Vendor: #WP45 Pack: #WP45",
  },
  {
    name: "Package Name",
    to: "/createdetails",
    src: "https://picsum.photos/200/280/?blur",
    rate: "4.7",
    price: 2499,
    discount: 2999,
    percent: 17,
    subheader: "Vendor: #WP45 Pack: #WP45",
  },

  {
    name: "Package Name",
    to: "/createdetails",
    src: "https://picsum.photos/200/280/?blur",
    rate: "4.7",
    price: 2499,
    discount: 2999,
    percent: 17,
    subheader: "Vendor: #WP45 Pack: #WP45",
  },
  {
    name: "Package Name",
    to: "/createdetails",
    src: "https://picsum.photos/200/280/?blur",
    rate: "4.7",
    price: 2499,
    discount: 2999,
    percent: 17,
    subheader: "Vendor: #WP45 Pack: #WP45",
  },
];

const Review = [
  {
    name: "Shamika Bapat",
    location: "Mumbai",
    rating: 4.0,
    body:
      "As the name suggests,every event is pocket friendly and up to the mark ❤️They leave no space behind for complaints. Available at any time of the day and make sure each and every service provided by them is carried out perfectly 😍 Excellent service and highly recommend for all types of events 🔥🔥🔥",
  },
  {
    name: "Shamika Bapat",
    location: "Mumbai",
    rating: 4.0,
    body:
      "As the name suggests,every event is pocket friendly and up to the mark ❤️They leave no space behind for complaints. Available at any time of the day and make sure each and every service provided by them is carried out perfectly 😍 Excellent service and highly recommend for all types of events 🔥🔥🔥",
  },
  {
    name: "Shamika Bapat",
    location: "Mumbai",
    rating: 4.0,
    body:
      "As the name suggests,every event is pocket friendly and up to the mark ❤️They leave no space behind for complaints. Available at any time of the day and make sure each and every service provided by them is carried out perfectly 😍 Excellent service and highly recommend for all types of events 🔥🔥🔥",
  },
  {
    name: "Shamika Bapat",
    location: "Mumbai",
    rating: 4.0,
    body:
      "As the name suggests,every event is pocket friendly and up to the mark ❤️They leave no space behind for complaints. Available at any time of the day and make sure each and every service provided by them is carried out perfectly 😍 Excellent service and highly recommend for all types of events 🔥🔥🔥",
  },
  {
    name: "Shamika Bapat",
    location: "Mumbai",
    rating: 4.0,
    body:
      "As the name suggests,every event is pocket friendly and up to the mark ❤️They leave no space behind for complaints. Available at any time of the day and make sure each and every service provided by them is carried out perfectly 😍 Excellent service and highly recommend for all types of events 🔥🔥🔥",
  },
  {
    name: "Shamika Bapat",
    location: "Mumbai",
    rating: 4.0,
    body:
      "As the name suggests,every event is pocket friendly and up to the mark ❤️They leave no space behind for complaints. Available at any time of the day and make sure each and every service provided by them is carried out perfectly 😍 Excellent service and highly recommend for all types of events 🔥🔥🔥",
  },
  {
    name: "Shamika Bapat",
    location: "Mumbai",
    rating: 4.0,
    body:
      "As the name suggests,every event is pocket friendly and up to the mark ❤️They leave no space behind for complaints. Available at any time of the day and make sure each and every service provided by them is carried out perfectly 😍 Excellent service and highly recommend for all types of events 🔥🔥🔥",
  },
  {
    name: "Shamika Bapat",
    location: "Mumbai",
    rating: 4.0,
    body:
      "As the name suggests,every event is pocket friendly and up to the mark ❤️They leave no space behind for complaints. Available at any time of the day and make sure each and every service provided by them is carried out perfectly 😍 Excellent service and highly recommend for all types of events 🔥🔥🔥",
  },
];

const Img_list = [
  {
    src: "https://on-basesuites.com/wp-content/uploads/2017/09/400x500.png",
  },
  {
    src: "https://on-basesuites.com/wp-content/uploads/2017/09/400x500.png",
  },
];

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

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

const Details = {
  name: "Package Name",
  price: 2499,
  discount: 2999,
  percent: 17,
  discription:
    "A lovely romantic date set up for your loved one, with food and lots to talk.",
  star: 3.7,
  ratings: 44336,
  reviwes: 3562,
  vendor: "#WP420",
  package: "#WP",
  inclusions: [
    "Custom Decoration",
    "Setup time - 2 hours",
    "100 normal two coloured balloons & ribbons on the ceiling",
    "2 star led toran (on rent basis)",
    "HAPPY 25 ANNIVERSARY Foil balloons",
    "20 printed pictures as per your requirement",
    "Sufficient rose petals and 10 heart shaped",
    "20 candles",
    "Half kg cake",
  ],
  note: [
    "The package has to be booked 3-4 days prior the day of occasion.",
    "Photographer is not included in the package",
  ],
};

const PocketDIYDetails = () => {
  const [modalShow, setModalShow] = useState(false);
  const classes = useStyles();
  return (
    <>
      <div className="container">
        <br />
        <h1 className="pkg_title col-md-4 display-5">{Details.name}</h1>

        <div className="row main">
          <div className="col-md-4 left">
            <br />
            <AutoCarousel Images={Img_list} />
            <br />

            <div className="text-center">
              <div className="row btn-gap">
                <div className="col-6 col-lg-6 btn-gap-pocket">
                  <button type="button" className="btn-pocket">
                    <AddCircleOutlineRoundedIcon /> to Pocket
                  </button>
                </div>
                <div className="col-6 col-lg-6 btn-gap-book">
                  <button
                    type="button"
                    className="btn-book"
                    onClick={() => setModalShow(true)}
                  >
                    <OfflineBoltIcon /> Book Now
                  </button>
                  <BNModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
              <br />
            </div>
          </div>
          <div className="col-md-8  right">
            <div>
              <br />
              <div className="row">
                <div className="col-6 col-md-8">
                  <h1 className="price">{Details.price}</h1>
                  <h5 className="discount">
                    <strike className="cut">{Details.discount}</strike>{" "}
                    {Details.percent}% off
                  </h5>
                </div>
                <div className="col-6 col-md-4">
                  <br />
                  <h5 className="verified">
                    <VerifiedUserIcon /> Pocket Verified
                  </h5>
                </div>
              </div>

              <br />
              <h7>{Details.discription}</h7>

              <br />
              <br />
              <div className="row">
                <div className="col-md-3 ratings">
                  <h4>
                    {Details.star} <StarRoundedIcon />
                    {/* <StarHalfRoundedIcon /> */}
                  </h4>
                </div>
                <div className="col-md-5">
                  <h6 className="count">
                    {Details.ratings} Ratings & {Details.reviwes} Reviews
                  </h6>
                </div>
                <br />
                <br />
              </div>
              <strong>
                <div className="row">
                  <div className="col-6 col-lg-3">
                    <h7>Vendor: {Details.vendor}</h7>
                  </div>
                  <div className="col-6 col-lg-3">
                    <h7>Package: {Details.package}</h7>
                  </div>
                </div>
              </strong>

              <br />
              <br />
              {/* <h4>Highlights</h4>
            <ul classname="list">
              <li>Setup time - 2hrs</li>
              <li>
                Transport-free for 25 km-Add ₹500-1000 max for upto max 40km
              </li>
            </ul> */}
              <br />
              <h4>Inclusions:</h4>
              <ul>
                {Details.inclusions.map((item) => {
                  return <li>{item}</li>;
                })}
                <br />
                <li>Photographer:</li>
                <br />
                <li>
                  Professional photographer provided for 30-40 mins <br />
                  ▪Candids and portrait specialist <br />
                  ▪30 edited images will be transferred and all the raw images
                  will be given within 7 working days <br />
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>

        <h4>Note:</h4>
        <ul>
          {Details.note.map((item) => {
            return (
              <li>
                <p>{item}</p>
              </li>
            );
          })}
          <br />
        </ul>
        <br />
        {/* ------recomended start------ */}
        <div className="reviews">
          <h3>Pocketer's Choice</h3>
        </div>
        <br />

        <ReccomendedCarousel Reccomend={Reccomend} />
        {/* ------recomended end------ */}

        {/* ------reviews start------ */}
        <div className="reviews">
          <h3>Ratings & Reviews</h3>
          <br />
          <br />
          <div className="col-6 col-12 col-md-5">
            <div className="row">
              <div className="col-4 col-md-4">
                <h1 className="review-title">
                  3.7 <StarRoundedIcon />{" "}
                </h1>
              </div>
              <div className="col-8 col-md-8">
                <div className={classes.root} className="">
                  <br />
                  <BorderLinearProgress variant="determinate" value={74} />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <ReviewComponent Review={Review} />
        </div>
        <br />

        {/* 
        {Review.map((info) => {
        return (
            <div className="row">
              <Reviews info={info} />
            </div>
        );
      })} */}

        {/* ------reviews end------ */}

        <br />
        <br />

        <h4>Terms & conditions:</h4>
        <ul>
          <li>
            <p>
              You need to make sure power supply is available for the
              decorations and activities to happen on time <br />
              ▪This is a home decoration so you need to empty the space for the
              decorators to do their work for atleast 2 hours. <br />
              ▪We use masking tape to stick the balloons which should not be a
              problem for your celeing or walls and it has to be taken care by
              you. We aren't responsible for any damage done due to the tape.{" "}
              <br />
              ▪This package provides perfect decoration at a minimal budget. It
              will suit a moderate celebration party <br />
              ▪Basic things like chair, ladder, stool must be provided by the
              customer for smooth and hassle free work <br />
            </p>
          </li>

          <br />
        </ul>
        <br />
      </div>
    </>
  );
};

export default PocketDIYDetails;
