import React from "react";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__inner">
        <div className="preloader__logo">Burak</div>
        <div className="preloader__line" style={{ width: 60 }} />
        <div className="preloader__subtitle">Fine Dining Experience</div>
      </div>
    </div>
  );
}
