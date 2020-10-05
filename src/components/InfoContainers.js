import React, { Component } from "react";
//import plants from "./PlantsInfoArray";

export class InfoContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerClicked: false,
      readMoreClicked: false,
      clickedPlantIndex: 0,
    };
    this.handlePlantClick = this.handlePlantClick.bind(this);
    this.handlePlantInfoClick = this.handlePlantInfoClick.bind(this);
    this.readMoreClicked = this.readMoreClicked.bind(this);
  }

  handlePlantClick(event) {
    let clickedPlantId = event.target.id;
    let clickedPlantIndex = clickedPlantId.replace("plant", "") - 1;
    this.setState({
      clickedPlantIndex: clickedPlantIndex,
    });
    this.setState({
      containerClicked: true,
    });
  }

  handlePlantInfoClick() {
    this.setState({
      containerClicked: false,
    });

    setTimeout(() => {
      this.setState({
        readMoreClicked: false,
      });
    }, 600);
  }

  readMoreClicked() {
    let readMoreButtonCurrentState = this.state.readMoreClicked;
    this.setState({
      readMoreClicked: !readMoreButtonCurrentState,
    });
  }

  render() {
    let plantInfoClassName = this.state.containerClicked ? "plant-info-container-clicked" : "";
    let plantWindowClassName = this.state.readMoreClicked ? "plant-info-window-clicked" : "";
    let plantImageNumbers = [1, 2, 3, 1];

    const plants = [
      {
        name: "Balinis ajeras (Acorus calamus)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam nihil fugiat laboriosam aut! Mollitia maiores, incidunt iure facere sed ut? Cupiditate magnam dolores molestias. Voluptas corporis ratione magni et. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde molestias excepturi soluta assumenda ut ipsa voluptatibus facere! Veritatis natus aliquid, autem dolorem quo minus, nobis ipsa commodi quidem ratione iusto adipisci tempore ut vero sed eveniet repellendus excepturi odio necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestias libero commodi! Quos, voluptatum minima reiciendis earum est incidunt, voluptates quod rem laudantium nisi natus dolores nam eum rerum voluptas doloremque veniam quis ipsum reprehenderit quasi saepe tenetur in inventore exercitationem? Sed, assumenda voluptatem. Nobis, nesciunt veritatis ipsam dolorum nulla enim ratione. Cum, delectus iste, labore harum fugit recusandae libero in reiciendis, officiis blanditiis facere? Dolores alias a error, numquam, enim exercitationem ducimus nesciunt blanditiis laudantium hic laborum pariatur expedita deleniti eos eaque cupiditate dolorem quod rem quae dignissimos commodi cumque reiciendis, qui odit? Facilis qui officia libero pariatur vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quibusdam vitae architecto totam quod fuga culpa facere officia doloribus odio ipsa nemo tempora accusantium voluptates tempore, libero voluptatem saepe atque quo rerum laborum, iste eveniet debitis! Ratione culpa soluta tempore voluptatem adipisci? Non itaque, quos quis porro culpa aperiam.",
        imageName: "ajeras",
      },
      {
        name: "Balinis dobilas (Trifolium rapens)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam nihil fugiat laboriosam aut! Mollitia maiores, incidunt iure facere sed ut? Cupiditate magnam dolores molestias. Voluptas corporis ratione magni et. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde molestias excepturi soluta assumenda ut ipsa voluptatibus facere! Veritatis natus aliquid, autem dolorem quo minus, nobis ipsa commodi quidem ratione iusto adipisci tempore ut vero sed eveniet repellendus excepturi odio necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestias libero commodi! Quos, voluptatum minima reiciendis earum est incidunt, voluptates quod rem laudantium nisi natus dolores nam eum rerum voluptas doloremque veniam quis ipsum reprehenderit quasi saepe tenetur in inventore exercitationem? Sed, assumenda voluptatem. Nobis, nesciunt veritatis ipsam dolorum nulla enim ratione. Cum, delectus iste, labore harum fugit recusandae libero in reiciendis, officiis blanditiis facere? Dolores alias a error, numquam, enim exercitationem ducimus nesciunt blanditiis laudantium hic laborum pariatur expedita deleniti eos eaque cupiditate dolorem quod rem quae dignissimos commodi cumque reiciendis, qui odit? Facilis qui officia libero pariatur vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quibusdam vitae architecto totam quod fuga culpa facere officia doloribus odio ipsa nemo tempora accusantium voluptates tempore, libero voluptatem saepe atque quo rerum laborum, iste eveniet debitis! Ratione culpa soluta tempore voluptatem adipisci? Non itaque, quos quis porro culpa aperiam.",
        imageName: "dobilas",
      },
      {
        name: "Pakalnute (Equisetum)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam nihil fugiat laboriosam aut! Mollitia maiores, incidunt iure facere sed ut? Cupiditate magnam dolores molestias. Voluptas corporis ratione magni et. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde molestias excepturi soluta assumenda ut ipsa voluptatibus facere! Veritatis natus aliquid, autem dolorem quo minus, nobis ipsa commodi quidem ratione iusto adipisci tempore ut vero sed eveniet repellendus excepturi odio necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestias libero commodi! Quos, voluptatum minima reiciendis earum est incidunt, voluptates quod rem laudantium nisi natus dolores nam eum rerum voluptas doloremque veniam quis ipsum reprehenderit quasi saepe tenetur in inventore exercitationem? Sed, assumenda voluptatem. Nobis, nesciunt veritatis ipsam dolorum nulla enim ratione. Cum, delectus iste, labore harum fugit recusandae libero in reiciendis, officiis blanditiis facere? Dolores alias a error, numquam, enim exercitationem ducimus nesciunt blanditiis laudantium hic laborum pariatur expedita deleniti eos eaque cupiditate dolorem quod rem quae dignissimos commodi cumque reiciendis, qui odit? Facilis qui officia libero pariatur vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quibusdam vitae architecto totam quod fuga culpa facere officia doloribus odio ipsa nemo tempora accusantium voluptates tempore, libero voluptatem saepe atque quo rerum laborum, iste eveniet debitis! Ratione culpa soluta tempore voluptatem adipisci? Non itaque, quos quis porro culpa aperiam.",
        imageName: "pakalnute",
      },
      {
        name: "Dilgele (Urtica)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam nihil fugiat laboriosam aut! Mollitia maiores, incidunt iure facere sed ut? Cupiditate magnam dolores molestias. Voluptas corporis ratione magni et. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde molestias excepturi soluta assumenda ut ipsa voluptatibus facere! Veritatis natus aliquid, autem dolorem quo minus, nobis ipsa commodi quidem ratione iusto adipisci tempore ut vero sed eveniet repellendus excepturi odio necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestias libero commodi! Quos, voluptatum minima reiciendis earum est incidunt, voluptates quod rem laudantium nisi natus dolores nam eum rerum voluptas doloremque veniam quis ipsum reprehenderit quasi saepe tenetur in inventore exercitationem? Sed, assumenda voluptatem. Nobis, nesciunt veritatis ipsam dolorum nulla enim ratione. Cum, delectus iste, labore harum fugit recusandae libero in reiciendis, officiis blanditiis facere? Dolores alias a error, numquam, enim exercitationem ducimus nesciunt blanditiis laudantium hic laborum pariatur expedita deleniti eos eaque cupiditate dolorem quod rem quae dignissimos commodi cumque reiciendis, qui odit? Facilis qui officia libero pariatur vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quibusdam vitae architecto totam quod fuga culpa facere officia doloribus odio ipsa nemo tempora accusantium voluptates tempore, libero voluptatem saepe atque quo rerum laborum, iste eveniet debitis! Ratione culpa soluta tempore voluptatem adipisci? Non itaque, quos quis porro culpa aperiam.",
        imageName: "dilgele",
      },
    ];

    return (
      <div className="info-containers">
        <div className="container-zones">
          <div className="container-left container">
            <div className="plant1 plant" id="plant1" onClick={this.handlePlantClick}></div>
            <div className="plant2 plant" id="plant2" onClick={this.handlePlantClick}></div>
          </div>
          <div className="container-right container">
            <div className="plant3 plant" id="plant3" onClick={this.handlePlantClick}></div>
            <div className="plant4 plant" id="plant4" onClick={this.handlePlantClick}></div>
          </div>
        </div>

        <div className={"plant-info-container " + plantInfoClassName}>
          <div className={"plant-info-window " + plantWindowClassName}>
            <div className="btn btn-close" onClick={this.handlePlantInfoClick}>
              <div className="line-container">
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
            <div className="plant-image-container">
              <div className="plant-image-carousel">
                {plantImageNumbers.map((plantImageNumber, index) => {
                  let plantImageUrl = require(`../images/${
                    plants[this.state.clickedPlantIndex].imageName
                  }${plantImageNumber}.jpg`);
                  return (
                    <div
                      key={"plant-image" + index}
                      style={{
                        backgroundImage: `url(${plantImageUrl})`,
                      }}
                      className="plant-image"
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="plant-text">
              <h2 className="plant-heading">{plants[this.state.clickedPlantIndex].name}</h2>
              <p>{plants[this.state.clickedPlantIndex].description}</p>
              <div className="btn btn-read-more" onClick={this.readMoreClicked}>
                {this.state.readMoreClicked ? "SKAITYTI MAZIAU" : "SKAITYTI DAUGIAU"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoContainers;
