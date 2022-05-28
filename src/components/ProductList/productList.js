import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./productlist.css";
import { useProductListContext } from '../../contexts/ProductListContext'
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';


const LabelTypography = styled('Typography')(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1rem',
  width: '100%',
}));






export default function ProductList() {

  const { testing } = useProductListContext()

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div >
      <Accordion
        disabled
      >
        <AccordionSummary
          sx={{
            background: 'rgba(255, 202, 64, 1)'
          }}
          expandIcon={< ExpandMoreIcon className='disabledIcon' />}
        >
          <LabelTypography >Count</LabelTypography>
          <LabelTypography>Order ID</LabelTypography>
          <LabelTypography>Business Name</LabelTypography>
          <LabelTypography>Shipping/Pickup Date</LabelTypography>
          <LabelTypography>Order Status</LabelTypography>

        </AccordionSummary>

        <AccordionDetails>

        </AccordionDetails>

      </Accordion>


      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          className='testing'
          sx={{

          }}
          expandIcon={< ExpandMoreIcon />}
        >
          <Typography
            sx={{
              width: '100%',
            }}
          >Count</Typography>
          <Typography sx={{
            width: '100%',
          }}
          >Order ID</Typography>
          <Typography
            sx={{
              width: '100%',
            }}>Business Name</Typography>
          <Typography
            sx={{
              width: '100%',
            }}>Shipping/Pickup Date</Typography>
          <Typography
            sx={{
              width: '100%',
            }}>Order Status</Typography>

        </AccordionSummary>

        <AccordionDetails>

        </AccordionDetails>

      </Accordion>



    </div >

  );
}