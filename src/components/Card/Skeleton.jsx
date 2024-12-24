import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={215}
    height={453}
    viewBox="0 0 215 453"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="1" y="336" rx="8" ry="8" width="215" height="31" />
    <rect x="164" y="275" rx="0" ry="0" width="0" height="16" />
    <rect x="0" y="383" rx="10" ry="10" width="60" height="26" />
    <rect x="0" y="423" rx="8" ry="8" width="66" height="26" />
    <rect x="149" y="383" rx="6" ry="6" width="59" height="24" />
    <rect x="282" y="8" rx="0" ry="0" width="215" height="320" />
    <rect x="0" y="0" rx="0" ry="0" width="215" height="320" />
    <rect x="148" y="425" rx="8" ry="8" width="64" height="26" />
  </ContentLoader>
);

export default Skeleton;
