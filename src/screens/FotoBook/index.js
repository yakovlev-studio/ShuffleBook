import React, {useState, useEffect} from 'react';
import {View, Platform, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './styles';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import ShuffleBook from '../../components/ShuffleBook';
import Popup from '../../components/UI/Popup';
import Manual from '../../components/Manual';

import ShuffleBookContext from '../../contexts/ShuffleBookContext';

const FotoBookScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    navigation.setParams({toggleModalVisibility});
  }, [modalVisible]);
  const toggleModalVisibility = () => setModalVisible(!modalVisible);
  const navigateToImageBrowserHandler = () => {
    return navigation.navigate('ImageBrowser');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <Popup animationType="fade" transparent={true} visible={modalVisible}>
          <Manual toggleModalVisibility={toggleModalVisibility} />
        </Popup>
        <ShuffleBookContext.Provider
          value={{onNavigateToImageBrowser: navigateToImageBrowserHandler}}>
          <ShuffleBook />
        </ShuffleBookContext.Provider>
      </View>
    </SafeAreaView>
  );
};

const iconName =
  Platform.OS === 'android'
    ? 'md-information-circle'
    : 'ios-information-circle-outline';
const iconColor = Platform.OS === 'android' ? colors.white : colors.primary;
const iconBackgroundColor = Platform.OS === 'android' ? colors.white : '';

FotoBookScreen.navigationOptions = ({navigation}) => ({
  title: 'Shuffle book',
  headerBackTitle: 'Назад',

  headerRightContainerStyle: {
    paddingRight: 20,
  },
  headerRight: (
    <TouchableOpacity onPress={navigation.getParam('toggleModalVisibility')}>
      {/* <Ionicons
        name={iconName}
        size={34}
        backgroundColor={iconBackgroundColor}
        color={iconColor}
      /> */}
    </TouchableOpacity>
  ),
});

export default FotoBookScreen;
