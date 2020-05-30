import React from 'react';
import Webcam from "react-webcam";

function WebcamCapture(props) {
    const webcamRef = React.useRef(null);

    function dataURItoBlob(dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], {type:mimeString});
    }

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        const img = dataURItoBlob(imageSrc);
        props.handleImg(img);
    }, [webcamRef, props]);

    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/png"
            />
            <button onClick={capture} className="btn btn-primary w-100">Capture photo</button>

        </>
    );
};

export default WebcamCapture;