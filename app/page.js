import { MarksBarChart } from "@/components/MarksBarChart";
import { Navbar } from "@/components/Navbar";

export default async function Home() {
  return (
    <main className="flex gap-5 justify-center items-center min-h-screen">
      <Navbar />
      <div id="chart-container" className="w-300 h-100">
        <MarksBarChart />
      </div>
    </main>
  )
}