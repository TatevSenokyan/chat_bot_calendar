import React from 'react';
import Box from '@mui/material/Box';
import footerImg from '../images/footer.png';
import buttonPng from '../images/button.png';
import userCalPng from '../images/userCal.png';
import calendarImg from '../images/calendar.png';
import purppleCalendarImg from '../images/purppleCalendar.png';
import timeImg from '../images/time.png';
import bellImg from '../images/bell.png';
import userImg from '../images/user.png';
import grayUserImg from '../images/grayUser.png';
import {useNavigate} from 'react-router-dom';

export default function Footer(props) {
  const navigate = useNavigate();
    return(
       <Box
         sx={{
          width: '390px',
          height: '116px',
          marginTop: props.home ? '-5px' : '50px',
          backgroundImage: `url(${footerImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 0%',
          backgroundSize: '450px 140px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
       >
         <img
           onClick = {props.handleShow}
           src = {props.cmp  ? userCalPng : buttonPng}
           style={{
               width: '100px',
               height: '100px',
               cursor: 'pointer',
               marginTop: '-50px',
            //    background: 'gray',
           }}
        />
        { !props.cmp ? <Box
           sx={{
              width: '360px',
              height: '10px',
              marginTop: '-20px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
        >
           <Box
              sx = {{
                width: 100,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <img
                onClick = {()=> navigate('/homePage')}
                src={props.home ? purppleCalendarImg : calendarImg}
                style={{width: 18, height: 18, cursor: 'pointer'}}
              />
              <img
                src={timeImg}
                style={{width: 18, height: 18, cursor: 'pointer'}}
              />

           </Box>
           <Box
              sx = {{
                width: 100,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <img
                src={bellImg}
                style={{width: 18, height: 18, cursor: 'pointer'}}
              />
              <img
                src={props.home ? grayUserImg : userImg}
                style={{width: 18, height: 18, cursor: 'pointer'}}
              />
           </Box>
        </Box> :

          <Box
           sx={{
              width: '360px',
              height: '10px',
              marginTop: '-20px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
        >
           <Box
              sx = {{
                width: 100,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={bellImg}
                style={{width: 18, height: 18, cursor: 'pointer'}}
              />
           </Box>
           <Box
              sx = {{
                width: 100,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={props.cmp ? grayUserImg : userImg}
                style={{width: 18, height: 18, cursor: 'pointer'}}
              />
           </Box>
        </Box>

         }

       </Box>
    );
}
