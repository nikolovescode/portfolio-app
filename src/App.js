import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Textfield} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
class App extends Component {
  render(){
  return (
    <div style={{height: '300px', position: 'relative', margin: 'auto'}}>
    <Layout fixedHeader fixedDrawer>
        <Header title="Nikolaj Månssons Portfolio">
            <Textfield
                value=""
                onChange={() => {}}
                label="Search"
                expandable
                expandableIcon="search"
            />
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
    </Layout>
</div>
  );
}
}

export default App;
