import React from 'react'
import { useParams } from 'react-router-dom'
export default function User1() {
    const param = useParams();
    const {name} = param;
  return (
    <div>
      <h1>THis is the {name} Page</h1>
    </div>
  )
}
