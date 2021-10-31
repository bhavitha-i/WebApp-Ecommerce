import * as React from 'react';
import AppBar from '../components/AppBar';
import withRoot from '../components/WithRoot';


function Home(){
    return (
        <AppBar/>
    );
}

export default withRoot(Home);
