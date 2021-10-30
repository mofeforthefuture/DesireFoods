import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS, SIZES} from '../../constants/themes';
import {Navbar, NotificationCard} from '../../components';
import {notificationRef} from '../../Firebase';
import Moment from 'moment';

export default function Notifications({navigation}) {
  useEffect(() => {
    snapshot();
    return () => {
      snapshot();
    };
  }, []);
  const [quantity, setQuantity] = useState(1);

  const [notifications, setNotifications] = useState([]);

  const snapshot = async () => {
    const res = await notificationRef.where('id', '==', 'mofedev').get();

    if (res.empty) {
      console.log('No matching documents.');
      return;
    }

    res.forEach(doc => {
      setNotifications(doc.data().notifications.reverse());
      // console.log(Moment(doc.data().notifications[0].date.seconds));
    });
  };
  return (
    <>
      <StatusBar translucent barStyle="dark-content" />
      <SafeAreaView style={{}} />
      <Navbar Back onPress={() => navigation.goBack()} />
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          paddingHorizontal: SIZES.padding / 2,
        }}>
        <FlatList
          data={notifications}
          renderItem={({item}) => (
            <NotificationCard title={item.title} message={item.message} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
}

const style = StyleSheet.create({});
