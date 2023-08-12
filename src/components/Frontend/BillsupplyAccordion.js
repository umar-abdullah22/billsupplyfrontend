// BillsupplyAccordion.js

import React from 'react';
import { Accordion } from 'react-bootstrap';

const BillsupplyAccordion = ({
  title,
  eventName,
  onClick,
  active,
  content,
}) => {
  return (
    <div
      className={`accordion-card mb-15 ${
        active === eventName ? 'accordion-active' : ''
      }`}
    >
      <div className="card-header">
        <Accordion.Toggle
          as="h5"
          eventKey={eventName}
          aria-expanded={active === eventName ? 'true' : 'false'}
          onClick={() => onClick()}
        >
          {title}
        </Accordion.Toggle>
      </div>
      <Accordion.Collapse eventKey={eventName}>
        <div className="card-body">
          <p>{content}</p>
        </div>
      </Accordion.Collapse>
    </div>
  );
};

export default BillsupplyAccordion;
