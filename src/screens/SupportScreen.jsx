import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ASSETS, getImageSource } from '../constants/assets';

const SupportScreen = ({ navigation }) => {
  const supportOptions = [
    {
      id: 1,
      title: 'Chat with Support',
      description: 'Get help from our support team',
      icon: ASSETS.message,
      screen: 'SupportChat'
    },
    {
      id: 2,
      title: 'Emergency Contact',
      description: 'Immediate assistance for urgent situations',
      icon: ASSETS.emergency,
      screen: 'Emergency'
    },
    {
      id: 3,
      title: 'FAQs',
      description: 'Find answers to common questions',
      icon: ASSETS.faq,
      screen: 'FAQ'
    },
    {
      id: 4,
      title: 'Report an Issue',
      description: 'Report problems with your ride',
      icon: ASSETS.report,
      screen: 'ReportIssue'
    }
  ];

  const recentIssues = [
    {
      id: 1,
      title: 'Delayed Pickup',
      status: 'Resolved',
      date: '2 days ago'
    },
    {
      id: 2,
      title: 'App Navigation Issue',
      status: 'In Progress',
      date: '1 week ago'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How can we help?</Text>
          <View style={styles.optionsGrid}>
            {supportOptions.map(option => (
              <TouchableOpacity
                key={option.id}
                style={styles.optionCard}
                onPress={() => navigation.navigate(option.screen)}
              >
                <Image source={getImageSource(option.icon)} style={styles.optionIcon} />
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionDescription}>{option.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Issues</Text>
          {recentIssues.map(issue => (
            <TouchableOpacity
              key={issue.id}
              style={styles.issueCard}
              onPress={() => {}}
            >
              <View style={styles.issueHeader}>
                <Image source={getImageSource(ASSETS.support)} style={styles.issueIcon} />
                <View style={styles.issueInfo}>
                  <Text style={styles.issueTitle}>{issue.title}</Text>
                  <Text style={styles.issueDate}>{issue.date}</Text>
                </View>
                <View style={[
                  styles.statusBadge,
                  issue.status === 'Resolved' ? styles.resolvedBadge : styles.pendingBadge
                ]}>
                  <Text style={styles.statusText}>{issue.status}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.emailButton}
          onPress={() => {}}
        >
          <Image source={getImageSource(ASSETS.email)} style={styles.emailIcon} />
          <Text style={styles.emailText}>Email Support Team</Text>
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
    marginBottom: 10,
    tintColor: '#4A90E2'
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
    fontSize: 16,
    color: '#CCC'
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
    fontSize: 20,
    marginRight: 10,
    color: '#4A90E2'
  },
  contactText: {
    fontSize: 16,
    color: '#4A90E2'
  },
  issueIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#4A90E2'
  },
  emailIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    tintColor: '#4A90E2'
  }
});

export default SupportScreen;