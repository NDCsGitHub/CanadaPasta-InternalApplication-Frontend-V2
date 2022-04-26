import React from 'react'
import {useAccountContext} from '../../../contexts/AccountContext'

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditOffOutlinedIcon from '@mui/icons-material/EditOffOutlined';


export default function AccountInput() {

    //Account Info Context
    const {accountInfo, handleInputValue, accountSelector, handleClickEdit} = useAccountContext()


    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    

      


  return (
    <>
        {accountSelector(accountInfo).map((input, index)=> {

            return (
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" key={index} index={index}>
        
                    <InputLabel htmlFor="outlined-adornment-password">{input['InputType']}</InputLabel>
            
                    <OutlinedInput
                        id="outlined-adornment-password"
                        value={input['Value']}
                        onChange={(e)=>handleInputValue(e, input)}
                        disabled={input['DisableEdit']}
                        endAdornment={

                            <InputAdornment position="end"> 
  
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={(e) => handleClickEdit(e, input)}  
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {input['DisableEdit'] ? <EditOutlinedIcon /> : <EditOffOutlinedIcon />}
                                </IconButton>
                                
                            </InputAdornment>

                        }
                        label={input['InputType']}
                    />
                </FormControl>
            )
            
        })}
    </>

  )
}
