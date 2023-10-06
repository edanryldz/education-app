import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import profileList from '../../profileList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import profileSettingsList from '../../profileSettingsList';
import {useFocusEffect} from '@react-navigation/native';

const ProfileScreen = props => {
  const profileData = profileList();
  const profileSettingsData = profileSettingsList();
  const [key, setKey] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      storeData();
      return () => console.log('cikti');
    }, []),
  );
  const storeData = async () => {
    let counter = await AsyncStorage.getItem('customKey');
    if (counter === null) {
      counter = '1';
      await AsyncStorage.setItem('customKey', '1');
    } else {
      counter = parseInt(counter, 10);
      await AsyncStorage.setItem('customKey', (counter + 1).toString());
    }
    console.log('girdi', counter);
    setKey(counter);
  };

  return (
    <View style={styles.viewStyle}>
      <View style={styles.flatViewStyle}>
        <FlatList
          data={profileData.profileData}
          horizontal
          ItemSeparatorComponent={() => <View style={{width: 8}} />}
          showsHorizontalScrollIndicator={false}
          renderItem={item => (
            <TouchableOpacity>
              <View>
                <Image source={item.item.image} style={styles.imageStyle} />
                <Text style={styles.textStyle}>{item.item.userName}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.settingsButtonViewStyle}>
        <FlatList
          data={profileSettingsData.profileSettings}
          numColumns={2}
          renderItem={item => (
            <TouchableOpacity style={styles.buttonStyle}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={item.item.image}
                  style={styles.flatButtonImageStyle}
                />
                <Text style={styles.flatTextStyle}>{item.item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.quitViewStyle}>
        <TouchableOpacity
          style={styles.quitButtonStyle}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.textStyle}>Çıkış</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textStyle}>Puan</Text>
        <Text style={styles.textStyle}>{key}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#09182b',
    flex: 1,
    alignItems: 'center',
    // Space-arround ekleme
  },
  settingsButtonViewStyle: {
    backgroundColor: '#09182b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quitViewStyle: {
    width: '70%',
    height: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  quitButtonStyle: {
    width: '70%',
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  buttonImageStyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  flatButtonImageStyle: {
    width: 40,
    height: 40,
  },
  buttonStyle: {
    margin: 5,
    width: 120,
    height: 120,
    justifyContent: 'space-around',
  },
  allButtonViewStyle: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonViewStyle: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 200,
    justifyContent: 'space-around',
  },
  flatViewStyle: {
    width: '100%',
    height: 150,
    alignItems: 'flex-start',
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 10,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  flatTextStyle: {
    color: 'white',
    marginTop: 30,
  },
});
