// app/page.tsx (server component with metadata only)

export const metadata = {
  title: "Best Gym in Bhayandar | Fitness Fever – Fitness, Nutrition & Wellness",
  description:
    "Join Fitness Fever, the best gym in Bhayandar. Modern equipment, certified trainers, and sports nutrition experts to help you reach your goals.",
};

import About from "../../components/About";

export default function Page() {
  return <About />;
}
