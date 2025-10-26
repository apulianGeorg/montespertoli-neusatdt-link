import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 text-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBackground})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-italian-green/20 via-transparent to-italian-red/20 pointer-events-none" />
          
          <div className="relative z-10 animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white tracking-tight drop-shadow-2xl">
              {t("Freunde von", "Amici di")}<br />
              <span className="text-gradient drop-shadow-lg">Montespertoli</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-6 leading-relaxed drop-shadow-lg">
              {t(
                "Städtepartnerschaft Montespertoli & Neustadt a. d. Aisch",
                "Gemellaggio Montespertoli & Neustadt a. d. Aisch"
              )}
            </p>
            <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto drop-shadow-lg">
              {t(
                "Verbunden durch Freundschaft, Kultur und gemeinsame Werte",
                "Uniti da amicizia, cultura e valori comuni"
              )}
            </p>
          </div>
        </section>
        
        {/* Main Action Buttons */}
        <section className="py-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Button 
                variant="italian-green" 
                size="xl"
                onClick={() => navigate("/beitritt")}
                className="w-full h-40 flex flex-col items-center justify-center gap-4 text-xl font-semibold hover:scale-105 transition-all duration-300 glow-green hover:shadow-2xl"
              >
                <span>{t("Beitritt", "Adesione")}</span>
                <ArrowRight className="h-8 w-8 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="group relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button 
                variant="italian-white" 
                size="xl"
                onClick={() => navigate("/aktuelles")}
                className="w-full h-40 flex flex-col items-center justify-center gap-4 text-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <span>{t("Aktuelles", "Notizie")}</span>
                <ArrowRight className="h-8 w-8 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="group relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button 
                variant="italian-red" 
                size="xl"
                onClick={() => navigate("/verein")}
                className="w-full h-40 flex flex-col items-center justify-center gap-4 text-xl font-semibold hover:scale-105 transition-all duration-300 glow-red hover:shadow-2xl"
              >
                <span>{t("Verein", "Associazione")}</span>
                <ArrowRight className="h-8 w-8 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Info Section */}
        <section className="py-20 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="glass-effect p-10 rounded-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in border-l-4 border-primary" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                {t("Unsere Mission", "La Nostra Missione")}
              </h2>
              <p className="text-foreground/90 leading-relaxed text-lg">
                {t(
                  "Wir fördern die freundschaftlichen Beziehungen zwischen den Bürgern von Montespertoli und Neustadt durch kulturellen Austausch, gemeinsame Aktivitäten und persönliche Begegnungen.",
                  "Promuoviamo le relazioni amichevoli tra i cittadini di Montespertoli e Neustadt attraverso scambi culturali, attività comuni e incontri personali."
                )}
              </p>
            </div>
            
            <div className="glass-effect p-10 rounded-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in border-l-4 border-accent" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-3xl font-bold mb-6 text-accent flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                {t("Willkommen", "Benvenuti")}
              </h2>
              <p className="text-foreground/90 leading-relaxed text-lg">
                {t(
                  "Ob Sie bereits Mitglied sind oder sich für unsere Arbeit interessieren - wir freuen uns über jeden, der unsere deutsch-italienische Freundschaft mitgestalten möchte.",
                  "Che siate già membri o interessati al nostro lavoro - siamo felici di accogliere chiunque voglia contribuire alla nostra amicizia italo-tedesca."
                )}
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm py-12 mt-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            {t(
              "© 2025 Freunde von Montespertoli e.V. - Alle Rechte vorbehalten",
              "© 2025 Amici di Montespertoli e.V. - Tutti i diritti riservati"
            )}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;