// import {Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow} from '@/components/ui/table';

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppChart } from "@/components/app-chart"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
      </main>
      <div className="border border-solid border-black">
      <AppChart />
      </div>
    </SidebarProvider>
  )
}

export default App