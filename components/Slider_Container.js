import React, {useState, useEffect} from 'react'
import Slider_item from './Slider_item'
import data_json from '../public/data.json';
import Slider from './Slider';

export default function Slider_Container() {

    const [data, setData] = useState("");

    useEffect(() => {
        
        fetch('./data.json').then(
            function(res){
            return res.json()
          })
          .then(function(data){
            setData(data.data_news)
          }).catch(
            function(err){
              console.log(err, ' error')
            }
          )

    }, [])

    return (
      <>

        {data[0] != undefined ? <Slider data={data}  /> : <div className="loading_slider" >Loading...</div>}

      </>
    )
}
