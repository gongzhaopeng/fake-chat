import React, {useState} from 'react';

import {Paper, Grid, TextField, Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function Text2Speech() {
    const [text, setText] = useState('');
    const handleTextChange = (event) => {
        setText(event.target.value);
    };
    const speeching = async () => {
        let audioData
        try {
            const response = await fetch(process.env.REACT_APP_TTS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({text: text}),
            });
            audioData = await response.arrayBuffer();
        } catch (error) {
            console.error('Error fetching audio:', error);
        }

        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        await audioContext.decodeAudioData(audioData, (buffer) => {
            const source = audioContext.createBufferSource();
            source.buffer = buffer;
            source.connect(audioContext.destination);
            source.start();
        }, (error) => {
            console.error('Error decoding audio data:', error);
        });
    };

    return (
        <Paper elevation={24}>
            <Grid container spacing={0}>
                <Grid item xs={9}>
                    <TextField
                        id='text.tts'
                        required
                        multiline
                        rows={5}
                        variant='filled'
                        label="请输入您想让王老师进行个性化人声播报的文本!"
                        value={text}
                        sx={{
                            width: '100%'
                        }}
                        onChange={handleTextChange}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        color="success"
                        startIcon={<SendIcon/>}
                        sx={{
                            width: '100%',
                            height: '100%'
                        }}
                        onClick={speeching}
                    >
                        王老师播报
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Text2Speech