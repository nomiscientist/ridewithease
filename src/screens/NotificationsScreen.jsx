import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationsScreen = () => {
  const notifications = [
    {
      id: '1',
      type: 'ride_update',
      title: 'Driver Arrived',
      message: 'Your driver has arrived at the pickup location.',
      time: '2 mins ago',
      read: false
    },
    {
      id: '2',
      type: 'promotion',
      title: 'Weekend Special',
      message: 'Get 20% off on your rides this weekend!',
      time: '1 hour ago',
      read: true
    },
    {
      id: '3',
      type: 'system',
      title: 'App Update Available',
      message: 'Update your app to get the latest features and improvements.',
      time: '1 day ago',
      read: true
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'ride_update':
        return require('../assets/car-icon.png');
      case 'promotion':
        return require('../assets/promotion-icon.png');
      case 'system':
        return require('../assets/system-icon.png');
      default:
        return require('../assets/notification-icon.png');
    }
  };

  const renderNotification = ({ item }) => (
    <TouchableOpacity 
      style={[styles.notificationItem, !item.read && styles.unreadItem]}
      onPress={() => {}}
    >
      <View style={styles.notificationContent}>
        <Image 
          source={getNotificationIcon(item.type)}
          style={styles.notificationIcon}
        />
        <View style={styles.notificationText}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationMessage}>{item.message}</Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
        {!item.read && <View style={styles.unreadDot} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Image
              source={require('../assets/empty-notifications.png')}
              style={styles.emptyIcon}
            />
            <Text style={styles.emptyText}>No notifications yet</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listContainer: {
    flexGrow: 1
  },
  notificationItem: {
    padding: 15
  },
  unreadItem: {
    backgroundColor: '#F5F8FF'
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  notificationIcon: {
    width: 40,
    height: 40,
    marginRight: 15
  },
  notificationText: {
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
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4A90E2',
    marginLeft: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#EEE'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  emptyIcon: {
    width: 100,
    height: 100,
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