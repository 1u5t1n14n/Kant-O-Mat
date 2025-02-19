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
function createPartyPosition(weight) {
  if (weight === 1) {
    return '✔';  // Agree
  } else if (weight === -1) {
    return '❌';  // Disagree
  } else {
    return '•';  // Neutral
  }
}

function renderQuestions() {
  const container = document.getElementById("questions-container");

  questionsData.forEach((question) => {
    const questionBox = document.createElement('div');
    questionBox.classList.add('question-box');

    const questionText = document.createElement('h2');
    questionText.textContent = question.text;
    questionBox.appendChild(questionText);

    const ul = document.createElement('ul');

    for (const [party, weight] of Object.entries(question.weights)) {
      const li = document.createElement('li');
      li.classList.add('party');

      const partyName = document.createElement('span');
      partyName.textContent = party;
      li.appendChild(partyName);

      const partyPosition = document.createElement('span');
      partyPosition.classList.add(weight === 1 ? 'agree' : (weight === -1 ? 'disagree' : 'neutral'));
      partyPosition.textContent = createPartyPosition(weight);
      li.appendChild(partyPosition);

      ul.appendChild(li);
    }

    questionBox.appendChild(ul);
    container.appendChild(questionBox);
  });
}

renderQuestions();
