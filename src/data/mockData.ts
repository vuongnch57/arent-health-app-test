// Mock data for the home page

export interface MealRecord {
  id: string;
  image: string;
  timestamp: string;
  category: "Morning" | "Lunch" | "Dinner" | "Snack";
  date: string;
}

export interface ChartDataPoint {
  label: string;
  value1: number;
  value2: number;
}

export type TimePeriod = 'day' | 'week' | 'month' | 'year';

export interface ChartData {
  day: ChartDataPoint[];
  week: ChartDataPoint[];
  month: ChartDataPoint[];
  year: ChartDataPoint[];
}

export interface ProgressData {
  currentDay: string;
  percentage: number;
}

// Progress data for the hero section
export const progressData: ProgressData = {
  currentDay: "05/21",
  percentage: 75,
};

// Chart data for different time periods
export const chartData: ChartData = {
  day: [
    { label: "6/16", value1: 72, value2: 58 },
    { label: "6/17", value1: 74, value2: 55 },
    { label: "6/18", value1: 71, value2: 60 },
    { label: "6/19", value1: 75, value2: 52 },
    { label: "6/20", value1: 73, value2: 57 },
    { label: "6/21", value1: 76, value2: 50 },
    { label: "6/22", value1: 78, value2: 53 },
    { label: "6/23", value1: 77, value2: 48 },
    { label: "6/24", value1: 79, value2: 55 },
    { label: "6/25", value1: 81, value2: 45 },
    { label: "6/26", value1: 80, value2: 52 },
    { label: "6/27", value1: 82, value2: 47 },
  ],
  week: [
    { label: "6月2週", value1: 95, value2: 72 },
    { label: "6月3週", value1: 98, value2: 68 },
    { label: "6月4週", value1: 93, value2: 75 },
    { label: "7月1週", value1: 96, value2: 70 },
    { label: "7月2週", value1: 99, value2: 65 },
    { label: "7月3週", value1: 95, value2: 78 },
    { label: "7月4週", value1: 97, value2: 62 },
    { label: "8月1週", value1: 92, value2: 80 },
    { label: "8月2週", value1: 94, value2: 58 },
    { label: "8月3週", value1: 91, value2: 82 },
    { label: "8月4週", value1: 93, value2: 60 },
    { label: "9月1週", value1: 95, value2: 75 },
  ],
  month: [
    { label: "6月", value1: 100, value2: 95 },
    { label: "7月", value1: 85, value2: 88 },
    { label: "8月", value1: 75, value2: 82 },
    { label: "9月", value1: 80, value2: 78 },
    { label: "10月", value1: 85, value2: 75 },
    { label: "11月", value1: 90, value2: 70 },
    { label: "12月", value1: 95, value2: 68 },
    { label: "1月", value1: 88, value2: 65 },
    { label: "2月", value1: 82, value2: 62 },
    { label: "3月", value1: 78, value2: 58 },
    { label: "4月", value1: 75, value2: 55 },
    { label: "5月", value1: 70, value2: 52 },
  ],
  year: [
    { label: "2019", value1: 105, value2: 75 },
    { label: "2020", value1: 98, value2: 68 },
    { label: "2021", value1: 92, value2: 62 },
    { label: "2022", value1: 86, value2: 55 },
    { label: "2023", value1: 80, value2: 48 },
  ],
};

// Record Cards data
export interface RecordCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export const recordCards: RecordCard[] = [
  {
    id: "body-record",
    title: "BODY RECORD",
    subtitle: "自分のカラダの記録",
    image: "/images/MyRecommend-1.jpg",
    alt: "Body Record"
  },
  {
    id: "my-exercise",
    title: "MY EXERCISE",
    subtitle: "自分の運動の記録",
    image: "/images/MyRecommend-2.jpg",
    alt: "My Exercise"
  },
  {
    id: "my-diary",
    title: "MY DIARY",
    subtitle: "自分の日記",
    image: "/images/MyRecommend-3.jpg",
    alt: "My Diary"
  }
];

// Meal categories
export const mealCategories = [
  { id: "morning", name: "Morning", icon: "/images/icon_knife.png" },
  { id: "lunch", name: "Lunch", icon: "/images/icon_knife.png" },
  { id: "dinner", name: "Dinner", icon: "/images/icon_knife.png" },
  { id: "snack", name: "Snack", icon: "/images/icon_snack.png" },
];

// Meal records data
export const mealRecords: MealRecord[] = [
  {
    id: "1",
    image: "/images/m01.jpg",
    timestamp: "05.21.Morning",
    category: "Morning",
    date: "05.21",
  },
  {
    id: "2",
    image: "/images/l03.jpg",
    timestamp: "05.21.Lunch",
    category: "Lunch",
    date: "05.21",
  },
  {
    id: "3",
    image: "/images/d01.jpg",
    timestamp: "05.21.Dinner",
    category: "Dinner",
    date: "05.21",
  },
  {
    id: "4",
    image: "/images/l01.jpg",
    timestamp: "05.21.Snack",
    category: "Snack",
    date: "05.21",
  },
  {
    id: "5",
    image: "/images/m01.jpg",
    timestamp: "05.20.Morning",
    category: "Morning",
    date: "05.20",
  },
  {
    id: "6",
    image: "/images/l02.jpg",
    timestamp: "05.20.Lunch",
    category: "Lunch",
    date: "05.20",
  },
  {
    id: "7",
    image: "/images/d02.jpg",
    timestamp: "05.20.Dinner",
    category: "Dinner",
    date: "05.20",
  },
  {
    id: "8",
    image: "/images/s01.jpg",
    timestamp: "05.20.Snack",
    category: "Snack",
    date: "05.20",
  },
];

// Hero section data
export const heroData = {
  image: "/images/d01.jpg",
  alt: "Healthy meal",
};

// Exercise records interface and data
export interface ExerciseRecord {
  id: string;
  activity: string;
  calories: number;
  duration: number;
  date: string;
}

export const exerciseRecords: ExerciseRecord[] = [
  {
    id: "1",
    activity: "家事全般（立位・軽い）",
    calories: 26,
    duration: 10,
    date: "2021.05.21",
  },
  {
    id: "2",
    activity: "家事全般（立位・軽い）",
    calories: 26,
    duration: 10,
    date: "2021.05.21",
  },
  {
    id: "3",
    activity: "家事全般（立位・軽い）",
    calories: 26,
    duration: 10,
    date: "2021.05.21",
  },
  {
    id: "4",
    activity: "家事全般（立位・軽い）",
    calories: 26,
    duration: 10,
    date: "2021.05.21",
  },
  {
    id: "5",
    activity: "家事全般（立位・軽い）",
    calories: 26,
    duration: 10,
    date: "2021.05.20",
  },
  {
    id: "6",
    activity: "家事全般（立位・軽い）",
    calories: 26,
    duration: 10,
    date: "2021.05.20",
  },
  {
    id: "7",
    activity: "家事全般（立位・軽い）",
    calories: 26,
    duration: 10,
    date: "2021.05.19",
  },
  {
    id: "8",
    activity: "家事全般（立位・軽い）",
    calories: 26,
    duration: 10,
    date: "2021.05.19",
  },
  {
    id: "9",
    activity: "家事全般（立位・軽い）",
    calories: 26,
    duration: 10,
    date: "2021.05.18",
  },
  {
    id: "10",
    activity: "家事全般（立位・軽い）",
    calories: 26,
    duration: 10,
    date: "2021.05.18",
  },
  {
    id: "11",
    activity: "家事全般（立位・軽い）",
    calories: 26,
    duration: 10,
    date: "2021.05.18",
  },
  {
    id: "12",
    activity: "家事全般（立位・軽い）",
    calories: 26,
    duration: 10,
    date: "2021.05.18",
  },
];

// Diary entries interface and data
export interface DiaryEntry {
  id: string;
  date: string;
  time: string;
  label: string;
  content: string;
}

export const diaryEntries: DiaryEntry[] = [
  {
    id: "1",
    date: "2021.05.21",
    time: "23:25",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    id: "2",
    date: "2021.05.20",
    time: "23:25",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    id: "3",
    date: "2021.05.19",
    time: "23:25",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    id: "4",
    date: "2021.05.18",
    time: "23:25",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    id: "5",
    date: "2021.05.17",
    time: "23:25",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    id: "6",
    date: "2021.05.16",
    time: "23:25",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    id: "7",
    date: "2021.05.15",
    time: "23:25",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    id: "8",
    date: "2021.05.14",
    time: "23:25",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    id: "9",
    date: "2021.05.13",
    time: "23:25",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },

  {
    id: "10",
    date: "2021.05.12",
    time: "23:25",
    label: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
];
