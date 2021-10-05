import React from 'react'

export default function Block_news_item({image_block}) {

 

    return (
        <div className="block_news_item">

                <div className="block_news_item_image" style={image_block}></div>

                <div className="block_news_item_text">

                    <h1>Halloween Kills is a awesome sequel!</h1>

                    <hr />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <b>... Click to read more</b></p>

                    <h3>Category: Movies | Date: 04/10/2021</h3>

                </div>

            </div>
    )
}
