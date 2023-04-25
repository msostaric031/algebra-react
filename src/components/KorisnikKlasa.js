import React from "react";
class KorisnikKlasa extends React.Component {
  render() {
    const { ime, godina } = this.props;
    return (
      <div>
        <p>Korisnik Klasa</p>
        {ime} {godina}
        <p>--------</p>
      </div>
    );
  }
}
export default KorisnikKlasa;
