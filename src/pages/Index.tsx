import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 text-center overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-italian-green/10 via-transparent to-italian-red/10 pointer-events-none" />
          
          <div className="relative z-10 animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground tracking-tight">
              Freunde von<br />
              <span className="text-gradient">Montespertoli</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
              Städtepartnerschaft zwischen Montespertoli und Neustadt
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Verbunden durch Freundschaft, Kultur und gemeinsame Werte
            </p>
          </div>
        </section>
        
        {/* Main Action Buttons */}
        <section className="py-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Button 
                variant="italian-green" 
                size="xl"
                onClick={() => navigate("/beitritt")}
                className="w-full h-40 flex flex-col items-center justify-center gap-4 text-xl font-semibold hover:scale-105 transition-all duration-300 glow-green hover:shadow-2xl"
              >
                <span>Beitritt</span>
                <ArrowRight className="h-8 w-8 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="group relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button 
                variant="italian-white" 
                size="xl"
                onClick={() => navigate("/aktuelles")}
                className="w-full h-40 flex flex-col items-center justify-center gap-4 text-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <span>Aktuelles</span>
                <ArrowRight className="h-8 w-8 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="group relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                variant="italian-red" 
                size="xl"
                onClick={() => navigate("/verein")}
                className="w-full h-40 flex flex-col items-center justify-center gap-4 text-xl font-semibold hover:scale-105 transition-all duration-300 glow-red hover:shadow-2xl"
              >
                <span>Verein</span>
                <ArrowRight className="h-8 w-8 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Info Section */}
        <section className="py-20 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="glass-effect p-10 rounded-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in border-l-4 border-primary" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Unsere Mission
              </h2>
              <p className="text-foreground/90 leading-relaxed text-lg">
                Wir fördern die freundschaftlichen Beziehungen zwischen den Bürgern von 
                Montespertoli und Neustadt durch kulturellen Austausch, gemeinsame Aktivitäten 
                und persönliche Begegnungen.
              </p>
            </div>
            
            <div className="glass-effect p-10 rounded-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in border-l-4 border-accent" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-3xl font-bold mb-6 text-accent flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Willkommen
              </h2>
              <p className="text-foreground/90 leading-relaxed text-lg">
                Ob Sie bereits Mitglied sind oder sich für unsere Arbeit interessieren - 
                wir freuen uns über jeden, der unsere deutsch-italienische Freundschaft 
                mitgestalten möchte.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm py-12 mt-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Freunde von Montespertoli e.V. - Alle Rechte vorbehalten
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
