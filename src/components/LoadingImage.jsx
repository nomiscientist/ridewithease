import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, Animated } from 'react-native';
import { ASSETS, getImageSource } from '../constants/assets';
import { ImageCache } from '../utils/ImageCache';

const LoadingImage = ({ 
  source,
  thumbnailSource,
  style, 
  tintColor, 
  placeholder = ASSETS.imagePlaceholder,
  resizeMode = 'cover'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [cachedSource, setCachedSource] = useState(source);
  const opacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    async function checkCache() {
      await ImageCache.init();
      if (typeof source === 'string' && ImageCache.has(source)) {
        setCachedSource(ImageCache.get(source));
        setIsLoading(false);
        Animated.timing(opacity, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true
        }).start();
      }
    }
    checkCache();
  }, [source, opacity]);

  const handleLoad = async () => {
    if (typeof source === 'string') {
      await ImageCache.set(source, source);
    }
    setIsLoading(false);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true
    }).start();
  };

  return (
    <View style={[styles.container, style]}>
      {thumbnailSource && (
        <Image
          source={thumbnailSource}
          style={[StyleSheet.absoluteFill, style]}
          blurRadius={1}
          resizeMode={resizeMode}
        />
      )}
      
      {isLoading && (
        <ActivityIndicator 
          style={styles.loading} 
          color="#4A90E2" 
          size="small" 
        />
      )}

      {hasError ? (
        <Image 
          source={getImageSource(placeholder)}
          style={[style, { tintColor: '#CCC' }]}
          resizeMode={resizeMode}
        />
      ) : (
        <Animated.Image
          source={cachedSource}
          style={[
            style,
            { opacity },
            tintColor && { tintColor }
          ]}
          resizeMode={resizeMode}
          onLoadStart={() => {
            opacity.setValue(0);
            if (!ImageCache.has(source)) {
              setIsLoading(true);
            }
          }}
          onLoad={handleLoad}
          onLoadEnd={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  loading: {
    position: 'absolute',
    zIndex: 1
  }
});

export default LoadingImage;