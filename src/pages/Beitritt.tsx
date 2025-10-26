import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Mail, Phone, MapPin, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Beitritt = () => {
  const { t } = useLanguage();
  
  const benefits = [
    t(
      "Gemeinsame Fahrten nach Montespertoli und Neustadt",
      "Viaggi comuni a Montespertoli e Neustadt"
    ),
    t(
      "Teilnahme an kulturellen Veranstaltungen und Festen",
      "Partecipazione a eventi culturali e feste"
    ),
    t(
      "Kulinarische Abende mit italienischen Spezialitäten",
      "Serate culinarie con specialità italiane"
    ),
    t(
      "Zugang zu Mitgliederversammlungen und Mitbestimmung",
      "Accesso alle assemblee dei membri e partecipazione alle decisioni"
    ),
    t(
      "Regelmäßige Newsletter mit aktuellen Informationen",
      "Newsletter regolari con informazioni attuali"
    ),
    t(
      "Ermäßigungen bei Vereinsveranstaltungen",
      "Sconti per gli eventi dell'associazione"
    ),
    t(
      "Persönliche Kontakte zu italienischen Freunden",
      "Contatti personali con amici italiani"
    ),
    t(
      "Unterstützung des kulturellen Austauschs",
      "Sostegno allo scambio culturale"
    )
  ];

  const steps = [
    {
      number: "1",
      title: t("Beitrittsformular", "Modulo di Adesione"),
      description: t(
        "Laden Sie unser Beitrittsformular herunter oder fordern Sie es per E-Mail an. Alternativ können Sie auch direkt Kontakt mit uns aufnehmen.",
        "Scaricate il nostro modulo di adesione o richiedetelo via e-mail. In alternativa, potete anche contattarci direttamente."
      )
    },
    {
      number: "2",
      title: t("Ausfüllen und absenden", "Compilare e Inviare"),
      description: t(
        "Füllen Sie das Formular vollständig aus und senden Sie es per Post oder E-Mail an die angegebene Adresse. Wir melden uns zeitnah bei Ihnen.",
        "Compilate completamente il modulo e inviatelo per posta o e-mail all'indirizzo indicato. Vi contatteremo tempestivamente."
      )
    },
    {
      number: "3",
      title: t("Mitgliedsbeitrag", "Quota Associativa"),
      description: t(
        "Nach Ihrer Aufnahme erhalten Sie eine Beitrittsbestätigung mit unseren Kontodaten. Der Jahresbeitrag ist dann per Überweisung zu entrichten.",
        "Dopo la vostra ammissione riceverete una conferma di adesione con i nostri dati bancari. La quota annuale dovrà essere pagata tramite bonifico."
      )
    },
    {
      number: "4",
      title: t("Willkommen!", "Benvenuti!"),
      description: t(
        "Nach Eingang des Beitrags sind Sie offiziell Mitglied und erhalten alle Informationen zu kommenden Veranstaltungen und Aktivitäten.",
        "Dopo il ricevimento della quota siete ufficialmente membri e riceverete tutte le informazioni sugli eventi e le attività future."
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              {t("Mitglied werden", "Diventare Membro")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                "Werden Sie Teil unserer deutsch-italienischen Gemeinschaft",
                "Diventa parte della nostra comunità italo-tedesca"
              )}
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Warum Mitglied werden */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50 animate-fade-in">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Warum Mitglied werden?", "Perché Diventare Membro?")}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                {t(
                  "Als Mitglied unseres Vereins unterstützen Sie aktiv die deutsch-italienische Freundschaft und haben die Möglichkeit, an vielfältigen Aktivitäten teilzunehmen. Sie werden Teil einer herzlichen Gemeinschaft, die gemeinsame Werte und die Liebe zur italienischen Kultur teilt.",
                  "Come membro della nostra associazione sostenete attivamente l'amicizia italo-tedesca e avete l'opportunità di partecipare a diverse attività. Diventerete parte di una comunità calorosa che condivide valori comuni e l'amore per la cultura italiana."
                )}
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
              <h2 className="text-3xl font-semibold mb-8 text-center">
                {t("Mitgliedsbeiträge", "Quote Associative")}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl mb-2">
                      {t("Einzelmitgliedschaft", "Adesione Individuale")}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t("Für Einzelpersonen", "Per Singole Persone")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <p className="text-5xl font-bold text-primary mb-2">30 €</p>
                      <p className="text-sm text-muted-foreground">
                        {t("pro Jahr", "all'anno")}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm text-foreground/80">
                        {t(
                          "Ideal für Einzelpersonen, die die Städtepartnerschaft unterstützen möchten",
                          "Ideale per singole persone che desiderano sostenere il gemellaggio"
                        )}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {t("Empfohlen", "Consigliato")}
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl mb-2">
                      {t("Familienmitgliedschaft", "Adesione Familiare")}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t("Für Familien und Paare", "Per Famiglie e Coppie")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <p className="text-5xl font-bold text-primary mb-2">50 €</p>
                      <p className="text-sm text-muted-foreground">
                        {t("pro Jahr", "all'anno")}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm text-foreground/80">
                        {t(
                          "Perfekt für Familien und Paare, die gemeinsam aktiv werden möchten",
                          "Perfetto per famiglie e coppie che desiderano essere attive insieme"
                        )}
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
                {t("So werden Sie Mitglied", "Come Diventare Membro")}
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
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20" style={{ width: "calc(100% - 4rem)" }}></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Kontakt */}
            <section className="bg-gradient-to-br from-primary/5 via-transparent to-italian-red/5 p-8 rounded-lg border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 text-center">
                {t("Kontaktieren Sie uns", "Contattateci")}
              </h2>
              <p className="text-center text-foreground/80 mb-8 max-w-2xl mx-auto">
                {t(
                  "Sie haben Fragen zur Mitgliedschaft oder möchten mehr über unseren Verein erfahren? Wir freuen uns auf Ihre Nachricht!",
                  "Avete domande sull'adesione o volete saperne di più sulla nostra associazione? Attendiamo il vostro messaggio!"
                )}
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
                    <CardTitle className="text-lg">{t("Telefon", "Telefono")}</CardTitle>
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
                    <CardTitle className="text-lg">{t("Adresse", "Indirizzo")}</CardTitle>
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
                  {t("Beitrittsformular herunterladen", "Scaricare Modulo di Adesione")}
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  {t(
                    "Das Formular wird in Kürze zum Download bereitgestellt",
                    "Il modulo sarà presto disponibile per il download"
                  )}
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