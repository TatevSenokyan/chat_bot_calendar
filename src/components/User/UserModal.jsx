import React from 'react';
import Button from '@mui/material/Button';
import overlay from  '../HomePage/components/images/overlay.png';
import purppleOval from  '../HomePage/components/images/purppleOval.png';
import Box from '@mui/material/Box';


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
            position: 'absolute',
            zIndex: 2000,
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
            <Box
              sx={{
                  marginTop: '32px',
                }}>
               <Box sx={{ ...titleStyle,}}>Участники</Box>
                <Box sx={{...textStyle}}>
                   <span>Коуч Елена Смирнова</span>
                   <span style={{marginLeft: '13px'}}>@DmitryFyrfa</span>
                </Box>
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
                     marginTop: '15px',
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
              </Box>
           </Box>
           <Box sx={{width: 360, marginTop: '63px'}}>
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