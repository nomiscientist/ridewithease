import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SupportScreen = ({ navigation }) => {
  const supportOptions = [
    {
      id: 1,
      title: 'FAQs',
      description: 'Find answers to common questions',
      icon: require('../assets/faq-icon.png'),
      onPress: () => {}
    },
    {
      id: 2,
      title: 'Contact Support',
      description: 'Get help from our support team',
      icon: require('../assets/support-chat-icon.png'),
      onPress: () => {}
    },
    {
      id: 3,
      title: 'Report an Issue',
      description: 'Let us know if something isn\'t working',
      icon: require('../assets/report-icon.png'),
      onPress: () => {}
    },
    {
      id: 4,
      title: 'Emergency Contact',
      description: '24/7 emergency assistance',
      icon: require('../assets/emergency-icon.png'),
      onPress: () => {}
    }
  ];

  const renderSupportOption = (option) => (
    <TouchableOpacity
      key={option.id}
      style={styles.optionCard}
      onPress={option.onPress}
    >
      <Image source={option.icon} style={styles.optionIcon} />
      <View style={styles.optionContent}>
        <Text style={styles.optionTitle}>{option.title}</Text>
        <Text style={styles.optionDescription}>{option.description}</Text>
      </View>
      <Image
        source={require('../assets/chevron-right.png')}
        style={styles.chevron}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>How can we help you?</Text>
          <Text style={styles.subtitle}>
            Choose from the options below to get the support you need
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          {supportOptions.map(renderSupportOption)}
        </View>

        <View style={styles.contactInfo}>
          <Text style={styles.contactTitle}>Direct Contact</Text>
          <TouchableOpacity style={styles.contactOption}>
            <Image
              source={require('../assets/email-icon.png')}
              style={styles.contactIcon}
            />
            <Text style={styles.contactText}>support@ridewithease.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactOption}>
            <Image
              source={require('../assets/phone-icon.png')}
              style={styles.contactIcon}
            />
            <Text style={styles.contactText}>1-800-RIDE-EASE</Text>
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
  content: {
    flex: 1
  },
  header: {
    padding: 20,
    backgroundColor: '#4A90E2'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8
  },
  optionsContainer: {
    padding: 20
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  optionIcon: {
    width: 40,
    height: 40,
    marginRight: 15
  },
  optionContent: {
    flex: 1
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  optionDescription: {
    fontSize: 14,
    color: '#666'
  },
  chevron: {
    width: 20,
    height: 20,
    tintColor: '#CCC'
  },
  contactInfo: {
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15
  },
  contactOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  contactIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#4A90E2'
  },
  contactText: {
    fontSize: 16,
    color: '#4A90E2'
  }
});

export default SupportScreen;