import React, {useState}  from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';

const placeholderStyle = {
  fontFamily: 'Harmonia Sans Pro Cyr !important',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '15px',
  lineHeight: '20px',
  color: '#8F9BB3',
};

const checkbox = {
  '&.Mui-checked': {
    color: '#735BF2',
  },
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

const buttonStyle = {
  width: 92,
  height: 50,
  borderRadius: 2,
  borderColor: '#8F9BB3',
  textTransform: 'capitalize',
};

const titleStyle = {
  fontFamily: 'Harmonia Sans Pro Cyr !important',
  fontStyle: 'italic',
  fontWeight: 600,
  fontSize: '17px',
  lineHeight: '19px',
  color: '#222B45',
  letterSpacing: '0.75px',
};


export default function Schedule({
  select,
  handleSelect,
  startTimeValue,
  handleStart,
  endTimeValue,
  handleEnd,
  whatsApp,
  handleWhatsApp,
  link,
  handleLink,
  telegram,
  handleTelegram,
  skypeValue,
  handleChangeSkype,
  email,
  handleEmail,
  password,
  handlePassword,
  duration,
  handleDuration
}) {

    return (
    <Box
      sx = {{
        width: '100%',
        display: 'flex',
        marginTop: '26px',
        flexDirection: 'column',
      }}
    >
      <Box
        sx = {{
          ...titleStyle
        }}
      >
        График работы
      </Box>
      <FormControl
        sx={{
          ...inputStyle,
          width: 358,
          marginTop: '11px',
        }}>
        <InputLabel id="demo-simple-select-label">День недели</InputLabel>
        <Select
          label="День недели"
          sx = {{
            borderRadius: '10px !important',
            '& .MuiSelect-outlined': {
              maxWidth: 350
            },
            '& 	.MuiSelect-icon': {
               width: 30
            }
          }}
          multiple
          renderValue={(selected) => selected.join(', ')}
          IconComponent = {KeyboardArrowDownIcon}
          value = {select}
          onChange={handleSelect}
        >
          <MenuItem value={'Понедельник'}>
              <Checkbox sx = {{...checkbox}}
               checked={select.indexOf('Понедельник') > -1} />
              <ListItemText primary={'Понедельник'} />
          </MenuItem>
          <MenuItem value={'Вторник'}>
              <Checkbox sx = {{...checkbox}}
              checked={select.indexOf('Вторник') > -1} />
              <ListItemText primary={'Вторник'} />
          </MenuItem>
          <MenuItem value={'Среда'}>
              <Checkbox sx = {{...checkbox}}
              checked={select.indexOf('Среда') > -1} />
              <ListItemText primary={'Среда'} />
          </MenuItem>
          <MenuItem value={'Четверг'}>
              <Checkbox sx = {{...checkbox}} checked={select.indexOf('Четверг') > -1} />
              <ListItemText primary={'Четверг'} />
          </MenuItem>
          <MenuItem value={'Пятница'}>
              <Checkbox sx = {{...checkbox}}
              checked={select.indexOf('Пятница') > -1} />
              <ListItemText primary={'Пятница'} />
          </MenuItem>
          <MenuItem value={'Суббота'}>
              <Checkbox sx = {{...checkbox}}
              checked={select.indexOf('Суббота') > -1} />
              <ListItemText primary={'Суббота'} />
          </MenuItem>
          <MenuItem value={'Воскресенье'}>
               <Checkbox sx = {{...checkbox}}
               checked={select.indexOf('Воскресенье') > -1} />
              <ListItemText primary={'Воскресенье'} />
          </MenuItem>
        </Select>
      </FormControl>
      <Box mt ={'16px'} sx = {{width: '360px', display: 'flex'}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
                  ampm = {false}
                  value={startTimeValue}
                  label = 'Начало'
                  onChange={handleStart}
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
              onChange={handleEnd}
              renderInput={(params) => <TextField
                {...params} sx={{...inputStyle, marginLeft: '14px'}}/>}
            />
          </LocalizationProvider>
        </Box>
      <Box mt ={'25px'} sx = {{width: '100%', display: 'flex', flexDirection: 'column'}}>
      <Box
        sx = {{...titleStyle}}
      >
        Тайминг встречь
      </Box>
      <Box mt = {'16px'} sx = {{width: '100%', display: 'flex'}}>
         <Button
           onClick={()=> handleDuration('15 мин')}
           sx={{
            ...buttonStyle,
            ...placeholderStyle,
            '&:hover': {
              background: duration === '15 мин' && '#735BF2',
            },
            color: duration === '15 мин' ? '#FFF' : '#8F9BB3',
            backgroundColor: duration === '15 мин' && '#735BF2',
          }}
           variant='outlined'
         >
           15 мин
         </Button>
         <Button
           onClick={()=> handleDuration('30 мин')}
           sx={{
             ...buttonStyle,
             marginLeft: '14px',
             ...placeholderStyle,
             '&:hover': {
              background: duration === '30 мин' && '#735BF2',
            },
             color: duration === '30 мин' ? '#FFF' : '#8F9BB3',
             backgroundColor: duration === '30 мин' && '#735BF2',
            }}
            variant='outlined'
         >
           30 мин
         </Button>
         <Button
           onClick={()=> handleDuration('60 мин')}
           sx={{
             ...buttonStyle,
             ...placeholderStyle,
             marginLeft: '14px',
             '&:hover': {
              background: duration === '60 мин' && '#735BF2',
            },
             color: duration === '60 мин' ? '#FFF' : '#8F9BB3',
             backgroundColor: duration === '60 мин' && '#735BF2',
          }}
          variant='outlined'
         >
           60 мин
         </Button>
      </Box>
      <Box mt ={'25px'} sx = {{width: '100%', display: 'flex', flexDirection: 'column'}}>
        <Box
          sx = {{...titleStyle}}
        >
          Способ связи
        </Box>
        <TextField
            value = {whatsApp}
            onChange = {handleWhatsApp}
            id="outlined-basic"
            variant="outlined"
            placeholder = 'WhatsApp'
            sx = {{
              ...inputStyle,
              width: 358,
              marginTop: '16px',
            }}
         />
         <TextField
            value = {link}
            onChange = {handleLink}
            id="outlined-basic"
            variant="outlined"
            placeholder = 'Ссылка на встречу'
            sx = {{
              ...inputStyle,
              width: 358,
              marginTop: '16px',
            }}
         />
         <TextField
            value = {skypeValue}
            onChange = {handleChangeSkype}
            id="outlined-basic"
            variant="outlined"
            placeholder = 'Skype'
            sx = {{
              ...inputStyle,
              width: 358,
              marginTop: '16px',
            }}
         />
         <TextField
            value = {telegram}
            onChange = {handleTelegram}
            id="outlined-basic"
            variant="outlined"
            placeholder = 'Telegram account'
            sx = {{
              ...inputStyle,
              width: 358,
              marginTop: '16px',
            }}
         />

      </Box>
      <Box mt ={'25px'} sx = {{width: '100%', display: 'flex', flexDirection: 'column'}}>
        <Box
          sx = {{...titleStyle}}
        >
          Данные для доступа
        </Box>
        <TextField
            value = {email}
            onChange = {handleEmail}
            id="outlined-basic"
            variant="outlined"
            placeholder = 'Укажите email'
            sx = {{
              ...inputStyle,
              width: 358,
              marginTop: '16px',
            }}
         />
        <TextField
            type = 'password'
            value = {password}
            onChange = {handlePassword}
            id="outlined-basic"
            variant="outlined"
            placeholder = 'Придумайте пароль'
            sx = {{
              ...inputStyle,
              width: 358,
              marginTop: '16px',
            }}
         />
      </Box>
      </Box>

    </Box>
    );
}