import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ASSETS, getImageSource } from '../constants/assets';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const slides = [
    {
      icon: ASSETS.car,
      title: 'Easy Campus Transit',
      description: 'Get around campus safely and efficiently with our dedicated ride service.'
    },
    {
      icon: ASSETS.schedule,
      title: 'Schedule Rides',
      description: 'Plan ahead by scheduling rides to and from your classes.'
    },
    {
      icon: ASSETS.location,
      title: 'Real-time Tracking',
      description: 'Track your ride in real-time and share your journey with friends.'
    }
  ];

  const handleNext = () => {
    if (currentPage < slides.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('Login');
    }
  };

  const handleSkip = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.slideContainer}>
          <Image 
            source={getImageSource(slides[currentPage].icon)} 
            style={styles.slideIcon} 
          />
          <Text style={styles.title}>{slides[currentPage].title}</Text>
          <Text style={styles.description}>{slides[currentPage].description}</Text>
        </View>

        <View style={styles.paginationContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentPage && styles.paginationDotActive
              ]}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          {currentPage < slides.length - 1 ? (
            <>
              <TouchableOpacity
                style={styles.skipButton}
                onPress={handleSkip}
              >
                <Text style={styles.skipButtonText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.nextButton}
                onPress={handleNext}
              >
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={[styles.nextButton, styles.getStartedButton]}
              onPress={handleNext}
            >
              <Text style={styles.nextButtonText}>Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  slideContainer: {
    alignItems: 'center',
    marginBottom: 40
  },
  slideIcon: {
    width: 120,
    height: 120,
    marginBottom: 20,
    tintColor: '#4A90E2'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 10,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 24
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCC',
    marginHorizontal: 4
  },
  paginationDotActive: {
    backgroundColor: '#4A90E2',
    width: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20
  },
  skipButton: {
    padding: 15
  },
  skipButtonText: {
    color: '#666',
    fontSize: 16
  },
  nextButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25
  },
  getStartedButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default OnboardingScreen;