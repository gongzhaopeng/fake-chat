import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import backgroundImage from './assets/images/cosmic-shear.jpg'

function FakeChat() {
    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 6,
            paddingBottom: 50
        }}>
            <Card raised={true}>
                <CardMedia
                    component='iframe'
                    src='https://xiling.cloud.baidu.com/cloud/web?appId=i-qe5q7sk9na8m7&appKey=j3hq5kzws7vwtx3rs8t8&projectId=6657e8a316ed7222fa5e511d&configVersion=publish&chatMode=isStream&usingAudio=userMedia&directLogin=1&mode=crop&ttsSpeed=5&ttsPitch=5'
                    sx={{
                        height: 600,
                        border: 0,
                        allow: 'microphone *'
                    }}
                />
            </Card>
        </Box>
    );
}

export default FakeChat;
