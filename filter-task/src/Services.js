import trash_1 from "./trash-1.jpeg";
import trash_2 from "./trash-2.jpg";
import trash_3 from "./trash-3.jpg";


//////////////////////////////////////////
//////////////////////////////////////////

////////////SERVICES/////////////

function Button({className, children}){

  return (
  <div className='centerized'>
    <button className={className}>{children}</button>
  </div>
  )
  
}


function Services_trash({trash_img}){
  return(
    <div className='trash'>
      <img src={trash_img} className='trash-img'/>
      <div className='content'>
        <h2>Lorem Ipsum</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries</p>
      </div>
    </div>
  )
}


export default function Services(){
  
  return(
    <section className='Services'>
     
      <h1 className='three-times-header'>Services</h1>
      <div className='  grid-template-3 margin-bottom'>
        
        <Services_trash trash_img={trash_1}/>
        
        <Services_trash trash_img={trash_2}/>

        <Services_trash trash_img={trash_3}/>

      </div>
      <Button className='two-button'>Help Me</Button>
    </section>
  )
}