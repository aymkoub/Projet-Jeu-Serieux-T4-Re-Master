import type { BarredeVie, Ennemi } from "./types";

export function Ennemi({pvnumber, cheminImage} : Ennemi){
    const barredevie : BarredeVie ={
        pv : pvnumber
    };

    return (
        <div>
            <img src={cheminImage} alt="Ennemi" />
            <div style={{ border: '1px solid #000', padding: '2px' }}>
            <div style={{width: `${barredevie.pv}%`,
                        backgroundColor: 'red',
                        height: '24px',
                        transition: 'width 0.5s'}}></div>
            </div>
        </div>
    )
}