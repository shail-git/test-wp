import React from 'react';
import sample from '../sample.png';
import ani from '../ani.png';
import deco from '../deco.png';
import { NavLink } from "react-router-dom";


const Cards = [
    {
        name:'Pocket Birthday',
        to:'/PocketBirthdays',
        src:sample
    },
    {
        name:'Pocket Decorations',
        to:'/PocketDecorations', //file banana baaki hai
        src:deco
    },
    {
        name:'Pocket Anniversary',
        to:'/PocketAnniversaries',
        src:ani
    },
    {
        name:'Pocket artists',
        to:'/PocketArtists',
        src:sample
    },
    {
        name:'Pocket dates',
        to:'/PocketDates',
        src:deco
    },
    {
        name:'Pocket gifting',
        to:'/PocketGifting',
        src:ani
    },
    {
        name:'Pocket venues',
        to:'/PocketVenues',
        src:sample
    },
    {
        name:'Pocket singles',
        to:'/PocketSingles',
        src:deco
    },
    {
        name:'Pocket Diy',
        to:'/PocketDIY',
        src:ani
    },
]


const CatCard = ({Card}) => {
    return(
        <div className="col-6 col-md-3 img-fluid">
            <NavLink exact to={Card.to}>
                <img src={Card.src} className="img-fluid"></img>
            </NavLink>
            
            <br/>
            <br/>
        </div>
    );
}

const Create = () => {
    
    return (
        <>
        <br/>
        <h1 className="container-fluid display-4 title">Create</h1>
        <br/>
        <div className="container-fluid category">
            <div className="category row">
                {
                    Cards.map((Card) => {
                      return <CatCard Card= {Card}/>;
                    })
                }
            </div>
        </div>
        </>
    );
}
export default Create;


