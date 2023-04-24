import MainLayout from "../Layouts/MainLayout";
export default function Home() {
   return (
      <MainLayout>
         <div className="p-2 flex justify-between">
            <div>Product Analytics</div>
            <div>
               <button>Add Product +</button>
            </div>
         </div>
      </MainLayout>
   );
}
