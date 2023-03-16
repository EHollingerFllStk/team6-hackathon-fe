import styles from './ProgressPlant.module.css';
import small from '../../assets/Pots _ Plants/ficus elastica tineke - small.png';
import medium from '../../assets/Pots _ Plants/ficus elastica tineke - medium.png';
import large from '../../assets/Pots _ Plants/ficus elastica tineke - large.png';


export default function ProgressPlant({ plot }) {
  return (
    <div>
        <p>{plot.name}</p>
    </div>
  )
}
