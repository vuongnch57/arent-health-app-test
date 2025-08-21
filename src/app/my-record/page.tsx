import React from "react";
import LineChart from "@/components/LineChart";
import ViewMoreButton from "@/components/ViewMoreButton";
import { chartData, exerciseRecords, diaryEntries } from "@/data/mockData";

export default function MyRecord() {
  return (
    <div className="container page">
      {/* Body Record Section */}
      <section className="py-14">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-center gap-6 mb-6">
                <h1 className="text-[25px] leading-[30px] text-dark-500 uppercase tracking-[2.5px]">
                  BODY RECORD
                </h1>
                <p className="text-[22px] leading-[27px] text-dark-600">
                  自分のカラダの記録
                </p>
              </div>

              {/* Chart Container */}
              <div className="bg-dark-500 p-6 h-[316px] flex items-center justify-center">
                <LineChart data={chartData} />
              </div>
            </div>

            {/* Right Content - Action Buttons */}
            <div className="w-full lg:w-auto">
              <div className="grid grid-cols-1 gap-4 lg:w-[288px]">
                {/* My Diary Button */}
                <button className="bg-primary-300 text-dark-600 text-[15px] leading-[18px] p-6 text-center border-[24px] border-primary-300 hover:opacity-90 transition-opacity">
                  自分の日記
                </button>

                {/* My Exercise Button */}
                <button className="bg-primary-400 text-white text-[15px] leading-[18px] p-6 text-center border-[24px] border-primary-400 hover:opacity-90 transition-opacity">
                  自分の運動
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Exercise Section */}
      <section className="bg-dark-500 p-4">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left Content */}
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
                    <div className="flex items-center">
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
