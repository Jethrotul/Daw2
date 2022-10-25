export class Usuari {
  usuari;
  password;
  email;
  telFix;
  telMobil;
  dataNaixament;
  home;
  dona;
  noDeterminat;
  noBinari;
  gay;
  lesbiana;
  videoGames;
  esports;
  llegir;

  constructor(
    usuari,
    password,
    email,
    telFix = "",
    telMobil = "",
    dataNaixament = "",
    home = false,
    dona = false,
    noDeterminat = false,
    noBinari = false,
    gay = false,
    lesbiana = false,
    videoGames = false,
    esports = false,
    llegir = false
  ) {
    this.usuari = usuari;
    this.password = password;
    this.email = email;
    this.telFix = telFix;
    this.telMobil = telMobil;
    this.dataNaixament = dataNaixament;
    this.home = home;
    this.dona = dona;
    this.noDeterminat = noDeterminat;
    this.noBinari = noBinari;
    this.gay = gay;
    this.lesbiana = lesbiana;
    this.videoGames = videoGames;
    this.esports = esports;
    this.llegir = llegir;
    
  }
}
