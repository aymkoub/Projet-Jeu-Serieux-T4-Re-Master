import { useState } from "react";
import type { Joueur, Attaque, BarredeVie } from "./types";

export function Joueur(){
    const [listAttaques, setListAttaques] = useState<Attaque[]>([]);
    const barredevie : BarredeVie = {
        pv : 50
    };
    //setListAttaques();
    return (
        <div>
            <div style={{ border: '1px solid #000', padding: '2px' }}>
            <div style={{width: `${barredevie.pv}%`,
                        backgroundColor: 'green',
                        height: '24px',
                        transition: 'width 0.5s'}}></div>
            </div>
        </div>
    )
}