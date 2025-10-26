import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Aktuelles = () => {
  const { t } = useLanguage();
  
  const upcomingEvents = [
    {
      date: "15. Mai 2025",
      dateDetail: "15. - 22. Mai 2025",
      dateDetailIt: "15 - 22 maggio 2025",
      title: t("Frühjahrsfahrt nach Montespertoli", "Viaggio di Primavera a Montespertoli"),
      description: t(
        "Unsere traditionelle Frühjahrsfahrt führt uns wieder in die wunderschöne Toskana. Erleben Sie eine Woche voller kultureller Begegnungen, kulinarischer Genüsse und italienischer Gastfreundschaft.",
        "Il nostro tradizionale viaggio di primavera ci porta di nuovo nella bellissima Toscana. Vivete una settimana piena di incontri culturali, delizie culinarie e ospitalità italiana."
      ),
      location: "Montespertoli, Italien",
      locationIt: "Montespertoli, Italia",
      participants: t("Noch 12 Plätze frei", "Ancora 12 posti disponibili"),
      time: t("7 Tage", "7 giorni"),
      type: t("Fahrt", "Viaggio"),
      status: t("Anmeldung offen", "Iscrizioni aperte")
    },
    {
      date: "20. Juni 2025",
      dateDetail: "20. Juni 2025, 18:00 Uhr",
      dateDetailIt: "20 giugno 2025, ore 18:00",
      title: t("Sommerabend mit italienischem Buffet", "Serata Estiva con Buffet Italiano"),
      description: t(
        "Genießen Sie einen lauen Sommerabend mit authentischen italienischen Spezialitäten, guten Weinen und gemütlichem Beisammensein.",
        "Godetevi una piacevole serata estiva con autentiche specialità italiane, buoni vini e convivialità."
      ),
      location: t("Vereinsheim Neustadt", "Sede dell'Associazione Neustadt"),
      locationIt: "Sede dell'Associazione Neustadt",
      participants: t("Mitglieder & Gäste", "Membri e Ospiti"),
      time: "18:00 - 23:00",
      type: "Event",
      status: t("Anmeldung bald", "Iscrizioni presto")
    },
    {
      date: "15. September 2025",
      dateDetail: "15. September 2025",
      dateDetailIt: "15 settembre 2025",
      title: t("Weinfest der Partnerschaft", "Festa del Vino del Gemellaggio"),
      description: t(
        "Unser jährliches Weinfest bringt italienische und fränkische Weinkultur zusammen. Mit Live-Musik, kulinarischen Highlights und viel guter Laune.",
        "La nostra festa annuale del vino unisce la cultura vinicola italiana e francone. Con musica dal vivo, delizie culinarie e tanto buon umore."
      ),
      location: t("Marktplatz Neustadt", "Piazza del Mercato Neustadt"),
      locationIt: "Piazza del Mercato Neustadt",
      participants: t("Öffentlich", "Pubblico"),
      time: "14:00 - 22:00",
      type: t("Fest", "Festa"),
      status: "Save the Date"
    }
  ];

  const news = [
    {
      date: "28. Februar 2025",
      dateIt: "28 febbraio 2025",
      title: t("Jahreshauptversammlung 2025", "Assemblea Generale 2025"),
      description: t(
        "Die diesjährige Jahreshauptversammlung fand erfolgreich statt. Der Vorstand berichtete über die vielfältigen Aktivitäten des vergangenen Jahres und stellte die Pläne für 2025 vor. Besonders erfreulich: Die Mitgliederzahl ist weiter gewachsen, und es wurden neue Projekte für den Jugendaustausch beschlossen.",
        "L'assemblea generale annuale si è svolta con successo. Il consiglio ha riferito sulle diverse attività dell'anno passato e ha presentato i piani per il 2025. Particolarmente gratificante: il numero dei membri è ulteriormente cresciuto e sono stati approvati nuovi progetti per lo scambio giovanile."
      ),
      image: "meeting"
    },
    {
      date: "10. Januar 2025",
      dateIt: "10 gennaio 2025",
      title: t("Neujahrsempfang voller Erfolg", "Ricevimento di Capodanno di Grande Successo"),
      description: t(
        "Mit über 60 Teilnehmern war unser Neujahrsempfang ein voller Erfolg! Bei italienischen und fränkischen Spezialitäten haben wir gemeinsam auf ein erfolgreiches neues Jahr angestoßen. Vielen Dank an alle Helfer und Teilnehmer für den wunderbaren Abend!",
        "Con oltre 60 partecipanti, il nostro ricevimento di Capodanno è stato un grande successo! Tra specialità italiane e francone abbiamo brindato insieme a un nuovo anno di successo. Grazie a tutti i volontari e partecipanti per la meravigliosa serata!"
      ),
      image: "celebration"
    },
    {
      date: "05. Dezember 2024",
      dateIt: "05 dicembre 2024",
      title: t("Weihnachtsmarkt-Besuch unserer italienischen Freunde", "Visita dei Nostri Amici Italiani al Mercatino di Natale"),
      description: t(
        "Eine Delegation aus Montespertoli besuchte uns zum traditionellen Weihnachtsmarkt. Der kulturelle Austausch und die herzlichen Begegnungen haben einmal mehr gezeigt, wie lebendig unsere Städtepartnerschaft ist.",
        "Una delegazione di Montespertoli ci ha visitato per il tradizionale mercatino di Natale. Lo scambio culturale e i calorosi incontri hanno dimostrato ancora una volta quanto sia vivo il nostro gemellaggio."
      ),
      image: "christmas"
    }
  ];

  const getStatusColor = (status: string) => {
    if (status.includes("offen") || status.includes("aperte")) {
      return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
    } else if (status.includes("bald") || status.includes("presto")) {
      return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
    } else {
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
    }
  };

  const getTypeColor = (type: string) => {
    if (type.includes("Fahrt") || type.includes("Viaggio")) {
      return "bg-primary/10 text-primary border-primary/20";
    } else if (type === "Event") {
      return "bg-italian-green/10 text-italian-green border-italian-green/20";
    } else {
      return "bg-italian-red/10 text-italian-red border-italian-red/20";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              {t("Aktuelles & Termine", "Notizie e Date")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                "Bleiben Sie informiert über unsere Veranstaltungen und Neuigkeiten",
                "Rimanete informati sui nostri eventi e notizie"
              )}
            </p>
          </div>
          
          {/* Kommende Termine */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary" />
              {t("Kommende Termine", "Prossimi Appuntamenti")}
            </h2>
            <div className="grid gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                          <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                        <CardDescription className="text-base">
                          {t(event.dateDetail, event.dateDetailIt)}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-foreground/90 leading-relaxed mb-4">{event.description}</p>
                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{t(event.location, event.locationIt)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Vergangene Events & News */}
          <section>
            <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
              <span className="h-1 w-12 bg-primary rounded"></span>
              {t("Neuigkeiten & Berichte", "Notizie e Resoconti")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardDescription className="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {t(item.date, item.dateIt)}
                    </CardDescription>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 leading-relaxed text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter */}
          <section className="mt-16">
            <Card className="bg-gradient-to-br from-primary/5 via-transparent to-italian-red/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  {t("Newsletter abonnieren", "Iscriviti alla Newsletter")}
                </CardTitle>
                <CardDescription className="text-center text-base">
                  {t(
                    "Bleiben Sie auf dem Laufenden! Melden Sie sich für unseren Newsletter an und verpassen Sie keine Neuigkeiten, Termine und Events mehr.",
                    "Rimanete aggiornati! Iscrivetevi alla nostra newsletter e non perdete più notizie, date ed eventi."
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  {t("Kontaktieren Sie uns unter", "Contattateci a")}:{" "}
                  <a href="mailto:newsletter@montespertoli-freunde.de" className="text-primary hover:underline font-medium">
                    newsletter@montespertoli-freunde.de
                  </a>
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Aktuelles;