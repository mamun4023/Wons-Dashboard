import React from "react";
import Chart from "react-apexcharts";
import moment from "moment";

export default function Areahart() {
   var options = {
      series: [44, 55, 41],
      chart: {
         type: "donut",
      },
      fill: {
         colors: ["#3A36DB", "#2FE5A7", "#FF69B4"],
      },
      responsive: [
         {
            breakpoint: 480,
            options: {
               chart: {
                  width: 600,
               },
               legend: {
                  position: "right",
               },
            },
         },
      ],
   };

   return (
      <div className="bg-white m-2 w-full h-[408px]">
         <h3 className="p-3 text-[18px] font-medium text-text-dark">
            Analytics
         </h3>
         <Chart
            options={options}
            series={options.series}
            type="donut"
            width="100%"
            height="350px"
         />
      </div>
   );
}
