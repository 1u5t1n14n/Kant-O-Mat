const questions = [
    {
      "text": "Sollen Lootboxen in Videospielen verboten werden, weil diese Glückspielsucht fördern?",
      "weights": {
        "AfD": -1,
        "CDU": 0,
        "FDP": -1,
        "SPD": 1,
        "VOLT": 1,
        "BSW": 0,
        "Die Linke": 1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Sollte es eine Kindergrundsicherung (Geld zur Unterstützung ärmerer Kinder) geben?",
      "weights": {
        "AfD": -1,
        "CDU": -1,
        "FDP": -1,
        "SPD": 1,
        "VOLT": 1,
        "BSW": 0,
        "Die Linke": 1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Sollen ungesunde Lebensmittel mehr besteuert werden (Zuckersteuer)? \nDadurch können zuckerhaltige Produkte teurer werden.",
      "weights": {
        "AfD": -1,
        "CDU": -1,
        "FDP": -1,
        "SPD": 1,
        "VOLT": 1,
        "BSW": 0,
        "Die Linke": 1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Soll Deutschland wieder Atomenergie zur Stromerzeugung nutzen?",
      "weights": {
        "AfD": 1,
        "CDU": 1,
        "FDP": 1,
        "SPD": -1,
        "VOLT": 0,
        "BSW": -1,
        "Die Linke": 0,
        "Bündnis90": -1
      }
    },
    {
      "text": "Sollen Hausaufgaben verboten werden?",
      "weights": {
        "AfD": -1,
        "CDU": -1,
        "FDP": -1,
        "SPD": 0,
        "VOLT": 0,
        "BSW": 1,
        "Die Linke": 1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Soll weiterhin mehr Geld für den Ausbau von Wind- und Sonnenenergie ausgegeben werden?",
      "weights": {
        "AfD": -1,
        "CDU": 1,
        "FDP": -1,
        "SPD": 1,
        "VOLT": 1,
        "BSW": -1,
        "Die Linke": 1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Soll es ein soziales Pflichtjahr nach Beendigung der Schule geben?",
      "weights": {
        "AfD": 0,
        "CDU": 1,
        "FDP": -1,
        "SPD": -1,
        "VOLT": -1,
        "BSW": 1,
        "Die Linke": -1,
        "Bündnis90": -1
      }
    },
    {
      "text": "Soll es weiterhin eine gesetzliche Frauenquote zur Stärkung der Gleichberechtigung geben?",
      "weights": {
        "AfD": -1,
        "CDU": 1,
        "FDP": 0,
        "SPD": 1,
        "VOLT": 1,
        "BSW": 1,
        "Die Linke": 1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Soll das Bürgergeld (Grundsicherung für arme Menschen) gesenkt werden, um Kosten zu sparen?",
      "weights": {
        "AfD": 1,
        "CDU": 1,
        "FDP": 1,
        "SPD": -1,
        "VOLT": -1,
        "BSW": 1,
        "Die Linke": -1,
        "Bündnis90": -1
      }
    },
    {
      "text": "Soll es ein Tempolimit (maximal 130km/h) auf der Autobahn geben?",
      "weights": {
        "AfD": -1,
        "CDU": -1,
        "FDP": -1,
        "SPD": 1,
        "VOLT": 1,
        "BSW": -1,
        "Die Linke": 1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Sollte der Mindestlohn angehoben werden?",
      "weights": {
        "AfD": 0,
        "CDU": -1,
        "FDP": -1,
        "SPD": 1,
        "VOLT": 1,
        "BSW": 1,
        "Die Linke": 1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Soll das Selbstbestimmungsgesetz über das eigene Geschlecht (SBGG) beibehalten werden?",
      "weights": {
        "AfD": -1,
        "CDU": -1,
        "FDP": 1,
        "SPD": 1,
        "VOLT": 1,
        "BSW": -1,
        "Die Linke": 1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Soll man in Deutschland schon ab 16 Jahren wählen dürfen?",
      "weights": {
        "AfD": -1,
        "CDU": -1,
        "FDP": 1,
        "SPD": 1,
        "VOLT": 1,
        "BSW": 0,
        "Bündnis90": 1
      }
    },
    {
      "text": "Sollen die Bürger*innen in Deutschland direkt über Gesetze Abstimmen(Volksentscheide)?",
      "weights": {
        "AfD": 1,
        "CDU": -1,
        "FDP": -1,
        "SPD": 0,
        "VOLT": -1,
        "BSW": 1,
        "Die Linke": 1,
        "Bündnis90": -1
      }
    },
    {
      "text": "Sollen unter 14-Jährige strafrechtlich belangt (von einem Gericht verurteilt) werden können?",
      "weights": {
        "AfD": 1,
        "CDU": 1,
        "FDP": -1,
        "SPD": -1,
        "VOLT": -1,
        "BSW": -1,
        "Die Linke": 1,
        "Bündnis90": -1
      }
    },
    {
      "text": "Soll es eine Geschlechtertrennung im Sportunterricht geben?",
      "weights": {
        "AfD": 1,
        "CDU": 1,
        "FDP": 1,
        "SPD": 1,
        "VOLT": -1,
        "BSW": 1,
        "Die Linke": -1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Soll die Bundesregierung (die Regierung für ganz Deutschland) mehr Mitbestimmung in der Schulpolitik erhalten? (Im Moment sind dafür die Bundesländer zuständig, für die Berliner Schulen z.B. der Berliner Senat.)",
      "weights": {
        "AfD": -1,
        "CDU": -1,
        "FDP": 1,
        "SPD": 1,
        "VOLT": 1,
        "BSW": 1,
        "Die Linke": -1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Soll Schulessen in Deutschland kostenfrei sein?",
      "weights": {
        "AfD": 1,
        "CDU": -1,
        "FDP": -1,
        "SPD": 1,
        "VOLT": 1,
        "BSW": -1,
        "Die Linke": 1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Soll es in Deutschland Gesetz sein, 35 Stunden pro Woche zu arbeiten (statt 40 Stunden pro Woche) und das gleiche Geld zu bekommen?",
      "weights": {
        "AfD": -1,
        "CDU": -1,
        "FDP": -1,
        "SPD": 0,
        "VOLT": 1,
        "BSW": 0,
        "Die Linke": 1,
        "Bündnis90": -1
      }
    },
    {
      "text": "Sollen die Zugstrecken (und der öffentliche Nahverkehr wie U-Bahn, S-Bahn, Buslinien, Tram) mehr ausgebaut werden als normale Straßen?",
      "weights": {
        "AfD": -1,
        "CDU": -1,
        "FDP": -1,
        "SPD": 1,
        "VOLT": 1,
        "BSW": 1,
        "Die Linke": 1,
        "Bündnis90": 1
      }
    },
    {
      "text": "Sollen alle Bürger*innen, nachdem sie 40 Jahren gearbeitet habem, in Rente gehen dürfen (statt nach 45 Jahren)?",
      "weights": {
        "AfD": -1,
        "CDU": -1,
        "FDP": -1,
        "SPD": -1,
        "VOLT": 1,
        "BSW": 1,
        "Die Linke": 1,
        "Bündnis90": -1
      }
    },
    {
      "text": "Soll mehr Geld zur Bekämpfung von Rechtsextremismus ausgegeben werden, z.B. für Programme wie Schule ohne Rassismus?",
      "weights": {
        "AfD": -1,
        "CDU": 1,
        "FDP": 1,
        "SPD": 1,
        "VOLT": 1,
        "BSW": 1,
        "Die Linke": 1,
        "Bündnis90": 1
      }
    }
  ]
const partyDesc = {
  "SPD": "Die Sozialdemokratische Partei Deutschlands ist eine der ältesten und traditionsreichsten politischen Parteien in Deutschland. Sie setzt sich stark für soziale Gerechtigkeit, die Verbesserung der Arbeitsmarktbedingungen und eine solidarische Gesellschaft ein. In der Außenpolitik fordert die SPD eine engere Zusammenarbeit innerhalb der Europäischen Union und eine gerechte Migrationspolitik, die sowohl humanitäre Aspekte als auch die Interessen Deutschlands berücksichtigt.",

  "CDU": "Die Christlich Demokratische Union Deutschlands ist eine konservative Volkspartei, die für ihre christlichen Werte und eine starke Wirtschaftspolitik bekannt ist. Sie setzt sich für den Erhalt der sozialen Marktwirtschaft, den Schutz von Familien und die Förderung von Unternehmertum ein. In der Außenpolitik betont die CDU die Bedeutung einer starken nationalen Sicherheit und eine enge Partnerschaft mit internationalen Allianzen wie der NATO und der EU.",

  "AfD": "Die Alternative für Deutschland ist eine rechtspopulistische Partei, die 2013 gegründet wurde und sich schnell als Gegenspieler zu etablierten Parteien etablierte. Sie vertritt eine klare Haltung gegen Migration und fordert eine restriktivere Einwanderungspolitik sowie die Rückkehr zu nationaler Souveränität ohne die Vorgaben der Europäischen Union. In ihrer politischen Agenda betont die AfD auch eine kritische Haltung gegenüber dem Euro und setzt sich für den Ausstieg Deutschlands aus der EU oder eine grundlegende Reform derselben ein.",

  "Bündnis90": "Bündnis 90/Die Bündnis90 ist eine politische Partei, die ursprünglich aus der Umweltbewegung hervorgegangen ist und sich heute stark für nachhaltige Entwicklung und sozialen Wandel einsetzt. Sie strebt eine Bündnis90 Transformation der Gesellschaft an, die den Klimawandel bekämpft, die Artenvielfalt schützt und die Ressourcen der Erde schont. Neben dem Umweltschutz legt die Partei großen Wert auf Gleichstellung, soziale Gerechtigkeit und die Förderung einer offenen und diversen Gesellschaft.",

  "BSW": "Das Bündnis Sahra Wagenknecht ist eine progressive, Linke politische Bewegung, die sich insbesondere für soziale Gerechtigkeit und die Rechte der Arbeiter einsetzt. Die Partei kritisiert die neoliberale Wirtschaftspolitik und fordert eine stärkere Regulierung der Finanzmärkte sowie eine Umverteilung von Wohlstand. Sie spricht sich für eine Unabhängigkeit von der EU und der NATO aus und plädiert für eine entschlossene Außenpolitik, die den Frieden und die Unabhängigkeit Deutschlands betont.",

  "Die Linke": "Die Linke ist eine soziale Partei, die sich in der Tradition der Arbeiterbewegung versteht und eine grundlegend andere Gesellschaftsordnung anstrebt. Sie fordert eine stärkere Umverteilung des Wohlstands, den Ausbau öffentlicher Dienstleistungen und den Abbau von sozialer Ungleichheit. In der Außenpolitik setzt sie sich für eine friedliche, auf Diplomatie und Dialog basierende Außenpolitik ein, die gegen militärische Interventionen und für eine kritische Auseinandersetzung mit den globalen Machtverhältnissen steht.",

  "FDP": "Die Freie Demokratische Partei ist eine wirtschaftsliberale Partei, die sich für mehr individuelle Freiheit, Eigenverantwortung und eine starke Marktwirtschaft einsetzt. Sie fordert eine Vereinfachung des Steuersystems, eine Entbürokratisierung der Verwaltung und eine Reform des Bildungswesens, um mehr Chancengleichheit zu schaffen. In der Außenpolitik setzt sich die FDP für einen aktiven internationalen Austausch und die Förderung von Innovationen durch freien Handel und eine weltoffene Haltung ein.",

  "VOLT": "Volt Deutschland ist eine junge, europäische Partei, die sich für ein vereintes Europa und eine starke transnationale Zusammenarbeit einsetzt. Sie verfolgt eine progressiv-liberale Agenda, die eine starke soziale Marktwirtschaft, die Förderung von Innovation und die Bekämpfung des Klimawandels umfasst. Volt tritt für eine Demokratisierung der EU-Institutionen und eine nachhaltige, zukunftsorientierte Politik auf allen Ebenen ein."


};
const partyLinks = {
  "SPD": {
    wikipedia: "https://de.wikipedia.org/wiki/Sozialdemokratische_Partei_Deutschlands",
    website: "https://www.spd.de"
  },
  "CDU": {
    wikipedia: "https://de.wikipedia.org/wiki/Christlich_Demokratische_Union_Deutschlands",
    website: "https://www.cdu.de"
  },
  "AFD": {
    wikipedia: "https://de.wikipedia.org/wiki/Alternative_f%C3%BCr_Deutschland",
    website: "https://www.afd.de"
  },
  "Bündnis90": {
    wikipedia: "https://de.wikipedia.org/wiki/B%C3%BCndnis_90/Die_Gr%C3%BCnen",
    website: "https://www.gruene.de"
  },
  "BSW": {
    wikipedia: "https://de.wikipedia.org/wiki/B%C3%BCndnis_Sahra_Wagenknecht",
    website: "https://www.bsw.de"
  },
  "Die Linke": {
    wikipedia: "https://de.wikipedia.org/wiki/Die_Linke",
    website: "https://www.die-Linke.de"
  },
  "FDP": {
    wikipedia: "https://de.wikipedia.org/wiki/Freie_Demokratische_Party",
    website: "https://www.fdp.de"
  }
};


const partyLogos = {
  "SPD": "SPD.png",
  "CDU": "CDU.png",
  "AfD": "AFD.png",
  "Bündnis90": "grun.png",
  "BSW": "BSW.png",
  "Die Linke": "DIELINKE.png",
  "FDP": "FDP.png",
  "VOLT": "VOLT.png"
};
let currentQuestionIndex = 0;
let scores = { "SPD": 0, "CDU": 0, "AfD": 0 , "Bündnis90": 0, "BSW": 0, "Die Linke": 0, "FDP": 0, "VOLT":0};

function vote(choice) {
  if (!questions[currentQuestionIndex]) {
    console.error("Error: currentQuestionIndex is out of bounds or questions array is empty.");
    return;
  }

  let weights = questions[currentQuestionIndex].weights;
  if (!weights) {
    console.error("Error: No weights found for the current question.");
    return;
  }

  for (let party in weights) {
    let partyWeight = weights[party];

    if ((choice === 'agree' && partyWeight === 1) ||
      (choice === 'neutral' && partyWeight === 0) ||
      (choice === 'disagree' && partyWeight === -1)) {
      scores[party]++; // Punkte nur hinzufügen, wenn die Antworten übereinstimmen
    }
  }

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    document.getElementById("question").innerText = questions[currentQuestionIndex].text;
    document.getElementById("question-number").innerText = `${currentQuestionIndex + 1}/${questions.length}`;
  } else {
    showResults();
  }
}

function showResults() {
  document.querySelector(".container").style.display = "none";
  let resultsDiv = document.getElementById("results");
  resultsDiv.style.display = "flex";

  let sortedParties = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  let bestParty = sortedParties[0];

  document.getElementById("top-party-name").innerText = bestParty;
  document.getElementById("top-party-logo").src = partyLogos[bestParty] || "default.png";
  document.getElementById("top-party-desc").innerText = partyDesc[bestParty];

  let resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";
  let maxScore = questions.length;

  sortedParties.forEach(party => {
    let partyScore = scores[party];
    let percentage = 0;

    if (maxScore > 0) {
      percentage = Math.max(0, Math.round((partyScore / maxScore) * 1000)/10);
    }

    let li = document.createElement("li");
    li.innerHTML = `${party}`;

    let percentageLabel = document.createElement("div");
    percentageLabel.classList.add("percentage");
    percentageLabel.innerText = `${percentage}%`;

    let progressWrapper = document.createElement("div");
    progressWrapper.classList.add("progress-wrapper");

    let progress = document.createElement("div");
    progress.classList.add("progress-bar");
    progress.style.width = `${percentage}%`;

    progressWrapper.appendChild(progress);
    li.appendChild(percentageLabel);
    li.appendChild(progressWrapper);
    resultsList.appendChild(li);
  });

  console.log("Ergebnisse geladen:", scores);
}
