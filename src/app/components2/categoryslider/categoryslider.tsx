import Slider from "../slider/slider";
import { getAllCategories } from "@/APIs/categories";

export default async function categoryslider() {
  const allCategories = await getAllCategories();

  return (
    <div className="w-full bg-gray-100 py-10">
      <Slider allCategories={allCategories} />
    </div>
  );
}
