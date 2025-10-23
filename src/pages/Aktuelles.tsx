import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Aktuelles = () => {
  const news = [
    {
      date: "15. März 2025",
      title: "Frühjahrsfahrt nach Montespertoli",
      description: "Unsere nächste Fahrt nach Montespertoli findet vom 15. bis 22. Mai statt. Anmeldungen sind ab sofort möglich!",
    },
    {
      date: "28. Februar 2025",
      title: "Jahreshauptversammlung 2025",
      description: "Die diesjährige Jahreshauptversammlung fand erfolgreich statt. Alle Mitglieder wurden über die aktuellen Entwicklungen informiert.",
    },
    {
      date: "10. Januar 2025",
      title: "Neujahrsempfang",
      description: "Mit einem gemütlichen Beisammensein sind wir gemeinsam ins neue Jahr gestartet. Vielen Dank an alle Teilnehmer!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Aktuelles</h1>
          
          <div className="space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardDescription className="text-sm text-muted-foreground">
                    {item.date}
                  </CardDescription>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
            <p className="text-foreground/80 mb-4">
              Bleiben Sie auf dem Laufenden! Melden Sie sich für unseren Newsletter an und 
              verpassen Sie keine Neuigkeiten mehr.
            </p>
            <p className="text-sm text-muted-foreground">
              Kontaktieren Sie uns unter: info@montespertoli-freunde.de
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aktuelles;
