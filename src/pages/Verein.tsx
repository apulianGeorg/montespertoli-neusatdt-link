import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Globe, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import vorstandImage from "@/assets/vorstand_2025.jpg";

const Verein = () => {
  const { t } = useLanguage();
  
  const goals = [
    {
      icon: Globe,
      title: t("Kultureller Austausch", "Scambio Culturale"),
      description: t(
        "Förderung des kulturellen Austauschs zwischen Deutschland und Italien durch Veranstaltungen, Feste und gemeinsame Projekte.",
        "Promozione dello scambio culturale tra Germania e Italia attraverso eventi, feste e progetti comuni."
      )
    },
    {
      icon: Users,
      title: t("Begegnungen schaffen", "Creare Incontri"),
      description: t(
        "Organisation von Begegnungen und gemeinsamen Veranstaltungen, die Menschen beider Städte zusammenbringen.",
        "Organizzazione di incontri ed eventi comuni che riuniscono persone di entrambe le città."
      )
    },
    {
      icon: Heart,
      title: t("Freundschaft pflegen", "Coltivare l'Amicizia"),
      description: t(
        "Pflege und Stärkung der langjährigen Freundschaft zwischen Neustadt an der Aisch und Montespertoli.",
        "Cura e rafforzamento della lunga amicizia tra Neustadt an der Aisch e Montespertoli."
      )
    },
    {
      icon: GraduationCap,
      title: t("Jugendarbeit", "Lavoro Giovanile"),
      description: t(
        "Unterstützung von Schulaustauschen, Jugendprojekten und Förderung des interkulturellen Lernens.",
        "Supporto agli scambi scolastici, progetti giovanili e promozione dell'apprendimento interculturale."
      )
    }
  ];

  const boardMembers = [
    { 
      position: t("1. Vorsitzende/r", "1° Presidente"), 
      name: "[Name]", 
      email: "vorsitz@montespertoli-freunde.de" 
    },
    { 
      position: t("2. Vorsitzende/r", "2° Presidente"), 
      name: "[Name]", 
      email: "vorsitz@montespertoli-freunde.de" 
    },
    { 
      position: t("Kassenwart", "Tesoriere"), 
      name: "[Name]", 
      email: "kasse@montespertoli-freunde.de" 
    },
    { 
      position: t("Schriftführer/in", "Segretario/a"), 
      name: "[Name]", 
      email: "info@montespertoli-freunde.de" 
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              {t("Über den Verein", "Sull'Associazione")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                "Brücke zwischen zwei Kulturen, vereint in Freundschaft",
                "Ponte tra due culture, unite in amicizia"
              )}
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Geschichte */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50 animate-fade-in">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Unsere Geschichte", "La Nostra Storia")}
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    "Die Städtepartnerschaft zwischen Montespertoli und Neustadt an der Aisch verbindet seit vielen Jahren Menschen, Kulturen und Freundschaften über Ländergrenzen hinweg. Was als Idee eines kulturellen Austausches begann, hat sich zu einer lebendigen und herzlichen Beziehung entwickelt.",
                    "Il gemellaggio tra Montespertoli e Neustadt an der Aisch unisce da molti anni persone, culture e amicizie oltre i confini nazionali. Quella che è iniziata come l'idea di uno scambio culturale si è trasformata in una relazione vivace e calorosa."
                  )}
                </p>
                <p>
                  {t(
                    "Unser Verein \"Freunde von Montespertoli e.V.\" ist die lebendige Brücke zwischen beiden Städten. Wir organisieren regelmäßig Fahrten, Begegnungen und gemeinsame Feste, bei denen die deutsch-italienische Freundschaft gefeiert und vertieft wird.",
                    "La nostra associazione \"Amici di Montespertoli e.V.\" è il ponte vivente tra le due città. Organizziamo regolarmente viaggi, incontri e feste comuni, durante i quali l'amicizia italo-tedesca viene celebrata e approfondita."
                  )}
                </p>
                <p>
                  {t(
                    "Durch die Jahre hinweg sind unzählige persönliche Freundschaften entstanden, Familien haben sich kennengelernt und junge Menschen konnten von den Austauschprogrammen profitieren. Diese menschlichen Verbindungen sind das Herzstück unserer Partnerschaft.",
                    "Nel corso degli anni sono nate innumerevoli amicizie personali, le famiglie si sono conosciute e i giovani hanno potuto beneficiare dei programmi di scambio. Questi legami umani sono il cuore del nostro gemellaggio."
                  )}
                </p>
              </div>
            </section>

            {/* Ziele */}
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">
                {t("Unsere Ziele", "I Nostri Obiettivi")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {goals.map((goal, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <goal.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{goal.title}</CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {goal.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            {/* Aktivitäten */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Unsere Aktivitäten", "Le Nostre Attività")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-foreground/90">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Jährliche Fahrten", "Viaggi Annuali")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Regelmäßige Gruppenfahrten nach Montespertoli im Frühjahr und Herbst, sowie Gegenbesuche unserer italienischen Freunde in Neustadt.",
                      "Viaggi di gruppo regolari a Montespertoli in primavera e autunno, così come visite di ritorno dei nostri amici italiani a Neustadt."
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Kulturelle Veranstaltungen", "Eventi Culturali")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Organisation von Italienischen Abenden, Weinfesten und kulturellen Events, die beiden Kulturen gerecht werden.",
                      "Organizzazione di serate italiane, feste del vino ed eventi culturali che fanno onore a entrambe le culture."
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Schulaustausch", "Scambio Scolastico")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Unterstützung des Schüleraustauschs zwischen den Schulen beider Städte und Förderung von Jugendprojekten.",
                      "Supporto allo scambio studentesco tra le scuole di entrambe le città e promozione di progetti giovanili."
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Kulinarische Begegnungen", "Incontri Culinari")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Gemeinsame Koch- und Genussabende, bei denen die italienische und fränkische Küche im Mittelpunkt stehen.",
                      "Serate di cucina e degustazione comuni, in cui la cucina italiana e francone sono al centro dell'attenzione."
                    )}
                  </p>
                </div>
              </div>
            </section>

            {/* Vorstand */}
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">
                {t("Unser Vorstand", "Il Nostro Consiglio")}
              </h2>
              
              {/* Vorstandsfoto */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={vorstandImage} 
                  alt={t("Vorstand 2025", "Consiglio 2025")}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {boardMembers.map((member, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">{member.position}</CardTitle>
                      <CardDescription className="text-base">
                        <span className="font-semibold text-foreground">{member.name}</span><br />
                        <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                          {member.email}
                        </a>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            {/* Kontakt */}
            <section className="bg-gradient-to-br from-primary/5 via-transparent to-italian-red/5 p-8 rounded-lg border border-border/50">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                {t("Kontakt", "Contatto")}
              </h2>
              <div className="text-center space-y-2">
                <p className="text-foreground/90">
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:info@montespertoli-freunde.de" className="text-primary hover:underline">
                    info@montespertoli-freunde.de
                  </a>
                </p>
                <p className="text-foreground/90">
                  <strong>{t("Adresse", "Indirizzo")}:</strong> {t("Freunde von", "Amici di")} Montespertoli e.V., [Vereinsadresse], Neustadt a. d. Aisch
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Verein;