import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Project from './Project';
import Home from './Home';
import About from './About';
import Error from './Error';

class Page extends Component {
    render() {
        return (            
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact strict component={Home} />
                        <Route path='/proj' exact strict component={Project} />
                        <Route path='/about' exact strict component={About} />
                        <Route component={Error} />
                    </Switch>
                    {/* <Footer /> */}
                </div>
            </ BrowserRouter>

        );
    }
}


export default Page;