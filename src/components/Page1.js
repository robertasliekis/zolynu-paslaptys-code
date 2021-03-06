import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faVideo } from "@fortawesome/free-solid-svg-icons";

export class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoContainerClicked: false,
      personContainerClicked: false,
    };
    this.handleVideoContainerClick = this.handleVideoContainerClick.bind(this);
    this.handlePersonContainerClick = this.handlePersonContainerClick.bind(this);
  }

  handleVideoContainerClick() {
    let currentState = this.state.videoContainerClicked;
    this.setState({
      videoContainerClicked: !currentState,
    });
  }

  handlePersonContainerClick() {
    console.log("container clicked");
    let currentState = this.state.personContainerClicked;
    this.setState({
      personContainerClicked: !currentState,
    });
  }

  render() {
    let videoContainerClassName = this.state.videoContainerClicked ? "window-opened" : "";
    let personContainerClassName = this.state.personContainerClicked ? "window-opened" : "";

    return (
      <div>
        <div className="info-containers page1">
          <div className="container-zones">
            <div
              className="container-left container author-info"
              onClick={this.handlePersonContainerClick}
            >
              <div className="author-photo media"></div>
              <div className="author-text text">
                <h1>Eugenija Šimkūnaitė</h1>
                <h1>"Žiniuonė"</h1>
              </div>
            </div>
            <div
              className="container-right container video-info"
              onClick={this.handleVideoContainerClick}
            >
              <div className="video media"></div>
              <div className="icons">
                <FontAwesomeIcon className="icon" icon={faVideo} />
                <FontAwesomeIcon className="icon" icon={faFilm} />
              </div>
            </div>
            <div
              className={"video-window window " + videoContainerClassName}
              onClick={this.handleVideoContainerClick}
            >
              <div className="video-media"></div>
            </div>
            <div
              className={"person-window window " + personContainerClassName}
              onClick={this.handlePersonContainerClick}
            >
              <div className="person-photo"></div>
              <div className="person-text">
                <h1>Eugenija Šimkūnaitė</h1>
                <p>
                  Daktarė Eugenija Šimkūnaitė buvo labai įdomi, savita ir nepakartojama asmenybė,
                  mokslininkė ir ypač didelė vaistinių augalų ir liaudies medicinos žinovė. Savo
                  gyvenimu ir veikla sukaupė ne tik didžiulį etnokultūrinį bei intelektualinį turtą
                  Lietuvai, bet ir paliko neišdildomus įspūdžius su ja bendravusiems žmonėms bei
                  suformavo unikalų savo, kaip  liaudies žiniuonės įvaizdį. Gimė 1920 m. kovo 11 d.
                  Rusijoje, Krasnodaro krašte, Novorosijsko mieste. Kartu su kitais pabėgėliais iš
                  Rusijos su šeima grįžęs į Lietuvą tėvas Pranas Šimkūnas gimtuosiuose Tauragnuose
                  įsteigė vaistinę. Jau būdama šešerių metų, Eugenija Šimkūnaitė ėmė pratintis prie
                  vaistinės darbo ir vaistažolių rinkimo. Nuo mažens Eugenija buvo labai žingeidi.
                  Turėjo guvų protą, viskuo domėjosi, mėgo klausytis pasakojimų apie senovę,
                  papročius, žolynus. Senos kaimo žolininkės ir kaimo senoliai, matydami Eugenijos
                  pomėgius, ją mokino vaistinių augalų pažinimo ir paruošimo gydymui meno, užkeikimų
                  ir žadėjimų, mokė žolynais gydyti žmones, o ji įdėmiai visų klausėsi. Baigusi
                  Tauragnų pradžios mokyklą pradėjo mokytis Utenos gimnazijoje, buvo gabi, mokslai
                  sekėsi. Eugenija sakydavo, kad jos tėvai buvo labai protingi ir todėl ją auklėdami
                  nevertė mokytis ko nors atmintinai: nei eilėraščių, nei daugybos lentelės. Taip ji
                  išmoko viską mokytis apgalvodama, išsiaiškindama dalyko esmę, o smegenyse liko
                  vietos visiems jos gyvenime reikalingiems dalykams. Įstojusi į Kauno Vytauto
                  Didžiojo universiteto Medicinos fakulteto farmacijos skyrių pasirinko tėvo
                  profesiją, ruošėsi būti vaistininke. Karo pradžioje dirbo Kauno, Tauragnų
                  vaistinėse, 1942 m. atvyko į Vilnių ir pradėjo dirbti universiteto Botanikos sode.
                  Praūžus karui botanikos sodas buvo sunaikintas, Eugenija dirbo Vilniaus 1-osios
                  ligoninės vaistinėje, vėliau perėjo dirbti į universitetą. 1949 m. atvažiavo į
                  Kauną ir dirbo Kauno botanikos sode jaunesniąja moksline bendradarbe, ėmėsi
                  disertacijos, augino ir tyrė valerijonų kultūras. Kiek vėliau mokslinio darbo
                  tęsti grįžo į Vilnių, į Mokslų akademijos Biologijos institutą, dirbo Akademijos
                  Botanikos sodo direktore. Apgynusi disertaciją gavo biologijos mokslų kandidatės
                  laipsnį. 1955 m. išvažiavo į Kazachstaną dirbti vaistinių augalų ūkio „Darmina“
                  padalinio stoties direktore, domėjosi vidurinės Azijos vaistiniais augalais, šio
                  krašto liaudies medicina ir gyventojų papročiais, organizavo ekspedicijas laukinių
                  vaistinių augalų tyrimui. Grįžusi į Lietuvą įsidarbino vyriausioje farmacijos
                  valdyboje vyr. inspektore vaistažolių paruošoms, įsteigus atskirą vaistažolių
                  skyrių paskirta jo viršininke. Tuo metu jai suteikta aukščiausia provizorės –
                  farmacinio darbo organizatorės kvalifikacinė kategorija. 1971 m. E. Šimkūnaitė
                  Vilniaus universitete apgynė biologijos mokslų daktarės disertaciją "Lietuvos
                  vaistingųjų augalų resursų naudojimo biologiniai pagrindai". Tai pirmoji ir turbūt
                  vienintelė disertacija, kurioje nagrinėjami Lietuvos vaistinių augalų resursai. 
                  1993 m. Lietuvos Mokslo Taryba E. Šimkūnaitei suteikė habilituotos gamtos mokslų
                  daktarės mokslinį laipsnį. Visą savo gyvenimą dr. E. Šimkūnaitė paskyrė vaistinių
                  augalų, liaudies medicinos, kraštotyros tyrimui.  Parašė daug knygų, mokslinių ir
                  mokslo populiarinimo straipsnių, skaitė pranešimus mokslinėse farmacininkų ir
                  botanikų konferencijose, dalyvaudavo botanikų ekspedicijose. Visuomenei skirtų
                  pranešimų klausėsi pilnos auditorijos žmonių, kurie po kelias valandas jos
                  nepaleisdavo, daug klausinėdavo. Tyrinėdama vaistažolių augimo vietas Eugenija
                  Šimkūnaitė išvaikščiojo Lietuvą, surinko tūkstančius žodžių lietuvių kalbos
                  žodynui. Domėjosi ir rinko pasakas, padavimus, dainas ir sutartines. Ji buvo
                  „senovės žmogus“, jai gamta buvo neatskiriama gyvenimo dalis, ji suprato augalų ir
                  gyvūnų kalbą, pasakos jai buvo mūsų protėvių gyvenimo ir papročių išraiška, senose
                  dainose ji skaitė paslėptą prasmę, mūsų tėvų tikėjimo ir gyvenimo atspindį.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page1;
