import londonLandmarks from '../../api/londonLandmarks.json';

export const markerDetails = londonLandmarks.map(el => {
  return {
    latlng: {
      latitude: el.latlng.latitude,
      longitude: el.latlng.longitude,
    },
    isSelected: false,
    id: el.id,
  };
});
export const cardDetails = londonLandmarks.map(el => {
  return {
    name: el.name,
    id: el.id,
    uri: el.image,
    description: el.description,
  };
});
export const likedCards = londonLandmarks.map(el => {
  return {
    isLiked: false,
    id: el.id,
  };
});
