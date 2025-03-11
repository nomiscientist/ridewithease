import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ASSETS, getImageSource } from '../constants/assets';

const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = React.useState(true);
  const [location, setLocation] = React.useState(true);

  const settingsSections = [
    {
      title: 'Account',
      items: [
        {
          icon: ASSETS.driver,
          title: 'Profile Information',
          onPress: () => navigation.navigate('Profile')
        },
        {
          icon: ASSETS.email,
          title: 'Email Preferences',
          onPress: () => navigation.navigate('EmailPreferences')
        },
        {
          icon: ASSETS.notification,
          title: 'Push Notifications',
          type: 'switch',
          value: notifications,
          onValueChange: setNotifications
        }
      ]
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: ASSETS.location,
          title: 'Location Services',
          type: 'switch',
          value: location,
          onValueChange: setLocation
        },
        {
          icon: ASSETS.schedule,
          title: 'Scheduling Options',
          onPress: () => navigation.navigate('SchedulingOptions')
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          icon: ASSETS.faq,
          title: 'FAQ',
          onPress: () => navigation.navigate('FAQ')
        },
        {
          icon: ASSETS.support,
          title: 'Contact Support',
          onPress: () => navigation.navigate('Support')
        },
        {
          icon: ASSETS.message,
          title: 'Send Feedback',
          onPress: () => navigation.navigate('Feedback')
        }
      ]
    }
  ];

  const renderSettingItem = (item) => (
    <TouchableOpacity
      key={item.title}
      style={styles.settingItem}
      onPress={item.onPress}
      disabled={item.type === 'switch'}
    >
      <View style={styles.settingContent}>
        <Image source={getImageSource(item.icon)} style={styles.settingIcon} />
        <Text style={styles.settingTitle}>{item.title}</Text>
      </View>
      {item.type === 'switch' ? (
        <Switch
          value={item.value}
          onValueChange={item.onValueChange}
          trackColor={{ false: '#DDDDDD', true: '#4A90E2' }}
          thumbColor="#FFFFFF"
        />
      ) : (
        <Image source={getImageSource(ASSETS.chevronRight)} style={styles.chevronIcon} />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {settingsSections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionContent}>
              {section.items.map(renderSettingItem)}
            </View>
          </View>
        ))}

        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.logoutText}>Log Out</Text>
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
    flex: 1
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginLeft: 20,
    marginBottom: 10
  },
  sectionContent: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EEE'
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE'
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  settingIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#4A90E2'
  },
  chevronIcon: {
    width: 16,
    height: 16,
    tintColor: '#CCC'
  },
  settingTitle: {
    fontSize: 16,
    color: '#333'
  },
  logoutButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#FF4444',
    borderRadius: 25,
    alignItems: 'center'
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  }
});

export default SettingsScreen;