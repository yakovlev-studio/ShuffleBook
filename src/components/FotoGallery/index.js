import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Buttons from "./FotoGalleryButtons";
import FotoGalleryContext from "../../contexts/FotoGallery";
import FotoGalleryItem from "./FotoGalleryItem";
import styles from "./styles";
import { getDataForPhotoGalleryFlatList } from "../../utils/lib";

const FotoGallery = () => {
  const photos = useSelector(({ shuffleBook }) => shuffleBook.photos);
  const data = getDataForPhotoGalleryFlatList(photos);

  const renderFotoGalleryItem = ({ item, index }) => {
    return <FotoGalleryItem item={item} key={item.id} />;
  };

  return (
    <View style={styles.fotoGalleryContainer}>
      <FotoGalleryContext.Consumer>
        {({ scrollEnabled, panHandlers }) => {
          return (
            <>
              <FlatList
                contentContainerStyle={styles.fotoGallery}
                ItemSeparatorComponent={FlatListItemSeparator}
                horizontal
                keyExtractor={item => item.id}
                data={data}
                renderItem={renderFotoGalleryItem}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={scrollEnabled}
                {...panHandlers}
              />
              <Buttons />
            </>
          );
        }}
      </FotoGalleryContext.Consumer>
    </View>
  );
};

const FlatListItemSeparator = () => (
  <View style={styles.flatListItemSeparator} />
);

export default FotoGallery;
