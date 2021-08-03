import Image from 'next/image'


function Cards(props) {
  
    if (props.special !== "" ) {
        console.log(props)
           return (
               <div>
                   <h3>Specialisation for {props.special}</h3>
                   <Image width="768" height="270" src={"https://source.unsplash.com/768x270/?" + props.special } />
               </div>
        
        ) 
    } else {
        return <h3>No specialisation has been set, please click on one of the links below.</h3>
    }


  }
  
  export default Cards;