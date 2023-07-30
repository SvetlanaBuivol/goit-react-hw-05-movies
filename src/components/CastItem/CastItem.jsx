import imgDefault from '../../imgDefault/imgDefault.jpg';
import {
  CastItemCharacter,
  CastItemContainer,
  CastItemImage,
  CastItemInfo,
  CastItemName,
} from './CastItem.styled';

export default function CastItem({ actor }) {
  const { img, name, character } = actor;
  return (
    <CastItemContainer>
      <CastItemImage
        src={
          img
            ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${img}`
            : imgDefault
        }
        alt=""
      />
      <CastItemInfo>
        <CastItemName>{name}</CastItemName>
        <CastItemCharacter>Character: {character}</CastItemCharacter>
      </CastItemInfo>
    </CastItemContainer>
  );
}
