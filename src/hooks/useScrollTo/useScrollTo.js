/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';

const useScrollTo = (flatListRef, markerDetails) => {
  useEffect(() => {
    const selectedLandmarkId = markerDetails?.filter(el => el?.isSelected)[0]
      ?.id;
    if (
      markerDetails &&
      markerDetails.length > 0 &&
      selectedLandmarkId !== undefined
    ) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: selectedLandmarkId - 1,
        viewOffset: 40,
      });
    }
  }, [markerDetails]);
};

export default useScrollTo;
