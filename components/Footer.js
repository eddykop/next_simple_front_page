import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            
            <p>Site made by Yuri Langowski, 2021 - No rights reserved.</p>

            

            <div className="logo_footer">

                <Image src="/../public/images/boxynews.png" layout='fill' objectFit='contain'></Image>

            </div>

        </footer>
    )
}
