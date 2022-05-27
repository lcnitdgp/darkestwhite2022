import '../App.css';
import Card from './card';


function CardHero(){
    return(
        <div className='cardhero'>
            <h1 className='cardhero-header'>Our Recent posts</h1>
            <hr/>
            
            <div class="grid-container">
  <div class="grid-item"><Card/></div>
  <div class="grid-item"><Card/></div>
  <div class="grid-item"><Card/></div>  
  <div class="grid-item"><Card/></div>
  <div class="grid-item"><Card/></div>
  <div class="grid-item"><Card/></div>  
  <div class="grid-item"><Card/></div>
  <div class="grid-item"><Card/></div>
  <div class="grid-item"><Card/></div>  
  
  

  
 
        </div>
        </div>
    )
}

export default CardHero;