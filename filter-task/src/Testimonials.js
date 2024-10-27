import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

//////////////////////////////////////
//////////////////////////////////////
// Testimonials

const Icon = ({icon, color}) => {
  return <FontAwesomeIcon icon={icon} color={color} /> ;
};


function Testimonials_reviews(){
  
  return(
    <div className='reviews'>
      <img src={'https://i.pravatar.cc/48'}/>
      
      <div className='img-header'>

        <h3>John doe</h3>
        
        <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </blockquote>
        <span className='star'>
      
          <Icon icon={faStar} color='blue'/>
          <Icon icon={faStar} color='blue'/>
          <Icon icon={faStar} color='blue'/>
          <Icon icon={faStar} color='blue'/>
          <Icon icon={faStar} color='blue'/>
            
        </span>
      </div>

    </div>
  )
}

export default function Testimonials(){
  
  return(
    <section className='testimonials'>
      
      <h1 className='three-times-header'>Testimonials</h1>
     
      <div className='grid-template-2'>
        
        <Testimonials_reviews/>

        <Testimonials_reviews/>

        <Testimonials_reviews/>

        <Testimonials_reviews/>
        
      </div>
    
    </section>
  )
}