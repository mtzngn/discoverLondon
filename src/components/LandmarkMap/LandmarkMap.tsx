import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {getHeight, getWidth} from '../../utils';
import Icon from 'react-native-vector-icons/Fontisto';
import {red, gray, blue} from '../../themes/colors';
import {RootState} from '../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {selectLandmark} from '../../actions';

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
  const {landmarks} = useSelector((state: RootState) => state.landmarksReducer);
  const [shouldTrack, setTrack] = useState(false);

  useEffect(() => {
    setTrack(true);
    const timeout = setTimeout(() => {
      setTrack(false);
    }, 1);
    return () => clearInterval(timeout);
  }, [landmarks]);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 51.500782626551675,
          longitude: -0.12552662330828043,
          latitudeDelta: 0.14,
          longitudeDelta: 0.0121,
        }}>
        {landmarks.map(el => {
          return (
            <Marker
              tracksViewChanges={shouldTrack}
              onPress={() => dispatch(selectLandmark(el.id))}
              tappable
              coordinate={{
                latitude: el.latlng.latitude,
                longitude: el.latlng.longitude,
              }}
              key={`marker${el.id}`}>
              {console.log(`key=marker${el.id}${el.isLiked}`)}
              <View style={styles.landmarkIconContainer}>
                <Icon
                  name="map-marker-alt"
                  size={60}
                  color={el.isSelected ? blue : gray}
                />
                {el.isLiked && (
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
