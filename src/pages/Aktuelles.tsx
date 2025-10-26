import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Aktuelles = () => {
  const upcomingEvents = [
    {
      date: "15. Mai 2025",
      dateDetail: "15. - 22. Mai 2025",
      title: "Frühjahrsfahrt nach Montespertoli",
      description: "Unsere traditionelle Frühjahrsfahrt führt uns wieder in die wunderschöne Toskana. Erleben Sie eine Woche voller kultureller Begegnungen, kulinarischer Genüsse und italienischer Gastfreundschaft.",
      location: "Montespertoli, Italien",
      participants: "Noch 12 Plätze frei",
      time: "7 Tage",
      type: "Fahrt",
      status: "Anmeldung offen"
    },
    {
      date: "20. Juni 2025",
      dateDetail: "20. Juni 2025, 18:00 Uhr",
      title: "Sommerabend mit italienischem Buffet",
      description: "Genießen Sie einen lauen Sommerabend mit authentischen italienischen Spezialitäten, guten Weinen und gemütlichem Beisammensein.",
      location: "Vereinsheim Neustadt",
      participants: "Mitglieder & Gäste",
      time: "18:00 - 23:00 Uhr",
      type: "Event",
      status: "Anmeldung bald"
    },
    {
      date: "15. September 2025",
      dateDetail: "15. September 2025",
      title: "Weinfest der Partnerschaft",
      description: "Unser jährliches Weinfest bringt italienische und fränkische Weinkultur zusammen. Mit Live-Musik, kulinarischen Highlights und viel guter Laune.",
      location: "Marktplatz Neustadt",
      participants: "Öffentlich",
      time: "14:00 - 22:00 Uhr",
      type: "Fest",
      status: "Save the Date"
    }
  ];

  const news = [
    {
      date: "28. Februar 2025",
      title: "Jahreshauptversammlung 2025",
      description: "Die diesjährige Jahreshauptversammlung fand erfolgreich statt. Der Vorstand berichtete über die vielfältigen Aktivitäten des vergangenen Jahres und stellte die Pläne für 2025 vor. Besonders erfreulich: Die Mitgliederzahl ist weiter gewachsen, und es wurden neue Projekte für den Jugendaustausch beschlossen.",
      image: "meeting"
    },
    {
      date: "10. Januar 2025",
      title: "Neujahrsempfang voller Erfolg",
      description: "Mit über 60 Teilnehmern war unser Neujahrsempfang ein voller Erfolg! Bei italienischen und fränkischen Spezialitäten haben wir gemeinsam auf ein erfolgreiches neues Jahr angestoßen. Vielen Dank an alle Helfer und Teilnehmer für den wunderbaren Abend!",
      image: "celebration"
    },
    {
      date: "05. Dezember 2024",
      title: "Weihnachtsmarkt-Besuch unserer italienischen Freunde",
      description: "Eine Delegation aus Montespertoli besuchte uns zum traditionellen Weihnachtsmarkt. Der kulturelle Austausch und die herzlichen Begegnungen haben einmal mehr gezeigt, wie lebendig unsere Städtepartnerschaft ist.",
      image: "christmas"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Anmeldung offen":
        return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "Anmeldung bald":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
      case "Save the Date":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Fahrt":
        return "bg-primary/10 text-primary border-primary/20";
      case "Event":
        return "bg-italian-green/10 text-italian-green border-italian-green/20";
      case "Fest":
        return "bg-italian-red/10 text-italian-red border-italian-red/20";
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient">Aktuelles & Termine</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bleiben Sie informiert über unsere Veranstaltungen und Neuigkeiten
            </p>
          </div>
          
          {/* Kommende Termine */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary" />
              Kommende Termine
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
                          {event.dateDetail}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-foreground/90 leading-relaxed mb-4">{event.description}</p>
                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
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
              Neuigkeiten & Berichte
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardDescription className="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {item.date}
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
                <CardTitle className="text-2xl text-center">Newsletter abonnieren</CardTitle>
                <CardDescription className="text-center text-base">
                  Bleiben Sie auf dem Laufenden! Melden Sie sich für unseren Newsletter an und 
                  verpassen Sie keine Neuigkeiten, Termine und Events mehr.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Kontaktieren Sie uns unter:{" "}
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