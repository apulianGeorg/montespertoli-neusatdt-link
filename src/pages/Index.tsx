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
        <section className="py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Freunde von Montespertoli e.V.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Städtepartnerschaft zwischen Montespertoli und Neustadt
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verbunden durch Freundschaft, Kultur und gemeinsame Werte
          </p>
        </section>
        
        {/* Main Action Buttons */}
        <section className="py-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Button 
              variant="italian-green" 
              size="xl"
              onClick={() => navigate("/beitritt")}
              className="w-full flex flex-col items-center justify-center gap-3"
            >
              <span>Beitritt</span>
              <ArrowRight className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="italian-white" 
              size="xl"
              onClick={() => navigate("/aktuelles")}
              className="w-full flex flex-col items-center justify-center gap-3"
            >
              <span>Aktuelles</span>
              <ArrowRight className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="italian-red" 
              size="xl"
              onClick={() => navigate("/verein")}
              className="w-full flex flex-col items-center justify-center gap-3"
            >
              <span>Verein</span>
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </section>
        
        {/* Info Section */}
        <section className="py-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Unsere Mission</h2>
              <p className="text-foreground/90 leading-relaxed">
                Wir fördern die freundschaftlichen Beziehungen zwischen den Bürgern von 
                Montespertoli und Neustadt durch kulturellen Austausch, gemeinsame Aktivitäten 
                und persönliche Begegnungen.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-accent">Willkommen</h2>
              <p className="text-foreground/90 leading-relaxed">
                Ob Sie bereits Mitglied sind oder sich für unsere Arbeit interessieren - 
                wir freuen uns über jeden, der unsere deutsch-italienische Freundschaft 
                mitgestalten möchte.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Freunde von Montespertoli e.V. - Alle Rechte vorbehalten</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
