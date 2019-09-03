import React from "react";
import { Card, Image } from 'semantic-ui-react'
export default function UserCard(props) {
  return (
  <div className="card">
  <Card >
     <Image src={props.img} wrapped ui={false} />
    <Card.Content  key={props.key}>
      <Card.Header>  <h1>{props.name}</h1></Card.Header>
      <Card.Meta>
        <span className='date'> <h3> {props.location}</h3> </span>
      </Card.Meta>
      <button type ="submit">{`Like!`}</button>
    </Card.Content>
    
  </Card> 
  </div>)
}
