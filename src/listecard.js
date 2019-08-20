import React from 'react'
import Card from './card'
const tab=[{
    titre:'For patient',
    parag:'Find a doctor, book a visit and solve any health-related doubt',
    img:require ('./img/screen 1.png'),
    show:true,
    color:' #00ccb1'},
   {titre:' For doctors ' ,
    parag:' Save time managing visits and cut no-shows by half' ,
   img:require ('./img/img.png') ,
    show:false,
    color:' #3d83df '}]
const Liste=()=>{
    return(<div style={{display:'flex'}}>
{tab.map((el,index)=><Card key={index}  item={el}  />)}
    </div>)
}
export default Liste