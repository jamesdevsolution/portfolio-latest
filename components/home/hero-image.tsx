import * as React from "react";

const HeroImage = () => (
  <div className="relative w-full flex justify-center items-center">
    <div
      className="relative"
      style={{
        maxWidth: "800px",
        width: "100%",
      }}
    >
      <img
        // src="/images/heroImage.png"
        src="/images/heroPhoto.png"
        alt="Hero"
        className="w-full h-auto -z-1"
        style={{
          // WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 0%, black 5%, transparent 100%)",
          // maskImage: "radial-gradient(ellipse 100% 100% at 50% 0%, black 5%, transparent 100%)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      />
    </div>
  </div>
);

export default HeroImage;