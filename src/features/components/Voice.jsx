import {useContext, useState} from "react";
import {IconButton} from "@mui/material";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import {SpeechContext} from "../page/Page";

const Voice = ({lang = "en-US"}) => {
    const [speaking, setSpeaking] = useState(false)
    const {contentText, navText, listText, infoText} = useContext(SpeechContext)

    const speechText = `${contentText}, ${navText}, ${infoText}, ${listText}`

    const start = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.onend = () => setSpeaking(false)
        speech.lang = lang
        speech.text = speechText
        setSpeaking(true)
        window.speechSynthesis.speak(speech);
    }

    const stop = () => {
        window.speechSynthesis.cancel();
        setSpeaking(false)
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
