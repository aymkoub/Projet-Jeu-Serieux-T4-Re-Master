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
    description : string
   // image : string
}

export interface AdversaireProps{
    pv : number,
    faiblesse? : string,
    cheminImage? : string
    pvMax: number;

}

export interface Partie{
    niveau : number
}