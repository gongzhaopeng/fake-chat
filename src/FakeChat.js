import * as React from 'react';

import Box from '@mui/material/Box';

import backgroundImage from './assets/images/cosmic-shear.jpg'

function FakeChat() {
    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 6,
            paddingBottom: 36
        }}>
            <iframe
                src='https://xiling.cloud.baidu.com/cloud/web?appId=i-qe5q7sk9na8m7&appKey=j3hq5kzws7vwtx3rs8t8&projectId=6657e8a316ed7222fa5e511d&configVersion=publish&chatMode=isStream&usingAudio=userMedia&directLogin=1&mode=inline&ttsSpeed=5&ttsPitch=5&videoBg=rgb(0,0,0,0)&showMessage=false'
                allow="microphone *"
                style={{
                    border: 0
                }}
                width='100%'
                height="480"
            />
        </Box>
    );
}

export default FakeChat;
