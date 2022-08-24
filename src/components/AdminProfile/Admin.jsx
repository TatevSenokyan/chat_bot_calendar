import React from 'react';
import Box from '@mui/material/Box';
import profileImg from './images/profile.png';
import settingsImg from './images/settings.png';
import Button from '@mui/material/Button';
import uploadImg from './images/upload.png';
import Footer from './components/Footer';
import {useNavigate} from 'react-router-dom';

const titleStyle = {
    fontFamily: 'Harmonia Sans Pro Cyr !important',
    fontStyle: 'italic',
    fontWeight: 600,
    fontSize: '17px',
    lineHeight: '19px',
    color: '#222B45',
    letterSpacing: '0.75px',
  };

const textStyle = {
    fontFamily: 'Harmonia Sans Pro Cyr',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '0.75px',
    color: '#8F9BB3',
};

const buttonStyle = {
    width: 92,
    height: 50,
    borderRadius: 2,
    borderColor: '#8F9BB3',
    textTransform: 'capitalize',
    color: '#8F9BB3',
};
export default function Admin() {
  const navigate = useNavigate();
    return(
      <Box sx={{width: '390px'}}>
        <Box sx={{
            width: '390px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
           }}>
            <Box
              sx={{
                  width: 351,
                  display: 'flex',
                  paddingTop: '80px',
                  flexDirection: 'column',
                  justifyContent: 'center',
               }}>
               <Box sx = {{
                   width: '100%',
                   display: 'flex',
                   justifyContent: 'space-between',
                   }}>
                   <img
                     src={profileImg}
                     style = {{paddingLeft: '100px'}}
                    />
                   <img
                      onClick = {()=> navigate('/addCompany')}
                      src={settingsImg}
                      style = {{width: 24, height: 24, cursor: 'pointer'}}
                   />
               </Box>
               <Box sx={{
                   width: '100%',
                   paddingTop: '16px',
                   display: 'flex',
                   justifyContent: 'center',
                   flexDirection: 'column',
                   alignItems: 'center',
               }}>
                   <Box sx={{...titleStyle}}>
                      Коуч Елена Смирнова
                   </Box>
                   <Box
                      sx={{
                          width: 348,
                          textAlign: 'center',
                          paddingTop: '16px',
                          height: 71,
                          fontFamily: 'Harmonia Sans Pro Cyr',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '14px',
                          letterSpacing: 0.75,
                      }}>
                      Define the problem or question that..
                      the brainstorming session will aim to address.
                      The question should be clear and concise.
                   </Box>
               </Box>
               <Box sx={{width: '100%', paddingTop: '36px'}}>
                  <Box sx={{...titleStyle}}>
                    График работы
                  </Box>
                  <Box sx={{paddingTop: '16px', ...textStyle}}>
                    пн-пт
                  </Box>
                  <Box sx={{paddingTop: '8px', ...textStyle}}>
                    с 09:00 - 18:00
                  </Box>
               </Box>
               <Box sx={{width: '100%', paddingTop: '25px'}}>
                  <Box sx={{...titleStyle}}>
                    Тайминг встречь
                  </Box>
                  <Button
                    variant='outlined'
                    sx = {{
                        ...buttonStyle,
                        marginTop: '10px',
                    }}
                   >
                    15 мин
                 </Button>
               </Box>
               <Button
                 variant='outlined'
                 sx={{
                   ...buttonStyle,
                   width: '100%',
                   background: '#735BF2',
                   backgroundImage: `url(${uploadImg})`,
                   backgroundRepeat: 'no-repeat',
                   backgroundPosition: '80% 50%',
                   minHeight: '50px !important',
                   marginTop: '71px',
                   color: '#FFF',
                   '&:hover': {
                      backgroundColor: '#735BF2',
                    },
                 }}
               >
                 Отправить календарь
               </Button>
            </Box>
        </Box>
        <Footer />
     </Box>
    );
}
