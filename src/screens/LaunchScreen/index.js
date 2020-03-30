import React from 'react';
import {View, SafeAreaView, Image, Text} from 'react-native';
import Slider from '../../components/LaunchScreenSlider';
import GradientButton from '../../components/UI/GradientButton';
import styles from './styles';

const LaunchScreen = ({navigation}) => {
  const navigateHandler = () => {
    return navigation.navigate({routeName: 'Categories'});
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/icon.png')} />
        </View>

        <Slider />

        <GradientButton onPressed={navigateHandler} title="Создать фотокнигу" />
      </View>
    </SafeAreaView>
  );
};

LaunchScreen.navigationOptions = () => ({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerBackTitle: 'Назад',
});

export default LaunchScreen;
