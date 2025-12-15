import { useRef } from "react";
import { Box, Button, Stack } from "@mui/material";

interface VideoPlayerProps {
    src: string;
    height?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
                                                     src,
                                                     height = 420,
                                                 }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePlay = () => {
        videoRef.current?.play();
    };

    const handlePause = () => {
        videoRef.current?.pause();
    };

    const handleStop = () => {
        if (!videoRef.current) return;
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    return (
        <Box width="100%">
            <Box
                component="video"
                ref={videoRef}
                src={src}
                preload="metadata"
                playsInline
                sx={{
                    width: "100%",
                    height,
                    objectFit: "cover",
                    borderRadius: 3,
                    boxShadow: "0 15px 40px rgba(0,89,79,0.15)",
                }}
            />

            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                mt={2}
            >
                <Button variant="contained" onClick={handlePlay}>
                    Play
                </Button>
                <Button variant="outlined" onClick={handlePause}>
                    Pause
                </Button>
                <Button variant="outlined" onClick={handleStop}>
                    Stop
                </Button>
            </Stack>
        </Box>
    );
};

export default VideoPlayer;
