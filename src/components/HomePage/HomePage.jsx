import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Calendar from './components/Calendar';
import greenOval from './components/images/greenOval.png';
import purppleOval from './components/images/purppleOval.png';
import blueOval from './components/images/blueOval.png';
import background from  './components/images/background.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Footer from '../AdminProfile/components/Footer';
import Modal from './components/Modal';
import Category from './components/Category';


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

const timeStyle = {
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


export default function HomePage() {
   const [more, setMore] = useState(false);
   const [show, setShow] = useState(false);
   const [categoryModal, setCategoryModal] = useState(false);

   const handleMore = () => {
     setMore(!more);
   };

   const handleShow = () => {
      setShow(!show);
   };

   const handleCategory = () => {
      setShow(!show);
      setCategoryModal(!categoryModal);
   };

   return(
      <Box
        sx={{
          width: 390,
          display: 'flex',
          zIndex: 100,
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
         {show &&  <Modal handleCategory={handleCategory}/>}
         {categoryModal && <Category />}
         <Calendar />
         <Box
           sx={{
            width: 358
           }}
         >
           <Box
             sx={{
               width: '100%',
               height: '95px',
               marginTop: '30px',
               backgroundImage: `url(${background})`,
             }}
           >
             <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{width: 94}}>
                   <img src={greenOval} alt='oval' />
                   <span style={{...timeStyle}}>10:00-13:00</span>
                </Box>
                <Box sx={{width: '18px', marginTop: '-8px'}}>
                   <MoreHorizIcon sx={{color: '#8F9BB3', cursor: 'pointer'}} />
                </Box>
             </Box>
             <Box sx={{...titleStyle}}>
               Design new UX flow for Michael
             </Box>
             <Box sx={{...textStyle}}>
               Start from screen 16
             </Box>
           </Box>
           <Box
           sx={{
            width: 358
           }}
         >
           <Box
             sx={{
               width: '100%',
               height: '95px',
               marginTop: '30px',
               backgroundImage: `url(${background})`,
             }}
           >
             <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{width: 94}}>
                   <img src={purppleOval} alt='oval' />
                   <span style={{...timeStyle}}>14:00-15:00</span>
                </Box>
                <Box sx={{width: '18px', marginTop: '-8px'}}>
                   <MoreHorizIcon sx={{color: '#8F9BB3', cursor: 'pointer'}} />
                </Box>
             </Box>
             <Box sx={{...titleStyle}}>
               Brainstorm with the team
             </Box>
             <Box sx={{...textStyle}}>
               Define the problem or question that..
               <span
                 onClick={handleMore} style={{color: '#735BF2', cursor: 'pointer'}}>
                  Еще
               </span>
               {more && <p style={{marginTop: '-0.5px'}}>the brainstorming session will aim to address.
               The question should be clear and concise.</p>}
             </Box>
           </Box>
         </Box>
         <Box
           sx={{
            width: 358
           }}
         >
           <Box
             sx={{
               width: '100%',
               height: '95px',
               marginTop: '30px',
               backgroundImage: `url(${background})`,
             }}
           >
             <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{width: 94}}>
                   <img src={blueOval} alt='oval'  />
                   <span style={{...timeStyle}}>19:00-20:00</span>
                </Box>
                <Box sx={{width: '18px', marginTop: '-8px'}}>
                   <MoreHorizIcon sx={{color: '#8F9BB3', cursor: 'pointer'}} />
                </Box>
             </Box>
             <Box sx={{...titleStyle}}>
               Workout with Ella
             </Box>
             <Box sx={{...textStyle}}>
               We will do the legs and back workout
             </Box>
           </Box>

         </Box>
         </Box>
         <Footer home={true} handleShow = {handleShow}/>
      </Box>
   );
}
