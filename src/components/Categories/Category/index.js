import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CATEGORIES } from '../../../data/Categories';
import styles from './styles';
import colors from '../../../constants/colors';

const Category = ({ data = {}, activeCategoryIndex = 0, onNavigateToCategory = f => f }) => {
  let category = null;
  // console.log(data);

  if (CATEGORIES[activeCategoryIndex].title === data.title) {
    category = (
      <View style={styles.categoryContainer}>
        <Image source={data.illustration} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subtitle}>{data.subtitle}</Text>
        </View>
      </View>
    );
  } else {
    category = (
      <LinearGradient colors={colors.gradient} style={styles.categoryContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subtitle}>{data.subtitle}</Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.slideInnerContainer}
      onPress={onNavigateToCategory.bind(this, data.name)}
    >
      {category}
    </TouchableOpacity>
  );
};

export default Category;
