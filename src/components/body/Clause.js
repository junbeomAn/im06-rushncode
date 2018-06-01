import React, { Component } from 'react';
import ClauseShowcase from '../showcases/ClauseShowcase';
import ClauseContent from './ClauseContent';
import PrivacyContent from './PrivacyContent';


const Clause = () => {
  const url = window.location.href.split('/')[3];
  return (
    <div className="clause-container">
      <ClauseShowcase />
      <div className="clause-wrapper">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a className={`nav-item nav-link ${url === 'clause' && 'active'}`} id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">이용약관</a>
            <a className={`nav-item nav-link ${url === 'information' && 'active'}`} id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">개인정보 처리방침</a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className={`tab-pane fade ${url === 'clause' && 'show active'}`} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><ClauseContent /></div>
          <div className={`tab-pane fade ${url === 'information' && 'show active'}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><PrivacyContent /></div>
        </div>
      </div>
    </div>
  )
}


export default Clause;
