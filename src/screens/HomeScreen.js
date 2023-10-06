import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import subjectArray from '../../subjectArray';
import lectureList from '../../lectureList';

const HomeScreen = props => {
  const subjectData = subjectArray();
  const lectureData = lectureList();

  return (
    <View style={{backgroundColor: '#09182b', flex: 1}}>
      <View>
        <FlatList
          data={lectureData.lectureData}
          renderItem={item => (
            <View>
              <Text style={styles.textStyle}>
                {item.item.name} {'>'}
              </Text>
              <FlatList
                data={subjectData.subjectData.filter(
                  i => i.lectureId === item.item.lectureId,
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{width: 20}} />}
                renderItem={item => (
                  <TouchableOpacity
                    style={{width: 100, height: 150}}
                    onPress={() =>
                      props.navigation.navigate('Content', {
                        description: item.item.description,
                        content: item.item.content,
                        image: item.item.image,
                        playrul: item.item.playurl,
                        similarContent: subjectData.subjectData.filter(
                          i =>
                            i.lectureId === item.item.lectureId &&
                            i.content !== item.item.content,
                        ),
                      })
                    }>
                    <Image
                      style={styles.imageStyle}
                      source={{uri: item.item.image}}
                      resizeMode="contain"
                      onError={e => console.log(e)}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  viewStyle: {},
  imageStyle: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
});

export default HomeScreen;
