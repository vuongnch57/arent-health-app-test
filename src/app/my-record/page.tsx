import React from "react";
import LineChart from "@/components/LineChart";
import RecordCardsSection from "@/components/RecordCardsSection";
import MyDiarySection from "@/components/MyDiarySection";
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
      <RecordCardsSection
        cards={recordCards}
        getCardHref={(card) => `/record/${card.id}`}
      />

      {/* Body Record Section */}
      <section className="bg-dark-500 py-4 mb-10">
        <div className="flex items-center gap-4 px-4">
          <h2 className="text-base-tight text-white uppercase tracking-[2.5px] w-24">
            MY EXERCISE
          </h2>
          <div className="text-2xl-tight text-white">2021.05.21</div>
        </div>
        <LineChart data={chartData} height="h-[224px]" />
      </section>

      {/* My Exercise Section */}
      <section className="bg-dark-500 p-4">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-base-tight text-white uppercase tracking-[2.5px] w-24">
            MY EXERCISE
          </h2>
          <div className="text-2xl-tight text-white">2021.05.21</div>
        </div>

        {/* Exercise Records List - Scrollable */}
        <div className="max-h-48 overflow-y-auto pr-4 space-y-1 gap-x-10 grid grid-cols-1 md:grid-cols-2">
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
                  <div className="text-primary-300 text-base-tight">
                    {exercise.calories}kcal
                  </div>
                </div>
              </div>
              <div className="text-primary-300 text-lg-compact font-light">
                {exercise.duration} min
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* My Diary Section */}
      <MyDiarySection
        entries={diaryEntries}
        maxEntries={8}
        viewMoreHref="/diary"
        getEntryHref={(entry) => `/diary/${entry.id}`}
      />
    </div>
  );
}
