import React from 'react';
import angleLeft from '../../images/angleLeft.png';
import angleRight from '../../images/angleRight.png';

export const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
  return(
    <div id="header">
      <div className='link-months'>
        
        <span className='calendarSpan' >Calender</span>
        <div className='calendarDiv'>
          <button className='chevron' onClick={onBack} id="backButton"><img src={angleLeft} alt=''></img></button>
          <div id="monthDisplay">{dateDisplay}</div>
          <button className='chevron' onClick={onNext} id="nextButton"><img src={angleRight} alt=''></img></button>
        </div>
      </div>
    </div>
  );
};
