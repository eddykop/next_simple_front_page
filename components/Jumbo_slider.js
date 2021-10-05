import React, {useState, useEffect} from 'react'

export default function Jumbo_slider() {

    const [counter, setCounter] = useState(0);

    const [styleText, setStyleText] = useState("");

    const arrayQuotes = ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit", "sed do eiusmod tempor incididunt"];
    const [quote, setQuote] = useState(arrayQuotes[0])
    const [countingQuotes, setCountingQuotes] = useState(1)

    const [red, setRed] = useState(255)
    const [green, setGreen] = useState(255)
    const [blue, setBlue] = useState(255)


    useEffect(() => {
        
        setTimeout(() => {
            
            if(counter >= 2){

                changeText();
                setCounter(0);

            }else{

                setCounter(counter + 1);
                changeColors();

            }

        }, 2000);

    }, [counter])

    const changeColors = () => {

        const redRandom = Math.floor(Math.random() * 255);
        const greeRandom = Math.floor(Math.random() * 255);
        const blueRandom = Math.floor(Math.random() * 255);
        setRed(redRandom);
        setGreen(greeRandom);
        setBlue(blueRandom);

    }

    const changeText = () => {

        setStyleText("puffout")

        setTimeout(() => {

            if(countingQuotes < arrayQuotes.length - 1){
                setCountingQuotes(countingQuotes+1)
            }else{
                setCountingQuotes(0)
            }
            setQuote(arrayQuotes[countingQuotes])
           
            setStyleText("puffin")

        }, 1000);

    }

    const stlyles_p = {

        "color" : "white",
        "text-shadow" : "0px 0px 10px rgb("+red+", "+green+", "+blue+"), 1px 1px 5px rgb("+red+", "+green+", "+blue+")"
        

    }


    return (
        <div className="jumbo">
            
            <div className="jumbo_content">
             
                <div className={`increase ${styleText}`}>

                    <p className={`balance`} style={stlyles_p}>{quote}</p>

                </div>

                <button>Know more!</button>

            </div>

        </div>
    )
}
