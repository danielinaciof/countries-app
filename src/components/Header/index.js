import{CgDarkMode}from'react-icons/cg';
import'./styles/styles.scss'
export function Header(){
return(
    <header>
        <div className="logo">
            Countries App
        </div>
        <button className="theme-mode">
        <CgDarkMode/>
        </button>
    </header>
)}
