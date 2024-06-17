import * as React from 'react';

import {Paper, Grid, TextField, Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function Text2Speech() {
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
                        label="文本"
                        defaultValue="请输入您想让王老师进行个性化人声播报的文本!"
                        sx={{
                            width: '100%'
                        }}
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
                    >
                        王老师播报
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Text2Speech