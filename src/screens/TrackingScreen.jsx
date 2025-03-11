import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { ASSETS, getImageSource } from '../constants/assets';

const { width, height } = Dimensions.get('window');

const TrackingScreen = ({ navigation, route }) => {
  // In a real app, these would come from real-time updates
  const [driverLocation, setDriverLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const [rideStatus, setRideStatus] = useState({
    status: 'On the way',
    estimatedTime: '10 mins',
    distance: '2.5 km'
  });

  const initialRegion = {
    latitude: driverLocation.latitude,
    longitude: driverLocation.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={driverLocation}
          title="Driver Location"
        >
          <Image 
            source={getImageSource(ASSETS.car)}
            style={styles.markerIcon}
          />
        </Marker>
      </MapView>

      <View style={styles.statusCard}>
        <View style={styles.statusHeader}>
          <Image source={getImageSource(ASSETS.car)} style={styles.statusIcon} />
          <Text style={styles.statusText}>{rideStatus.status}</Text>
          <View style={styles.timeDistance}>
            <View style={styles.infoItem}>
              <Image source={getImageSource(ASSETS.clock)} style={styles.infoIcon} />
              <Text style={styles.infoText}>{rideStatus.estimatedTime}</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={getImageSource(ASSETS.distance)} style={styles.infoIcon} />
              <Text style={styles.infoText}>{rideStatus.distance}</Text>
            </View>
          </View>
        </View>

        <View style={styles.driverInfo}>
          <Image source={getImageSource(ASSETS.driver)} style={styles.driverIcon} />
          <View style={styles.driverDetails}>
            <Text style={styles.driverName}>John Smith</Text>
            <Text style={styles.vehicleInfo}>Toyota Camry - ABC 123</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              <Image source={getImageSource(ASSETS.message)} style={styles.actionIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Image source={getImageSource(ASSETS.phone)} style={styles.actionIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={() => {}}
        >
          <Text style={styles.cancelButtonText}>Cancel Ride</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height,
  },
  markerIcon: {
    width: 40,
    height: 40,
    tintColor: '#4A90E2'
  },
  statusCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5
  },
  statusHeader: {
    marginBottom: 20
  },
  statusIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#4A90E2'
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 10
  },
  timeDistance: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20
  },
  infoIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#666'
  },
  infoText: {
    fontSize: 14,
    color: '#666'
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20
  },
  driverIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  driverDetails: {
    flex: 1
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  vehicleInfo: {
    fontSize: 14,
    color: '#666'
  },
  actions: {
    flexDirection: 'row'
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  actionIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff'
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF4444',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center'
  },
  cancelButtonText: {
    color: '#FF4444',
    fontSize: 16,
    fontWeight: '500'
  }
});

export default TrackingScreen;