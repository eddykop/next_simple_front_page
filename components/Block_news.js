import React from 'react'
import Block_news_item from './Block_news_item'

export default function Block_news() {

    const image_block = [
        {"background-image" : "url('https://rollingstone.uol.com.br/media/_versions/halloween_kills_-_o_terror_continua-divulgacao_widelg.jpg')"}
        ,
        {"background-image" : "url('https://rollingstone.uol.com.br/media/_versions/halloween_kills_-_o_terror_continua-divulgacao_widelg.jpg')"}
        ,
        {"background-image" : "url('https://rollingstone.uol.com.br/media/_versions/halloween_kills_-_o_terror_continua-divulgacao_widelg.jpg')"}
    ]

    return (
        <div className="block_news">
    
            <h1>Last news</h1>


            <Block_news_item image_block={image_block[0]}></Block_news_item>
            <Block_news_item image_block={image_block[1]}></Block_news_item>
            <Block_news_item image_block={image_block[2]}></Block_news_item>
    

        </div>
    )
}
