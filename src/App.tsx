// import {Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow} from '@/components/ui/table';

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
      </main>
        
    </SidebarProvider>
  )
}

export default App