# AI-assistert kurs i webutvikling

Dette kurset tar for seg grunnleggende webutvikling. Oppgavene kan være kompliserte, men ved hjelp av AI-assistenter som ChatGPT eller Copilot vil man kunne løse oppgavene uten å kjenne alle detaljene i løsningen. Kurset anbefales for barn i alderen 10-15 år. Man bør sette av 2-3 timer for gjennomføring.

Her er en steg-for-steg gjennomføring av AI-assistert kodekurs i webutvikling.

## 1. Invitere deltakerne

Deltakerne trenger:
* En enkel datamaskin.
* En teksteditor.
* Tilgang til ChatGPT eller annen tilsvarende AI-assistent.

Det anbefales at deltakerne har installert VS Code, Google Chrome og en betalt versjon av ChatGPT (gratisversjonen har et begrenset antall prompts, som gjør at man kanskje ikke blir ferdig).

## 2. Forberedelse

Dette kan enten gjøres i fellesskap før kurset starter, eller deltakerne kan få beskjed om å gjøre det på forhånd.

Kursfilene må lastes ned fra https://github.com/iorg1/kodekurs/download/kodekurs.zip og filene må pakkes ut.

Det er viktig at man ikke åpner innholdet i zip-filen direkte, for dette gjør at referanser til CSS og javascript-filer ikke fungerer.

## 3. Gjennomføring av kurset

Kurset er delt inn i følgende kapitler:

1. Introduksjon til HTML og CSS.
2. Introduksjon til AI og ChatGPT.
3. Oppgave 1 - Bli oppdaget på en øde øy.
4. Oppgave 2 - Lage et enkelt spill.

### Introduksjon til HTML og CSS.

Hensikten med denne delen er å bli litt kjent med HTML og tags. Ved å åpne filen `html/index.html` får man opp ett tekstområde der man kan skrive inn HTML og ett tekstområde der man kan skrive inn CSS.

*Oppgave:* Skriv inn `<h1>Hallo verden</h1>` og klikk "Vis resultat".

Forklar konseptet med tagger, at de har en type, at de må balanseres, slik som parenteser i et mattestykke, og at de kan ha foreldre, søsken og barn.

*Oppgave:* Endre fra `h1` til `h2` og legg til HTML
```
<p>Jeg heter...</p>
<p>Jeg liker...</p>
<ul>
  <li>Godteri</li>
  <li>Fisk</li>
  <li>Brokkoli</li>
</ul>
```
Hva skjer hvis man bytter `<ul>` med `<ol>`?

*Oppgave:* Legg til CSS

```
  h2 { color: red; }
```

Forklar hvordan en selector fungerer, og hvordan man kan definere farger. I VS Code får man opp en fargevelger, slik at man kan prøve litt forskjellig.

*Oppgave:* Legg til CSS

```
  p { background-color: yellow; }
  li { text-align: center; }
```

*Oppgave:* Endre HTML

```
<p>Jeg heter <span>[navn]</span></p>
```

Legg til CSS:
```
span { background-color: blue; }
```

### Introduksjon til AI og ChatGPT

Åpne [ChatGPT](https://chatgpt.com/) og prøve å skrive noe.

```
Kan du gi meg de ti viktigste HTML-taggene med en tilhørende forklaring på hvordan de brukes?
```

```
Jeg har en h2 tagg. Kan du gi meg CSS for å få teksten til å forandre farge og pulsere i størrelse?
```
Legg resultatet inn i CSS-feltet og se hva som skjer.

La deltakerne leke seg en stund med forskjellige prompts mens du svarer på spørsmål, eller foreslå hva de kan utforske.

### Oppgagve 1 - Hvordan bli oppdaget hvis man er strandet på en øde øy?

Denne oppgaven åpner for kreativie løsninger, og faktisk kan man finne en løsning ved å laste opp hele innholdet i Oppgave1/index.html til ChatGPT.

Del en kan løses ved å endre fargene på .himmel, .himmellegeme og kanskje .skog, .strand og .havet.

Del to kan løses på flere måter. Noen eksempler:
* Skrive S.O.S. i sanden på stranden.
* Lage et bål som gir synlig røyk.
* Legg til en båt eller flåte på havet som man kan brukes til å reise bort med.

Bruk ChatGPT til å implementere løsningene man ønsker, eller se hvilke løsninger ChatGPT foreslår.

### Oppgave 2 - Lage et enkelt spill

Oppgave to starter med et område med et rundt objekt inni. Når man klikker på dette vises en alert-melding.

Filene `spill.css` og `spill.js` lastet.

Ved å laste opp de tre filene til ChatGPT kan man få hjelp til å:

* Gi ballen bevegelse og sprette i kantene.
* Telle opp hver gang man klikker på ballen.
* Telle opp hver gang man bommer på ballen.

Er kan det være mye opp til deltakerne selv å finne ut hva de har lyst å gjøre.