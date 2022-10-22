import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById("series_id")!; 
const avgSerieVar: HTMLElement = document.getElementById("avgSeasons_id")!;
const imagen: HTMLElement = document.getElementById("imagenCard")!;
const tituloCard: HTMLElement = document.getElementById("tituloCarta")!;
const contenidoCard: HTMLElement = document.getElementById("contenidoCarta")!;
const linkCard: HTMLElement = document.getElementById("linkCarta")!;


renderSeriesInTable(series);
avgSerieVar.innerHTML = `${getAvgSeasons(series)}`
carta(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let seleccion: number = c.id-1;
    let trElement = document.createElement("tr");

    trElement.onclick = function() {carta(series, seleccion)};
     


    trElement.innerHTML = `<td class="table-secondary"  onclick="carta(datos, seleccion)">${c.id}</td>
                           <td class="table-secondary">${c.name}</td>
                           <td class="table-secondary">${c.channel}</td>
                           <td class="table-secondary">${c.season}</td>`;
    seriesTbody.appendChild(trElement);
    
  });
}



function getAvgSeasons(series: Serie[]): number {
    let sumSeason: number = 0;
    let avgSeason: number = 0;
    series.forEach((serie) => sumSeason = sumSeason + serie.season);
    avgSeason = sumSeason / series.length;
    return avgSeason;
}

function carta(datos: Serie[], seleccion: number = 1): void{
  let serieSelec: Serie = datos[seleccion];
  let imageLink: string = serieSelec.imagen;
  let nombre: string = serieSelec.name;
  let descripcion: string = serieSelec.resumen;
  let linkSerie: string = serieSelec.linkSerie;

  imagen.setAttribute("src", imageLink);
  imagen.setAttribute("alt", nombre);
  tituloCard.textContent = nombre;
  contenidoCard.textContent = descripcion;
  linkCard.textContent = linkSerie;
  linkCard.setAttribute("href", linkSerie);
}
