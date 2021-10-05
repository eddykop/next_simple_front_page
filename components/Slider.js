import React, {useState, useEffect} from 'react'
import Slider_item from './Slider_item'
import data_json from '../public/data.json';

export default function Slider({ data }) {

    const [previousItem, setPreviousItem] = useState(0)
    const [countItem, setCountItem] = useState(5);

    const [closeAnimation, setCloseAnimation] = useState("open_animation");

    const [leftArrow, setLeftArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(true);

    const [arrowRightAnimation, setArrowRightAnimation] = useState("fade-in");
    const [arrowLeftAnimation, setArrowLeftAnimation] = useState("fade-out");

    useEffect(() => {
      
      if(countItem > data.length){
        //setRightArrow(false);
        setArrowRightAnimation("fade-out")  
      }else{
        //setRightArrow(true);
        setArrowRightAnimation("fade-in")
      }

      if(countItem <= 5){
        setArrowLeftAnimation("fade-out")
        //setLeftArrow(false)
      }else{
        setArrowLeftAnimation("fade-in")
        setLeftArrow(true)
      }

    }, [closeAnimation])

    const nextPage = () => {

      if(data.length >= countItem){
 
        setCloseAnimation("close_animation");
        setTimeout(() => {
          setPreviousItem(countItem);
          setCountItem(countItem+5);
          setCloseAnimation("open_animation");
        }, 450);
        
      }else{

      }

    }

    const previousPage = () => {

      if(countItem > 5){
        setCloseAnimation("close_animation");
        setTimeout(() => {
          setPreviousItem(countItem-10);
          setCountItem(countItem-5);
          setCloseAnimation("open_animation");
        }, 450)
      }else{


      }

    }

    

    return (
      <>
        <div className="slider">
            
            {leftArrow ? <div className={`arrow left ${arrowLeftAnimation}`}><i className="gg-arrow-left-r" onClick={() => { previousPage() }}></i></div> : <div className="arrow left invisible"><i className="gg-arrow-left-r" onClick={() => { previousPage() }}></i></div>}

            <div className="slider_conteudo">

                {

                  data.map((item, index) => {
 
                    if(index < countItem && index > previousItem - 1){
                      
                      return <Slider_item key={index} id={item.id} category={item.category} color={item.color} photo={item.photo} title={item.title} subtitle={item.subtitle} close={closeAnimation} />
                
                    }
                    
                  })

                }

            </div>

            {rightArrow ? <div className={`arrow right ${arrowRightAnimation}`}><i className="gg-arrow-right-r" onClick={() => { nextPage() }}></i></div> : <div className="arrow right invisible"><i className="gg-arrow-right-r" onClick={() => { nextPage() }}></i></div>}

        </div>
      </>
    )
}
