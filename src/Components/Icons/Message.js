export default function Message({ height, width, status }) {
   return (
      <>
         <svg
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g opacity="0.4">
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.1797 2.9473C15.1797 1.60652 16.2597 0.517761 17.5897 0.517761C18.9197 0.517761 19.9997 1.60652 19.9997 2.9473C19.9997 4.28808 18.9197 5.37683 17.5897 5.37683C16.2597 5.37683 15.1797 4.28808 15.1797 2.9473ZM11.3299 13.3828L14.2199 9.62359L14.1799 9.64375C14.3399 9.42197 14.3699 9.1397 14.2599 8.88767C14.1509 8.63565 13.9099 8.46427 13.6509 8.44411C13.3799 8.41386 13.1109 8.53484 12.9499 8.75662L10.5309 11.912L7.75995 9.71432C7.58995 9.58327 7.38995 9.53185 7.18995 9.55302C6.99095 9.58327 6.81095 9.69315 6.68995 9.85445L3.73095 13.7367L3.66995 13.8274C3.49995 14.149 3.57995 14.5623 3.87995 14.7851C4.01995 14.8758 4.16995 14.9363 4.33995 14.9363C4.57095 14.9464 4.78995 14.8244 4.92995 14.6339L7.43995 11.3767L10.2899 13.535L10.3799 13.5945C10.6999 13.7659 11.0999 13.6863 11.3299 13.3828ZM13.45 2.31452C13.41 2.56655 13.39 2.81857 13.39 3.0706C13.39 5.33884 15.21 7.17258 17.45 7.17258C17.7 7.17258 17.94 7.14334 18.19 7.10302V15.2374C18.19 18.6559 16.19 20.6822 12.79 20.6822H5.401C2 20.6822 0 18.6559 0 15.2374V7.77845C0 4.35089 2 2.31452 5.401 2.31452H13.45Z"
                  fill={status ? "#6254FF" : "#39394B"}
               />
            </g>
            <g opacity="0.4" filter="url(#filter0_d_1017_26700)">
               <ellipse
                  cx="17.5"
                  cy="3.03818"
                  rx="2.5"
                  ry="2.52026"
                  fill="white"
               />
            </g>
            <defs>
               <filter
                  id="filter0_d_1017_26700"
                  x="11"
                  y="0.517914"
                  width="13"
                  height="13.0405"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
               >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                     in="SourceAlpha"
                     type="matrix"
                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                     result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                     type="matrix"
                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                     mode="normal"
                     in2="BackgroundImageFix"
                     result="effect1_dropShadow_1017_26700"
                  />
                  <feBlend
                     mode="normal"
                     in="SourceGraphic"
                     in2="effect1_dropShadow_1017_26700"
                     result="shape"
                  />
               </filter>
            </defs>
         </svg>
      </>
   );
}
