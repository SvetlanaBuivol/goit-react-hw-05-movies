import imgDefault from '../../imgDefault/imgDefault.jpg';

export default function CastItem({ actor }) {
  const { img, name, character } = actor;
  return (
    <li>
      <img
        src={
          img
            ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${img}`
            : imgDefault
        }
        alt=""
      />
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </li>
  );
}
