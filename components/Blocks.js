import React from 'react'
import Block_news from './Block_news'
import Block_tags from './Block_tags'

export default function Blocks() {
    return (
        <center>
            <div className="blocks">
                
                <Block_news></Block_news>

                <Block_tags></Block_tags>

            </div>
        </center>
    )
}
