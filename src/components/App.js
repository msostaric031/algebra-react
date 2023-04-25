import React from "react";
import "../assets/styles/App.css";
import KorisnikFunkcija from "./KorisnikFunkcija";
import KorisnikFunkcija2 from "./KorisnikFunkcija2";
import KorisnikKlasa from "./KorisnikKlasa";

const korisnici = [
  { ime: "Marko", godina: 25 },
  { ime: "John", godina: 22 },
  { ime: "Hugh", godina: 23 },
  { ime: "Pero", godina: 20 },
  { ime: "Sunčica", godina: 12 },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <KorisnikFunkcija ime={korisnici[0].ime} godina={korisnici[0].godina} />
        <KorisnikFunkcija2
          ime={korisnici[1].ime}
          godina={korisnici[1].godina}
        />
        <KorisnikKlasa ime={korisnici[2].ime} godina={korisnici[2].godina} />
      </div>
    );
  }
}

export default App;
