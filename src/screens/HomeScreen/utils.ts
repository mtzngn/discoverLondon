import londonLandmarks from '../../api/londonLandmarks.json';
import {
  LikedCards,
  CardDetails,
  MarkerDetails,
} from '../../actions/landmarkActions';

export const markerDetails: MarkerDetails[] = londonLandmarks.map(el => {
  return {
    latlng: {
      latitude: el.latlng.latitude,
      longitude: el.latlng.longitude,
    },
    isSelected: false,
    id: el.id,
  };
});
export const cardDetails: CardDetails[] = londonLandmarks.map(el => {
  return {
    name: el.name,
    id: el.id,
    uri: el.image,
    description: el.description,
  };
});
export const likedCards: LikedCards[] = londonLandmarks.map(el => {
  return {
    isLiked: false,
    id: el.id,
  };
});
