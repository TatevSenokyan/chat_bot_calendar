import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Calendar from '../HomePage/components/Calendar';
import Footer from '../AdminProfile/components/Footer';
import Button from '@mui/material/Button';
import Modal from './UserModal';


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
    width: 92,
    height: 50,
    borderRadius: 2,
    borderColor: '#8F9BB3',
    textTransform: 'capitalize',
    color: '#8F9BB3',
};

const boxStyle = {
    border: '1px solid #8F9BB3',
    fontFamily: 'Harmonia Sans Pro Cyr',
    fontStyle: 'normal',
    fontWeight: 400,
    width: 94,
    cursor: 'pointer',
    height: 35,
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '0.75px',
    color: '#8F9BB3',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '16px'
};

const times = [
  '10:00 - 11:00', '10:00 - 11:00', '10:00 - 11:00',
  '10:00 - 11:00', '10:00 - 11:00', '10:00 - 11:00',
  '10:00 - 11:00', '10:00 - 11:00', '10:00 - 11:00',
];

export default function HomePage() {
   const [clicked, setClicked] = useState(1);
   const [show, setShow] = useState(false);

   const handleShow = () => {
      setShow(!show);
   };

   const handleClick = (index) => {
      setClicked(index)
   };

   return(
      <Box
        sx={{
          width: 390,
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
         {show && <Modal />}
         <Calendar />
         <Box
           sx={{
            width: 358
           }}
         >
            <Box sx={{...titleStyle, marginTop: '20px'}}>
               Свободное время для записи
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {times.map((item, i) => <Box
                   key = {i}
                   onClick = {() => handleClick(i)}
                   sx={{
                      ...boxStyle,
                      marginLeft: i%3 ? '13px' : 0,
                      backgroundColor: i===clicked && '#735BF2',
                      color: i===clicked && '#FFF',
                   }}>{item}</Box>)}
            </Box>

         </Box>
         <Button
                 variant='outlined'
                 sx={{
                   ...buttonStyle,
                   width: '360px',
                   background: '#735BF2',
                   minHeight: '50px !important',
                   marginTop: '30px',
                   color: '#FFF',
                   '&:hover': {
                      backgroundColor: '#735BF2',
                    },
                 }}
               >
                 Записаться на консультацию
               </Button>
         <Box sx={{marginTop: '90px'}}>
            <Footer home={true} cmp={'user'} handleShow = {handleShow}/>
         </Box>
      </Box>
   );
}