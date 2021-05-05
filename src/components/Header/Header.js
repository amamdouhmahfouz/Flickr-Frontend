import React from 'react';
import { useSelector } from 'react-redux';

import UserHeader from './UserHeader/UserHeader';
import GuestHeader from './GuestHeader/GuestHeader'

const Header = () => {

    const isLoggedIn = useSelector(state => state.users.currentUser.isLoggedIn);

    //let renderedHeader = ;

    return (
        <div>
            {alert(isLoggedIn.toString())}
        {isLoggedIn ? <UserHeader /> : <GuestHeader />}
        </div>
    );
};

export default Header;