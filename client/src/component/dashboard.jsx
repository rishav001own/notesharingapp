import React from 'react';
import Header from './header/header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import NoteArea from './notearea/noteArea';
import Note from './note/Note';
import Footer from './footer/footer'
  

const dashboard = () => {
    return (
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={NoteArea}/>
                    <Route path="/note/:id" component={Note}/>
                </Switch>
            </Router>
            <Footer/>

        </div>
    );
};

export default dashboard;