// app/page.tsx (server component with metadata only)

export const metadata = {
  title: "About [Gym Name] | Certified Trainers & Sports Nutritionists",
  description:
    "Learn about [Gym Name], our team of certified fitness trainers and sports nutritionists dedicated to health and performance in [City].",
};

import About from "../../components/About";

export default function Page() {
  return <About />;
}
