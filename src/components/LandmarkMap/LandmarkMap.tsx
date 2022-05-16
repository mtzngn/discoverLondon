import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {getHeight, getWidth} from '../../utils';
import Icon from 'react-native-vector-icons/Fontisto';
import {red, gray} from '../../themes/colors';
import {RootState} from '../../store/store';
import {useSelector} from 'react-redux';

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
});

const LandmarkMap: React.FC = () => {
  const {landmarks} = useSelector((state: RootState) => state.landmarksReducer);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 51.500782626551675,
          longitude: -0.12552662330828043,
          latitudeDelta: 0.14,
          longitudeDelta: 0.0121,
        }}>
        {landmarks.map(el => {
          return (
            <Marker
              tracksViewChanges={false}
              coordinate={{
                latitude: el.latlng.latitude,
                longitude: el.latlng.longitude,
              }}
              key={`marker${el.id}`}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="map-marker-alt" size={60} color={gray} />
                {el.isLiked ? (
                  <Icon
                    name="heart"
                    size={25}
                    color={red}
                    style={{position: 'absolute', right: 40, top: 10}}
                  />
                ) : null}
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default LandmarkMap;
