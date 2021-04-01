import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import {
  Theme, ThemeProvider, createMuiTheme,
  CssBaseline,
} from '@material-ui/core';

// import {useAppSelector, useAppDispatch} from './hooks';

// import {addSound} from './soundsSlice';
import {Provider} from 'react-redux';

import {store} from './store';

import LemonflixAppBar from './appbar';
import Home from './pages/Home';
import Welcome from './pages/Welcome';


const PageContainer = styled.div`
  background-color: #141414;
  height: 100vh;
`;

const theme: Theme = createMuiTheme({});
// const styles = makeStyles((theme: Theme) => createStyles({}));


interface IApp { };

const App = (props: IApp) => {
  // const sounds = useAppSelector((state) => state.sounds);
  // const dispatch = useAppDispatch();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline>
          <PageContainer>


            <Switch>
              <Route path="/" exact>
                <Welcome></Welcome>
              </Route>
              <Route path="/home">
                <LemonflixAppBar></LemonflixAppBar>
                <Home></Home>
              </Route>
            </Switch>
          </PageContainer>
        </CssBaseline>
      </Router>
    </ThemeProvider>
  );
};


const rootElement: HTMLElement | null = document.getElementById('root');
ReactDOM.render( <Provider store={store}><App /></Provider>, rootElement);
