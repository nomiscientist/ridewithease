const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('png');
defaultConfig.resolver.sourceExts.push('jsx');

module.exports = defaultConfig;