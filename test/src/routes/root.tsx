import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Root(){
    return(<>
        <title>Re;Master</title>
        <header>
            <h2><Link to='/'>Re;Master</Link></h2>
        </header>
        <main>
            <button>
                <NavLink to={"/partie"}>Lancer une partie</NavLink>
                <Outlet></Outlet>
            </button>
            
        </main>
    </>)
}