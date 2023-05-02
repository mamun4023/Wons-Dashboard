import React from "react";
import Chart from "react-apexcharts";
import moment from "moment";

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
            show: true,
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
               show: true,
            },
         },

         yaxis: {
            labels: {
               show: true,
            },
         },
      },

      series: [
         {
            data: [30, 10, 45, 20, 49, 40, 70, 80, 100],
         },
      ],
   };

   return (
      <div className="bg-white m-2 w-full h-[408px]">
         <h3 className="p-3 text-[18px] font-medium text-text-dark">Reports</h3>
         <Chart
            options={Data.options}
            series={Data.series}
            type="area"
            width="100%"
            height="350px"
         />
      </div>
   );
}
