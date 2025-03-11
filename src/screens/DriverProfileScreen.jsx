import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ASSETS, getImageSource } from '../constants/assets';

const DriverProfileScreen = ({ navigation, route }) => {
  // In a real app, this would come from API
  const driverInfo = {
    name: 'John Smith',
    rating: 4.8,
    totalRides: 1250,
    yearsActive: 2,
    languages: ['English', 'Spanish'],
    vehicle: {
      make: 'Toyota',
      model: 'Camry',
      year: '2021',
      color: 'Silver',
      plateNumber: 'ABC 123'
    },
    recentReviews: [
      {
        id: 1,
        rating: 5,
        comment: 'Very professional and punctual. Great service!',
        date: '2 days ago',
        reviewer: 'Sarah M.'
      },
      {
        id: 2,
        rating: 5,
        comment: 'Safe driver and very friendly. Would recommend!',
        date: '1 week ago',
        reviewer: 'Mike R.'
      }
    ]
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Image source={getImageSource(ASSETS.driver)} style={styles.driverIcon} />
          <Text style={styles.name}>{driverInfo.name}</Text>
          <View style={styles.ratingContainer}>
            <Image source={getImageSource(ASSETS.star)} style={styles.starIcon} />
            <Text style={styles.rating}>{driverInfo.rating}</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{driverInfo.totalRides}</Text>
            <Text style={styles.statLabel}>Total Rides</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{driverInfo.yearsActive}</Text>
            <Text style={styles.statLabel}>Years Active</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vehicle Information</Text>
          <View style={styles.vehicleInfo}>
            <View style={styles.vehicleRow}>
              <Image source={getImageSource(ASSETS.car)} style={styles.vehicleIcon} />
              <Text style={styles.vehicleText}>
                {driverInfo.vehicle.year} {driverInfo.vehicle.make} {driverInfo.vehicle.model}
              </Text>
            </View>
            <Text style={styles.vehicleText}>Color: {driverInfo.vehicle.color}</Text>
            <Text style={styles.vehicleText}>Plate: {driverInfo.vehicle.plateNumber}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <View style={styles.languagesContainer}>
            {driverInfo.languages.map((language, index) => (
              <View key={index} style={styles.languageTag}>
                <Text style={styles.languageText}>{language}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Reviews</Text>
          {driverInfo.recentReviews.map(review => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewRating}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Image key={i} source={getImageSource(ASSETS.star)} style={styles.starIcon} />
                  ))}
                </View>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
              <Text style={styles.reviewComment}>{review.comment}</Text>
              <Text style={styles.reviewerName}>- {review.reviewer}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.reportButton}
          onPress={() => {}}
        >
          <Image source={getImageSource(ASSETS.report)} style={styles.reportIcon} />
          <Text style={styles.reportButtonText}> Report an Issue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE'
  },
  driverIcon: {
    width: 80,
    height: 80,
    marginBottom: 15
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#FFD700'
  },
  rating: {
    fontSize: 18,
    color: '#666'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  statItem: {
    alignItems: 'center',
    flex: 1
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#DDD'
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 5
  },
  statLabel: {
    fontSize: 14,
    color: '#666'
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15
  },
  vehicleInfo: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10
  },
  vehicleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  vehicleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#4A90E2'
  },
  vehicleText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  languageTag: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10
  },
  languageText: {
    color: '#fff',
    fontSize: 14
  },
  reviewCard: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  reviewRating: {
    flexDirection: 'row'
  },
  reviewDate: {
    fontSize: 12,
    color: '#999'
  },
  reviewComment: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    lineHeight: 20
  },
  reviewerName: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic'
  },
  reportButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF4444',
    borderRadius: 25,
    alignItems: 'center'
  },
  reportIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#FF4444'
  },
  reportButtonText: {
    color: '#FF4444',
    fontSize: 16,
    fontWeight: '500'
  }
});

export default DriverProfileScreen;