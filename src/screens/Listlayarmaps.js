import React from 'react'
    import { SafeAreaView } from 'react-navigation'
    import {View,StyleSheet,Linking,Button} from 'react-native'
    import Header from './Komponen/header'
    
    
    const Listlayarmaps = ({ navigation }) => {
      return (
        <SafeAreaView forceInset={{ top: 'always' }}>
          <View>
        <Header textHeader={'10 Kabupaten Kota Lampung'} />
      </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Linking.openURL('https://id.wikipedia.org/wiki/Pasar_Liwa,_Balik_Bukit,_Lampung_Barat');
         }}
         title="Liwa, Kabupaten Lampung Barat"
        />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Linking.openURL('https://id.wikipedia.org/wiki/Kalianda,_Lampung_Selatan');
         }}
         title="Kalianda, Kabupaten Lampung Selatan"
        />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Linking.openURL('https://id.wikipedia.org/wiki/Gunung_Sugih,_Lampung_Tengah');
         }}
         title="Gunung Sugih, Kabupaten Lampung Tengah"
        />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Linking.openURL('https://id.wikipedia.org/wiki/Sukadana,_Lampung_Timur');
         }}
         title="Sukadana, Kabupaten Lampung Timur"
        />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Linking.openURL('https://id.wikipedia.org/wiki/Kotabumi,_Lampung_Utara');
         }}
         title="Kota Bumi, Kabupaten Lampung Utara"
        />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Linking.openURL('https://id.wikipedia.org/wiki/Mesuji,_Mesuji');
         }}
         title="Mesuji, Kabupaten Mesuji"
        />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Linking.openURL('https://id.wikipedia.org/wiki/Gedong_Tataan,_Pesawaran');
         }}
         title="Gedong Tataan, Kabupaten Pesawaran"
        />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Linking.openURL('https://id.wikipedia.org/wiki/Krui,_Lampung_Barat');
         }}
         title="Krui, Kabupaten Pesisir Barat"
        />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Linking.openURL('https://id.wikipedia.org/wiki/Pringsewu,_Pringsewu');
         }}
         title="Pringsewu, Kabupaten Pringsewu"
        />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Linking.openURL('https://id.wikipedia.org/wiki/Kota_Agung,_Tanggamus');
         }}
         title="Kota Agung, Kabupaten Tanggamus"
        />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Linking.openURL('https://id.wikipedia.org/wiki/Menggala,_Tulang_Bawang');
         }}
         title="Menggala, Kabupaten Tulang Bawang"
        />
        </View>


        </SafeAreaView>
      )
    }
    const styles = StyleSheet.create({

      buttonContainer: {
        
        margin: 20
      }

    })

    
    export default Listlayarmaps