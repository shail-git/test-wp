import React from "react";
import { NavLink } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./explore.css";

const Explore = () => {
  //   const Photos = [
  //     {
  //       id: 0,
  //       src: "http://static.baubauhaus.com/assets/41583_270.jpg",
  //     },
  //     {
  //       id: 1,
  //       src:
  //         "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  //     },
  //     {
  //       id: 2,
  //       src: "http://static.baubauhaus.com/assets/41583_270.jpg",
  //     },
  //     {
  //       id: 3,
  //       src:
  //         "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  //     },
  //     {
  //       id: 4,
  //       src:
  //         "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  //     },
  //     {
  //       id: 5,
  //       src: "http://static.baubauhaus.com/assets/41583_270.jpg",
  //     },
  //     {
  //       id: 6,
  //       src:
  //         "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  //     },
  //     {
  //       id: 7,
  //       src:
  //         "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
  //     },
  //     {
  //       id: 8,
  //       src:
  //         "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  //     },
  //     {
  //       id: 9,
  //       src: "http://static.baubauhaus.com/assets/41583_270.jpg",
  //     },
  //     {
  //       id: 10,
  //       src:
  //         "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
  //     },
  //     {
  //       id: 11,
  //       src:
  //         "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  //     },
  //     {
  //       id: 12,
  //       src: "http://static.baubauhaus.com/assets/41583_270.jpg",
  //     },
  //     {
  //       id: 13,
  //       src:
  //         "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  //     },
  //     {
  //       id: 14,
  //       src: "https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78",
  //     },
  //     {
  //       id: 15,
  //       src:
  //         "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  //     },
  //     {
  //       id: 16,
  //       src: "https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78",
  //     },
  //     {
  //       id: 17,
  //       src:
  //         "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  //     },
  //   ];

  //   let len = Photos.length;

  const Cards = [
    {
      name: "Package Name",
      price: 2000,
      src: "https://picsum.photos/200/300?grayscale",
      link:'/exploredetails',
    },
    {
      name: "Package Name",
      price: 2000,
      src: "https://picsum.photos/200/300?grayscale",
      link:'/exploredetails',
    },
    {
      name: "Package Name",
      price: 2000,
      src: "https://picsum.photos/200/300?grayscale",
      link:'/exploredetails',
    },
    {
      name: "Package Name",
      price: 2000,
      src: "https://picsum.photos/200/300?grayscale",
      link:'/exploredetails',
    },
    {
      name: "Package Name",
      price: 2000,
      src: "https://picsum.photos/200/300?grayscale",
      link:'/exploredetails',
    },
    {
      name: "Package Name",
      price: 2000,
      src: "https://picsum.photos/200/300?grayscale",
      link:'/exploredetails',
    },
    {
      name: "Package Name",
      price: 2000,
      src: "https://picsum.photos/200/300?grayscale",
      link:'/exploredetails',
    },
    {
      name: "Package Name",
      price: 2000,
      src: "https://picsum.photos/200/300?grayscale",
      link:'/exploredetails',
    },
    {
      name: "Package Name",
      price: 2000,
      src: "https://picsum.photos/200/300?grayscale",
      link:'/exploredetails',
    },
  ];

  const ExploreCard = ({Card}) => {
    return (
      <>
        <NavLink exact to={Card.link} className="card-sz">
          <img src={Card.src} alt="" width="270px" height="280" />
          <span id="name">{Card.name}</span>
          <span id="price">Rs. {Card.price}</span>
          <span id="like"><FavoriteIcon/></span>
        </NavLink>
        <br />
        <br />
      </>
    );
  };

  return (
    <>
    <div className="blue-bcg">
      <div className="container">
        <br/><br/>
        <h1 className="display-4 explore-title">Explore</h1>
        <br/>
        <div className="">
        {/* <div className="container-fluid">
      <h2 className="banner-text">Birthdays</h2>
      </div> */}
        <div className="row gap text-center">
          {Cards.map((Card) => {
            return (
              <div className="col-md-4">
                <div className="white-bcg">
                  <br/>
                <ExploreCard Card={Card} />
                </div>
                <br/>
              </div>
            );
          })}
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Explore;

// logic for different size cards
{
  /* <div className="column">
<ul>
  {Photos.map((photo) => {
    if (photo.id <= len/4 -1) {
      return (
        <li>
          {" "}
          <img src={photo.src} alt="" />{" "}
        </li>
      );
    }
  })}
</ul>
</div>
<div className="column">
<ul>
  {Photos.map((photo) => {
    if (photo.id >= len/4 && photo.id <= (2*len)/4 -1) {
      return (
        <li>
          {" "}
          <img src={photo.src} alt="" />{" "}
        </li>
      );
    }
  })}
</ul>
</div>
<div className="column">
<ul>
  {Photos.map((photo) => {
    if (photo.id > (2*len)/4 && photo.id <= (3 * len) / 4) {
      return (
        <li>
          {" "}
          <img src={photo.src} alt="" />{" "}
        </li>
      );
    }
  })}
</ul>
</div>
<div className="column">
<ul>
  {Photos.map((photo) => {
    if (photo.id > (3 * len) / 4 && photo.id <= len) {
      return (
        <li>
          {" "}
          <img src={photo.src} alt="" />{" "}
        </li>
      );
    }
  })}
</ul>
</div> */
}
