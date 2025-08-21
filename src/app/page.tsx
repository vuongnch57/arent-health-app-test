import Image from "next/image";
import CircularProgress from "@/components/CircularProgress";
import LineChart from "@/components/LineChart";
import HexagonButton from "@/components/HexagonButton";
import ViewMoreButton from "@/components/ViewMoreButton";
import {
  progressData,
  chartData,
  mealCategories,
  mealRecords,
  heroData,
} from "@/data/mockData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative">
        <div className="flex flex-col md:flex-row">
          <div
            className="relative w-full md:w-[42%]"
            style={{ aspectRatio: "100/58" }}
          >
            <Image
              src={heroData.image}
              alt={heroData.alt}
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <CircularProgress
                percentage={progressData.percentage}
                currentDay={progressData.currentDay}
              />
            </div>
          </div>
          <div className="flex-1 p-6 flex items-center justify-center">
            <LineChart data={chartData} />
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-8 mb-12">
            {mealCategories.map((category) => (
              <HexagonButton
                key={category.id}
                icon={category.icon}
                label={category.name}
              />
            ))}
          </div>
        </div>
      </section>
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
          <div className="flex justify-center">
            <ViewMoreButton>記録をもっと見る</ViewMoreButton>
          </div>
        </div>
      </section>
    </div>
  );
}
