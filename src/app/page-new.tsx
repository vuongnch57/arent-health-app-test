import Image from "next/image";
import CircularProgress from "@/components/CircularProgress";
import LineChart from "@/components/LineChart";
import HexagonButton from "@/components/HexagonButton";
import { 
  progressData, 
  chartData, 
  mealCategories, 
  mealRecords, 
  heroData 
} from "@/data/mockData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          {/* Left side - Meal image */}
          <div className="relative">
            <Image
              src={heroData.image}
              alt={heroData.alt}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4">
              <CircularProgress 
                percentage={progressData.percentage}
                currentDay={progressData.currentDay}
              />
            </div>
          </div>
          
          {/* Right side - Chart */}
          <div className="p-6 flex items-center justify-center">
            <LineChart data={chartData} />
          </div>
        </div>
      </section>

      {/* Meal Categories Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-8 mb-12">
            {mealCategories.map((category) => (
              <HexagonButton
                key={category.id}
                icon={category.icon}
                label={category.name}
                onClick={() => console.log(`${category.name} clicked`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Meal Records Grid */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {mealRecords.map((meal) => (
              <div key={meal.id} className="relative group cursor-pointer">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={meal.image}
                    alt={`${meal.category} meal`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-500/80 to-transparent p-3">
                    <span className="text-white text-sm font-medium">
                      {meal.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="flex justify-center">
            <button className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200">
              記録をもっと見る
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
