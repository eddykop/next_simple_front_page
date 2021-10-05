import React, {useState, useEffect} from 'react';
import Link from 'next/link'

export default function Header() {

    const [showSearch, setShowSearch] = useState("disabled");
    const [fadeout, setFadeout] = useState("");
    const [searchWords, setSearchWords] = useState("");

    const [menuShow, setMenuShow] = useState("hide");

    const [closeMenu, setCloseMenu] = useState("")
 
    const [menuReduce, setMenuReduce] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
    }, [])

    const showSearchTrigger = () => {

        showSearch == "disabled" ? setShowSearch("enabled") : enterFadeOut()

    }

    const enterFadeOut = () => {

        setFadeout("fade-out");

        setTimeout(() => {
            
            setFadeout("");
            setShowSearch("disabled")

        }, 620);

    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert("pesquisa: "+searchWords)
        }
    }

    const openMobileMenu = () => {

        menuShow == "hide" ? setMenuShow("show") : hideMobile();

    }

    const hideMobile = () => {

        setCloseMenu("swing_out");

        setTimeout(() => {
            setCloseMenu("");
            setMenuShow("hide");
        }, 650);
        
    }


    const changeNavbar = () =>{
        if(window.scrollY >= 80){
            setMenuReduce(true);
        }
        else{
            setMenuReduce(false);
        }
    };


    

    return (
        <>
            <div className={`header ${menuReduce ? 'reduce' : ''}`}>
                
                <div className="logo" className={`logo ${menuReduce ? 'reduce_logo' : ''}`}>
                   
                </div>

                <div className="menu">

                    <ul>

                        <Link href="/"><li>Home</li></Link>
                        <li>Projects</li>
                        <li>Pricing</li>
                        <li>About us</li>
                        <li>Contact</li>

                    </ul>

                </div>

                <button className="menu_mobile" onClick={() => { openMobileMenu() }}><i className="gg-menu-grid-r"></i></button>

                

                
                { showSearch == "enabled" ? 
                    <div className={`search_field ${fadeout} ${menuReduce ? 'reduce_search' : ''}`}><input type="text" placeholder="Search and then press enter..." 
                    onKeyDown={handleKeyDown} onChange={({target}) => setSearchWords(target.value) } className={`${menuReduce ? 'reduce_search' : ''}`} />
                    </div> 
                    : 
                    <></> 
                }



                <div className={`search ${showSearch} ${menuReduce ? 'reduce_search' : ''}`} onClick={() => { showSearchTrigger() }}>

                    { showSearch == "enabled" ? <i class="gg-close"></i> : <i className="gg-search"></i>  }

                </div>


            </div>

            <div className={`menu_mobile_open ${menuShow} ${closeMenu}`}>

                <ul>

                     <li>Home</li>
                     <li>Projects</li>
                     <li>Pricing</li>
                    <li>About us</li>
                    <li>Contact</li>

                </ul>

            </div>


        </>
    )
}
