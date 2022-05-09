import {useState} from "react";
import {IconButton} from "@mui/material";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';

const Voice = ({lang = "en-US", children = 'TEST'}) => {
    const [speaking, setSpeaking] = useState(false)

    const start = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.onend = () => setSpeaking(false)
        speech.lang = lang
        speech.text = children
        setSpeaking(true)
        window.speechSynthesis.speak(speech);
    }

    const stop = () => {
        window.speechSynthesis.cancel();
    }

    switch (speaking){
        case true:
            return (
                <IconButton onClick={stop} color='secondary'>
                    <StopCircleIcon/>
                </IconButton>
            )
        case false:
            return (
                <IconButton onClick={start} color='primary'>
                    <PlayCircleFilledWhiteIcon/>
                </IconButton>
            )
        default:
            return null
    }
};

export default Voice;
