import React from "react";
import Image from "next/image";
import LineChart from "@/components/LineChart";
import ViewMoreButton from "@/components/ViewMoreButton";
import {
  chartData,
  exerciseRecords,
  diaryEntries,
  recordCards,
} from "@/data/mockData";

export default function MyRecord() {
  return (
    <div className="container page">
      {/* Record Cards Section */}
      <section className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {recordCards.map((card) => (
            <div
              key={card.id}
              className="relative group cursor-pointer border-[24px] border-primary-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                />
                <div className="bg-dark-600/85 absolute top-0 left-0 right-0 bottom-0" />
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                  <h3 className="text-primary-400 text-[25px] leading-[30px] font-light mb-2 tracking-[2.5px]">
                    {card.title}
                  </h3>
                  <div className="bg-primary-400 text-white px-4 py-2 text-[15px] leading-[18px] font-light">
                    {card.subtitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Body Record Section */}
      <section className="bg-dark-500 py-4 mb-10">
        <div className="flex items-center gap-4 px-4">
          <h2 className="text-[15px] leading-[18px] text-white uppercase tracking-[2.5px] w-24">
            MY EXERCISE
          </h2>
          <div className="text-[22px] leading-[27px] text-white">
            2021.05.21
          </div>
        </div>
        <LineChart data={chartData} height="h-[224px]" />
      </section>

      {/* My Exercise Section */}
      <section className="bg-dark-500 p-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-[15px] leading-[18px] text-white uppercase tracking-[2.5px] w-24">
                MY EXERCISE
              </h2>
              <div className="text-[22px] leading-[27px] text-white">
                2021.05.21
              </div>
            </div>

            {/* Exercise Records List - Scrollable */}
            <div className="max-h-48 overflow-y-auto pr-4 space-y-1 gap-x-10 grid grid-cols-2">
              {exerciseRecords.map((exercise) => (
                <div
                  key={exercise.id}
                  className="flex items-center justify-between border-b border-gray-400 pb-1"
                >
                  <div className="flex">
                    <div className="w-1 h-1 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white text-[15px] leading-[22px] font-light">
                        {exercise.activity}
                      </div>
                      <div className="text-primary-300 text-[15px] leading-[18px]">
                        {exercise.calories}kcal
                      </div>
                    </div>
                  </div>
                  <div className="text-primary-300 text-[18px] leading-[22px] font-light">
                    {exercise.duration} min
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Diary Section */}
      <section className="py-14">
        <h2 className="text-[22px] leading-[27px] mb-[5px] text-dark-500 uppercase tracking-[2.5px]">
          MY DIARY
        </h2>

        {/* Diary Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {diaryEntries.slice(0, 8).map((entry) => (
            <div
              key={entry.id}
              className="border-2 border-gray-border p-4 h-[231px] flex flex-col"
            >
              <div className="mb-3">
                <div className="text-lg leading-[22px] text-dark-600 mb-1">
                  {entry.date}
                </div>
                <div className="text-lg leading-[22px] text-dark-600">
                  {entry.time}
                </div>
              </div>
              <h3 className="text-[15px] leading-[18px] text-dark-500 mb-2">
                {entry.label}
              </h3>
              <p className="text-xs leading-[17px] text-dark-600 flex-1 overflow-hidden">
                {entry.content}
              </p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {diaryEntries.length > 8 && (
          <div className="flex justify-center mt-8">
            <ViewMoreButton>自分の日記をもっと見る</ViewMoreButton>
          </div>
        )}
      </section>
    </div>
  );
}
