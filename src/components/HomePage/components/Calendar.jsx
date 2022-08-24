import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import line from './images/line.png';
import green from './images/oval1.png';
import blue from './images/oval2.png';
import purpple from './images/oval3.png';

const CalendarContainer = styled.div`
   width: 370,
   height: 334,
   position: relative,
   flex-basis: 0%;
   // background-color: #d4f7d4;
   margin-top: 20px;
   border-radius: 3px;
   .react-calendar__month-view__weekdays {
      text-align: center;
      color: #8F9BB3;
      font-family: 'Harmonia Sans Pro Cyr';
      font-style: italic;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
    };
    button {
      background-color: #FFF;
      border: 0;
      margin: 8px 10px 8px 11px;
      border-radius: 3px;
      max-width: 34px !important;
      min-width: 34px !important;
      color: #222B45;
      padding: 5px 5px;
      font-family: 'Harmonia Sans Pro Cyr';
      font-style: italic;
      font-weight: 600;
      font-size: 15px;
      text-align: left

      &:hover {
        background-color: #FFF;
      }

      &:active {
        background-color: #FFF;
      }
    };
    .react-calendar__navigation {
      display: flex;

      .react-calendar__navigation__label {
        font-weight: bold;
      }

      .react-calendar__navigation__arrow {
        flex-grow: 0.333;
      }
    }
    .react-calendar__month-view__days__day--neighboringMonth {
      opacity: 0.7;
    }
    .react-calendar__month-view__days__day--weekend {
      color: #8F9BB3;
    }

    .react-calendar__navigation__next-button {
       border: 1px solid #CED3DE;
       position: absolute;
       border-radius: 10px;
       max-width: 34px !important;
       min-width: 34px !important;
       height: 33px !important;
       margin-left: 330px
     }
     .react-calendar__navigation__prev-button {
        border: 1px solid #CED3DE;
        position: absolute;
        border-radius: 10px;
        max-width: 34px !important;
        min-width: 34px !important;
        height: 34px !important;
        margin-right: 320px
      }
    .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__next2-button {
       max-width: 75px !important;
       min-width: 75px !important;
       opacity: 0
    }
    .react-calendar__tile--range {
      background-color: #735BF2;
      color: #FFF;
      border-radius: 10px;
  }
  .react-calendar__navigation .react-calendar__navigation__label {
   font-weight: bold;
   max-width: 55px !important;
   min-width: 55px !important;
   margin-left: 60px;
  }
`;


export default function CalendarPicker() {
   const [date, setDate] = useState(new Date());
   return(
      <Box
        sx={{
          width: 390,
          height: 334,
          zIndex: -1000,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: '36px',
        }}>
          <img src={green} style={{position: 'absolute', marginLeft: '23px', marginTop: '15px'}}/>

          <img src={blue} style={{position: 'absolute', marginLeft: '73px', marginTop: '15px'}}/>
          <img src={purpple} style={{position: 'absolute', marginLeft: '80px', marginTop: '15px'}}/>
          <img src={green} style={{position: 'absolute', marginLeft: '87px', marginTop: '15px'}}/>

          <img src={purpple} style={{position: 'absolute', marginLeft: '130px', marginTop: '98px'}}/>
          <img src={green} style={{position: 'absolute', marginLeft: '138px', marginTop: '98px'}}/>

          <img src={purpple} style={{position: 'absolute', marginLeft: '245px', marginTop: '15px'}}/>

          <img src={blue} style={{position: 'absolute', marginLeft: '240px', marginBottom: '65px'}}/>
          <img src={purpple} style={{position: 'absolute', marginLeft: '247px', marginBottom: '65px'}}/>
          <img src={green} style={{position: 'absolute', marginLeft: '254px', marginBottom: '65px'}}/>

          <img src={blue} style={{position: 'absolute', marginLeft: '23px', marginTop: '190px'}}/>
          <img src={purpple} style={{position: 'absolute', marginLeft: '30px', marginTop: '190px'}}/>
          <CalendarContainer>
            <Calendar
               locale='ru'
               prevLabel={<ArrowBackIosIcon fontSize='small' sx={{padding: '0px 5px'}}/>}
               nextLabel={<ArrowForwardIosIcon fontSize='small' sx={{padding: '0px 5px'}}/>}
               onChange={setDate}
               value={date}
            />
          </CalendarContainer>
          <img src={line} alt='line' style={{width: 26, margin: 'auto'}}/>
      </Box>
   );
}