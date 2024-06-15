import { useRef } from "react";
import Webcam from "react-webcam";

function Camera() {
  const webcamRef = useRef(null);

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const video = webcamRef.current.video;
        if (video) {
          video.srcObject = stream;
        }
      })
      .catch((error) => {
        console.log("Error accessing camera:", error);
      });
  };

  return (
    <div>
      <button onClick={openCamera}>Open Camera</button>
      <Webcam audio={false} ref={webcamRef} />
    </div>
  );
}

export default Camera;
