import imgDefault from '../../imgDefault/imgDefault.jpg';

export default function CastItem({ actor }) {
  return (
    <li>
      <img
        src={
          actor.img
            ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${actor.img}`
            : imgDefault
        }
        alt=""
      />
      <h3>{actor.name}</h3>
      <p>Character: {actor.character}</p>
    </li>
  );
}
