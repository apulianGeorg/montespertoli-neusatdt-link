import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Wine, Church, Mountain, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Montespertoli = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Wine,
      title: t("Weinbaugebiet", "Regione Vinicola"),
      description: t(
        "Montespertoli liegt im Herzen der Chianti-Region und ist bekannt für erstklassige Weine.",
        "Montespertoli si trova nel cuore della regione del Chianti ed è nota per i suoi vini di prima qualità."
      )
    },
    {
      icon: Church,
      title: t("Historische Kirchen", "Chiese Storiche"),
      description: t(
        "Die Stadt beherbergt wunderschöne mittelalterliche Kirchen und historische Gebäude.",
        "La città ospita splendide chiese medievali e edifici storici."
      )
    },
    {
      icon: Mountain,
      title: t("Toskanische Landschaft", "Paesaggio Toscano"),
      description: t(
        "Umgeben von sanften Hügeln und Olivenhainen bietet die Region atemberaubende Ausblicke.",
        "Circondata da dolci colline e uliveti, la regione offre panorami mozzafiato."
      )
    },
    {
      icon: Building,
      title: t("Lebendige Gemeinde", "Comunità Vivace"),
      description: t(
        "Mit etwa 13.000 Einwohnern ist Montespertoli eine lebendige und gastfreundliche Gemeinde.",
        "Con circa 13.000 abitanti, Montespertoli è una comunità vivace e accogliente."
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
              Montespertoli
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                "Unsere italienische Partnerstadt in der Toskana",
                "La nostra città gemellata italiana in Toscana"
              )}
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Über Montespertoli */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50 animate-fade-in">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Über Montespertoli", "Su Montespertoli")}
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    "Montespertoli ist eine charmante italienische Gemeinde in der Metropolstadt Florenz in der Region Toskana. Die Stadt liegt etwa 30 Kilometer südwestlich von Florenz und ist eingebettet in die malerische Hügellandschaft des Chianti-Gebiets.",
                    "Montespertoli è un affascinante comune italiano nella città metropolitana di Firenze, nella regione Toscana. La città si trova a circa 30 chilometri a sud-ovest di Firenze ed è immersa nel pittoresco paesaggio collinare della zona del Chianti."
                  )}
                </p>
                <p>
                  {t(
                    "Die Region ist weltberühmt für ihre Weinproduktion, insbesondere den Chianti Classico, und ihre reiche kulturelle Geschichte. Mit ihren sanften Hügeln, Olivenhainen und Weinbergen verkörpert Montespertoli die typisch toskanische Landschaft.",
                    "La regione è famosa in tutto il mondo per la sua produzione vinicola, in particolare il Chianti Classico, e per la sua ricca storia culturale. Con le sue dolci colline, gli uliveti e i vigneti, Montespertoli incarna il tipico paesaggio toscano."
                  )}
                </p>
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">
                {t("Highlights", "Punti Salienti")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <highlight.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{highlight.title}</CardTitle>
                          <CardContent className="p-0 text-muted-foreground">
                            {highlight.description}
                          </CardContent>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            {/* Sehenswürdigkeiten */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Sehenswürdigkeiten", "Luoghi di Interesse")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-foreground/90">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Castello di Montegufoni", "Castello di Montegufoni")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Ein beeindruckendes mittelalterliches Schloss mit reicher Geschichte und wunderschönen Gärten.",
                      "Un imponente castello medievale con una ricca storia e splendidi giardini."
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Chiesa di Sant'Andrea", "Chiesa di Sant'Andrea")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Die Hauptkirche von Montespertoli mit kunsthistorisch wertvollen Fresken.",
                      "La chiesa principale di Montespertoli con affreschi di valore storico-artistico."
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Museo del Vino", "Museo del Vino")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Das Weinmuseum zeigt die jahrhundertealte Tradition des Weinbaus in der Region.",
                      "Il museo del vino mostra la tradizione secolare della viticoltura nella regione."
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Weingüter", "Cantine Vinicole")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Zahlreiche traditionelle Weingüter laden zu Verkostungen und Führungen ein.",
                      "Numerose cantine tradizionali invitano a degustazioni e visite guidate."
                    )}
                  </p>
                </div>
              </div>
            </section>

            {/* Fakten */}
            <section className="bg-gradient-to-br from-primary/5 via-transparent to-italian-red/5 p-8 rounded-lg border border-border/50">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                {t("Fakten über Montespertoli", "Fatti su Montespertoli")}
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("Lage", "Posizione")}</p>
                  <p className="text-muted-foreground">{t("Toskana, Italien", "Toscana, Italia")}</p>
                </div>
                <div>
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("Einwohner", "Abitanti")}</p>
                  <p className="text-muted-foreground">~13.000</p>
                </div>
                <div>
                  <Mountain className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("Höhe", "Altitudine")}</p>
                  <p className="text-muted-foreground">257 m ü.M.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Montespertoli;