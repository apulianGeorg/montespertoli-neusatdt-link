import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Users, Music, UtensilsCrossed, GraduationCap, Camera, Heart, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Aktivitaeten = () => {
  const { t } = useLanguage();
  
  const activities = [
    {
      icon: Plane,
      title: t("Jährliche Fahrten", "Viaggi Annuali"),
      description: t(
        "Regelmäßige Gruppenfahrten nach Montespertoli im Frühjahr und Herbst, sowie Gegenbesuche unserer italienischen Freunde in Neustadt. Diese mehrtägigen Aufenthalte ermöglichen intensive Begegnungen und Austausch.",
        "Viaggi di gruppo regolari a Montespertoli in primavera e autunno, nonché visite di ritorno dei nostri amici italiani a Neustadt. Questi soggiorni di più giorni consentono incontri intensivi e scambio."
      ),
      details: [
        t("Frühjahrsfahrt nach Montespertoli (Mai)", "Viaggio primaverile a Montespertoli (maggio)"),
        t("Herbstfahrt nach Montespertoli (Oktober)", "Viaggio autunnale a Montespertoli (ottobre)"),
        t("Gegenbesuche in Neustadt", "Visite di ritorno a Neustadt")
      ]
    },
    {
      icon: UtensilsCrossed,
      title: t("Kulinarische Events", "Eventi Culinari"),
      description: t(
        "Italienische Abende, Weinfeste und gemeinsame Koch-Events bringen die kulinarischen Traditionen beider Regionen zusammen. Von fränkischem Karpfen bis toskanischem Chianti.",
        "Serate italiane, feste del vino ed eventi di cucina comuni riuniscono le tradizioni culinarie di entrambe le regioni. Dalla carpa francone al Chianti toscano."
      ),
      details: [
        t("Italienische Weinverkostungen", "Degustazioni di vino italiano"),
        t("Gemeinsame Kochkurse", "Corsi di cucina comuni"),
        t("Kulinarische Themenabende", "Serate a tema culinario")
      ]
    },
    {
      icon: GraduationCap,
      title: t("Schulaustausch", "Scambio Scolastico"),
      description: t(
        "Unterstützung des Schüleraustauschs zwischen den Schulen beider Städte. Jugendliche können die Partnerstadt kennenlernen und Freundschaften knüpfen.",
        "Supporto allo scambio studentesco tra le scuole di entrambe le città. I giovani possono conoscere la città gemellata e stringere amicizie."
      ),
      details: [
        t("Schüleraustausch für Gymnasien", "Scambio studentesco per licei"),
        t("Gastfamilien-Programm", "Programma di famiglie ospitanti"),
        t("Gemeinsame Jugendprojekte", "Progetti giovanili comuni")
      ]
    },
    {
      icon: Music,
      title: t("Kulturelle Veranstaltungen", "Eventi Culturali"),
      description: t(
        "Organisation von Konzerten, Ausstellungen und kulturellen Abenden, die die Kunst und Kultur beider Länder präsentieren und feiern.",
        "Organizzazione di concerti, mostre e serate culturali che presentano e celebrano l'arte e la cultura di entrambi i paesi."
      ),
      details: [
        t("Deutsch-Italienische Kulturabende", "Serate culturali italo-tedesche"),
        t("Kunstausstellungen", "Mostre d'arte"),
        t("Musikkonzerte und Aufführungen", "Concerti e spettacoli musicali")
      ]
    },
    {
      icon: Camera,
      title: t("Gemeinsame Ausflüge", "Escursioni Comuni"),
      description: t(
        "Besichtigungen von Sehenswürdigkeiten, Wanderungen in der Region und Besuche bei lokalen Produzenten stärken das gegenseitige Verständnis.",
        "Visite turistiche, escursioni nella regione e visite a produttori locali rafforzano la comprensione reciproca."
      ),
      details: [
        t("Stadtführungen und Besichtigungen", "Visite guidate e tour della città"),
        t("Weinbergs- und Kellereiführungen", "Visite ai vigneti e alle cantine"),
        t("Naturwanderungen", "Escursioni nella natura")
      ]
    },
    {
      icon: Heart,
      title: t("Freundschaftstreffen", "Incontri di Amicizia"),
      description: t(
        "Regelmäßige Vereinstreffen, Stammtische und gesellige Abende fördern den persönlichen Austausch und die Pflege von Freundschaften.",
        "Incontri regolari dell'associazione, tavole rotonde e serate conviviali promuovono lo scambio personale e la cura delle amicizie."
      ),
      details: [
        t("Monatliche Vereinstreffen", "Incontri mensili dell'associazione"),
        t("Gesellige Stammtische", "Tavole rotonde conviviali"),
        t("Familienfeste und Feiern", "Feste di famiglia e celebrazioni")
      ]
    },
    {
      icon: Globe,
      title: t("Sprachkurse", "Corsi di Lingua"),
      description: t(
        "Italienisch- und Deutschkurse helfen bei der Überwindung von Sprachbarrieren und fördern das kulturelle Verständnis.",
        "Corsi di italiano e tedesco aiutano a superare le barriere linguistiche e promuovono la comprensione culturale."
      ),
      details: [
        t("Italienisch für Anfänger", "Italiano per principianti"),
        t("Deutsch für italienische Gäste", "Tedesco per ospiti italiani"),
        t("Konversationskurse", "Corsi di conversazione")
      ]
    },
    {
      icon: Users,
      title: t("Familienfreundschaften", "Amicizie tra Famiglie"),
      description: t(
        "Vermittlung von Familienpartnerschaften, die über offizielle Veranstaltungen hinausgehen und private Besuche ermöglichen.",
        "Mediazione di partenariati tra famiglie che vanno oltre gli eventi ufficiali e consentono visite private."
      ),
      details: [
        t("Private Familienbesuche", "Visite private tra famiglie"),
        t("Brieffreundschaften", "Corrispondenza"),
        t("Gemeinsame Urlaube", "Vacanze comuni")
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              {t("Unsere Aktivitäten", "Le Nostre Attività")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                "Vielfältige Veranstaltungen und Begegnungen, die unsere Partnerschaft lebendig machen",
                "Eventi e incontri vari che rendono viva la nostra partnership"
              )}
            </p>
          </div>
          
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0">
                      <activity.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3">{activity.title}</CardTitle>
                      <CardContent className="p-0 space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {activity.description}
                        </p>
                        <div className="border-l-4 border-primary/30 pl-4 space-y-2">
                          {activity.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm text-foreground/80">
                              • {detail}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <section className="mt-12 bg-gradient-to-br from-primary/5 via-transparent to-italian-red/5 p-8 rounded-lg border border-border/50 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              {t("Mitmachen!", "Partecipa!")}
            </h2>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              {t(
                "Interessiert an unseren Aktivitäten? Werden Sie Mitglied und erleben Sie die deutsch-italienische Freundschaft hautnah!",
                "Interessati alle nostre attività? Diventa membro e vivi l'amicizia italo-tedesca da vicino!"
              )}
            </p>
            <a
              href="/beitritt"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              {t("Mitglied werden", "Diventa Membro")}
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Aktivitaeten;