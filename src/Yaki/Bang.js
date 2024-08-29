import React from 'react'
import {Tang} from './Tang.css'
import { Circle } from 'rc-progress'
export default function Bang() {
  return (
    <div className='container'>
      <Circle percent={40} strokeColor='green' strokeWidth={4} trailWidth={4} gapDegree={40} gapPosition='360' className='ircle'/>
       <span><i class="fa-solid fa-trophy"></i></span>
        <p>Aircraft Structure</p>
    </div>
  )
}
