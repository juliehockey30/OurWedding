import NavBar from './components/NavBar'
import Home from './components/Home'
import OurStory from './components/OurStory'
import Event from './components/Event'
import Registry from './components/Registry'
import WeddingParty from './components/WeddingParty'
import Accommodations from './components/Accommodations'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Helmet} from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <style>{'body { background: url(https://media-api.xogrp.com/images/fed00b56-7d7b-4ec9-be23-99f7163811b7~rt_auto-rs_4000.h?ordering=explicit); }'}</style>
      </Helmet>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/our-story" component={OurStory} />
            <Route path="/details" component={Event} />
            <Route path="/registry" component={Registry} />
            <Route path="/wedding-party" component={WeddingParty} />
            <Route path="/accommodations" component={Accommodations} />
          </Switch>
        </Router>
      </>
  );
}

export default App;
