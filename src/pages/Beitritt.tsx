import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Beitritt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Mitglied werden</h1>
          
          <div className="space-y-8">
            <section className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Warum Mitglied werden?</h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Als Mitglied unseres Vereins unterstützen Sie aktiv die deutsch-italienische 
                Freundschaft und haben die Möglichkeit, an vielfältigen Aktivitäten teilzunehmen:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li>Gemeinsame Fahrten nach Montespertoli und Neustadt</li>
                <li>Kulturelle Veranstaltungen und Feste</li>
                <li>Kulinarische Abende mit italienischen Spezialitäten</li>
                <li>Teilnahme an Mitgliederversammlungen</li>
                <li>Regelmäßige Newsletter und Informationen</li>
              </ul>
            </section>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Einzelmitgliedschaft</CardTitle>
                  <CardDescription>Für Einzelpersonen</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">30 €</p>
                  <p className="text-sm text-muted-foreground">pro Jahr</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Familienmitgliedschaft</CardTitle>
                  <CardDescription>Für Familien und Paare</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">50 €</p>
                  <p className="text-sm text-muted-foreground">pro Jahr</p>
                </CardContent>
              </Card>
            </div>
            
            <section className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">So werden Sie Mitglied</h2>
              <div className="space-y-4 text-foreground/90">
                <div>
                  <h3 className="font-semibold mb-2">1. Beitrittsformular</h3>
                  <p>Laden Sie unser Beitrittsformular herunter oder kontaktieren Sie uns für ein Exemplar.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Ausfüllen und absenden</h3>
                  <p>Füllen Sie das Formular aus und senden Sie es per Post oder E-Mail an uns.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. Mitgliedsbeitrag</h3>
                  <p>Überweisen Sie den Jahresbeitrag auf unser Vereinskonto. Die Kontodaten erhalten Sie mit der Beitrittsbestätigung.</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-3">Kontakt</h3>
                <p className="text-sm">
                  <strong>E-Mail:</strong> mitgliedschaft@montespertoli-freunde.de<br />
                  <strong>Telefon:</strong> [Telefonnummer]<br />
                  <strong>Adresse:</strong> [Vereinsadresse]
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Beitritt;
