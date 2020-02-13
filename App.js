import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SearchFood from './screens/SearchFood';
import Loader from './Components/Loader';
import { getToken } from './utils/api'



const App: () => React$Node = () => {
  const [token, setToken] = useState('')
  useEffect(() => {
    getToken().then(res => {
      console.log("App====>", res)
      setToken(res.token)
    })
  }, [])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {token ? <SearchFood token={token} />
          :
          <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Loader />
          </View>
        }
      </SafeAreaView>
    </>
  );
};


export default App;
