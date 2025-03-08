import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FeedbackScreen = ({ navigation, route }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    // TODO: Implement feedback submission logic
    navigation.goBack();
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => setRating(i)}
          style={styles.starContainer}
        >
          <Image
            source={require('../assets/star-icon.png')}
            style={[styles.star, i <= rating && styles.starSelected]}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.driverInfo}>
          <Image
            source={require('../assets/driver-photo.png')}
            style={styles.driverPhoto}
          />
          <Text style={styles.driverName}>John Smith</Text>
          <Text style={styles.tripInfo}>Toyota Camry - ABC 123</Text>
        </View>

        <Text style={styles.ratingTitle}>How was your ride?</Text>
        <View style={styles.starsContainer}>
          {renderStars()}
        </View>

        <Text style={styles.commentTitle}>Additional Comments</Text>
        <TextInput
          style={styles.commentInput}
          placeholder="Tell us about your experience"
          value={comment}
          onChangeText={setComment}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        <TouchableOpacity 
          style={[styles.submitButton, (!rating || !comment) && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={!rating || !comment}
        >
          <Text style={styles.submitButtonText}>Submit Feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
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
  }
});

export default FeedbackScreen;