import { Bar, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
    { month: "January", desktop: "180", mobile: 80},
    { month: "February", desktop: "180", mobile: 80},
    { month: "March", desktop: "180", mobile: 80},
    { month: "April", desktop: "180", mobile: 80},
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#ef4444",
    },
} satisfies ChartConfig

export function AppChart() {
    return (
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    )
  }