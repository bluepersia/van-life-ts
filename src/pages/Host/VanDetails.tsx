import { useOutletContext } from 'react-router-dom';
import { IVan } from '../../models/van';

export default function HostVanDetails(): JSX.Element {
  const van = useOutletContext<IVan>();

  return (
    <div className='host-van-details'>
      <p className='host-van-details__text'>
        <strong>Name: </strong>
        {van.name}
      </p>
      <p className='host-van-details__text'>
        <strong>Category: </strong>
        {van.type[0].toUpperCase() + van.type.slice(1)}
      </p>
      <p className='host-van-details__text'>
        <strong>Description: </strong>
        {van.description}
      </p>
    </div>
  );
}
