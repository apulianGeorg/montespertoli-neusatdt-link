import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";

const Impressum = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          {t("Impressum", "Note legali")}
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Freunde von Montespertoli e.V.
            </h2>
            <p>
              Ringstraße 15<br />
              91413 Neustadt an der Aisch<br />
              Telefon: +49 (0) 9161 - 2817<br />
              E-Mail: info@freunde-montespertoli.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {t("Konzeption und Umsetzung", "Concept e realizzazione")}
            </h2>
            <p>
              Georg Schostack<br />
              E-Mail: gschostack@gmx.de
            </p>
          </section>

          <section>
            <p>
              <strong>{t("Vertretungsberechtiger:", "Rappresentante autorizzato:")}</strong> Klaus Meier
            </p>
            <p>
              <strong>{t("Inhaltlich Verantwortlicher gem. § 55 II RStV:", "Responsabile dei contenuti ai sensi del § 55 II RStV:")}</strong> Klaus Meier
            </p>
            <p>
              <strong>{t("Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:", "Partita IVA secondo §27 a della legge sull'IVA:")}</strong> DE 166 586 043
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {t("Disclaimer – rechtliche Hinweise", "Disclaimer – Note legali")}
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              {t("§ 1 Haftungsbeschränkung", "§ 1 Limitazione di responsabilità")}
            </h3>
            <p>
              {t(
                "Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.",
                "I contenuti di questo sito web sono creati con la massima cura. Tuttavia, il fornitore non si assume alcuna responsabilità per la correttezza, completezza e attualità dei contenuti forniti. L'uso dei contenuti del sito web è a rischio dell'utente. I contributi contrassegnati con il nome rappresentano l'opinione del rispettivo autore e non sempre l'opinione del fornitore. Il semplice utilizzo del sito web del fornitore non comporta alcun rapporto contrattuale tra l'utente e il fornitore."
              )}
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              {t("§ 2 Externe Links", "§ 2 Link esterni")}
            </h3>
            <p>
              {t(
                "Diese Website enthält Verknüpfungen zu Websites Dritter (\"externe Links\"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.",
                "Questo sito contiene collegamenti a siti web di terzi (\"link esterni\"). Questi siti web sono soggetti alla responsabilità dei rispettivi gestori. Il fornitore ha verificato i contenuti esterni al momento del collegamento iniziale per eventuali violazioni della legge. Al momento non erano evidenti violazioni della legge. Il fornitore non ha alcuna influenza sulla progettazione attuale e futura e sui contenuti delle pagine collegate. L'impostazione di collegamenti esterni non significa che il fornitore faccia propri i contenuti dietro il riferimento o il collegamento. Un controllo costante dei collegamenti esterni non è ragionevole per il fornitore senza indicazioni concrete di violazioni della legge. Tuttavia, in caso di conoscenza di violazioni della legge, tali collegamenti esterni saranno immediatamente rimossi."
              )}
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              {t("§ 3 Urheber- und Leistungsschutzrechte", "§ 3 Diritti d'autore e diritti affini")}
            </h3>
            <p>
              {t(
                "Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.",
                "I contenuti pubblicati su questo sito web sono soggetti al diritto d'autore e ai diritti affini tedeschi. Qualsiasi utilizzo non consentito dal diritto d'autore e dai diritti affini tedeschi richiede il previo consenso scritto del fornitore o del rispettivo titolare dei diritti. Ciò vale in particolare per la riproduzione, l'elaborazione, la traduzione, l'archiviazione, il trattamento o la riproduzione di contenuti in database o altri media e sistemi elettronici. I contenuti e i diritti di terzi sono contrassegnati come tali. La riproduzione o distribuzione non autorizzata di singoli contenuti o pagine complete non è consentita ed è punibile. È consentita solo la realizzazione di copie e download per uso personale, privato e non commerciale. La visualizzazione di questo sito web in frame esterni è consentita solo con permesso scritto."
              )}
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              {t("§ 4 Besondere Nutzungsbedingungen", "§ 4 Condizioni d'uso particolari")}
            </h3>
            <p>
              {t(
                "Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.",
                "Nella misura in cui le condizioni particolari per singoli utilizzi di questo sito web differiscono dai paragrafi di cui sopra, ciò sarà espressamente indicato nel punto appropriato. In questo caso, si applicano le condizioni d'uso particolari nel rispettivo caso individuale."
              )}
            </p>

            <p className="text-sm mt-4">
              {t("Quelle: Impressum-Vorlage von ", "Fonte: modello di note legali da ")}
              <a href="https://www.juraforum.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.juraforum.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {t("Datenschutz", "Privacy")}
            </h2>
            <p>
              {t(
                "Nachfolgend möchten wir Sie über unsere Datenschutzerklärung informieren. Sie finden hier Informationen über die Erhebung und Verwendung persönlicher Daten bei der Nutzung unserer Webseite. Wir beachten dabei das für Deutschland geltende Datenschutzrecht. Sie können diese Erklärung jederzeit auf unserer Webseite abrufen. Wir weisen ausdrücklich darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen und nicht lückenlos vor dem Zugriff durch Dritte geschützt werden kann. Die Verwendung der Kontaktdaten unseres Impressums zur gewerblichen Werbung ist ausdrücklich nicht erwünscht, es sei denn wir hatten zuvor unsere schriftliche Einwilligung erteilt oder es besteht bereits eine Geschäftsbeziehung. Der Anbieter und alle auf dieser Website genannten Personen widersprechen hiermit jeder kommerziellen Verwendung und Weitergabe ihrer Daten.",
                "Di seguito vorremmo informarvi sulla nostra dichiarazione sulla privacy. Qui troverete informazioni sulla raccolta e l'uso dei dati personali quando utilizzate il nostro sito web. Osserviamo la legge tedesca sulla protezione dei dati. Potete consultare questa dichiarazione in qualsiasi momento sul nostro sito web. Sottolineiamo espressamente che la trasmissione di dati su Internet (ad es. nella comunicazione via e-mail) può presentare lacune di sicurezza e non può essere completamente protetta dall'accesso da parte di terzi. L'uso dei dati di contatto del nostro colofone per la pubblicità commerciale non è espressamente desiderato, a meno che non abbiamo precedentemente dato il nostro consenso scritto o esista già un rapporto commerciale. Il fornitore e tutte le persone menzionate su questo sito web si oppongono con la presente a qualsiasi uso commerciale e trasmissione dei loro dati."
              )}
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              {t("Personenbezogene Daten", "Dati personali")}
            </h3>
            <p>
              {t(
                "Sie können unsere Webseite ohne Angabe personenbezogener Daten besuchen. Soweit auf unseren Seiten personenbezogene Daten (wie Name, Anschrift oder E-Mail Adresse) erhoben werden, erfolgt dies, soweit möglich, auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Sofern zwischen Ihnen und uns ein Vertragsverhältnis begründet, inhaltlich ausgestaltet oder geändert werden soll oder Sie an uns eine Anfrage stellen, erheben und verwenden wir personenbezogene Daten von Ihnen, soweit dies zu diesen Zwecken erforderlich ist (Bestandsdaten). Wir erheben, verarbeiten und nutzen personenbezogene Daten soweit dies erforderlich ist, um Ihnen die Inanspruchnahnahme des Webangebots zu ermöglichen (Nutzungsdaten). Sämtliche personenbezogenen Daten werden nur solange gespeichert wie dies für den genannten Zweck (Bearbeitung Ihrer Anfrage oder Abwicklung eines Vertrags) erforderlich ist. Hierbei werden steuer- und handelsrechtliche Aufbewahrungsfristen berücksichtigt. Auf Anordnung der zuständigen Stellen dürfen wir im Einzelfall Auskunft über diese Daten (Bestandsdaten) erteilen, soweit dies für Zwecke der Strafverfolgung, zur Gefahrenabwehr, zur Erfüllung der gesetzlichen Aufgaben der Verfassungsschutzbehörden oder des Militärischen Abschirmdienstes oder zur Durchsetzung der Rechte am geistigen Eigentum erforderlich ist.",
                "Potete visitare il nostro sito web senza fornire dati personali. Nella misura in cui i dati personali (come nome, indirizzo o indirizzo e-mail) vengono raccolti sulle nostre pagine, questo avviene, per quanto possibile, su base volontaria. Questi dati non saranno trasmessi a terzi senza il vostro espresso consenso. Se tra voi e noi deve essere stabilito, progettato o modificato un rapporto contrattuale o se ci fate una richiesta, raccogliamo e utilizziamo i vostri dati personali nella misura necessaria a questi scopi (dati anagrafici). Raccogliamo, elaboriamo e utilizziamo i dati personali nella misura necessaria per consentirvi di utilizzare l'offerta web (dati di utilizzo). Tutti i dati personali vengono archiviati solo per il tempo necessario allo scopo indicato (elaborazione della vostra richiesta o esecuzione di un contratto). Vengono presi in considerazione i termini di conservazione fiscali e commerciali. Su ordine delle autorità competenti, possiamo fornire informazioni su questi dati (dati anagrafici) in casi individuali, nella misura necessaria per scopi di perseguimento penale, prevenzione di pericoli, adempimento dei compiti legali delle autorità di protezione costituzionale o del servizio di controspionaggio militare o per l'applicazione dei diritti di proprietà intellettuale."
              )}
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              {t("Datenschutzerklärung für den Webanalysedienst Google Analytics", "Dichiarazione sulla privacy per il servizio di analisi web Google Analytics")}
            </h3>
            <p>
              {t(
                "Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (\"Google\"). Google Analytics verwendet sog. \"Cookies\", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir haben die IP-Anonymisierung aktiviert. Auf dieser Webseite wird Ihre IP-Adresse von Google daher innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren:",
                "Questo sito web utilizza Google Analytics, un servizio di analisi web di Google Inc. (\"Google\"). Google Analytics utilizza i cosiddetti \"cookie\", file di testo che vengono memorizzati sul vostro computer e che consentono un'analisi dell'uso del sito web da parte vostra. Le informazioni generate dal cookie sul vostro utilizzo di questo sito web vengono generalmente trasmesse e archiviate su un server di Google negli Stati Uniti. Abbiamo attivato l'anonimizzazione IP. Su questo sito web, il vostro indirizzo IP verrà quindi abbreviato da Google all'interno degli Stati membri dell'Unione Europea o in altri Stati contraenti dell'Accordo sullo Spazio economico europeo in anticipo. Solo in casi eccezionali l'indirizzo IP completo verrà trasmesso a un server di Google negli Stati Uniti e lì abbreviato. Per conto del gestore di questo sito web, Google utilizzerà queste informazioni per valutare il vostro utilizzo del sito web, per compilare report sulle attività del sito web e per fornire altri servizi relativi all'utilizzo del sito web e all'utilizzo di Internet al gestore del sito web. L'indirizzo IP trasmesso dal vostro browser nell'ambito di Google Analytics non verrà unito ad altri dati di Google. Potete impedire la memorizzazione dei cookie mediante un'impostazione appropriata del vostro software del browser; tuttavia, vi segnaliamo che in questo caso potreste non essere in grado di utilizzare tutte le funzioni di questo sito web nella loro interezza. Potete inoltre impedire la raccolta dei dati generati dal cookie e relativi al vostro utilizzo del sito web (incluso il vostro indirizzo IP) a Google nonché il trattamento di questi dati da parte di Google scaricando e installando il plug-in del browser disponibile al seguente link:"
              )}{" "}
              <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                http://tools.google.com/dlpage/gaoptout?hl=de
              </a>
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              {t("Auskunftsrecht", "Diritto di informazione")}
            </h3>
            <p>
              {t(
                "Sie haben das jederzeitige Recht, sich unentgeltlich und unverzüglich über die zu Ihrer Person erhobenen Daten zu erkundigen. Sie haben das jederzeitige Recht, Ihre Zustimmung zur Verwendung Ihrer angegeben persönlichen Daten mit Wirkung für die Zukunft zu widerrufen. Zur Auskunftserteilung wenden Sie sich bitte an den Anbieter unter den Kontaktdaten im Impressum.",
                "Avete il diritto in qualsiasi momento di richiedere informazioni gratuitamente e immediatamente sui dati raccolti sulla vostra persona. Avete il diritto in qualsiasi momento di revocare il vostro consenso all'uso dei vostri dati personali indicati con effetto per il futuro. Per informazioni, si prega di contattare il fornitore ai dati di contatto nel colofone."
              )}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
