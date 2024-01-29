import React from "react";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <div className="call-to-action-child" />
      <div className="call-to-action-item" />
      <b className="are-you-ready-container">
        <span>{`ARE YOU `}</span>
        <span className="ready">READY?</span>
      </b>
      <b className="be-a-part-container">
        <p className="join-the-quantum-community">BE A PART OF THE</p>
        <p className="join-the-quantum-community">
          <span>{`NEXT `}</span>
          <span className="big-thing">BIG THING</span>
        </p>
      </b>
      <div className="view-pricing">
        <b className="get-quantum-prime-container">
          <span>{`GET quantum `}</span>
          <span className="prime">Prime</span>
        </b>
      </div>
    </div>
  );
};

export default CallToAction;
