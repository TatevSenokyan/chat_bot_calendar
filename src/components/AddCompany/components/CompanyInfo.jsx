import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logoImg from './images/logo.png';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const placeholderStyle = {
    fontSize: '18px',
    lineHeight: '20px',
    fontFamily: 'Harmonia Sans Pro Cyr !important',
    fontStyle: 'normal !important',
    fontWeight: 400
};

const Input = styled('input')({
  display: 'none',
});

const inputStyle = {
  width: 358,
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

export default function CompanyInfo({
  handleCompany,
  handleDescription,
  company,
  description,
}) {
    return (
    <Box
      sx = {{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
       <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <img
            src={logoImg}
            style = {{width: 151}}
            alt='logo'
          />
        </IconButton>
      </label>
        <TextField
          sx={{
            ...inputStyle,
            border: '1px solid #8F9BB3',
            borderRadius: '10px',
            marginTop: '71px',
            '& 	.MuiOutlinedInput-input': {
                border: '1px solid transparent',
                height: '15px',
                '&::placeholder': {
                   ...placeholderStyle,
                }
            },
          }}
          value = {company}
          onChange = {handleCompany}
          id="outlined-basic"
          variant="outlined"
          placeholder = "Имя или  название компании"
        />
        <TextField
          sx={{
            ...inputStyle,
            minHeight: '89px !important',
            border: '1px solid #8F9BB3',
            borderRadius: '10px',
            marginTop: '30px',
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
           value = {description}
          onChange = {handleDescription}
          id="outlined-basic"
          variant="outlined"
          multiline
          placeholder = "Описание"
        />
    </Box>
    );
}