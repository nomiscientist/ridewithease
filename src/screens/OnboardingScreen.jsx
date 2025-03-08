import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const onboardingData = [
  {
    title: 'Welcome to Ease',
    description: 'Your trusted student ride-sharing platform',
    image: require('../assets/onboarding-1.png')
  },
  {
    title: 'Safe & Reliable',
    description: 'Professional drivers and real-time tracking for your peace of mind',
    image: require('../assets/onboarding-2.png')
  },
  {
    title: 'Easy Scheduling',
    description: 'Book your rides in advance or on-demand',
    image: require('../assets/onboarding-3.png')
  }
];

const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
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
        <Image 
          source={onboardingData[currentPage].image}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{onboardingData[currentPage].title}</Text>
        <Text style={styles.description}>{onboardingData[currentPage].description}</Text>
      </View>

      <View style={styles.pagination}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentPage === index && styles.activeDot]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextText}>
            {currentPage === onboardingData.length - 1 ? 'Get Started' : 'Next'}
          </Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    marginBottom: 40
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
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4
  },
  activeDot: {
    backgroundColor: '#4A90E2',
    width: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  skipButton: {
    padding: 15
  },
  skipText: {
    color: '#666',
    fontSize: 16
  },
  nextButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default OnboardingScreen;