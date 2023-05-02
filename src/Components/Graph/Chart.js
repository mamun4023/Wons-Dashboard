import React from "react";
import Chart from "react-apexcharts";

export default function Areahart() {
   const Data = {
      options: {
         chart: {
            toolbar: false,
            parentHeightOffset: 0,
         },
         grid: {
            show: false,
         },
         stroke: {
            show: false,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
         },
         dataLabels: {
            enabled: false,
         },
         labels: {
            show: false,
         },

         fill: {
            type: "gradient",

            colors: ["#3A36DB"],
            gradient: {
               shade: "dark",
               type: "vertical",
               shadeIntensity: 0.5,

               inverseColors: true,
               opacityFrom: 0.3,
               opacityTo: 1,
               stops: [0, 100],
               colorStops: [],
            },
         },

         xaxis: {
            labels: {
               show: false,
            },
         },
         yaxis: {
            labels: {
               show: false,
            },
         },
      },

      series: [
         {
            data: [30, 10, 45, 20, 49, 40, 70],
         },
      ],
   };

   return (
      <div>
         <Chart
            options={Data.options}
            series={Data.series}
            type="area"
            width="100%"
            // height="100%"
         />
      </div>
   );
}
