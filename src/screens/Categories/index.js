import React from 'react';
import {Platform, TouchableOpacity, SafeAreaView} from 'react-native';
import Categories from '../../components/Categories';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../constants/colors';
import styles from './styles';

const CategoriesScreen = ({navigation}) => {
  const navigateToCategoryHandler = (category = '') => {
    return navigation.navigate({routeName: `${category}`});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Categories onNavigateToCategory={navigateToCategoryHandler} />
    </SafeAreaView>
  );
};

const iconColor = Platform.OS === 'android' ? colors.white : colors.primary;

CategoriesScreen.navigationOptions = () => ({
  title: 'Продукция',
  headerBackTitle: 'Назад',
  headerRightContainerStyle: {
    paddingRight: 20,
  },
  headerRight: (
    <TouchableOpacity onPress={() => alert('User')}>
      {/* <EvilIcons name="user" size={34} color={iconColor} /> */}
    </TouchableOpacity>
  ),
});

export default CategoriesScreen;
