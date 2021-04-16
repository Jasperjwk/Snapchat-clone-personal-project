import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import { useHistory } from "react-router";
import "./WebcamCapture.css";


const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
};

function WebcamCapture() {

    // Big pointer
    const webcamRef = useRef(null);

    // It's like a gun 
    const dispatch = useDispatch();   
    // It gives me the history of web pages
    // Eg: Imagine when we are on the web page, it 
    // gives us the history of the webpage and push the page like a redirect
    const history = useHistory(); 


    // It will do the function once and save the output
    // of the function so if it gets called again,
    // it knows what to do without the sort of heavyweight
    // of doing the calculation again
    const capture = useCallback (() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push('/preview')
    }, [webcamRef]) // When does it determine to rerun this function again?
    // It's if the dependency webcamRef changes, then what is will simply do is
    // to tell react to run the function again, it will rerun again. It will be
    // stronger when it is run for the 3rd, 4th, 5th time


    return (
        <div className="webcamCapture">
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref= {webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />

            <RadioButtonUncheckedIcon
                className="webcamCapture__button"
                onClick={capture}
                fontSize="large"
            />
        
            
        </div>
    )
}

export default WebcamCapture
