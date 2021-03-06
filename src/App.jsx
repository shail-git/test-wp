import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Top from './Top';
import Footer from './Footer'
import Create from './Create/Create';
import CreateCards from './Create/CreateCards';
import Login from "./Login";
import PocketAnniversaries from './Create/PocketAnniversaries';
import PocketArtists from './Create/PocketArtists';
import PocketBirthdays from './Create/PocketBirthdays';
import PocketCakes from './Create/PocketCakes';
import PocketDIY from './Create/PocketDIY';
import PocketDecorations from './Create/PocketDecorations';
import PocketDates from './Create/PocketDates';
import PocketGifting from './Create/PocketGifting';
import PocketSingles from './Create/PocketSingles';
import PocketVenues from './Create/PocketVenues';

import PocketAnniversariesDetails from './Create/PocketAnniversariesDetails';
import PocketArtistsDetails from './Create/PocketArtistsDetails';
import PocketBirthdaysDetails from './Create/PocketBirthdaysDetails';
import PocketCakesDetails from './Create/PocketCakesDetails';
import PocketDIYDetails from './Create/PocketDIYDetails';
import PocketDecorationsDetails from './Create/PocketDecorationsDetails';
import PocketDatesDetails from './Create/PocketDatesDetails';
import PocketGiftingDetails from './Create/PocketGiftingDetails';
import PocketSinglesDetails from './Create/PocketSinglesDetails';
import PocketVenuesDetails from './Create/PocketVenuesDetails';

import ExploreDetails from './Explore/ExploreDetails';

import CreateDetails from './Create/CreateDetails';
import Explore from './Explore/Explore';

import PocketCart from './Cart/PocketCart';
import Profile from './Profile/Profile';
import Contact from './Contact/Contact';
import VendorProfile from "./VendorProfile/VendorProfile";
import VendorDashboard from "./VendorDashboard/VendorDashboard";

import Form from './testForm/Form';

import './App.css';
import './top.css';
import './create.css';

import Home from './Home';
import AddProduct from './AddProduct/AddProduct';
import VendorForm from './VendorForm/Form';
import VendorLogin from './VendorLogin/VendorLogin';

import VendorCreate from './VendorCreate/VendorCreate';
import VendorExplore from './VendorExplore/VendorExplore';
import CreateItinerary from './CreateItinerary/CreateItinerary';

const App = () => {
    return (
        <div className='bg_pattern'>
            <Top />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/create' component={Create} />
                <Route exact path='/createcards' component={CreateCards} />
                
                <Route exact path='/PocketAnniversaries' component={PocketAnniversaries} />
                <Route exact path='/PocketArtists' component={PocketArtists} />
                <Route exact path='/PocketBirthdays' component={PocketBirthdays} />
                <Route exact path='/PocketCakes' component={PocketCakes} />
                <Route exact path='/PocketDiy' component={PocketDIY} />
                <Route exact path='/PocketDecorations' component={PocketDecorations} />
                <Route exact path='/PocketDates' component={PocketDates} />
                <Route exact path='/PocketGifting' component={PocketGifting} />
                <Route exact path='/PocketSingles' component={PocketSingles} />
                <Route exact path='/PocketVenues' component={PocketVenues} />

                <Route exact path='/PocketAnniversariesDetails' component={PocketAnniversariesDetails} />
                <Route exact path='/PocketArtistsDetails' component={PocketArtistsDetails} />
                <Route exact path='/PocketBirthdaysDetails' component={PocketBirthdaysDetails} />
                <Route exact path='/PocketCakesDetails' component={PocketCakesDetails} />
                <Route exact path='/PocketDiyDetails' component={PocketDIYDetails} />
                <Route exact path='/PocketDecorationsDetails' component={PocketDecorationsDetails} />
                <Route exact path='/PocketDatesDetails' component={PocketDatesDetails} />
                <Route exact path='/PocketGiftingDetails' component={PocketGiftingDetails} />
                <Route exact path='/PocketSinglesDetails' component={PocketSinglesDetails} />
                <Route exact path='/PocketVenuesDetails' component={PocketVenuesDetails} />

                <Route exact path='/createdetails' component={CreateDetails} />
                <Route exact path='/explore' component={Explore} />
                <Route exact path='/exploredetails' component={ExploreDetails} />

                <Route exact path='/PocketCart' component={PocketCart} />
                <Route exact path='/Profile' component={Profile} />
                <Route exact path='/Contactus' component={Contact} />

                <Route exact path='/VendorProfile' component={VendorProfile} />                
                <Route exact path='/VendorDashboard' component={VendorDashboard} />      
                <Route exact path='/addproduct' component={AddProduct} />
                <Route exact path='/VendorForm' component={VendorForm} />
                <Route exact path='/VendorLogin' component={VendorLogin} />
                <Route exact path='/VendorCreate' component={VendorCreate} />
                <Route exact path='/VendorExplore' component={VendorExplore}/>
                <Route exact path='/testform' component={Form} />
                <Route exact path='/CreateItinerary' component={CreateItinerary} />
                <Route exact path='/Login' component={Login} />

            </Switch>
            <Footer />
        </div>
    );
}

export default App;