import { series } from "./data.js";
var seriesTbody = document.getElementById("series_id");
var avgSerieVar = document.getElementById("avgSeasons_id");
var imagen = document.getElementById("imagenCard");
var tituloCard = document.getElementById("tituloCarta");
var contenidoCard = document.getElementById("contenidoCarta");
var linkCard = document.getElementById("linkCarta");
renderSeriesInTable(series);
avgSerieVar.innerHTML = "".concat(getAvgSeasons(series));
carta(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var seleccion = c.id - 1;
        var trElement = document.createElement("tr");
        trElement.onclick = function () { carta(series, seleccion); };
        trElement.innerHTML = "<td class=\"table-secondary\"  onclick=\"carta(datos, seleccion)\">".concat(c.id, "</td>\n                           <td class=\"table-secondary\">").concat(c.name, "</td>\n                           <td class=\"table-secondary\">").concat(c.channel, "</td>\n                           <td class=\"table-secondary\">").concat(c.season, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var sumSeason = 0;
    var avgSeason = 0;
    series.forEach(function (serie) { return sumSeason = sumSeason + serie.season; });
    avgSeason = sumSeason / series.length;
    return avgSeason;
}
function carta(datos, seleccion) {
    if (seleccion === void 0) { seleccion = 1; }
    var serieSelec = datos[seleccion];
    var imageLink = serieSelec.imagen;
    var nombre = serieSelec.name;
    var descripcion = serieSelec.resumen;
    var linkSerie = serieSelec.linkSerie;
    imagen.setAttribute("src", imageLink);
    imagen.setAttribute("alt", nombre);
    tituloCard.textContent = nombre;
    contenidoCard.textContent = descripcion;
    linkCard.textContent = linkSerie;
    linkCard.setAttribute("href", linkSerie);
}
