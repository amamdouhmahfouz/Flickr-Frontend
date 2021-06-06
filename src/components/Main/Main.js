/* This component will be responsible for rendering different pages */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Home from '../../pages/Home/Home';
import UserPage from '../../pages/UserPage/UserPage';
import './Main.css';
import Posts from '../Posts/Posts';
import PostDetail from '../PostDetail/PostDetail';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Unauthorized from '../Unauthorized/Unauthorized';
import { useSelector } from 'react-redux';
import YouMain from '../YouMain/YouMain';
import Organizer from '../Organizer/Organizer'

import Welcome from '../../components/Welcome/Welcome';
import Login from '../../components/Login/Login';
import ForgetPassword from '../../components/ForgetPassword/ForgetPassword'
import Home from '../../pages/Home/Home';
import ResetPassword from '../../components/ResetPassword/ResetPassword'
import ResetPasswordSuccess from '../../components/ResetPasswordSuccess/ResetPasswordSuccess'
import ForgetPasswordSuccess from '../../components/ForgetPasswordSuccess/ForgetPasswordSuccess';
import Signup from '../../components/Signup/Signup';
import FormSuccess from '../../components/FormSuccess/FormSuccess';
import SearchPage from '../../components/Search/SearchPage';
import SearchMain from '../../components/Search/SearchMain';
import Followers from '../../pages/Followers/Followers'
import Upload from '../../pages/Upload/Upload'
import YouPhotostream from '../../pages/YouPhotostream/YouPhotostream';
import YouFaves from '../../pages/YouFaves/YouFaves';
import Following from '../../pages/Following/Following'
import YouAlbums from '../../pages/YouAlbums/YouAlbums'
import AlbumItem from '../AlbumItem/AlbumItem';
import AlbumDetail from '../AlbumDetail/AlbumDetail'
import GalleryDetail from '../GalleryDetail/GalleryDetail';

import AccountSettings from '../../components/UserSettings/AccountSettings';
import editPass from '../UserSettings/editPass';
import passChange from '../UserSettings/passChange';
import dispChange from '../UserSettings/dispChange';
import ExplorePage from '../../components/Explore/ExplorePage';
/**
 * Responsible for the routing of the whole website
 * @example <Main />
 * 
 *     
 */
const Main = (props) => {

    const isLoggedIn = useSelector(state => state.users.currentUser.isLoggedIn);
    const searchQuery = useSelector(state => state.users.currentSearchQuery);
    const currentUserId = useSelector(state => state.users.currentUser.userId);

    return (
        <main>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/faves" component={YouFaves} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/post-signup" component={FormSuccess} />
                <Route exact path="/forgotpassword" component={ForgetPassword} />
                <Route exact path="/post-forgotpassword" component={ForgetPasswordSuccess} />
                <Route exact path="/forgotpassword-confirm" component={ResetPassword} />
                <Route exact path="/post-forgotpassword-confirm" component={ResetPasswordSuccess} />
                <ProtectedRoute exact path="/home" isLoggedIn={isLoggedIn} component={Posts}/>
                <Route exact path="/photos" component={PostDetail} />
                <Route exact path="/photos/:id" component={PostDetail} />
                <Route exact path='/Unauthorized' component={Unauthorized} />
                <Route exact path="/user/:id/photostream" render={(props) => <YouMain {...props} currentTab="photostream" /> } />
                <Route exact path="/user/:id" render={(props) => <YouMain {...props} currentTab="about" /> } />
                <Route exact path="/cameraroll" render={(props) => <YouMain {...props} currentTab="cameraroll" /> } />  
                <Route exact path="/SearchPage" component={SearchPage} />
                <Route exact path="/user/:id/followers" component={Followers} />
                <Route exact path="/upload" component={Upload} />
                <Route exact path="/user/:id/following" component={Following} />
                <Route exact path="/SearchPage/" component={SearchPage}/>
                <Route exact path="/AccountSettings" component={AccountSettings} />
                <Route exact path="/editPass" component={editPass} />
                <Route exact path="/passChange" component={passChange} />
                <Route exact path="/dispChange" component={dispChange} />
                <Route exact path="/ExplorePage" component={ExplorePage} />
                <Route exact path="/albums" render={(props) => <YouMain {...props} currentTab="albums" /> } />
                <Route exact path="/albumss" component={YouAlbums} />
                <Route exact path="/collections" render={(props) => <YouMain {...props} currentTab="albums" /> } />
                <Route exact path="/organize" component={Organizer}/>
                <Route exact path="/albums/:id" component={AlbumDetail} />
                <Route exact path="/user/:id/galleries" render={(props) => <YouMain {...props} currentTab="galleries" /> } />
                <Route exact path="/gallery/:id" component={GalleryDetail} />
            </Switch>
            
        </main>
    );
};

export default Main;