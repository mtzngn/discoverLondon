import React, {useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {getHeight, getWidth} from '../../utils';
import Icon from 'react-native-vector-icons/Fontisto';
import {red, gray} from '../../themes/colors';

interface Data {
  id: number;
  name: string;
  description: string;
  image: string;
  latlng: {
    latitude: number;
    longitude: number;
  };
}

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

const LandmarkMap: React.FC<Array<Data>> = ({data}) => {
  const _map = useRef(null);

  return (
    data && (
      <View style={styles.container}>
        <MapView
          ref={_map}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 51.500782626551675,
            longitude: -0.12552662330828043,
            latitudeDelta: 0.14,
            longitudeDelta: 0.0121,
          }}>
          {/* {data.map(el => {
            return (
              <Marker
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
                  <Icon
                    name="heart"
                    size={25}
                    color={red}
                    style={{position: 'absolute', right: 40, top: 10}}
                  />
                </View>
              </Marker>
            );
          })} */}
        </MapView>
      </View>
    )
  );
};

export default LandmarkMap;
