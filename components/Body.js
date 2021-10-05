import React from 'react'
import Blocks from './Blocks'
import Jumbo_slider from './Jumbo_slider'
import Slider_Container from './Slider_Container'

export default function Body() {
    return (
        <div className="body">

            <Slider_Container></Slider_Container>

            <Jumbo_slider></Jumbo_slider>

            <Blocks></Blocks>

            <br/>

        </div>
    )
}
