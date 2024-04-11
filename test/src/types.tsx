export interface BarredeVie{
    pv: number;
}

export interface Joueur{
    barredevie : BarredeVie,
    attaques : Attaque[]
}

export interface Attaque{
    rechargement : number,
    cout : number,
    degats : number,
    type : string,
    effet : string
}

export interface Ennemi{
    pvnumber : number,
    faiblesse? : string,
    cheminImage : string
}

export interface Partie{
    nbTour : number,
    niveau : number
}