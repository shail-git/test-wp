import React from "react";
import AutoCarousel from "./ExpControlledCarousel";
import "./ExploreDetails.css";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ReccomendedCarousel from "./ReccomendedCarousel";
import ReviewComponent from "./ReviewComponent";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkIcon from "@material-ui/icons/Link";
import { Button } from "@material-ui/core";
import ItineraryComponent from "./ItineraryComponent";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Itinerary = [
  {
    day: "Day 1",
    loc: "Delhi",
    points: [
      "After breakfast",
      "Check-out from hotel.",
      "Proceed to Qutub minar.",
      "Enroute Lunch will be provided. Further visit India Gate & Rastrapati Bhawan Delhi.",
      "After lunch then You are free to visit Mall Road by walking from the bus point.",
      "Proceed for Overnight journey to Manali.",
    ],
  },
  {
    day: "Day 2",
    loc: "Delhi",
    points: [
      "After breakfast",
      "Check-out from hotel.",
      "Proceed to Qutub minar.",
      "Enroute Lunch will be provided. Further visit India Gate & Rastrapati Bhawan Delhi.",
      "After lunch then You are free to visit Mall Road by walking from the bus point.",
      "Proceed for Overnight journey to Manali.",
    ],
  },
  {
    day: "Day 3",
    loc: "Delhi",
    points: [
      "After breakfast",
      "Check-out from hotel.",
      "Proceed to Qutub minar.",
      "Enroute Lunch will be provided. Further visit India Gate & Rastrapati Bhawan Delhi.",
      "After lunch then You are free to visit Mall Road by walking from the bus point.",
      "Proceed for Overnight journey to Manali.",
    ],
  },
  {
    day: "Day 4",
    loc: "Delhi",
    points: [
      "After breakfast",
      "Check-out from hotel.",
      "Proceed to Qutub minar.",
      "Enroute Lunch will be provided. Further visit India Gate & Rastrapati Bhawan Delhi.",
      "After lunch then You are free to visit Mall Road by walking from the bus point.",
      "Proceed for Overnight journey to Manali.",
    ],
  },
  {
    day: "Day 5",
    loc: "Delhi",
    points: [
      "After breakfast",
      "Check-out from hotel.",
      "Proceed to Qutub minar.",
      "Enroute Lunch will be provided. Further visit India Gate & Rastrapati Bhawan Delhi.",
      "After lunch then You are free to visit Mall Road by walking from the bus point.",
      "Proceed for Overnight journey to Manali.",
    ],
  },
  {
    day: "Day 6",
    loc: "Delhi",
    points: [
      "After breakfast",
      "Check-out from hotel.",
      "Proceed to Qutub minar.",
      "Enroute Lunch will be provided. Further visit India Gate & Rastrapati Bhawan Delhi.",
      "After lunch then You are free to visit Mall Road by walking from the bus point.",
      "Proceed for Overnight journey to Manali.",
    ],
  },
  {
    day: "Day 7",
    loc: "Delhi",
    points: [
      "After breakfast",
      "Check-out from hotel.",
      "Proceed to Qutub minar.",
      "Enroute Lunch will be provided. Further visit India Gate & Rastrapati Bhawan Delhi.",
      "After lunch then You are free to visit Mall Road by walking from the bus point.",
      "Proceed for Overnight journey to Manali.",
    ],
  },
  {
    day: "Day 8",
    loc: "Delhi",
    points: [
      "After breakfast",
      "Check-out from hotel.",
      "Proceed to Qutub minar.",
      "Enroute Lunch will be provided. Further visit India Gate & Rastrapati Bhawan Delhi.",
      "After lunch then You are free to visit Mall Road by walking from the bus point.",
      "Proceed for Overnight journey to Manali.",
    ],
  },
];

const expDetails = {
  name: "Manali - Kasol- Amritsar Trip",
  star: 4.7,
  vendor: "#PB420",
  package: "#PB420",
  Highlights: [
    "DELHI:- Qutub Minar,IndiaGate,Rashtapati Bhavan & Akshardham Mandir",
    "KASOL :- Manikaran Temple, Kasol Market & Parvati Valley View etc.",
    "MANALI :- Hadimba Devi Temple and Mall Road,river rafting in kullu etc.",
  ],
  price: 21000,
  discount: 29000,
  percent: 17,
  about:
    " Actually it isn't about us. It's about you. Listening to what you want and then Crafting a Dream like Experience specially curated for YOU!",
  inclusions: [
    " Mumbai - Delhi by Flight.",
    " Delhi-Mumbai by Flight.",
    " Food Veg (Jain/Non-Jain) and Non-Veg will be provided.",
    " 2DJ nights.",
    " Rafting charges included.",
    " Accommodation on Triple sharing basis.",
    " Daily breakfast, Lunch and Dinner at all places",
    " itinerary given above.",
    " All transfers and sightseeing by vehicle.",
    " All toll taxes, parking charges, driver allowances.",
    " Overnight journey water will be provided in the bus.",
    " Comfortable 2x2&3x2 Non-Alc push back bus.",
    " Travel insurance up to 1 lakh.",
  ],
  exclusions: [
    "Any other meal not mentioned in price includes.",
    " Any other destination not mentioned in itinerary.",
    "Any Pony /Doli Charges.",
    " Any monument entrance fees, camera fees, guide charges.",
    " Any expenses of personal nature.",
  ],
  todo: [
    "RAFTING (Included)",
    "ROPE WAY (at additional cost)",
    "SKIING (at additional cost)",
    "HORSE RIDING (at additional cost)",
    "YAK RIDING (at additional cost)",
  ],
  terms: [
    "The company won't be responsible for incurrence additional expenditure on account of some unforeseen events like accidents, breakdown of vehicles, riots, delay in train/flight etc.",
    "Extra will be charged if there is rise in the fare on the date of travel or . anything during the tour period.",
    "The right of admission is fully reserved with the organizer.",
    "Payment will be accepted through cash & bank transfer.",
    "Accommodation facilities will be provided with usual amenities on Triple sharing basis",
    "The above Package is Non Refundable-Non Transferable",
  ],
};

const Img_list = [
  {
    src:
      "https://cdn3.dualshockers.com/wp-content/uploads/2014/02/TheOrder_006_800.jpg",
  },
  {
    src:
      "https://cdn3.dualshockers.com/wp-content/uploads/2014/02/TheOrder_006_800.jpg",
  },
];

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

const ExploreDetails = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div classname="stay">
        <AutoCarousel Images={Img_list} />
      </div>
      <div className="container">
        <div className="container move">
          <div className="row">
            <div className="col-md-8 col-12">
              <br />
              <div className="pkg_card_left">
                <h2> {expDetails.name}</h2>
                <h4>
                  {expDetails.star} <StarRoundedIcon />
                </h4>
                <p>
                  <strong>Vendor code: </strong>
                  {expDetails.vendor}
                  &nbsp;&nbsp;&nbsp;&nbsp; <strong>Package code: </strong>
                  {expDetails.package}{" "}
                </p>
                <br />
                {expDetails.Highlights.map((Highlight) => {
                  return <li>{Highlight}</li>;
                })}

                <div className="text-right tick">
                  <br />
                  <VerifiedUserIcon /> Pocket Verified
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <br />
              <div className="pkg_card_right">
                <h2>Rs. {expDetails.price}</h2>

                <div className="row left-gap">
                  <h6>
                    &nbsp;<strike>Rs.{expDetails.discount}</strike>&nbsp;
                  </h6>
                  <h6 className="dis-color">{expDetails.percent}% off</h6>
                </div>

                <div className="row">
                  <ul className="no_dots">
                    <li>Per person</li>
                    <li>Price is inclusive of all taxes</li>
                  </ul>
                </div>
                <br />
                <br />

                <div className="row text-center no-gutters">
                  <div className="col-md-6 col-6 no-gutters">
                    <button
                      type="button"
                      className="btn-explore-pocket"
                      onClick={handleClickOpen}
                    >
                      <ShareRoundedIcon /> Share
                    </button>
                  </div>
                  <div className="col-md-6 col-6 no-gutters">
                    <button type="button" className="btn-explore-book">
                      <OfflineBoltIcon /> Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />

          <div>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">{"Share"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Some catchy line long long
                  <div className="row text-center">
                    <div className="col-4 col-md-4">
                      <br />
                      <WhatsAppIcon style={{ color: "green" }} />
                    </div>
                    <div className="col-4 col-md-4">
                      <br />
                      <FacebookIcon style={{ color: "blue" }} />
                    </div>
                    <div className="col-4 col-md-4">
                      <br />
                      <LinkIcon />
                    </div>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          {/* After cards section */}
          <h2>About:</h2>
          <h6>{expDetails.about}</h6>
          <br />
          <br />

          <ItineraryComponent Itinerary={Itinerary} />
          <br />
          <br />
          <br />

          <h2>What to Expect & Not:</h2>
          <br />

          <div className="row">
            <div className="col-md-6">
              <div className="days-green">
                <h4>Inclusions:</h4>
                {}
                <ul>
                  {expDetails.inclusions.map((point) => {
                    return (
                      <>
                        • {point} <br />
                      </>
                    );
                  })}
                </ul>
              </div>
              <br />
            </div>

            <div className="col-md-6">
              <div className="days-red">
                <h4>Exclusions:</h4>
                <ul>
                  {expDetails.exclusions.map((point) => {
                    return (
                      <>
                        • {point} <br />
                      </>
                    );
                  })}
                </ul>
              </div>
              <br />
            </div>
          </div>

          <div>
            <br />
            <h2>Things to do:</h2>
            <br />
            <ul>
              {expDetails.todo.map((point) => {
                return (
                  <>
                    • {point} <br />
                  </>
                );
              })}
            </ul>
            <br />
            <br />
            <h2>Terms & Conditons:</h2>
            <ul className="no_dots">
              {expDetails.terms.map((point) => {
                return (
                  <>
                    • {point} <br />
                  </>
                );
              })}
            </ul>
          </div>
          <br />
          {/* After cards section end */}
          <h2>Pocket Reccomended</h2>
          <ReccomendedCarousel Reccomend={Reccomend}/>
          <br />
          <br />
          <h4>Pocket Reviews</h4>
          <ReviewComponent Review={Review}/>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default ExploreDetails;
