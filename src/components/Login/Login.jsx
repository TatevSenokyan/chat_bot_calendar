import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import loginImg from './images/login.png';

const commonStyle = {
  display: 'flex',
  alignItems: 'center',
};

const buttonStyle = {
  width: '351px',
  height: '50px',
  fontFamily: 'Harmonia Sans Pro Cyr !important',
  fontStyle: 'normal !important',
  fontWeight: 600,
  fontSize: '16px !important',
  textAlign: 'center',
  textTransform: 'capitalize !important',
  borderColor: '#735BF2',
  borderRadius: '8px',
};

export default function Login () {
    return (
        <Box sx = {{
          width: '390px',
          justifyContent: 'center',
          ...commonStyle,
        }}>
          <Box sx={{
             width: 351,
             height: 523,
             paddingTop: '163px',
             ...commonStyle,
             flexDirection: 'column',
             }}>
             <Box sx={{
               width: 212,
               height: 475,
               ...commonStyle,
               flexDirection: 'column',
               }}>
               <img src={loginImg} style={{width: 85}}/>
               <Typography variant='h1'
                 sx = {{
                   width: 212,
                   height: '24px !important',
                   fontFamily: 'Harmonia Sans Pro Cyr !important',
                   fontStyle: 'italic !important',
                   fontWeight: 600,
                   marginTop: '66px !important',
                   lineHeight: '19px !important',
                   letterSpacing: '1px !important',
                   color: '#222B45 !important',
                   fontSize: '16px !important',
                }}
               >
                  Design new UX flow Design
               </Typography>
               <Typography variant='h1'
                 sx = {{
                  width: 212,
                  fontSize: '12px !important',
                  color: '#8F9BB3 !important',
                  fontFamily: 'Harmonia Sans Pro Cyr !important',
                  fontStyle: 'normal !important',
                  fontWeight: 400,
                  lineHeight: '18px !important',
                  letterSpacing: '0.75px !important',
                }}
               >
                  Define the problem or question that..
                  the brainstorming session will aim to address.
                  The question should be clear and concise.
               </Typography>
               <Button variant="outlined"
                  sx={{
                    ...buttonStyle,
                    marginTop: '161px',
                    color: '#8F9BB3',
                  }}>
                  Войти
               </Button>
               <Button variant="outlined"
                  sx={{
                    ...buttonStyle,
                    marginTop: '16px',
                    color: '#FFFFFF',
                    background: '#735BF2',
                    '&:hover': {
                      background: '#735BF2 !important',
                    }
                  }}>
                  Зарагестрироваться
               </Button>
             </Box>
          </Box>
        </Box>

    );
}

