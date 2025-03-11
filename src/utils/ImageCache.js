import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native';
import LRUCache from './LRUCache';

const CACHE_KEY_PREFIX = '@image_cache_';
const CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 days
const MAX_CACHE_SIZE = 100; // Maximum number of images to cache in memory

export class ImageCache {
  static memoryCache = new LRUCache(MAX_CACHE_SIZE);
  static initialized = false;

  static async init() {
    if (this.initialized) return;
    
    try {
      const keys = await AsyncStorage.getAllKeys();
      const imageCacheKeys = keys.filter(key => key.startsWith(CACHE_KEY_PREFIX));
      
      await Promise.all(
        imageCacheKeys.map(async key => {
          const data = await AsyncStorage.getItem(key);
          if (data) {
            const { url, timestamp } = JSON.parse(data);
            if (Date.now() - timestamp < CACHE_EXPIRY) {
              this.memoryCache.set(url, url);
            } else {
              await AsyncStorage.removeItem(key);
            }
          }
        })
      );
      
      this.initialized = true;
    } catch (error) {
      console.warn('Error initializing image cache:', error);
    }
  }

  static async set(url, image) {
    try {
      this.memoryCache.set(url, image);
      await AsyncStorage.setItem(
        `${CACHE_KEY_PREFIX}${url}`,
        JSON.stringify({
          url,
          timestamp: Date.now()
        })
      );
    } catch (error) {
      console.warn('Error caching image:', error);
    }
  }

  static get(url) {
    return this.memoryCache.get(url);
  }

  static has(url) {
    return this.memoryCache.has(url);
  }

  static async clear() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const imageCacheKeys = keys.filter(key => key.startsWith(CACHE_KEY_PREFIX));
      await AsyncStorage.multiRemove(imageCacheKeys);
      this.memoryCache.clear();
    } catch (error) {
      console.warn('Error clearing image cache:', error);
    }
  }

  static async preloadImages(urls) {
    await this.init();
    
    return Promise.all(
      urls.map(url => {
        if (this.has(url)) {
          return Promise.resolve();
        }
        
        return new Promise((resolve, reject) => {
          Image.prefetch(url)
            .then(() => {
              this.set(url, url);
              resolve();
            })
            .catch(reject);
        });
      })
    );
  }

  static async clearExpired() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const imageCacheKeys = keys.filter(key => key.startsWith(CACHE_KEY_PREFIX));
      
      await Promise.all(
        imageCacheKeys.map(async key => {
          const data = await AsyncStorage.getItem(key);
          if (data) {
            const { url, timestamp } = JSON.parse(data);
            if (Date.now() - timestamp >= CACHE_EXPIRY) {
              await AsyncStorage.removeItem(key);
              this.memoryCache.delete(url);
            }
          }
        })
      );
    } catch (error) {
      console.warn('Error clearing expired cache:', error);
    }
  }
}