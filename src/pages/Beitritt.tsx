import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Mail, Phone, MapPin, Download } from "lucide-react";

const Beitritt = () => {
  const benefits = [
    "Gemeinsame Fahrten nach Montespertoli und Neustadt",
    "Teilnahme an kulturellen Veranstaltungen und Festen",
    "Kulinarische Abende mit italienischen Spezialitäten",
    "Zugang zu Mitgliederversammlungen und Mitbestimmung",
    "Regelmäßige Newsletter mit aktuellen Informationen",
    "Ermäßigungen bei Vereinsveranstaltungen",
    "Persönliche Kontakte zu italienischen Freunden",
    "Unterstützung des kulturellen Austauschs"
  ];

  const steps = [
    {
      number: "1",
      title: "Beitrittsformular",
      description: "Laden Sie unser Beitrittsformular herunter oder fordern Sie es per E-Mail an. Alternativ können Sie auch direkt Kontakt mit uns aufnehmen."
    },
    {
      number: "2",
      title: "Ausfüllen und absenden",
      description: "Füllen Sie das Formular vollständig aus und senden Sie es per Post oder E-Mail an die angegebene Adresse. Wir melden uns zeitnah bei Ihnen."
    },
    {
      number: "3",
      title: "Mitgliedsbeitrag",
      description: "Nach Ihrer Aufnahme erhalten Sie eine Beitrittsbestätigung mit unseren Kontodaten. Der Jahresbeitrag ist dann per Überweisung zu entrichten."
    },
    {
      number: "4",
      title: "Willkommen!",
      description: "Nach Eingang des Beitrags sind Sie offiziell Mitglied und erhalten alle Informationen zu kommenden Veranstaltungen und Aktivitäten."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient">Mitglied werden</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Werden Sie Teil unserer deutsch-italienischen Gemeinschaft
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Warum Mitglied werden */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50 animate-fade-in">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                Warum Mitglied werden?
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Als Mitglied unseres Vereins unterstützen Sie aktiv die deutsch-italienische 
                Freundschaft und haben die Möglichkeit, an vielfältigen Aktivitäten teilzunehmen. 
                Sie werden Teil einer herzlichen Gemeinschaft, die gemeinsame Werte und die Liebe 
                zur italienischen Kultur teilt.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-primary/10 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Beiträge */}
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">Mitgliedsbeiträge</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl mb-2">Einzelmitgliedschaft</CardTitle>
                    <CardDescription className="text-base">Für Einzelpersonen</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <p className="text-5xl font-bold text-primary mb-2">30 €</p>
                      <p className="text-sm text-muted-foreground">pro Jahr</p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm text-foreground/80">
                        Ideal für Einzelpersonen, die die Städtepartnerschaft unterstützen möchten
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Empfohlen
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl mb-2">Familienmitgliedschaft</CardTitle>
                    <CardDescription className="text-base">Für Familien und Paare</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <p className="text-5xl font-bold text-primary mb-2">50 €</p>
                      <p className="text-sm text-muted-foreground">pro Jahr</p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm text-foreground/80">
                        Perfekt für Familien und Paare, die gemeinsam aktiv werden möchten
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            {/* So werden Sie Mitglied */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                So werden Sie Mitglied
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border-2 border-primary/20">
                        <span className="text-2xl font-bold text-primary">{step.number}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20" style={{ width: 'calc(100% - 4rem)' }}></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Kontakt */}
            <section className="bg-gradient-to-br from-primary/5 via-transparent to-italian-red/5 p-8 rounded-lg border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 text-center">Kontaktieren Sie uns</h2>
              <p className="text-center text-foreground/80 mb-8 max-w-2xl mx-auto">
                Sie haben Fragen zur Mitgliedschaft oder möchten mehr über unseren Verein erfahren? 
                Wir freuen uns auf Ihre Nachricht!
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">E-Mail</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="mailto:mitgliedschaft@montespertoli-freunde.de" 
                      className="text-primary hover:underline break-words"
                    >
                      mitgliedschaft@montespertoli-freunde.de
                    </a>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Telefon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">[Telefonnummer]</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Adresse</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      [Vereinsadresse]<br />
                      Neustadt a. d. Aisch
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  Beitrittsformular herunterladen
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Das Formular wird in Kürze zum Download bereitgestellt
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