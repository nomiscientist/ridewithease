import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ASSETS, getImageSource } from '../constants/assets';

const FeedbackScreen = ({ navigation, route }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const rideDetails = {
    driver: 'John Smith',
    pickup: 'Student Center',
    dropoff: 'Downtown Campus',
    date: 'Today, 3:30 PM'
  };

  const handleSubmit = () => {
    // TODO: Submit feedback to backend
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.rideCard}>
          <Text style={styles.rideTitle}>Rate your ride with</Text>
          <View style={styles.driverInfo}>
            <Image source={getImageSource(ASSETS.driver)} style={styles.driverIcon} />
            <Text style={styles.driverName}>{rideDetails.driver}</Text>
          </View>
          <View style={styles.routeInfo}>
            <View style={styles.locationContainer}>
              <Image source={getImageSource(ASSETS.location)} style={styles.locationIcon} />
              <Text style={styles.locationText}>{rideDetails.pickup}</Text>
              <Image source={getImageSource(ASSETS.arrowRight)} style={styles.arrowIcon} />
              <Text style={styles.locationText}>{rideDetails.dropoff}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Image source={getImageSource(ASSETS.clock)} style={styles.timeIcon} />
              <Text style={styles.timeText}>{rideDetails.date}</Text>
            </View>
          </View>
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingTitle}>How was your ride?</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setRating(star)}
              >
                <Image 
                  source={getImageSource(ASSETS.star)} 
                  style={[
                    styles.starIcon,
                    star <= rating ? styles.starSelected : styles.starUnselected
                  ]} 
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.commentSection}>
          <Text style={styles.commentTitle}>Additional Comments</Text>
          <TextInput
            style={styles.commentInput}
            multiline
            numberOfLines={4}
            placeholder="Tell us about your experience..."
            value={comment}
            onChangeText={setComment}
          />
        </View>

        <TouchableOpacity 
          style={[
            styles.submitButton,
            rating === 0 && styles.submitButtonDisabled
          ]}
          onPress={handleSubmit}
          disabled={rating === 0}
        >
          <Text style={styles.submitButtonText}>Submit Feedback</Text>
        </TouchableOpacity>

        {rating < 3 && rating > 0 && (
          <TouchableOpacity 
            style={styles.reportButton}
            onPress={() => navigation.navigate('ReportIssue')}
          >
            <Image source={getImageSource(ASSETS.report)} style={styles.reportIcon} />
            <Text style={styles.reportButtonText}>Report an Issue</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 20
  },
  driverInfo: {
    alignItems: 'center',
    marginBottom: 30
  },
  driverPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  },
  driverName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  tripInfo: {
    fontSize: 14,
    color: '#666'
  },
  ratingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center'
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30
  },
  starContainer: {
    padding: 5
  },
  star: {
    width: 40,
    height: 40,
    tintColor: '#DDD'
  },
  starSelected: {
    tintColor: '#FFD700'
  },
  commentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  commentInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    height: 120,
    marginBottom: 30,
    fontSize: 16
  },
  submitButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  submitButtonDisabled: {
    backgroundColor: '#B0D1F5'
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  skipButton: {
    alignItems: 'center'
  },
  skipButtonText: {
    color: '#666',
    fontSize: 14
  },
  driverEmoji: {
    fontSize: 48,
    marginBottom: 10
  },
  starIcon: {
    width: 32,
    height: 32,
    marginHorizontal: 5
  },
  starSelected: {
    tintColor: '#FFD700'
  },
  starUnselected: {
    tintColor: '#DDD'
  },
  reportIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#FF4444'
  },
  driverIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  },
  locationIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
    tintColor: '#666'
  },
  arrowIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 5,
    tintColor: '#666'
  },
  timeIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
    tintColor: '#666'
  }
});

export default FeedbackScreen;