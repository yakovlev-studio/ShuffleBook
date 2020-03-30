import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const CanvasScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>CanvasScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CanvasScreen;
