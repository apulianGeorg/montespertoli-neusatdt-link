import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Castle, Droplets, TreePine, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Neustadt = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Castle,
      title: t("Historische Altstadt", "Centro Storico"),
      description: t(
        "Neustadt beeindruckt mit seiner gut erhaltenen Altstadt und fränkischer Fachwerkarchitektur.",
        "Neustadt colpisce per il suo centro storico ben conservato e l'architettura a graticcio francone."
      )
    },
    {
      icon: Droplets,
      title: t("Karpfenland", "Terra delle Carpe"),
      description: t(
        "Die Region ist bekannt für ihre traditionelle Karpfenzucht und kulinarische Spezialitäten.",
        "La regione è nota per la sua tradizionale allevamento di carpe e specialità culinarie."
      )
    },
    {
      icon: TreePine,
      title: t("Fränkische Landschaft", "Paesaggio Francone"),
      description: t(
        "Umgeben von Wäldern und Teichen bietet die Gegend herrliche Natur und Wanderwege.",
        "Circondata da boschi e stagni, la zona offre una natura meravigliosa e sentieri escursionistici."
      )
    },
    {
      icon: Building2,
      title: t("Wirtschaftsstandort", "Sede Economica"),
      description: t(
        "Als Mittelzentrum ist Neustadt ein wichtiger Wirtschafts- und Bildungsstandort in Mittelfranken.",
        "Come centro di medie dimensioni, Neustadt è un'importante sede economica e educativa nella Franconia centrale."
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
              Neustadt a.d. Aisch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                "Unsere fränkische Heimatstadt in Bayern",
                "La nostra città natale francone in Baviera"
              )}
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Über Neustadt */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50 animate-fade-in">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Über Neustadt a.d. Aisch", "Su Neustadt a.d. Aisch")}
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    "Neustadt an der Aisch ist eine Stadt im mittelfränkischen Landkreis Neustadt an der Aisch-Bad Windsheim in Bayern. Die Stadt liegt malerisch am Fluss Aisch und ist umgeben von der charakteristischen fränkischen Teichlandschaft.",
                    "Neustadt an der Aisch è una città nel distretto della Franconia centrale di Neustadt an der Aisch-Bad Windsheim in Baviera. La città si trova pittoresca sul fiume Aisch ed è circondata dal caratteristico paesaggio di stagni franconi."
                  )}
                </p>
                <p>
                  {t(
                    "Mit etwa 13.000 Einwohnern ist Neustadt ein wichtiges Mittelzentrum der Region. Die Stadt blickt auf eine über 700-jährige Geschichte zurück und hat sich ihren historischen Charme mit der gut erhaltenen Altstadt bewahrt.",
                    "Con circa 13.000 abitanti, Neustadt è un importante centro di medie dimensioni della regione. La città vanta una storia di oltre 700 anni e ha mantenuto il suo fascino storico con il centro storico ben conservato."
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
                    {t("Historische Altstadt", "Centro Storico")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Die Altstadt mit ihren Fachwerkhäusern und dem mittelalterlichen Grundriss lädt zum Bummeln ein.",
                      "Il centro storico con le sue case a graticcio e la pianta medievale invita a passeggiare."
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Schloss Neustadt", "Castello di Neustadt")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Das barocke Schloss beherbergt heute unter anderem das Landratsamt und historische Säle.",
                      "Il castello barocco ospita oggi tra l'altro l'ufficio distrettuale e sale storiche."
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Karpfenmuseum", "Museo della Carpa")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Ein einzigartiges Museum, das die Tradition der Karpfenzucht in der Region dokumentiert.",
                      "Un museo unico che documenta la tradizione dell'allevamento di carpe nella regione."
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Aischgründer Teichlandschaft", "Paesaggio degli Stagni di Aischgrund")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Die einzigartige Teichlandschaft ist ein Naturparadies und wichtiges Naherholungsgebiet.",
                      "L'unico paesaggio di stagni è un paradiso naturale e un'importante area ricreativa locale."
                    )}
                  </p>
                </div>
              </div>
            </section>

            {/* Veranstaltungen */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Traditionelle Veranstaltungen", "Eventi Tradizionali")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-foreground/90">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Altstadtfest", "Festa del Centro Storico")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Das jährliche Altstadtfest im Juli lockt tausende Besucher mit Musik, Kulinarik und Markttreiben.",
                      "La festa annuale del centro storico a luglio attira migliaia di visitatori con musica, gastronomia e mercato."
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {t("Karpfensaison", "Stagione delle Carpe")}
                  </h3>
                  <p className="leading-relaxed">
                    {t(
                      "Von September bis April ist Karpfensaison - die Zeit für das traditionelle fränkische Gericht.",
                      "Da settembre ad aprile è la stagione delle carpe - il periodo per il tradizionale piatto francone."
                    )}
                  </p>
                </div>
              </div>
            </section>

            {/* Fakten */}
            <section className="bg-gradient-to-br from-primary/5 via-transparent to-german-gold/5 p-8 rounded-lg border border-border/50">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                {t("Fakten über Neustadt", "Fatti su Neustadt")}
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("Lage", "Posizione")}</p>
                  <p className="text-muted-foreground">{t("Mittelfranken, Bayern", "Franconia Centrale, Baviera")}</p>
                </div>
                <div>
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("Einwohner", "Abitanti")}</p>
                  <p className="text-muted-foreground">~13.000</p>
                </div>
                <div>
                  <Castle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("Ersterwähnung", "Prima Menzione")}</p>
                  <p className="text-muted-foreground">1285</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Neustadt;