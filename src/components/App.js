// LIBRARY
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { css } from 'styled-components';

// HISTORY
import { history } from '../redux/configStore';

// REDUX
import { userActions } from '../redux/modules/user';
import { postActions } from '../redux/modules/post';

// FUNCTION
import { getToken } from '../common/token';

// STYLE
import GlobalStyle from '../common/globalStyle';
import theme from '../common/style';

// PAGES
import Home from '../pages/Home';
import Search from '../pages/Search';
import Detail from '../pages/Detail';
import Write from '../pages/Write';
import Modify from '../pages/Modify';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import Likes from '../pages/Likes';

// COMPONENTS
import Header from './Header';
import AddBtn from './AddBtn';
import Permit from './Permit';

// ELEMENTS
import { Grid } from '../elements/index';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const token = getToken();

  useEffect(() => {
    if (token) {
      dispatch(userActions.checkDidIWriteDB());
      dispatch(userActions.logInCheck(token));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <Grid
        margin="0 auto"
        padding="110px 0 0"
        width="1440px"
        style={{ minWidth: '450px', position: 'relative', minHeight: '100vh' }}
        laptoptStyle={() => {
          return css`
            max-width: none;
            width: 90%;
          `;
        }}
        mobileStyle={() => {
          return css`
            width: 95%;
          `;
        }}
      >
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/detail/:postId" exact component={Detail} />
          <Route path="/write" exact component={Write} />
          <Route path="/modify/:postId" exact component={Modify} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/likes" exact component={Likes} />
        </ConnectedRouter>
      </Grid>

      <Permit>
        <AddBtn />
      </Permit>
    </ThemeProvider>
  );
}

export default App;
