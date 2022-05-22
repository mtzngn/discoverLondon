import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {RootState} from '../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {selectLandmark} from '../../reducers/landmarksSlicer';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {getHeight, getWidth, isAndroid} from '../../utils/generalUtils';
import Icon from 'react-native-vector-icons/Fontisto';
import {red, gray, blue} from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: getHeight(),
    width: getWidth(),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  landmarkIconContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    position: 'absolute',
    right: 40,
    top: 10,
  },
});

const LandmarkMap: React.FC = () => {
  const {markerDetails} = useSelector((state: RootState) => state.landmarks);
  const {likedCards} = useSelector((state: RootState) => state.landmarks);
  const dispatch = useDispatch();
  const mapRef = useRef<MapView | any>(null);

  return (
    <View style={styles.container}>
      <MapView
        provider={isAndroid() ? PROVIDER_GOOGLE : null}
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 51.500782626551675,
          longitude: -0.12552662330828043,
          latitudeDelta: 0.14,
          longitudeDelta: 0.0121,
        }}>
        {markerDetails.map(el => {
          return (
            <Marker
              tracksViewChanges={false}
              onPress={() => {
                dispatch(selectLandmark(el.id));
                mapRef?.current?.animateToRegion({
                  latitude: el.latlng.latitude,
                  longitude: el.latlng.longitude,
                  latitudeDelta: mapRef.current.latitudeDelta,
                  longitudeDelta: mapRef.current.longitudeDelta,
                });
              }}
              tappable
              coordinate={{
                latitude: el.latlng.latitude,
                longitude: el.latlng.longitude,
              }}
              key={`marker${el.id}`}>
              <View style={styles.landmarkIconContainer}>
                <Icon
                  name="map-marker-alt"
                  size={60}
                  color={el.isSelected ? blue : gray}
                  testID={'markerIcon'}
                />
                {likedCards?.filter(card => card?.id === el.id)[0]?.isLiked && (
                  <Icon
                    name="heart"
                    size={25}
                    color={red}
                    style={styles.heartIcon}
                  />
                )}
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default LandmarkMap;
