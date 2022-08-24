import React, {useState} from 'react';
import Box from '@mui/material/Box';
import CompanyInfo from './components/CompanyInfo';
import Schedule from './components/Schedule';
import Button from '@mui/material/Button';

const buttonStyle = {
  width: 92,
  height: 50,
  borderRadius: 2,
  borderColor: '#8F9BB3',
  textTransform: 'capitalize',
};

export default function AddCompany() {
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [startTimeValue, setStartTimeValue] = useState(null);
  const [endTimeValue, setEndTimeValue] = useState(null);
  const [select, setSelect] = useState([]);
  const [whatsApp, setWhatsApp] = useState('');
  const [link, setLink] = useState('');
  const [skypeValue, setSkypeValue] = useState('');
  const [telegram, setTelegram] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [duration, setDuration] = useState('15 мин');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleChangeSkype = (e) => {
    setSkypeValue(e.target.value);
  };

  const handleTelegram = (e) => {
    setTelegram(e.target.value);
  };

  const handleSelect = (event) => {
    const {
      target: {value},
    } = event;
    // console.log(value);
    setSelect(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleStart = (newVal) => {
    setStartTimeValue(newVal);
  };

  const handleEnd = (newVal) => {
    setEndTimeValue(newVal);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleWhatsApp = (e) => {
    setWhatsApp(e.target.value);
  };

  const handleLink = (e) => {
    setLink(e.target.value);
  };

  const handleDuration = (val) => {
     setDuration(val);
  };

  // information ready for backend request
  const handleCreate = () => {
    const data = 'data for add company'+'\n'+'\n'+
    'company:' + company + '\n'+
    'description:' + description+'\n'+
    'day:' + select+'\n'+
    'startTime:' + startTimeValue+'\n'+
    'endTime:' + endTimeValue+'\n'+
    'duration:' + duration+'\n'+
    'whatsApp meeting:' + whatsApp+'\n'+
    'link meeting:' + link+'\n'+
    'skype meeting:' + skypeValue+'\n'+
    'telegram meeting:' + telegram+'\n';
     alert(data);
  };

    return (
    <Box
      sx = {{
        width: '390px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
       sx = {{
        width: '360px',
        marginTop: '80px',
        height: 'auto',
       }}
      >
        <CompanyInfo
          company = {company}
          description = {description}
          handleCompany = {handleCompany}
          handleDescription = {handleDescription}
        />
        <Schedule
          startTimeValue = {startTimeValue}
          handleStart = {handleStart}
          endTimeValue = {endTimeValue}
          handleEnd = {handleEnd}
          select = {select}
          handleSelect = {handleSelect}
          whatsApp = {whatsApp}
          handleWhatsApp = {handleWhatsApp}
          link = {link}
          handleLink = {handleLink}
          skypeValue = {skypeValue}
          handleChangeSkype = {handleChangeSkype}
          telegram = {telegram}
          handleTelegram = {handleTelegram}
          email = {email}
          handleEmail = {handleEmail}
          password = {password}
          handlePassword = {handlePassword}
          duration = {duration}
          handleDuration = {handleDuration}
        />
        <Button
           onClick = {handleCreate}
           variant='outlined'
           sx = {{
             ...buttonStyle,
             width: '100%',
             color: '#FFF',
             marginTop: '41px',
             marginBottom: '148px',
             '&:hover': {
              background: '#735BF2',
            },
             background: '#735BF2',
           }}
         >
           Создать кабинет
         </Button>
      </Box>
    </Box>
    );
}

