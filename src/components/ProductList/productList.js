import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./productlist.css";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ProductList() {
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
          <Typography className ="TESTING">Product Name:</Typography>
          <Typography className ="TESTING">产品:</Typography>
          <Typography className ="TESTING">Price:</Typography>

          <IconButton className = "BUTTON"
              onClick={onClickEdit}
              color="warning"
              aria-label="Edit"
            >
              <EditIcon />
            </IconButton>
        </AccordionSummary>
        <AccordionDetails>
          
          <Typography >Description:</Typography>
          <Typography ></Typography>
          <Typography>介绍:</Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}