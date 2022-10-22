export class Serie {

    id: number;
    name: string;
    channel: string;
    season: number;
    resumen: string;
    linkSerie: string;
    imagen: string;

    constructor(id:number, name: string, channel: string, season: number, resumen: string, linkSerie: string, imagen: string) {

        this.id = id
        this.name = name;
        this.channel = channel;
        this.season = season;
        this.resumen = resumen;
        this.linkSerie = linkSerie;
        this.imagen = imagen;
        
    }
}