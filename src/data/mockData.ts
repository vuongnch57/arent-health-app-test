// Mock data for the home page

export interface MealRecord {
  id: string;
  image: string;
  timestamp: string;
  category: "Morning" | "Lunch" | "Dinner" | "Snack";
  date: string;
}

export interface ChartDataPoint {
  month: string;
  value1: number;
  value2: number;
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

// Chart data for the line chart
export const chartData: ChartDataPoint[] = [
  { month: "6月", value1: 100, value2: 95 },
  { month: "7月", value1: 85, value2: 88 },
  { month: "8月", value1: 75, value2: 82 },
  { month: "9月", value1: 80, value2: 78 },
  { month: "10月", value1: 85, value2: 75 },
  { month: "11月", value1: 90, value2: 70 },
  { month: "12月", value1: 95, value2: 68 },
  { month: "1月", value1: 88, value2: 65 },
  { month: "2月", value1: 82, value2: 62 },
  { month: "3月", value1: 78, value2: 58 },
  { month: "4月", value1: 75, value2: 55 },
  { month: "5月", value1: 70, value2: 52 },
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
