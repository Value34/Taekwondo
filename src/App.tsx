import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TaekwondoSidebar } from "@/components/TaekwondoSidebar";
import Index from "./pages/Index";
import WhatIsTaekwondo from "./pages/WhatIsTaekwondo";
import History from "./pages/History";
import HistoryColombia from "./pages/HistoryColombia";
import BeltMeanings from "./pages/BeltMeanings";
import PoomsaeVsTaeguk from "./pages/PoomsaeVsTaeguk";
import KoreanFlag from "./pages/KoreanFlag";
import PoomsaeMeanings from "./pages/PoomsaeMeanings";
import Principles from "./pages/Principles";
import Organizations from "./pages/Organizations";
import Uniform from "./pages/Uniform";
import Koguryo from "./pages/Koguryo";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <TaekwondoSidebar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/que-es" element={<WhatIsTaekwondo />} />
                <Route path="/historia" element={<History />} />
                <Route path="/historia-colombia" element={<HistoryColombia />} />
                <Route path="/cinturones" element={<BeltMeanings />} />
                <Route path="/poomsae-taeguk" element={<PoomsaeVsTaeguk />} />
                <Route path="/bandera" element={<KoreanFlag />} />
                <Route path="/significado-poomsae" element={<PoomsaeMeanings />} />
                <Route path="/principios" element={<Principles />} />
                <Route path="/organizaciones" element={<Organizations />} />
                <Route path="/uniforme" element={<Uniform />} />
                <Route path="/koguryo" element={<Koguryo />} />
                <Route path="/sobre-mi" element={<AboutMe />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
