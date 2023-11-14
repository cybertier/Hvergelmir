# Software Supply Chain Visualizer (Hvergelmir)
> Hvergelmir (altnordisch Hvergelmir), auch Hwergelmir, ist in der nordischen Mythologie die Quelle, die alle Flüsse der Welt mit Wasser speist. -- https://de.wikipedia.org/wiki/Hvergelmir

## Sinn und Zweck
Lieferketten entstehen, wenn viele Firmen in den Prozess der Produktion einbezogen sind, von Rohstoffen bis zum fertigen Produkt.

Eine Firma könnte alles alleine herstellen, aber oft erfordert die Herstellung eines Produktes die Zusammenarbeit mehrerer Firmen.
Zum Beispiel könnte eine Firma die Gangschaltung für ein Fahrrad herstellen, eine andere die Laufräder, und weitere Firmen kümmern sich um andere Bauteile oder Ressourcen wie Gummi für die Reifen

Der Fahrradhersteller produziert nur einige wenige Bauteile selbst und bezieht die restlichen von anderen Unternehmen, die wiederum ihre Bauteile von weiteren Unternehmen beziehen können.
So können komplexe Beziehungen zwischen verschiedenen Bauteilen und Firmen in verschiedenen Ländern entstehen.

Auch bei Software ist es oft einfacher, existierende Bauteile zu nutzen, statt selbst welche zu programmieren.
Dadurch entstehen komplexe Netzwerke aus Softwarebauteilen von verschiedenen Herstellern.
In solchen Softwarelieferketten ist es manchmal schwer zu erkennen, von welchen Herstellern die Softwarebauteile stammen oder wo sie überhaupt verbaut sind.
Dennoch muss geprüft werden, ob alle wichtigen Teile sicher sind.

Ein einziges fehlerhaftes oder bösartiges Teil kann die Sicherheit des Programms gefährden, ähnlich wie bei einem Auto auf der Autobahn, wenn eine Schraube bricht.
Diese Arbeit untersucht Softwarelieferketten, die komplexe Netzwerke aus solchen Softwarebauteilen bilden.

## Beispiele
Zur Zeit gibt es vorberechnete Softwarelieferketten für:
- Firefox
- Chromium

## Deployment
Die Webseite wird über GitHub-Actions gebaut und hier gehostet: https://cybertier.github.io/Hvergelmir


