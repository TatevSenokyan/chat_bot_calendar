import React, {useState} from 'react';
import timeImg from '../../AdminProfile/images/time.png';
import calImg from '../../AdminProfile/images/calendar.png';
import Button from '@mui/material/Button';
import Switch from './Switcher';
import Icon from '@mui/material/Icon';
import overlay from  './images/overlay.png';
import addImg from './images/add.png';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import greenOval from './images/greenOval.png';
import purppleOval from './images/purppleOval.png';
import blueOval from './images/blueOval.png';

import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {ru} from 'date-fns/locale'


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

const placeholderStyle = {
    fontSize: '18px',
    lineHeight: '20px',
    fontFamily: 'Harmonia Sans Pro Cyr !important',
    fontStyle: 'normal !important',
    fontWeight: 400
 };

 const buttonStyle = {
    textTransform: 'capitalize',
    color: '#222B45',
    height: '44px',
    borderRadius: '8px',
    fontStyle: 'italic',
    fontFamily: 'Harmonia Sans Pro Cyr',
 };

 const inputStyle = {
    width: 170,
    heigt: 50,
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px !important',
      '&::placeholder': {
         ...placeholderStyle,
      },
      '&.Mui-focused fieldset': {
         borderColor: '#735BF2 !important',
       },
    },
    '& .MuiInputLabel-root': {
      '&.Mui-focused ': {
        color: '#735BF2 !important'
      }
   }
  };


  const DateIcon = () => {
   return (
     <Icon>
       <img width={20} height={22} src={calImg}/>
     </Icon>
   );
 };

export default function Modal({handleCategory}) {
   const [meeting, setMeeting] = useState('');
   const [desc, setDesc] = useState('');
   const [calendarValue, setCalendarValue] = useState(null);
   const [startTimeValue, setStartTimeValue] = useState(null);
   const [endTimeValue, setEndTimeValue] = useState(null);
   const [remind, setRemind] = useState(true);

   const handleChange = (newValue) => {
      setCalendarValue(newValue);
   };

   const handleRemind = () => {
      setRemind(!remind);
   };

   // information ready for backend request
   const handleCreateMeeting = () => {
      const data = 'data for add company'+'\n'+'\n'+
      'meeting name:' + meeting + '\n'+
      'description:' + desc+'\n'+
      'date:' + calendarValue.toLocaleString().slice(0, 11)+'\n'+
      'startTime:' + startTimeValue+'\n'+
      'endTime:' + endTimeValue+'\n'+
      'remind option:' + remind+'\n'
       alert(data);
   };

    return (
        <Box sx={{
            width: 390,
            height: 623,
            marginTop: '180px',
            position: 'absolute',
            background: `url(${overlay})`,
            borderTopRightRadius: '30px',
            borderTopLeftRadius: '30px',
            display: 'flex',
            Zindex: 1000,
            flexDirection: 'column',
            alignItems: 'center',
         }}>
           <Box
             sx={{width: 360}}
           >
            <Box sx={{...titleStyle, textAlign: 'center', marginTop: '40px'}}>
               Добавить новую встречу
            </Box>
            <TextField
               sx={{
                  ...inputStyle,
                  width: 358,
                  height: 50,
                  marginTop: '21px',
                  border: '1px solid #8F9BB3',
                  borderRadius: '10px',
                  '& .MuiOutlinedInput-input': {
                     border: '1px solid transparent',
                     height: '15px',
                     '&::placeholder': {
                        ...placeholderStyle,
                     }
                  },
               }}
               value = {meeting}
               onChange = {(e) => setMeeting(e.target.value)}
               id="outlined-basic"
               variant="outlined"
               placeholder = "Название встречи"
            />
            <TextField
               sx={{
                  ...inputStyle,
                  width: 358,
                  minHeight: '89px !important',
                  border: '1px solid #8F9BB3',
                  borderRadius: '10px',
                  marginTop: '16px',
                  padding: 0,
                  '& 	.MuiOutlinedInput-input': {
                     '&::placeholder': {
                        ...placeholderStyle,
                     }
                  }
               }}
               inputProps={{
                  style: {
                  height: 89,
                  borderRadius: '10px !important',
                  },
               }}
               value = {desc}
               onChange = {(e) => setDesc(e.target.value)}
               id="outlined-basic"
               variant="outlined"
               multiline
               placeholder = "Описание"
            />

              <Box sx={{marginTop: '8px'}}>
                  <LocalizationProvider locale={ru} dateAdapter={AdapterDateFns}>
                     <DesktopDatePicker
                        sx={{
                           '& .MuiCalendarPicker-root': {
                              minWidth: 358,
                              maxWidth: 358,
                              background: 'red',
                           }
                        }}
                        label = "Дата"
                        inputFormat="dd/MM/yyyy"
                        value={calendarValue}
                        components={{
                           OpenPickerIcon: DateIcon,
                         }}
                        onChange={handleChange}
                        renderInput={(params) => <TextField
                            sx={{...inputStyle, ...placeholderStyle, width: 358}}
                            {...params}
                        />}
                     />
                  </LocalizationProvider>
                </Box>
           </Box>
             <Box mt ={'16px'} sx = {{width: '360px', display: 'flex'}}>
               <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  ampm = {false}
                  value={startTimeValue}
                  label = 'Начало'
                  onChange={(newValue) => {
                     setStartTimeValue(newValue);
                  }}
                  renderInput={(params) => <TextField
                     {...params} sx={{...inputStyle}}
                  />}
                 />
               </LocalizationProvider>
               <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                label = "Конец"
                  ampm = {false}
                  value={endTimeValue}
                  onChange={(newValue) => {
                     setEndTimeValue(newValue);
                  }}
                  renderInput={(params) => <TextField
                      {...params} sx={{...inputStyle, marginLeft: '14px'}}/>}
                 />
               </LocalizationProvider>
           </Box>
           <Box
             sx={{
                width: '360px',
                display: 'flex',
                marginTop: '15px',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              <Box
                sx={{...placeholderStyle, fontSize: '14px', letterSpacing: '1px'}}
              >
                 Напомнить
               </Box>
               <Box ml={'50px'}>
                  <Switch
                     remind = {remind}
                     handleRemind = {handleRemind}
                  />
               </Box>
           </Box>
           <Box sx={{width: '360px'}}>
              <Box sx={{...titleStyle}}>Выберите категорию</Box>
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
                 <Button
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
                </Button>
                 <Button
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
                 </Button>
              </Box>
           </Box>
           <Box sx={{width: 360, marginTop: '8px'}}>
             <Button
               sx={{
                  width: 150,
                  height: 17,
                  background: `url(${addImg})`,
                  backgroundRepeat: 'no-repeat',
               }}
             />
           </Box>
           <Box sx={{width: 360, marginTop: '8px'}}>
             <Button onClick = {handleCreateMeeting} sx={{
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
               Создать встречу
             </Button>
           </Box>
         </Box>
    )
}