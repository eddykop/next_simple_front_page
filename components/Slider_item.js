import React, {useState, useEffect} from 'react';
import Image from 'next/image';

export default function Slider_item({ id, category, color, photo, title, subtitle, close }) {

    const [animationNumber, setAnimationNumber] = useState(1);

    const [styling, setStyling] = useState({"background-image" : "url('"+photo+"')"});

    useEffect(() => {
        
        const number_animation = Math.floor(Math.random() * 4) + 1;

        setAnimationNumber(number_animation);

    }, [])

    return (
           
        <div style={styling} className={`div_image ${close+animationNumber}`} >
            
            <p className="manchete">{title}</p>
            <p className="subtitle">{subtitle}</p>
            <p className={`category ${color}`}>{category}</p>
            <p className="see_more">Click to see more...</p>
        </div>

    )
}
