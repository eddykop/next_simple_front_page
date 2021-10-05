import React, {useState} from 'react'

export default function Body_Page() {

    const [cor, setCor] = useState("red")

    setTimeout(() => {
        
        setCor("blue")

    }, 2000);

    return (
        <div className="body_page">
            

            <style jsx>{`

                .body_page{

                    transition: 2s ease-in;
                    background: ${cor};
                    height: 1800px;
                    width: 100%;

                }

            `}</style>
        </div>
    )
}
