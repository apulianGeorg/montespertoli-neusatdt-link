import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Heart, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Historie = () => {
  const { t } = useLanguage();
  
  const timeline = [
    {
      year: "1990er Jahre",
      yearIt: "Anni '90",
      title: t("Die Anfänge", "Gli Inizi"),
      description: t(
        "Die Idee einer Städtepartnerschaft zwischen Neustadt a.d. Aisch und Montespertoli entsteht. Erste Kontakte werden geknüpft und Delegationen besuchen sich gegenseitig.",
        "Nasce l'idea di un gemellaggio tra Neustadt a.d. Aisch e Montespertoli. Vengono stabiliti i primi contatti e le delegazioni si visitano reciprocamente."
      )
    },
    {
      year: "2000",
      yearIt: "2000",
      title: t("Offizielle Partnerschaft", "Partnership Ufficiale"),
      description: t(
        "Die Städtepartnerschaft wird offiziell besiegelt. Ein historischer Moment für beide Städte und der Beginn einer wunderbaren Freundschaft.",
        "Il gemellaggio viene ufficialmente sigillato. Un momento storico per entrambe le città e l'inizio di una meravigliosa amicizia."
      )
    },
    {
      year: "2005",
      yearIt: "2005",
      title: t("Gründung des Vereins", "Fondazione dell'Associazione"),
      description: t(
        "Der Verein 'Freunde von Montespertoli e.V.' wird gegründet, um die Partnerschaft aktiv zu gestalten und mit Leben zu füllen.",
        "Viene fondata l'associazione 'Amici di Montespertoli e.V.' per dare forma attiva alla partnership e riempirla di vita."
      )
    },
    {
      year: "2008",
      yearIt: "2008",
      title: t("Erster Schüleraustausch", "Primo Scambio Studentesco"),
      description: t(
        "Start des regelmäßigen Schüleraustauschs zwischen den Schulen beider Städte. Junge Menschen bauen Brücken zwischen den Kulturen.",
        "Inizio dello scambio studentesco regolare tra le scuole di entrambe le città. I giovani costruiscono ponti tra le culture."
      )
    },
    {
      year: "2010",
      yearIt: "2010",
      title: t("10 Jahre Partnerschaft", "10 Anni di Gemellaggio"),
      description: t(
        "Große Jubiläumsfeier in beiden Städten. Hunderte Freunde kommen zusammen, um ein Jahrzehnt gelebter Freundschaft zu feiern.",
        "Grande celebrazione del giubileo in entrambe le città. Centinaia di amici si riuniscono per celebrare un decennio di amicizia vissuta."
      )
    },
    {
      year: "2015",
      yearIt: "2015",
      title: t("Kulturprojekte", "Progetti Culturali"),
      description: t(
        "Ausbau der kulturellen Zusammenarbeit mit gemeinsamen Ausstellungen, Konzerten und Kunstprojekten. Die Partnerschaft wird vielfältiger.",
        "Espansione della collaborazione culturale con mostre comuni, concerti e progetti artistici. La partnership diventa più diversificata."
      )
    },
    {
      year: "2020",
      yearIt: "2020",
      title: t("20 Jahre Freundschaft", "20 Anni di Amicizia"),
      description: t(
        "Trotz Pandemie-Herausforderungen hält die Freundschaft. Virtuelle Treffen und kreative Wege der Begegnung entstehen.",
        "Nonostante le sfide della pandemia, l'amicizia rimane salda. Nascono incontri virtuali e modi creativi di incontro."
      )
    },
    {
      year: t("Heute", "Oggi"),
      yearIt: "Oggi",
      title: t("Eine lebendige Partnerschaft", "Una Partnership Vivace"),
      description: t(
        "Die Partnerschaft ist lebendiger denn je. Hunderte persönliche Freundschaften, regelmäßige Fahrten und vielfältige Aktivitäten prägen das Vereinsleben.",
        "La partnership è più vivace che mai. Centinaia di amicizie personali, viaggi regolari e attività diverse caratterizzano la vita dell'associazione."
      )
    }
  ];

  const milestones = [
    {
      icon: Users,
      number: "500+",
      label: t("Mitglieder und Freunde", "Membri e Amici")
    },
    {
      icon: Calendar,
      number: "50+",
      label: t("Gemeinsame Fahrten", "Viaggi Comuni")
    },
    {
      icon: Heart,
      number: "1000+",
      label: t("Persönliche Freundschaften", "Amicizie Personali")
    },
    {
      icon: Award,
      number: "20+",
      label: t("Jahre Partnerschaft", "Anni di Partnership")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              {t("Unsere Geschichte", "La Nostra Storia")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                "Eine Zeitreise durch über 20 Jahre deutsch-italienische Freundschaft",
                "Un viaggio nel tempo attraverso oltre 20 anni di amicizia italo-tedesca"
              )}
            </p>
          </div>

          {/* Einleitung */}
          <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50 mb-12 animate-fade-in">
            <p className="text-foreground/90 leading-relaxed text-lg">
              {t(
                "Was mit einer Vision begann – zwei Städte über Ländergrenzen hinweg zu verbinden – ist zu einer lebendigen Freundschaft gewachsen, die das Leben vieler Menschen bereichert. Unsere Geschichte ist geprägt von Begegnungen, gemeinsamen Erlebnissen und dem Willen, Brücken zwischen den Kulturen zu bauen.",
                "Quello che è iniziato come una visione - collegare due città oltre i confini nazionali - è cresciuto in un'amicizia vivace che arricchisce la vita di molte persone. La nostra storia è caratterizzata da incontri, esperienze condivise e dalla volontà di costruire ponti tra le culture."
              )}
            </p>
          </section>

          {/* Meilensteine */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              {t("In Zahlen", "In Numeri")}
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
                      <milestone.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-primary mb-2">
                      {milestone.number}
                    </CardTitle>
                    <CardContent className="p-0 text-sm text-muted-foreground">
                      {milestone.label}
                    </CardContent>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-3xl font-semibold mb-8 text-center">
              {t("Zeitreise", "Viaggio nel Tempo")}
            </h2>
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="relative animate-fade-in">
                  {/* Timeline Line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border/50 hidden md:block" />
                  )}
                  
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Year Badge */}
                        <div className="flex-shrink-0">
                          <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-lg text-center shadow-md">
                            {event.year}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-3 flex items-center gap-3">
                            <Calendar className="h-6 w-6 text-primary" />
                            {event.title}
                          </CardTitle>
                          <CardContent className="p-0">
                            <p className="text-foreground/80 leading-relaxed">
                              {event.description}
                            </p>
                          </CardContent>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Abschluss */}
          <section className="mt-12 bg-gradient-to-br from-primary/5 via-transparent to-italian-red/5 p-8 rounded-lg border border-border/50 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              {t("Die Geschichte geht weiter", "La Storia Continua")}
            </h2>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              {t(
                "Jedes Jahr schreiben wir neue Kapitel unserer gemeinsamen Geschichte. Werden Sie Teil dieser besonderen Freundschaft!",
                "Ogni anno scriviamo nuovi capitoli della nostra storia comune. Diventa parte di questa speciale amicizia!"
              )}
            </p>
            <a
              href="/beitritt"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              {t("Teil der Geschichte werden", "Diventa Parte della Storia")}
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Historie;