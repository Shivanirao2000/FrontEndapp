import * as React from "react";

function SvgLastTeamBanner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1820 682.36" width="1em" height="1em" {...props}>
      <defs>
        <linearGradient
          id="last_team_banner_svg__a"
          y1={341.18}
          x2={1820}
          y2={341.18}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#00e1fd" />
          <stop offset={0.12} stopColor="#01cffa" />
          <stop offset={0.37} stopColor="#029ff4" />
          <stop offset={0.72} stopColor="#0552e9" />
          <stop offset={1} stopColor="#070fdf" />
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <path
          d="M1820 51.5v630.86H0v-541.3c228.65-12.29 274.18-43.41 473.79-70.53q32.55-4.43 66.37-8.9C825.66 23.86 971.5 4.9 1123.3 1.11a3612.45 3612.45 0 01689.54 49.17q3.62.6 7.16 1.22z"
          fill="url(#last_team_banner_svg__a)"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

export default SvgLastTeamBanner;
