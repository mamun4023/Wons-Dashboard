export default function Chart({ height, width, status }) {
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
                  d="M7.33 2.76953H16.669C20.07 2.76953 21.99 4.71417 22 8.14273V17.5584C22 20.986 20.07 22.9316 16.669 22.9316H7.33C3.929 22.9316 2 20.986 2 17.5584V8.14273C2 4.71417 3.929 2.76953 7.33 2.76953ZM12.0494 18.7583C12.4804 18.7583 12.8394 18.4357 12.8794 18.0022V7.72962C12.9194 7.41711 12.7704 7.10359 12.5004 6.93322C12.2194 6.76184 11.8794 6.76184 11.6104 6.93322C11.3394 7.10359 11.1904 7.41711 11.2194 7.72962V18.0022C11.2704 18.4357 11.6294 18.7583 12.0494 18.7583ZM16.6499 18.7571C17.0699 18.7571 17.4289 18.4345 17.4799 18.0011V14.6945C17.5089 14.3709 17.3599 14.0694 17.0889 13.8981C16.8199 13.7267 16.4799 13.7267 16.1999 13.8981C15.9289 14.0694 15.7799 14.3709 15.8199 14.6945V18.0011C15.8599 18.4345 16.2189 18.7571 16.6499 18.7571ZM8.21945 18.0023C8.17945 18.4358 7.82045 18.7584 7.38945 18.7584C6.95945 18.7584 6.59945 18.4358 6.56045 18.0023V11.0363C6.53045 10.7227 6.67945 10.4112 6.95045 10.2399C7.21945 10.0685 7.56045 10.0685 7.83045 10.2399C8.09945 10.4112 8.25045 10.7227 8.21945 11.0363V18.0023Z"
                  fill={status ? "#6254FF" : "#39394B"}
               />
            </g>
         </svg>
      </>
   );
}
