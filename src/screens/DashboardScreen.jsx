import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ASSETS, getImageSource } from '../constants/assets';
import LoadingImage from '../components/LoadingImage';

const DashboardScreen = ({ navigation }) => {
  const upcomingRide = {
    pickupTime: '3:30 PM',
    pickupLocation: 'Student Center',
    dropoffLocation: 'Downtown Campus',
    driverName: 'John Smith',
    vehicleInfo: 'Toyota Camry - ABC 123'
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Alex</Text>
          <Text style={styles.subtitle}>Where are you headed today?</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <View style={styles.notificationBadge}>
            <LoadingImage 
              source={getImageSource(ASSETS.notification)} 
              style={styles.notificationIcon}
              tintColor="#fff"
            />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Ride</Text>
          <TouchableOpacity 
            style={styles.rideCard}
            onPress={() => navigation.navigate('RideDetails')}
          >
            <View style={styles.rideInfo}>
              <Text style={styles.rideTime}>{upcomingRide.pickupTime}</Text>
              <View style={styles.locationContainer}>
                <Text style={styles.location}>{upcomingRide.pickupLocation}</Text>
                <LoadingImage 
                  source={getImageSource(ASSETS.arrowRight)} 
                  style={styles.arrow}
                  tintColor="#666"
                />
                <Text style={styles.location}>{upcomingRide.dropoffLocation}</Text>
              </View>
              <Text style={styles.driverInfo}>{upcomingRide.driverName} - {upcomingRide.vehicleInfo}</Text>
            </View>
            <TouchableOpacity 
              style={styles.trackButton}
              onPress={() => navigation.navigate('Tracking')}
            >
              <Text style={styles.trackButtonText}>Track</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => {}}
          >
            <LoadingImage 
              source={getImageSource(ASSETS.schedule)} 
              style={styles.actionIcon}
              tintColor="#4A90E2"
            />
            <Text style={styles.actionText}>Schedule Ride</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('RideHistory')}
          >
            <LoadingImage 
              source={getImageSource(ASSETS.history)} 
              style={styles.actionIcon}
              tintColor="#4A90E2"
            />
            <Text style={styles.actionText}>Ride History</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Support')}
          >
            <LoadingImage 
              source={getImageSource(ASSETS.support)} 
              style={styles.actionIcon}
              tintColor="#4A90E2"
            />
            <Text style={styles.actionText}>Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4A90E2'
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8
  },
  notificationBadge: {
    position: 'relative'
  },
  notificationIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff'
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF4444',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  },
  content: {
    flex: 1
  },
  section: {
    padding: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333'
  },
  rideCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rideInfo: {
    flex: 1
  },
  rideTime: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  location: {
    fontSize: 14,
    color: '#666',
    flex: 1
  },
  arrow: {
    width: 16,
    height: 16,
    marginHorizontal: 10,
    tintColor: '#666'
  },
  driverInfo: {
    fontSize: 12,
    color: '#999'
  },
  trackButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500'
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE'
  },
  actionButton: {
    alignItems: 'center'
  },
  actionIcon: {
    width: 32,
    height: 32,
    marginBottom: 5,
    tintColor: '#4A90E2'
  },
  actionText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center'
  }
});

export default DashboardScreen;