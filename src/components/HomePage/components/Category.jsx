import React from 'react';
import Button from '@mui/material/Button';
import overlay from  './images/overlay.png';
import Box from '@mui/material/Box';
import greenOval from './images/greenOval.png';
import purppleOval from './images/purppleOval.png';
import blueOval from './images/blueOval.png';
import blackUpload from './images/blackUpload.png';


const titleStyle={
    fontFamily: 'Harmonia Sans Pro Cyr',
    fontStyle: 'italic',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '1px',
    color: '#222B45',
    marginTop: '8px',
 };

 const buttonStyle = {
    textTransform: 'capitalize',
    color: '#222B45',
    height: '44px',
    borderRadius: '8px',
    fontStyle: 'italic',
    fontFamily: 'Harmonia Sans Pro Cyr',
 };

 const textStyle = {
    fontFamily: 'Harmonia Sans Pro Cyr',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '0.75px',
    color: '#8F9BB3',
    marginTop: '8px',
    height: '14px',
 };


export default function Modal({handleCategory}) {
    return (
        <Box sx={{
            width: 390,
            height: 623,
            marginTop: '180px',
            zIndex: 20000,
            position: 'absolute',
            background: `url(${overlay})`,
            borderTopRightRadius: '30px',
            borderTopLeftRadius: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
         }}>
           <Box
             sx={{width: 360}}
           >
            <Box
              sx={{
                  ...titleStyle,
                  textAlign: 'center',
                  marginTop: '60px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
               <Box>Brainstorm with the team</Box>
               <img
                 style = {{width:24, marginLeft: '20px', cursor: 'pointer'}}
                 src = {blackUpload}
                 alt='upload'
                />
            </Box>
            <Box
              sx={{
                  marginTop: '32px',
                }}>
               <Box sx={{ ...titleStyle,}}>Способ связи</Box>
                <a style={{color: '#735BF2'}} href=''>
                  https://zoom.us/https://zoom.us/https://zoom.us/https:
                  //zoom.us/https://zoom.us/https://zoom.us/https://zoom.us/https://zoom.us
                </a>
            </Box>
            <Box
              sx={{
                  marginTop: '32px',
                }}>
               <Box sx={{ ...titleStyle,}}>Описание</Box>
                <Box sx={{...textStyle}}>
                    Define the problem or question that..
                    the brainstorming session will aim to address.
                    The question should be clear and concise.
                </Box>
            </Box>
            <Box sx={{width: '360px', display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
               <Box sx={{...textStyle, color: '#735BF2', fontSize: '15px'}}>Четверг, 2 сентября</Box>
               <Box sx={{...textStyle, color: '#735BF2', fontSize: '15px'}}>10:00 - 13:00</Box>
            </Box>
           </Box>
           <Box sx={{width: '360px', marginTop: '36px'}}>
              <Box sx={{...titleStyle}}>Категория</Box>
              <Box
                sx={{display: 'flex'}}
              >
                 <Button
                   onClick={handleCategory}
                   sx={{
                     ...buttonStyle,
                     width: 125,
                     backgroundColor: 'rgba(241, 231, 254, 0.5)',
                     backgroundImage: `url(${purppleOval})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: '10% 46%',
                     '&:hover': {
                        backgroundColor: 'rgba(241, 231, 254, 0.5)',
                     }
                   }}
                 >
                    Brainstorm
                </Button>
                 {false && <Button
                   onClick={handleCategory}
                   sx={{
                     ...buttonStyle,
                     width: 95,
                     backgroundColor: 'rgba(183, 244, 216, 0.2)',
                     backgroundImage: `url(${greenOval})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: '10% 46%',
                     marginLeft: '16px',
                     '&:hover': {
                        backgroundColor: 'rgba(183, 244, 216, 0.2)',
                     }
                   }}
                 >
                    Design
                </Button>}
                 {false && <Button
                   onClick={handleCategory}
                   sx={{
                     ...buttonStyle,
                     width: 105,
                     backgroundColor: 'rgba(137, 196, 244, 0.2)',
                     '&:hover': {
                        backgroundColor: 'rgba(137, 196, 244, 0.2)',
                     },
                     backgroundImage: `url(${blueOval})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: '10% 46%',
                     marginLeft: '16px',
                   }}
                 >
                    Workout
                 </Button>}
              </Box>
           </Box>
           <Box sx={{width: 360, marginTop: '63px'}}>
             <Button sx={{
                ...buttonStyle,
                width: '100%',
                color: '#FFF',
                background: '#735BF2',
                fontStyle: 'normal',
                fontSize: '16px',
                '&:hover': {
                   background: '#735BF2'
                }
             }}>
               Изменить встречу
             </Button>
             <Button sx={{
                ...buttonStyle,
                width: '100%',
                color: '#FFF',
                marginTop: '10px',
                background: '#CB5268',
                fontStyle: 'normal',
                fontSize: '16px',
                '&:hover': {
                   background: '#CB5268'
                }
             }}>
               Отменить встречу
             </Button>
           </Box>
         </Box>
    )
}