import React from "react";

const QuantumForum = () => {
  return (
    <div className="quantum-forum">
      <div className="quantum-forum-child" />
      <div className="quantum-forum-item" />
      <div className="quantum-forum-inner" />
      <b className="quantum-forum1">QUANTUM FORUM</b>
      <b className="join-the-quantum-container">
        <p className="join-the-quantum-community">
          <span className="join-the">{`Join the `}</span>
          <span className="quantum-community">Quantum Community</span>
        </p>
        <p className="join-the-quantum-community">
          <span>Discuss.</span>
          <span className="join-the">{` `}</span>
          <span className="learn">Learn.</span>
          <span className="join-the">{` `}</span>
          <span className="thrive">Thrive.</span>
        </p>
      </b>
      {/* User Interaction 1 */}
      <div className="user-interaction-1">
        <div className="user-interaction-1-child" />
        <img className="chat-image-icon" alt="" src="/chat-image@2x.png" />
        <div className="user-1-chat">
          <div className="user-1-chat-child" />
          <div className="just-secured-a">Just secured a Rare NFT! 🚀</div>
        </div>
        <div className="user-1-response">
          <img className="chat-image-icon1" alt="" src="/chat-image@2x.png" />
          <div className="user-1-chat1">
            <div className="user-1-chat-item" />
            <div className="congrats-on-the">
              Congrats on the rare find! 🎉 What's your strategy?
            </div>
          </div>
        </div>
      </div>
      {/* User Interaction 2 */}
      <div className="user-interaction-2">
        <div className="user-interaction-1-child" />
        <img className="chat-image-icon" alt="" src="/chat-image@2x.png" />
        <div className="user-1-chat2">
          <div className="user-1-chat-inner" />
          <div className="any-tips-on">
            Any tips on portfolio diversification?
          </div>
        </div>
        <div className="user-1-response1">
          <img className="chat-image-icon3" alt="" src="/chat-image@2x.png" />
          <div className="user-1-chat3">
            <div className="rectangle-div" />
            <div className="diversify-with-a">
              Diversify with a mix of stable and growth assets.
            </div>
          </div>
        </div>
      </div>
      {/* User Interaction 3 */}
      <div className="user-interaction-3">
        <div className="user-interaction-1-child" />
        <img className="chat-image-icon" alt="" src="/chat-image@2x.png" />
        <div className="user-1-chat4">
          <div className="user-1-chat-child1" />
          <div className="exciting-times-what">
            Exciting times! What updates are you most looking forward to?
          </div>
        </div>
        <div className="user-1-response2">
          <img className="chat-image-icon5" alt="" src="/chat-image@2x.png" />
          <div className="user-1-chat5">
            <div className="user-1-chat-child2" />
            <div className="weve-got-some">
              We've got some groundbreaking features in the pipeline. Stay
              tuned!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumForum;
