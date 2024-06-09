import { useOutletContext } from 'react-router-dom';
import { IVan } from '../../models/van';

export default function HostVanPricing(): JSX.Element {
  const van = useOutletContext<IVan>();

  return (
    <div className='host-van-pricing'>
      <p className='host-van-pricing__price'>
        <span className='strong'>${van.price.toFixed(2)}</span>/day
      </p>
    </div>
  );
}
