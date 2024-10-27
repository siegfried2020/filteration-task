

import about_us from "./about-us-trash.png";



//////////////////////////////////////////
//////////////////////////////////////////

////////////ABOUT US AND WHERE/////////////
function Button({className, children}){

  return (
  <div className='centerized'>
    <button className={className}>{children}</button>
  </div>
  )
  
}


export default function AboutUsWhere(){
  return(
    <section className='about-us-where'>
      <div className='grid-about-us-where grid-template-2'>
        <div className='about-us font-size-color'>
          <h1>About Us</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <img src={about_us}/>
        </div>
  
        <div className='where font-size-color'>
          <div className='where-padding-margin'>
            <h1 >Where</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <Button className={'where-button'}>Help me</Button>
          </div>
        </div>
      </div>
    </section>
    
  )
  
    
  }