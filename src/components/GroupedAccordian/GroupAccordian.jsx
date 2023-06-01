import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavLink from '../Link/Link';

const GroupAccordion = ({ title, accordions }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {accordions.map((accordion, index) => {
          console.log(accordion,index);
          return(
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{`User Story ${index+1}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <NavLink route={`UserStory/${accordion.id}/Requirements`} name='Requirements'></NavLink>
                <NavLink route={`UserStory/${accordion.id}/Tasks`} name='Tasks'></NavLink>
                <NavLink route={`UserStory/${accordion.id}/Output`} name='Output'></NavLink>
              </AccordionDetails>
            </Accordion>
          )})}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default GroupAccordion;
