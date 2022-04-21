import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: -4.554560924691224,
        longitude: 105.40164063990737,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
    >
      <MapView.Marker
      coordinate={{
        latitude:-5.036822846349235,
        longitude:104.0853078969816,
      }}
      title={"Liwa"}
      description={"Pusat Pemerintah Kabupaten Lampung Barat"}
      />
    
    <MapView.Marker
      coordinate={{
        latitude:-5.673235586382934,
        longitude:105.57631944317124,
      }}
      title={"Kalianda"}
      description={"Pusat Pemerintah Kabupaten Lampung Selatan"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-4.996168001180095,
        longitude:105.21130560697526,
      }}
      title={"Gunung Sugih"}
      description={"Pusat Pemerintah Kabupaten Lampung Tengah"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-5.0672998,
        longitude:105.5375268,
      }}
      title={"Sukadana"}
      description={"Pusat Pemerintah Kabupaten Lampung Timur"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-4.820904775467721,
        longitude: 104.87618402932685,
      }}
      title={"Kota Bumi"}
      description={"Pusat Pemerintah Kabupaten Lampung Utara"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-4.025777506170301, 
        longitude:105.15177064147726,
      }}
      title={"Mesuji"}
      description={"Pusat Pemerintah Kabupaten Mesuji"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-5.379654704851058, 
        longitude:105.09466939922477,
      }}
      title={"Gedong Tataan"}
      description={"Pusat Pemerintahan Kabupaten Pesawaran"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-5.192702581446824, 
        longitude:103.93408768234461,
      }}
      title={"Krui"}
      description={"Pusat Pemerintahan Kabupaten Pesisir Barat"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-5.364331616056735, 
        longitude:104.94009225500764,
      }}
      title={"Pringsewu"}
      description={"Pusat Pemerintahan Kabupaten Pringsewu"}
      />  

    <MapView.Marker
      coordinate={{
        latitude:-5.491720823154914, 
        longitude:104.62362139503804,
      }}
      title={"Kota Agung"}
      description={"Pusat Pemerintahan Kabupaten Tanggamus"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-4.548984445680161,
        longitude:105.2196187592965,
      }}
      title={"Menggala"}
      description={"Pusat Pemerintahan Kabupaten Tulang Bawang"}
      />
  
    <MapView.Marker
      coordinate={{
        latitude:-4.5397493909593, 
        longitude:105.09181749584087,
      }}
      title={"Tulang Bawang Tengah"}
      description={"Pusat Pemerintahan Kabupaten Tulang Bawang Barat"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-4.536947879893239, 
        longitude:104.48469068233888,
      }}
      title={"Blambangan Umpu"}
      description={"Pusat Pemerintahan Kabupaten Way Kanan"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-5.392523429745057, 
        longitude:105.21438784597409,
      }}
      title={"Bandar Lampung"}
      description={"Pusat Pemerintahan Kota Bandar Lampung"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-5.115270745433749, 
        longitude:105.30751716364558,
      }}
      title={"Metro"}
      description={"Pusat Pemerintahan Kota Metro"}
      />
    </MapView>
  )
} 

const styles = StyleSheet.create({
  map: {
    height
  }
})

export default Map