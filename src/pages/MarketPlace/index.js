import Button from "../../components/Button";
import PageTitle from "../../components/PageTitle";
import PropertyCard from "../../components/PropertyCard";
import { FilterIcon } from "../../icons";
import MarketPlaceCSS from './marketplace.module.css';

const MarketPlace = () => {
  
  const data = [
    {
      name: 'Property #0',
      address: 'San Francisco, CA',
      progress: 80,
      irr: '23.90%',
      cashPayout: '7.60%',
      status: 'SOLD',
      img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    {
      name: 'Property #1',
      address: 'San Francisco, CA',
      progress: 60,
      irr: '18.60%',
      cashPayout: '6.60%',
      status: 'AVAILABLE',
      img: 'https://images.pexels.com/photos/5353946/pexels-photo-5353946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    {
      name: 'Property #2',
      address: 'San Francisco, CA',
      progress: 70,
      irr: '19.60%',
      cashPayout: '6.95%',
      status: 'SOLD',
      img: 'https://images.pexels.com/photos/3990589/pexels-photo-3990589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    {
      name: 'Property #3',
      address: 'San Francisco, CA',
      progress: 40,
      irr: '19.60%',
      cashPayout: '6.95%',
      status: 'AVAILABLE',
      img: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    {
      name: 'Property #4',
      address: 'San Francisco, CA',
      progress: 80,
      irr: '19.60%',
      cashPayout: '6.95%',
      status: 'SOLD',
      img: 'https://images.pexels.com/photos/11693940/pexels-photo-11693940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    
  ];
  
  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <PageTitle title="Marketplace"/>
        <div>
          <Button type="outline" iconLeft={<FilterIcon/>}>FILTER</Button>
        </div>
      </div>
      
      <div className={MarketPlaceCSS.propertyContainer}>
        {
          data.map((property, i) => {
            return (
              <PropertyCard
                key={i}
                propertyDetails={property}
              />
            )
          })
        }

      </div>
      
    </div>
  )
}

export default MarketPlace;