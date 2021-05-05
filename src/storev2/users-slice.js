import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_USERS_URL = "https://jsonplaceholder.typicode.com/users";
//const FIREBASE_ENDPOINT = 'https://react-http-23f9c-default-rtdb.firebaseio.com';


const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState({
    currentUser: {
        userId: 1,
        token: null,
        avatarPhoto: 'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        username: 'Abdelrahman',
        isLoggedIn: false, // TODO: set to false before integration
        isEditingAComment: false,
        numFollowers: 0,
        numFollowing: 0,
        followers: [],
        following: [],
        isPro: false,
        photos: [], //list of objects: viewingPrivacy, photoItem, numViews, ....
        favedPhotos: [], //list of objects
        albums: [],
        galleries: [],
        userComments: [], //the comments typed by the user
        numViews: 0,
        activityPosts: [], //posts from activity feed in Home page
        email: null,
        password: null //TODO: check if the actual password is stored or an encrypted form of it
    },
    toggle: false, //to rerender post item at needed time
    status: 'idle', //whether loading or not 
    error: null
})

// getUserInfo
// /users/:id
export const getUserInfo = createAsyncThunk("user/fetchUserById", 
    async (userId) => {
        const response = await axios.get(`${BASE_USERS_URL}/${userId}`);
        return response.data;
    }
);

export const getFollowedList = createAsyncThunk("user/followed",
    async (userId) => {
        
    }
);

export const signin = createAsyncThunk("user/signin",
    
);

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        login(state, action) {
            // TODO: check the payload
            // const { userId, token } = action.payload;
            // state.currentUser.userId = userId;
            // state.currentUser.token = token;
            const { email, password } = action.payload;
            state.currentUser.email = email;
            state.currentUser.password = password;
            state.currentUser.isLoggedIn = true;
        },
        logout(state, action) {
            state.currentUser.userId = null;
            state.currentUser.token = null;
        },

        //used to notify PostItem to rerender
        toggleComments(state, action) {
            state.toggle = !state.toggle;
        },


        addComment(state, action) {
            //add Comments typed by the user for a certain post
            const newComment = action.payload;
            state.currentUser.userComments.push({
                postId: newComment.postId,
                commentId: newComment.commentId,
                commentText: newComment.commentText
            })
        },

        setIsEditingACommentTrue(state) {
            state.currentUser.isEditingAComment = true;
        },

        setIsEditingACommentFalse(state) {
            state.currentUser.isEditingAComment = false;
        },

        editComment(state, action) {
            const { postId, commentId, newCommentText } = action.payload;
            const existingCommentIndex = state.currentUser.userComments.findIndex(item => item.commentId === commentId);
            if (existingCommentIndex) {
                state.currentUser.userComments[existingCommentIndex] = { postId, commentId, newCommentText };
            }
        },

        removeComment(state, action) {
            const commentId = action.payload;
            const existingComment = state.currentUser.userComments.find(item => item.commentId === commentId);
            if (existingComment) {
                state.currentUser.userComments = state.currentUser.userComments.filter(item => item.commentId !== commentId);
            }
        },

        addFavedPhoto(state, action) {
            const newFavedPhoto = action.payload;
            state.currentUser.favedPhotos.push({
                id: newFavedPhoto.id,
                owner: newFavedPhoto.username,
                url: newFavedPhoto.url
            });
        },
        removeFavedPhoto(state, action) {
            //expecting the id as input parameter
            const id = action.payload;
            const existingPhoto = state.currentUser.favedPhotos.find(item => item.id === id);
            console.log("id: "+id);
            console.log(state.currentUser.favedPhotos);
            console.log(existingPhoto);
            if (existingPhoto) {
                state.currentUser.favedPhotos = state.currentUser.favedPhotos.filter(item => item.id !== id);
            }

        },
        replaceFavedPhotos(state, action) {
            state.currentUser.favedPhotos = action.payload.favedPhotos;
        },
        addSingleFavedPhoto(state, action) {
            const newFavedPhoto = action.payload;
            state.currentUser.favedPhotos.push({
                id: newFavedPhoto.id,
                owner: newFavedPhoto.username,
                url: newFavedPhoto.url
            });
        },

    },
    extraReducers: {
        [getUserInfo.pending]: (state, action) => {
            state.status = "loading";
        },
        [getUserInfo.fulfilled]: (state, action) => {
            state.status = "succeeded";
            // CANNOT DO: state.entities.push(action.payload) XXXXX
            //return action.payload;
            usersAdapter.addOne(state, action.payload);
        },
        [getUserInfo.rejected]: (state, action) => {
            state.status = "failed";
        }
    }
});

export const usersActions = usersSlice.actions;

export default usersSlice;