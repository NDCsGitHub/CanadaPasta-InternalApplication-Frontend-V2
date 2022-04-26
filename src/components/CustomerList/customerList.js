import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./customerlist.css";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function CustomerList() {
  function onClickEdit(event) {
    event.stopPropagation();
    // Handle click here
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className ="TESTING1">企业名称: </Typography>
          <Typography className ="TESTING1">Business Name: </Typography>
          <Typography className ="TESTING1">Contact Person:</Typography>

          <IconButton className = "BUTTON1"
              onClick={onClickEdit}
              color="warning"
              aria-label="Edit"
            >
              <EditIcon />
            </IconButton>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>Phone:</Typography>
          <Typography >Address:</Typography>
          <Typography >Email:</Typography>
          <Typography>Customer Type:</Typography>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}