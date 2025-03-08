import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = ({ navigation }) => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [locationServices, setLocationServices] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const settingsSections = [
    {
      title: 'Notifications',
      items: [
        {
          title: 'Push Notifications',
          value: pushNotifications,
          onValueChange: setPushNotifications,
          type: 'switch'
        },
        {
          title: 'Email Notifications',
          value: emailNotifications,
          onValueChange: setEmailNotifications,
          type: 'switch'
        }
      ]
    },
    {
      title: 'Privacy',
      items: [
        {
          title: 'Location Services',
          value: locationServices,
          onValueChange: setLocationServices,
          type: 'switch'
        },
        {
          title: 'Privacy Policy',
          type: 'link',
          onPress: () => {}
        },
        {
          title: 'Terms of Service',
          type: 'link',
          onPress: () => {}
        }
      ]
    },
    {
      title: 'Appearance',
      items: [
        {
          title: 'Dark Mode',
          value: darkMode,
          onValueChange: setDarkMode,
          type: 'switch'
        }
      ]
    },
    {
      title: 'Account',
      items: [
        {
          title: 'Edit Profile',
          type: 'link',
          onPress: () => {}
        },
        {
          title: 'Change Password',
          type: 'link',
          onPress: () => {}
        },
        {
          title: 'Payment Methods',
          type: 'link',
          onPress: () => {}
        }
      ]
    }
  ];

  const renderSettingItem = (item) => {
    if (item.type === 'switch') {
      return (
        <View key={item.title} style={styles.settingItem}>
          <Text style={styles.settingTitle}>{item.title}</Text>
          <Switch
            value={item.value}
            onValueChange={item.onValueChange}
            trackColor={{ false: '#D1D1D6', true: '#4A90E2' }}
            thumbColor={item.value ? '#fff' : '#fff'}
          />
        </View>
      );
    }

    return (
      <TouchableOpacity
        key={item.title}
        style={styles.settingItem}
        onPress={item.onPress}
      >
        <Text style={styles.settingTitle}>{item.title}</Text>
        <Image
          source={require('../assets/chevron-right.png')}
          style={styles.chevron}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {settingsSections.map(section => (
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
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Version 1.0.0</Text>
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
  settingTitle: {
    fontSize: 16,
    color: '#333'
  },
  chevron: {
    width: 20,
    height: 20,
    tintColor: '#CCC'
  },
  logoutButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#FF4444',
    borderRadius: 25,
    alignItems: 'center'
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  },
  version: {
    textAlign: 'center',
    color: '#999',
    fontSize: 14,
    marginBottom: 20
  }
});

export default SettingsScreen;