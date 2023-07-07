import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Content = () => {
   
    return (
        <div className="home">
            <Switch>
            <Route exact path='/Portfolio'>
              <AboutMe />
            </Route>
            <Route exact path='/Portfolio/aboutme'>
              <AboutMe />
            </Route>
            <Route exact path='/Portfolio/project'>
              <Project />
            </Route>
            <Route exact path='/Portfolio/resume'>
              <Resume />
            </Route>
            <Route exact path='/Portfolio/contactme'>
              <ContactMe />
            </Route>
          </Switch>
        </div>
    );
}
 
export default Content;