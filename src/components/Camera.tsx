import {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';

type CameraProps = {
    width: number;
    aspect: number;
}

const Camera = forwardRef<HTMLVideoElement,CameraProps>((props, ref) => {
    const {width, aspect} = props;
    const height = width / aspect;
    const videoRef = useRef<HTMLVideoElement>(null);

    // jaetaan videoRef parentille
    useImperativeHandle(ref, () => videoRef.current!);

    useEffect(()=> {
        const setupVideoInput = async () => {
            try {
                if (videoRef.current) {
                    videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia({
                        video: {
                            width: { ideal: width },
                            height: { ideal: height },
                        },
                        audio: false,
                    });
                    videoRef.current.onloadedmetadata = () => {
                        videoRef.current?.play();
                    }
                }
            } catch (error) {
                console.error("Error setting video input:", (error as Error).message);
            }
        };
        setupVideoInput();
    },[]);

    return <video ref={videoRef} width={width} height={height} />
});

export default Camera