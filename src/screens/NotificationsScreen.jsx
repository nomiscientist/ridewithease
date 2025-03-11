import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ASSETS, getImageSource } from '../constants/assets';

const NotificationsScreen = ({ navigation }) => {
  const notifications = [
    {
      id: 1,
      type: 'ride',
      title: 'Driver Arrived',
      message: 'Your driver John has arrived at the pickup location.',
      time: '2 mins ago',
      icon: ASSETS.car
    },
    {
      id: 2,
      type: 'promo',
      title: 'Weekend Offer',
      message: 'Get 20% off on your weekend rides!',
      time: '1 hour ago',
      icon: ASSETS.promotion
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      {notifications.length > 0 ? (
        <ScrollView style={styles.content}>
          {notifications.map(notification => (
            <TouchableOpacity
              key={notification.id}
              style={styles.notificationCard}
              onPress={() => {}}
            >
              <Image 
                source={getImageSource(notification.icon)} 
                style={styles.notificationIcon} 
              />
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                <Text style={styles.notificationMessage}>{notification.message}</Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyContainer}>
          <Image 
            source={getImageSource(ASSETS.notification)} 
            style={styles.emptyIcon} 
          />
          <Text style={styles.emptyText}>No notifications yet</Text>
        </View>
      )}
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
  notificationCard: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE'
  },
  notificationIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
    tintColor: '#4A90E2'
  },
  notificationContent: {
    flex: 1
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5
  },
  notificationTime: {
    fontSize: 12,
    color: '#999'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  emptyIcon: {
    width: 64,
    height: 64,
    marginBottom: 20,
    tintColor: '#CCC'
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center'
  }
});

export default NotificationsScreen;