import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Heart, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Historie = () => {
  const { t } = useLanguage();
  
  const timeline = [
    {
      year: "1982",
      yearIt: "1982",
      title: t("Erster Besuch in Montespertoli", "Prima Visita a Montespertoli"),
      description: t(
        "Erster Besuch des Ehepaares Förster in Montespertoli anlässlich einer VHS-Reise. Kennenlernen von Antonella Chiavacci, später Vorsitzende der 'Amici di Neustadt' und Bürgermeisterin von Montespertoli. Bilaterale Besuche auf privater Ebene in den Nachfolgejahren generierten und vertieften das beiderseitige Interesse, eine partnerschaftliche Verbindung einzugehen.",
        "Prima visita della coppia Förster a Montespertoli in occasione di un viaggio VHS. Conoscenza di Antonella Chiavacci, successivamente presidente degli 'Amici di Neustadt' e sindaco di Montespertoli. Le visite bilaterali a livello privato negli anni successivi generarono e approfondirono l'interesse reciproco a stabilire un legame di partnership."
      )
    },
    {
      year: "1991",
      yearIt: "1991",
      title: t("Gründung des Vereins", "Fondazione dell'Associazione"),
      description: t(
        "Die Bürgermeisterwechsel in beiden Städten begünstigten die Entwicklung einer Städtepartnerschaft, da eine verstärkte Förderung des Partnerschaftsgedankens spürbar wurde. Beginn von offiziellen Besuchen von Bürgern und Bürgermeistern beider Partnerstädte. Offizielle Vereinsgründung der 'Freunde von Montespertoli' durch Willi Förster und 63 seiner Freunde am 11. Oktober 1991.",
        "I cambi di sindaco in entrambe le città favorirono lo sviluppo di un gemellaggio, poiché si avvertì un maggiore sostegno all'idea di partnership. Inizio delle visite ufficiali di cittadini e sindaci di entrambe le città gemellate. Fondazione ufficiale dell'associazione 'Amici di Montespertoli' da parte di Willi Förster e 63 dei suoi amici l'11 ottobre 1991."
      )
    },
    {
      year: "1992",
      yearIt: "1992",
      title: t("Offizielle Anerkennung der Städtepartnerschaft", "Riconoscimento Ufficiale del Gemellaggio"),
      description: t(
        "Offizielle Anerkennung der Städtepartnerschaft durch den Neustädter Stadtrat, ebenso in Montespertoli. Unterzeichnung der Partnerschaftsurkunden bei Feierlichkeiten in Neustadt und Montespertoli.",
        "Riconoscimento ufficiale del gemellaggio da parte del consiglio comunale di Neustadt, così come a Montespertoli. Firma dei documenti di gemellaggio durante le celebrazioni a Neustadt e Montespertoli."
      )
    },
    {
      year: "2011",
      yearIt: "2011",
      title: t("20 Jahre Verein", "20 Anni dell'Associazione"),
      description: t(
        "Feier zum 20-jährigen Bestehen des Vereins 'Freunde von Montespertoli e.V.'",
        "Celebrazione del 20° anniversario dell'associazione 'Amici di Montespertoli e.V.'"
      )
    },
    {
      year: "2012",
      yearIt: "2012",
      title: t("20 Jahre Städtepartnerschaft", "20 Anni di Gemellaggio"),
      description: t(
        "Die Partnerschaft begeht das 20-jährige Jubiläum mit Feiern in Neustadt und Montespertoli.",
        "La partnership celebra il 20° anniversario con festeggiamenti a Neustadt e Montespertoli."
      )
    },
    {
      year: "2016",
      yearIt: "2016",
      title: t("25 Jahre Verein", "25 Anni dell'Associazione"),
      description: t(
        "Der Verein Freunde von Montespertoli wird am 11.10.2016 25 Jahre.",
        "L'associazione Amici di Montespertoli compie 25 anni l'11.10.2016."
      )
    },
    {
      year: "2017",
      yearIt: "2017",
      title: t("25 Jahre Städtepartnerschaft", "25 Anni di Gemellaggio"),
      description: t(
        "Feiern der 25-jährigen Partnerschaft zwischen Neustadt und Montespertoli.",
        "Celebrazioni dei 25 anni di partnership tra Neustadt e Montespertoli."
      )
    },
    {
      year: "2022",
      yearIt: "2022",
      title: t("30 Jahre Städtepartnerschaft", "30 Anni di Gemellaggio"),
      description: t(
        "Feiern der 30-jährigen Partnerschaft Neustadt und Montespertoli.",
        "Celebrazioni dei 30 anni di partnership tra Neustadt e Montespertoli."
      )
    }
  ];

  const milestones = [
    {
      icon: Calendar,
      number: "1991",
      label: t("Vereinsgründung", "Fondazione dell'Associazione")
    },
    {
      icon: Award,
      number: "1992",
      label: t("Offizielle Partnerschaft", "Partnership Ufficiale")
    },
    {
      icon: Users,
      number: "33+",
      label: t("Jahre Verein", "Anni dell'Associazione")
    },
    {
      icon: Heart,
      number: "32+",
      label: t("Jahre Städtepartnerschaft", "Anni di Gemellaggio")
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
                "Eine Zeitreise durch über 30 Jahre deutsch-italienische Freundschaft",
                "Un viaggio nel tempo attraverso oltre 30 anni di amicizia italo-tedesca"
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