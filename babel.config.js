module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './app',
            '@assets': './app/assets',
            '@components': './app/components',
            '@ui': './app/components/ui',
            '@context': './app/context',
            '@data': './app/data.ts',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
