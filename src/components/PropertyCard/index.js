import { ChevronRight } from '../../icons';
import AlertCircleIcon from '../../icons/AlertCircleIcon';
import Button from '../Button';
import ProgressBar from '../ProgressBar';
import VerticalLine from '../VerticalLine';
import PropertyCardCSS from './propertycard.module.css';

const PropertyCard = ({propertyDetails}) => {
  return (
    <div className={PropertyCardCSS.container}>
      <div
        className={PropertyCardCSS.banner}
        style={{
          backgroundImage: `url('${propertyDetails.img}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
          
        }}
      >
        <div className={PropertyCardCSS.status}>
          <span>{propertyDetails.status}</span>
        </div>
      </div>
      <div style={{ marginTop: 10, marginBottom: 20 }}>
        <h2 className={PropertyCardCSS.title}>{propertyDetails.name}</h2>
        <h3 className={PropertyCardCSS.address}>{propertyDetails.address}</h3>
      </div>
      
      <ProgressBar value={propertyDetails.progress}/>

      <div className={PropertyCardCSS.progress}> 
        <p>Progress:</p>
        <p>{propertyDetails.progress}/100</p>
      </div>

      <div className={PropertyCardCSS.irrContainer}>
        <div>
          <p>Projected IRR <AlertCircleIcon/></p>
          <h3>{propertyDetails.irr}</h3>
        </div>
        
        <div style={{display: 'flex'}}>
          <VerticalLine height={100}/>
          <div className={PropertyCardCSS.cashout}>
            <p>Cash Payout <AlertCircleIcon/> </p>
            <h3>{propertyDetails.cashPayout}</h3>
          </div>
          
        </div>
      </div>

      <div className={PropertyCardCSS.irrContainer}>
        <div>
          <Button>PURCHASE</Button>
        </div>
        
        <div>
          <Button type="transparent" iconRight={<ChevronRight/>}>View Details</Button>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard;