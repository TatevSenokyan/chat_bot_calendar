import React, {useState} from 'react';
import Box from '@mui/material/Box';
import profileImg from '../AdminProfile/images/profile.png';
import Button from '@mui/material/Button';
import Footer from '../AdminProfile/components/Footer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import greenOval from '../HomePage/components/images/greenOval.png';
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

const boxStyle = {
    border: '1px solid #8F9BB3',
    fontFamily: 'Harmonia Sans Pro Cyr',
    fontStyle: 'normal',
    fontWeight: 400,
    cursor: 'pointer',
    width: 89,
    height: 24,
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '0.75px',
    color: '#8F9BB3',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const buttonStyle = {
    width: 92,
    height: 50,
    borderRadius: 2,
    borderColor: '#8F9BB3',
    textTransform: 'capitalize',
    color: '#8F9BB3',
};

const dayStyle = {
    fontFamily: 'Harmonia Sans Pro Cyr',
    fontStyle: 'italic',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '14px',
    textAlign: 'center',
    letterSpacing: 0.75,
    color: '#8F9BB3',
    marginLeft: '11px'
 };
export default function User() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
     };

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
               <Button
                 variant='outlined'
                 sx={{
                   ...buttonStyle,
                   width: '100%',
                   background: '#735BF2',
                   minHeight: '50px !important',
                   marginTop: '20px',
                   color: '#FFF',
                   '&:hover': {
                      backgroundColor: '#735BF2',
                    },
                 }}
               >
                 Записаться на консультацию
               </Button>
            </Box>
            <Box mt={'31px'} sx = {{width: 360}}>
               <Box sx = {{...titleStyle, fontWeight: 400}}>
                  Ближайшие свободные даты
               </Box>
               <Box
                    sx={{
                    width: '100%',
                    height: '95px',
                    marginTop: '30px',
                    }}
                >
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box sx={{width: 110}}>
                        <img src={greenOval} alt='oval' />
                        <span style={{...dayStyle}}>Понедельниц</span>
                        </Box>
                        <Box sx={{width: '18px', marginTop: '-8px'}}>
                        <MoreHorizIcon sx={{color: '#8F9BB3', cursor: 'pointer'}} />
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', marginTop: '10px'}}>
                        <Box onClick = {()=> navigate('/userHome')} sx={{...boxStyle}}>12:00 - 13:00</Box>
                        <Box onClick = {()=> navigate('/userHome')} sx={{...boxStyle, marginLeft: '13px'}}>14:00 - 15:00</Box>
                    </Box>
             </Box>
             <Box
                    sx={{
                    width: '100%',
                    height: '95px',
                    marginTop: '-10px'
                    }}
                >
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box sx={{width: 110}}>
                        <img src={greenOval} alt='oval' />
                        <span style={{...dayStyle}}>Вторник</span>
                        </Box>
                        <Box sx={{width: '18px', marginTop: '-8px'}}>
                        <MoreHorizIcon sx={{color: '#8F9BB3', cursor: 'pointer'}} />
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', marginTop: '10px', flexWrap: 'wrap'}}>
                        <Box onClick = {()=> navigate('/userHome')} sx={{...boxStyle}}>10:00 - 11:00</Box>
                        <Box onClick = {()=> navigate('/userHome')} sx={{...boxStyle, marginLeft: '13px'}}>11:00 - 12:00</Box>
                        <Box onClick = {()=> navigate('/userHome')} sx={{...boxStyle, marginLeft: '13px'}}>14:00 - 15:00</Box>
                        <Box onClick = {()=> navigate('/userHome')} sx={{...boxStyle, marginTop: '8px'}}>15:00 - 16:00</Box>
                        <Box onClick = {()=> navigate('/userHome')} sx={{...boxStyle, marginLeft: '13px', marginTop: '8px'}}>16:00 - 17:00</Box>
                        <Box onClick = {()=> navigate('/userHome')} sx={{...boxStyle, marginLeft: '13px', marginTop: '8px'}}>17:00 - 18:00</Box>
                    </Box>
             </Box>
             <Box
                    sx={{
                    width: '100%',
                    height: '95px',
                    marginTop: '10px'
                    }}
                >
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box sx={{width: 110}}>
                        <img src={greenOval} alt='oval' />
                        <span style={{...dayStyle}}>Четверг</span>
                        </Box>
                        <Box sx={{width: '18px', marginTop: '-8px'}}>
                        <MoreHorizIcon sx={{color: '#8F9BB3', cursor: 'pointer'}} />
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', marginTop: '10px'}}>
                        <Box onClick = {()=> navigate('/userHome')} sx={{...boxStyle}}>12:00 - 13:00</Box>
                        <Box onClick = {()=> navigate('/userHome')} sx={{...boxStyle, marginLeft: '13px'}}>14:00 - 15:00</Box>
                    </Box>
             </Box>
            </Box>
        </Box>
        <Footer cmp={'user'} home={true} handleShow = {handleShow}/>
     </Box>
    );
}