import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Verein from "./pages/Verein";
import Aktuelles from "./pages/Aktuelles";
import Beitritt from "./pages/Beitritt";
import Montespertoli from "./pages/Montespertoli";
import Neustadt from "./pages/Neustadt";
import Aktivitaeten from "./pages/Aktivitaeten";
import Historie from "./pages/Historie";
import Sponsoren from "./pages/Sponsoren";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/verein" element={<Verein />} />
            <Route path="/montespertoli" element={<Montespertoli />} />
            <Route path="/neustadt" element={<Neustadt />} />
            <Route path="/aktivitaeten" element={<Aktivitaeten />} />
            <Route path="/historie" element={<Historie />} />
            <Route path="/sponsoren" element={<Sponsoren />} />
            <Route path="/aktuelles" element={<Aktuelles />} />
            <Route path="/beitritt" element={<Beitritt />} />
            <Route path="/impressum" element={<Impressum />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
