/**
 * Page responsible for showing the following page of the user
 * @function Followers
 */

 import './Followers.css'
 import { useState } from 'react';
 import { useSelector } from 'react-redux';
 
 /**
  * Array that contains the current users that follow the user
  * @type {Array<objects>}
  */
 const arr = [ {displayName:'MohamedEtraKhayat',firstName:'Ahmed',lastName:'El Zahawy Badr', photoCount:9, status:'Family'}, {displayName:'u2', firstName:'Alaa',lastName:'Tahtawy', photoCount:10, status:'Following'} ]
 
 /**
  * 
  * @param {properties} props 
  * @returns {element} Contents of followers page 
  */
 const Followers = (props) => {
     
     const [followStatus,setFollowStatus] = useState('Following')
     const [showEdit,setShowEdit] = useState(false)
     const [currUser,setCurrUser] = useState(null)
     const [following,setFollowing] = useState(false)
     const [friend,setFriend] = useState(false)
     const [family,setFamily] = useState(false)
     const currentUserId = useSelector(state => state.users.currentUser.userId);
     const userId = props.match.params.id || currentUserId; 
     var myprof = false;
     if (currentUserId == userId)
     {
         myprof= true;
     }
     else
     {
         myprof=false;
     }
 
     const editHandler = (usr) => {
         setShowEdit(true)
         setCurrUser(usr)
     }
 
     const okHandle = () => {
         setShowEdit(false)
         var boxFol = document.getElementById('following')
         var boxFri = document.getElementById('friend')
         var boxFam = document.getElementById('family')
         if (boxFol.checked)
         {
             setFollowing(true);
         }
         if (boxFri.checked)
         {
             setFriend(true);
         }
         if (boxFam.checked)
         {
             setFamily(true);
         }
     }
 
     return (
     <div>
     <h2 className='pplFollow'>People you follow</h2>
     <div className='show'>Show:</div>
     {showEdit &&(
     <div>
         <div className='popUpEdit'>
         </div>
         <div className='editBg'>
             <div className='upperBg'>
                 <h3 className='mainHead'>Edit your relationship with {currUser.displayName}</h3>
             </div>
             <button className='okButton' onClick={okHandle}>Ok</button>
             <button className='cancelButton' onClick={()=>setShowEdit(false)}>Cancel</button>
             <div className='firstOption'>
             <input type='checkbox' name='checkBoxFol' id='following' value='following'/>
             <label for='following'>Following</label>
             </div>
             <div className='secondOption'>
                 <input type='checkbox' name='checkBoxFri' id='friend' value='friend'/>
                 <label for='friend'>Add as friend</label>
             </div>
             <div className='thirdOption'>
                 <input type='checkbox' name='checkBoxFam' id='family' value='family'/>
                 <label for='family'>Add as family</label>
             </div>
             </div>
         
     </div>)}
     <select className='options'>
             <option disabled selected value>----</option>
             <option value='everyone'>all of your followers</option>
             <option value='following'>followers you follow</option>
             <option value="friends">followers you don't follow</option>
     </select>
     <div className='head'>
         <div className='nameUsr'>Name</div>
         <div className='photosUsr'>Public photos</div>
         <div className='listAs'>You list them as..</div>
     </div>
     <div className='usersInfo'>
         {arr.map(usr => (
         <div>
            <div className='nameUser'>
                {usr.displayName}
                <div className='realName'>
                     <div className='fName'>
                         {usr.firstName}
                     </div>
                     <div className='lName'>
                         {usr.lastName}
                     </div>
                </div>
             </div>
            <div className='countPhoto'>{usr.photoCount}</div>
            <div className='listStatus'>
                {usr.status}
                <div onClick={() =>editHandler(usr)}>(edit)</div>
                </div>
         </div>
         ))}
     </div>
     
     
     </div>
     )
 }
 export default Followers;
 