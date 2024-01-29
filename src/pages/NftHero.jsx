import React from "react";

const NftHero = () => {
  return (
    <div className="nft-hero">
      <div className="nft-hero-child" />
      <b className="discover-and-collect-container">
        <span className="lorem-ipsum-dolor-container1">
          <p className="join-the-quantum-community">Discover</p>
          <p className="join-the-quantum-community">
            <span>{`and collect `}</span>
            <span className="rare-nfts">RARE NFTs</span>
          </p>
        </span>
      </b>
      <b className="the-most-secure">
        The most secure marketplace for buying and selling unique crypto assets.
      </b>
      <div className="buy-nfts2">
        <div className="buy-nfts-child" />
        <b className="explore-now">EXPLORE NOW</b>
      </div>
      <div className="sell-nfts2">
        <div className="sell-nfts-child" />
        <b className="rare-finds">RARE FINDS</b>
      </div>
      <img
        className="storyline-cryptocurrency-and-n-icon"
        alt=""
        src="/storylinecryptocurrencyandnftmarketanalytics-1@2x.png"
      />
    </div>
  );
};

export default NftHero;
