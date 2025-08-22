import React from "react";
import Link from "next/link";
import DiaryEntry from "./DiaryEntry";
import ViewMoreButton from "./ViewMoreButton";

interface DiaryEntry {
  id: string;
  date: string;
  time: string;
  label: string;
  content: string;
}

interface MyDiarySectionProps {
  entries: DiaryEntry[];
  maxEntries?: number;
  showViewMore?: boolean;
  viewMoreHref?: string;
  getEntryHref?: (entry: DiaryEntry) => string;
}

const MyDiarySection: React.FC<MyDiarySectionProps> = ({
  entries,
  maxEntries = 8,
  showViewMore = true,
  viewMoreHref = "/diary",
  getEntryHref = (entry) => `/diary/${entry.id}`,
}) => {
  const displayedEntries = entries.slice(0, maxEntries);
  const hasMoreEntries = entries.length > maxEntries;

  return (
    <section className="py-14">
      <h2 className="text-2xl-tight mb-[5px] text-dark-500 uppercase tracking-[2.5px]">
        MY DIARY
      </h2>

      {/* Diary Entries Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedEntries.map((entry) => (
          <DiaryEntry
            key={entry.id}
            date={entry.date}
            time={entry.time}
            label={entry.label}
            content={entry.content}
            href={getEntryHref(entry)}
          />
        ))}
      </div>

      {/* View More Button */}
      {showViewMore && hasMoreEntries && (
        <div className="flex justify-center mt-8">
          <Link href={viewMoreHref}>
            <ViewMoreButton>
              自分の日記をもっと見る
            </ViewMoreButton>
          </Link>
        </div>
      )}
    </section>
  );
};

export default MyDiarySection;
