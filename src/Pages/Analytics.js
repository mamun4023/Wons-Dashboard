import MainLayout from "../Layouts/MainLayout";
export default function Analytics() {
   return (
      <MainLayout>
         <div className="p-2 flex justify-between">
            <div>
               <h2 className="text-[25px] text-text-dark font-bold">
                  Product Analytics{" "}
               </h2>
            </div>
            <div>
               <button className="p-2 px-6 font-regular text-white rounded-md  bg-primary-light">
                  Add Product +
               </button>
            </div>
         </div>
         <div>
            <button className="btn "> Product </button>
            <button className="btn bg-white text-black">Customer</button>
         </div>
      </MainLayout>
   );
}
