import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Globe, GraduationCap } from "lucide-react";

const Verein = () => {
  const goals = [
    {
      icon: Globe,
      title: "Kultureller Austausch",
      description: "Förderung des kulturellen Austauschs zwischen Deutschland und Italien durch Veranstaltungen, Feste und gemeinsame Projekte."
    },
    {
      icon: Users,
      title: "Begegnungen schaffen",
      description: "Organisation von Begegnungen und gemeinsamen Veranstaltungen, die Menschen beider Städte zusammenbringen."
    },
    {
      icon: Heart,
      title: "Freundschaft pflegen",
      description: "Pflege und Stärkung der langjährigen Freundschaft zwischen Neustadt an der Aisch und Montespertoli."
    },
    {
      icon: GraduationCap,
      title: "Jugendarbeit",
      description: "Unterstützung von Schulaustauschen, Jugendprojekten und Förderung des interkulturellen Lernens."
    }
  ];

  const boardMembers = [
    { position: "1. Vorsitzende/r", name: "[Name]", email: "vorsitz@montespertoli-freunde.de" },
    { position: "2. Vorsitzende/r", name: "[Name]", email: "vorsitz@montespertoli-freunde.de" },
    { position: "Kassenwart", name: "[Name]", email: "kasse@montespertoli-freunde.de" },
    { position: "Schriftführer/in", name: "[Name]", email: "info@montespertoli-freunde.de" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient">Über den Verein</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Brücke zwischen zwei Kulturen, vereint in Freundschaft
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Geschichte */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50 animate-fade-in">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Die Städtepartnerschaft zwischen Montespertoli und Neustadt an der Aisch verbindet seit vielen Jahren 
                  Menschen, Kulturen und Freundschaften über Ländergrenzen hinweg. Was als Idee eines kulturellen 
                  Austausches begann, hat sich zu einer lebendigen und herzlichen Beziehung entwickelt.
                </p>
                <p>
                  Unser Verein "Freunde von Montespertoli e.V." ist die lebendige Brücke zwischen beiden Städten. 
                  Wir organisieren regelmäßig Fahrten, Begegnungen und gemeinsame Feste, bei denen die deutsch-italienische 
                  Freundschaft gefeiert und vertieft wird.
                </p>
                <p>
                  Durch die Jahre hinweg sind unzählige persönliche Freundschaften entstanden, Familien haben sich 
                  kennengelernt und junge Menschen konnten von den Austauschprogrammen profitieren. Diese 
                  menschlichen Verbindungen sind das Herzstück unserer Partnerschaft.
                </p>
              </div>
            </section>

            {/* Ziele */}
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">Unsere Ziele</h2>
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
                Unsere Aktivitäten
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-foreground/90">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">Jährliche Fahrten</h3>
                  <p className="leading-relaxed">
                    Regelmäßige Gruppenfahrten nach Montespertoli im Frühjahr und Herbst, sowie Gegenbesuche 
                    unserer italienischen Freunde in Neustadt.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">Kulturelle Veranstaltungen</h3>
                  <p className="leading-relaxed">
                    Organisation von Italienischen Abenden, Weinfesten und kulturellen Events, die beiden 
                    Kulturen gerecht werden.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">Schulaustausch</h3>
                  <p className="leading-relaxed">
                    Unterstützung des Schüleraustauschs zwischen den Schulen beider Städte und Förderung 
                    von Jugendprojekten.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">Kulinarische Begegnungen</h3>
                  <p className="leading-relaxed">
                    Gemeinsame Koch- und Genussabende, bei denen die italienische und fränkische Küche 
                    im Mittelpunkt stehen.
                  </p>
                </div>
              </div>
            </section>

            {/* Vorstand */}
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">Unser Vorstand</h2>
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
              <h2 className="text-2xl font-semibold mb-4 text-center">Kontakt</h2>
              <div className="text-center space-y-2">
                <p className="text-foreground/90">
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:info@montespertoli-freunde.de" className="text-primary hover:underline">
                    info@montespertoli-freunde.de
                  </a>
                </p>
                <p className="text-foreground/90">
                  <strong>Adresse:</strong> Freunde von Montespertoli e.V., [Vereinsadresse], Neustadt a. d. Aisch
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