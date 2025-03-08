import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RideDetailsScreen = ({ navigation, route }) => {
  // In a real app, this would come from route.params or API
  const rideDetails = {
    status: 'Scheduled',
    date: 'Dec 20, 2023',
    pickupTime: '3:30 PM',
    pickupLocation: 'Student Center',
    dropoffLocation: 'Downtown Campus',
    fare: '$12.50',
    driver: {
      name: 'John Smith',
      rating: 4.8,
      vehicleInfo: 'Toyota Camry',
      plateNumber: 'ABC 123',
      photo: require('../assets/driver-photo.png')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.status}>{rideDetails.status}</Text>
            <Text style={styles.date}>{rideDetails.date}</Text>
          </View>

          <View style={styles.routeContainer}>
            <View style={styles.timeLocation}>
              <Text style={styles.time}>{rideDetails.pickupTime}</Text>
              <View style={styles.locationContainer}>
                <View style={styles.dot} />
                <Text style={styles.location}>{rideDetails.pickupLocation}</Text>
              </View>
            </View>

            <View style={styles.routeLine} />

            <View style={styles.timeLocation}>
              <Text style={styles.time}>Est. 4:00 PM</Text>
              <View style={styles.locationContainer}>
                <View style={[styles.dot, styles.destinationDot]} />
                <Text style={styles.location}>{rideDetails.dropoffLocation}</Text>
              </View>
            </View>
          </View>

          <View style={styles.fareContainer}>
            <Text style={styles.fareLabel}>Fare</Text>
            <Text style={styles.fareAmount}>{rideDetails.fare}</Text>
          </View>
        </View>

        <View style={styles.driverCard}>
          <Text style={styles.sectionTitle}>Driver Information</Text>
          <View style={styles.driverInfo}>
            <Image source={rideDetails.driver.photo} style={styles.driverPhoto} />
            <View style={styles.driverDetails}>
              <Text style={styles.driverName}>{rideDetails.driver.name}</Text>
              <View style={styles.ratingContainer}>
                <Image
                  source={require('../assets/star-icon.png')}
                  style={styles.starIcon}
                />
                <Text style={styles.rating}>{rideDetails.driver.rating}</Text>
              </View>
              <Text style={styles.vehicleInfo}>
                {rideDetails.driver.vehicleInfo} - {rideDetails.driver.plateNumber}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity 
            style={[styles.button, styles.messageButton]}
            onPress={() => {}}
          >
            <Image
              source={require('../assets/message-icon.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.callButton]}
            onPress={() => {}}
          >
            <Image
              source={require('../assets/phone-icon.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.cancelButton]}
            onPress={() => {}}
          >
            <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancel Ride</Text>
          </TouchableOpacity>
        </View>
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
  card: {
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2'
  },
  date: {
    fontSize: 16,
    color: '#666'
  },
  routeContainer: {
    marginBottom: 20
  },
  timeLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  time: {
    width: 80,
    fontSize: 14,
    color: '#666'
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4A90E2',
    marginRight: 10
  },
  destinationDot: {
    backgroundColor: '#FF4444'
  },
  location: {
    fontSize: 16,
    color: '#333',
    flex: 1
  },
  routeLine: {
    width: 2,
    height: 30,
    backgroundColor: '#DDD',
    marginLeft: 85
  },
  fareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 15
  },
  fareLabel: {
    fontSize: 16,
    color: '#666'
  },
  fareAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  driverCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  driverPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15
  },
  driverDetails: {
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
    marginRight: 5
  },
  rating: {
    fontSize: 14,
    color: '#666'
  },
  vehicleInfo: {
    fontSize: 14,
    color: '#666'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 25,
    marginHorizontal: 5
  },
  messageButton: {
    backgroundColor: '#4A90E2'
  },
  callButton: {
    backgroundColor: '#4CAF50'
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF4444'
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#fff'
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff'
  },
  cancelButtonText: {
    color: '#FF4444'
  }
});

export default RideDetailsScreen;