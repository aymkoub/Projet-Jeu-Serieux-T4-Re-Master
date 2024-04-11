export interface BarredeVie{
    pv: number;
}

export interface Joueur{
    barredevie : BarredeVie,
    attaques : Attaque[]
}

export interface Attaque{
    onClick: () => void;
    title : string,
    rechargement : number,
    cout : number,
    degats : number,
    type : string,
    effet : string
    image : string
}

export interface Ennemi{
    barredevie : BarredeVie,
    faiblesse : string
}

export interface Partie{
    nbTour : number,
    niveau : number
}