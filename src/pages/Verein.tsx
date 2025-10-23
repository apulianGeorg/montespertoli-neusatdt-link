import Header from "@/components/Header";

const Verein = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary">Über den Verein</h1>
          
          <div className="space-y-6 text-foreground/90">
            <section className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Unsere Geschichte</h2>
              <p className="leading-relaxed">
                Die Städtepartnerschaft zwischen Montespertoli und Neustadt verbindet seit vielen Jahren 
                Menschen, Kulturen und Freundschaften über Ländergrenzen hinweg. Unser Verein ist die 
                lebendige Brücke zwischen beiden Städten.
              </p>
            </section>
            
            <section className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Unsere Ziele</h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Förderung des kulturellen Austauschs zwischen Deutschland und Italien</li>
                <li>Organisation von Begegnungen und gemeinsamen Veranstaltungen</li>
                <li>Pflege der Freundschaft zwischen Neustadt und Montespertoli</li>
                <li>Unterstützung von Schulaustauschen und Jugendprojekten</li>
              </ul>
            </section>
            
            <section className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Vorstand</h2>
              <div className="space-y-3">
                <p><strong>1. Vorsitzende/r:</strong> [Name]</p>
                <p><strong>2. Vorsitzende/r:</strong> [Name]</p>
                <p><strong>Kassenwart:</strong> [Name]</p>
                <p><strong>Schriftführer/in:</strong> [Name]</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Verein;
