import { useOutletContext } from 'react-router-dom';
import { IVan } from '../../models/van';

export default function HostVanPhotos(): JSX.Element {
  const van = useOutletContext<IVan>();

  return (
    <div className='host-van-photos'>
      <img
        src={van.imageUrl}
        alt={van.name}
        className='host-van-photos__photo'
      />
    </div>
  );
}
