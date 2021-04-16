import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Chat.css"
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ReactTimeago from 'react-timeago';
import { selectCameraImage } from './features/cameraSlice';
import { useDispatch } from 'react-redux';
import { selectImage } from './features/appSlice';
import { db } from './firebase';
import { useHistory } from 'react-router';
import { FiberSmartRecordRounded } from '@material-ui/icons';

function Chat({ profilePic, username, timestamp, imageUrl, read, id}) {

    const dispatch = useDispatch();
    const history = useHistory();
    let array = [];

    const open = () => {
        if (!read){
            dispatch(selectImage(imageUrl));
            db.collection("posts").doc(id).set(
                {
                read: true,
                }, 
            // If there's no merge, it will overwrite / delete everything in document
                {merge: true}
          );
          history.push('/chats/view')
        }
    }

    async function deleteChat(e)  {
        array = array.filter(i => i.id !== id);

        await db.collection("posts")
        .doc(id)
        .delete()
        .then(() => {
            e.preventDefault();
            
        }).catch(err => alert(err));
    }

    return (
        <div onClick={open} className="chat">
            <Avatar className="chat__avatar" src={profilePic}/>
            <div className="chat__info">
                <h4>{username}</h4>
                <p>
                    {/* If it is not read, render tap to view */}
                    {!read && "Tap to view -"}{" "}
                    <ReactTimeago date = {new Date(timestamp?.toDate()).toUTCString()} /> 
                </p>
            </div>

            {/* If it is not read, render out stop rounded icon */}
            {!read && <StopRoundedIcon className="chat__readIcon"/>}    
            {read && <DeleteOutlineIcon onClick={(e)=>{deleteChat(e)}}  className="chat__deleteIcon"/> }        
        </div>
    )
}

export default Chat
