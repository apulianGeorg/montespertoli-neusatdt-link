import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Award, Handshake, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Sponsoren = () => {
  const { t } = useLanguage();
  
  const sponsorLevels = [
    {
      icon: Award,
      title: t("Hauptsponsoren", "Sponsor Principali"),
      description: t(
        "Unsere Hauptsponsoren unterstützen uns maßgeblich bei großen Projekten und Veranstaltungen.",
        "I nostri sponsor principali ci supportano in modo significativo nei grandi progetti e eventi."
      )
    },
    {
      icon: Handshake,
      title: t("Partner", "Partner"),
      description: t(
        "Lokale Unternehmen und Organisationen, die unsere Arbeit regelmäßig fördern.",
        "Aziende e organizzazioni locali che promuovono regolarmente il nostro lavoro."
      )
    },
    {
      icon: Heart,
      title: t("Förderer", "Sostenitori"),
      description: t(
        "Privatpersonen und kleine Betriebe, die mit ihren Spenden unsere Vereinsarbeit ermöglichen.",
        "Privati e piccole imprese che con le loro donazioni rendono possibile il lavoro della nostra associazione."
      )
    }
  ];

  const benefits = [
    t("Nennung auf unserer Webseite", "Menzione sul nostro sito web"),
    t("Logo-Platzierung bei Veranstaltungen", "Posizionamento del logo agli eventi"),
    t("Erwähnung in Presseberichten", "Menzione nei comunicati stampa"),
    t("Einladungen zu exklusiven Events", "Inviti ad eventi esclusivi"),
    t("Netzwerk-Möglichkeiten", "Opportunità di networking"),
    t("Zugang zur deutsch-italienischen Community", "Accesso alla comunità italo-tedesca")
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              {t("Unsere Sponsoren", "I Nostri Sponsor")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                "Gemeinsam stark – Danke an alle, die unsere Partnerschaft unterstützen",
                "Insieme forti - Grazie a tutti coloro che supportano la nostra partnership"
              )}
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Danksagung */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50 animate-fade-in">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Vielen Dank!", "Grazie Mille!")}
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    "Unsere Vereinsarbeit wäre ohne die großzügige Unterstützung unserer Sponsoren und Förderer nicht möglich. Jeder Beitrag – ob groß oder klein – hilft uns, die deutsch-italienische Freundschaft lebendig zu halten und weiterzuentwickeln.",
                    "Il lavoro della nostra associazione non sarebbe possibile senza il generoso supporto dei nostri sponsor e sostenitori. Ogni contributo - grande o piccolo - ci aiuta a mantenere viva e sviluppare l'amicizia italo-tedesca."
                  )}
                </p>
                <p>
                  {t(
                    "Durch Sponsoring ermöglichen Sie uns, kulturelle Veranstaltungen durchzuführen, Fahrten zu organisieren, Jugendaustausche zu fördern und vieles mehr. Sie tragen aktiv dazu bei, dass Menschen zweier Nationen einander näherkommen.",
                    "Attraverso la sponsorizzazione ci permettete di organizzare eventi culturali, organizzare viaggi, promuovere scambi giovanili e molto altro. Contribuite attivamente ad avvicinare persone di due nazioni."
                  )}
                </p>
              </div>
            </section>

            {/* Sponsor-Kategorien */}
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">
                {t("Sponsoring-Möglichkeiten", "Opportunità di Sponsorizzazione")}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {sponsorLevels.map((level, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="text-center">
                        <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
                          <level.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl mb-3">{level.title}</CardTitle>
                        <CardContent className="p-0 text-muted-foreground">
                          {level.description}
                        </CardContent>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            {/* Vorteile für Sponsoren */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Ihre Vorteile als Sponsor", "I Vostri Vantaggi come Sponsor")}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground/90">
                    <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Unsere aktuellen Sponsoren */}
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">
                {t("Unsere Unterstützer", "I Nostri Sostenitori")}
              </h2>
              <div className="bg-gradient-to-br from-primary/5 via-transparent to-italian-red/5 p-12 rounded-lg border border-border/50 text-center">
                <Building2 className="h-16 w-16 text-primary mx-auto mb-6" />
                <p className="text-foreground/80 text-lg mb-4">
                  {t(
                    "Hier könnten auch Sie stehen! Werden Sie Teil unserer Sponsoren-Familie.",
                    "Potreste essere qui anche voi! Diventate parte della nostra famiglia di sponsor."
                  )}
                </p>
                <p className="text-muted-foreground">
                  {t(
                    "Kontaktieren Sie uns für weitere Informationen zu Sponsoring-Möglichkeiten.",
                    "Contattateci per ulteriori informazioni sulle opportunità di sponsorizzazione."
                  )}
                </p>
              </div>
            </section>

            {/* Kontakt für Sponsoring */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Sponsor werden", "Diventa Sponsor")}
              </h2>
              <div className="space-y-4 text-foreground/90">
                <p className="leading-relaxed">
                  {t(
                    "Sie möchten unsere Arbeit unterstützen und Teil unserer Erfolgsgeschichte werden? Wir freuen uns über Ihr Interesse!",
                    "Volete supportare il nostro lavoro e diventare parte della nostra storia di successo? Siamo lieti del vostro interesse!"
                  )}
                </p>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">{t("Kontakt:", "Contatto:")}</p>
                  <p>
                    <strong>E-Mail:</strong>{" "}
                    <a href="mailto:sponsoring@montespertoli-freunde.de" className="text-primary hover:underline">
                      sponsoring@montespertoli-freunde.de
                    </a>
                  </p>
                  <p>
                    <strong>{t("Telefon", "Telefono")}:</strong> +49 (0) 9161 / [Telefonnummer]
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Gerne erstellen wir Ihnen ein individuelles Sponsoring-Paket, das zu Ihren Vorstellungen passt.",
                    "Saremo lieti di creare un pacchetto di sponsorizzazione individuale che si adatti alle vostre esigenze."
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

export default Sponsoren;