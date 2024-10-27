import figma_1 from "./figma-1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

//////////////////////////////////////////
//////////////////////////////////////////

////////////ROUND ROCK/////////////

const Icon = ({icon, color}) => {
  return <FontAwesomeIcon icon={icon} color={color} /> ;
};


function Button({className, children}){

  return (
  <div className='centerized'>
    <button className={className}>{children}</button>
  </div>
  )
  
}


export default function RoundRock() {
  return (
    <section className='round-rock'>
      
        <div className='garbage-landing-page'>
          <img src={figma_1}/>
        </div>

        <div className='header-content'>
          <h1 className='header-margin round-header'>
            <Icon icon={faTrashCan} color='blue'/> Round Rock
          </h1>
          <h3 className='header-margin trash-Hauling'>Trash Hauling</h3>

          <Button className='Experts-btn'>Experts</Button>

          <div className='lorem'>
            <h2 className='header-margin'>Lorem</h2>
            <h1 className='header-margin'>Lorem Ipsum</h1>
          </div>
          <div className='paragraph'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <Button className="two-button">Help me</Button>
        </div>
      
    </section>
  );
}