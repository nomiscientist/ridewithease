import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ASSETS, getImageSource } from '../constants/assets';

const RideDetailsScreen = ({ navigation, route }) => {
  // Mock data - in real app this would come from API/route params
  const rideDetails = {
    status: 'In Progress',
    pickupLocation: 'Student Center',
    dropoffLocation: 'Downtown Campus',
    pickupTime: '3:30 PM',
    estimatedArrival: '3:45 PM',
    distance: '2.5 miles',
    fare: '$12.50',
    driver: {
      name: 'John Smith',
      rating: 4.8,
      vehicleInfo: 'Toyota Camry - Silver',
      licensePlate: 'ABC 123'
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.statusCard}>
          <View style={styles.statusRow}>
            <Image source={getImageSource(ASSETS.car)} style={styles.statusIcon} />
            <Text style={styles.statusText}>{rideDetails.status}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.locationContainer}>
            <View style={styles.locationItem}>
              <Text style={styles.locationLabel}>Pickup</Text>
              <Text style={styles.locationText}>{rideDetails.pickupLocation}</Text>
              <View style={styles.timeRow}>
                <Image source={getImageSource(ASSETS.clock)} style={styles.timeIcon} />
                <Text style={styles.timeText}>{rideDetails.pickupTime}</Text>
              </View>
            </View>
            <Image source={getImageSource(ASSETS.arrowRight)} style={styles.arrow} />
            <View style={styles.locationItem}>
              <Text style={styles.locationLabel}>Dropoff</Text>
              <Text style={styles.locationText}>{rideDetails.dropoffLocation}</Text>
              <View style={styles.timeRow}>
                <Image source={getImageSource(ASSETS.clock)} style={styles.timeIcon} />
                <Text style={styles.timeText}>{rideDetails.estimatedArrival}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trip Details</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Image source={getImageSource(ASSETS.distance)} style={styles.detailIcon} />
              <Text style={styles.detailText}>{rideDetails.distance}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailText}>Estimated Fare: {rideDetails.fare}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Driver Information</Text>
          <View style={styles.driverCard}>
            <Image source={getImageSource(ASSETS.driver)} style={styles.driverIcon} />
            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>{rideDetails.driver.name}</Text>
              <View style={styles.ratingContainer}>
                <Image source={getImageSource(ASSETS.star)} style={styles.starIcon} />
                <Text style={styles.rating}>{rideDetails.driver.rating}</Text>
              </View>
              <Text style={styles.vehicleInfo}>{rideDetails.driver.vehicleInfo}</Text>
              <Text style={styles.licensePlate}>{rideDetails.driver.licensePlate}</Text>
            </View>
          </View>

          <View style={styles.contactButtons}>
            <TouchableOpacity 
              style={styles.contactButton}
              onPress={() => {}}
            >
              <Image source={getImageSource(ASSETS.message)} style={styles.contactIcon} />
              <Text style={styles.contactText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.contactButton}
              onPress={() => {}}
            >
              <Image source={getImageSource(ASSETS.phone)} style={styles.contactIcon} />
              <Text style={styles.contactText}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.emergencyButton}
          onPress={() => navigation.navigate('Emergency')}
        >
          <Image source={getImageSource(ASSETS.emergency)} style={styles.emergencyIcon} />
          <Text style={styles.emergencyText}>Emergency Assistance</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  content: {
    padding: 20
  },
  statusCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#4A90E2'
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2'
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  locationItem: {
    flex: 1,
    alignItems: 'center'
  },
  locationLabel: {
    fontSize: 14,
    color: '#666'
  },
  locationText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  timeIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
    tintColor: '#666'
  },
  timeText: {
    fontSize: 14,
    color: '#666'
  },
  arrow: {
    width: 24,
    height: 24,
    tintColor: '#666'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#4A90E2'
  },
  detailText: {
    fontSize: 16,
    color: '#333'
  },
  driverCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  driverIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15
  },
  driverInfo: {
    flex: 1
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
    tintColor: '#FFD700'
  },
  rating: {
    fontSize: 14,
    color: '#666'
  },
  vehicleInfo: {
    fontSize: 14,
    color: '#666'
  },
  licensePlate: {
    fontSize: 14,
    color: '#666'
  },
  contactButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contactButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: '#4A90E2'
  },
  contactIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#fff'
  },
  contactText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff'
  },
  emergencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 25,
    backgroundColor: '#FF4444'
  },
  emergencyIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#fff'
  },
  emergencyText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff'
  }
});

export default RideDetailsScreen;