import * as React from 'react';

import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'

import Box from '@mui/material/Box';

import Text2Speech from "./components/tts/Text2Speech";

import backgroundImage from './assets/images/cosmic-shear.jpg'

function FakeChat() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='fake-chat' element={
                    <Box sx={{
                        backgroundImage: `url(${backgroundImage})`,
                        paddingLeft: 2,
                        paddingRight: 2,
                        paddingTop: 6,
                        paddingBottom: 128
                    }}>
                        <Outlet/>
                    </Box>
                }>
                    <Route index element={
                        <iframe
                            src='https://xiling.cloud.baidu.com/cloud/web?appId=i-qe5q7sk9na8m7&appKey=j3hq5kzws7vwtx3rs8t8&projectId=6657e8a316ed7222fa5e511d&configVersion=publish&chatMode=isStream&usingAudio=userMedia&directLogin=1&mode=inline&ttsSpeed=5&ttsPitch=5&videoBg=rgb(0,0,0,0)&showMessage=false'
                            allow="microphone *"
                            style={{
                                border: 0
                            }}
                            width='100%'
                            height="480"
                        />
                    }/>
                    <Route path='tts/custom-voice' element={
                        <Text2Speech/>
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default FakeChat;
