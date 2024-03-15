import { useState } from "react";
import { View, StyleSheet, Text, Image, Button, Platform, TouchableOpacity } from "react-native";
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen from "./Prestamos";
import Prestamos from "./Prestamos";
const Tab = createBottomTabNavigator()



export default function Home (){

    const navigation = useNavigation()

    const handlePrestamos = () => {
        navigation.navigate('Prestamos')
    }

    const [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
    })

  return (
    
     <View style={styles.homeContainer}>
        <View style={styles.homeContent}>
            <Image style={styles.purple} source={require('../Images/morado.png')} />
            <Image style={styles.pink} source={require('../Images/rosado.png')}/>
            <View style={styles.homeData}>
                <View style={styles.navbar}>
                    <View style={styles.homeContentProfile}> 
                        <View style={styles.imageProfile}>
                            <Image style={styles.image2} source={require('../Images/profile.png')}/>
                        </View>
                        <View style={styles.textContent}>
                            <Text style={styles.text}>Hola,</Text>
                            <Text style={styles.text2}>Persona</Text>
                        </View>
                    </View>
                    
                    <View style={styles.imagesContent}>
                        <Image style={styles.imageNot} source={require('../Images/notifications.png')}/>
                        <Image style={styles.imageHelp} source={require('../Images/question.png')}/>
                    </View>
                </View>
            </View>
            <View style={styles.moneyContent}>
                <View style={styles.moneyBox1}>
                    <View style={styles.moneyData}>
                        <Text style={styles.moneyText}>Disponible</Text>
                        <Image style={styles.moneyImage} source={require('../Images/invisible.png')}/>
                    </View>
                    <Text style={styles.moneyNumber}>$0.000.000,oo</Text>
                </View>
                <View  style={styles.moneyBox2}>
                    <Text style={styles.amount}>Total: $0.000.000,oo</Text>
                    <View style={styles.yourCash}>
                        <Text style={styles.textCash}>Tu plata</Text>
                        <Image style={styles.imageCash} source={require('../Images/dropdown.png')}/> 
                    </View>
                </View>
            </View>
            <View style={styles.icons}>
                
                <View style={styles.iconsData}>
                    <Image source={require('../Images/PRESTAMOS.png')}/>
                    <Button
                        style={styles.iconsText}
                        title="Prestamos"
                        onPress={() => {
                            console.log("navigation");
                            handlePrestamos()
                        }}
                    />
                </View>
                    
                <View style={styles.iconsData}>
                    <Image source={require('../Images/COLCHON.png')}/>
                    <Text style={styles.iconsText}>Colchón</Text>
                </View>
                <View style={styles.iconsData}>
                    <Image source={require('../Images/BOLSILLO.png')}/>
                    <Text style={styles.iconsText}>Bolsillos</Text>
                </View>
            </View>
            <View style={styles.signContainer}>
                <View style={styles.signContent}>
                    <Text style={styles.signText}>$</Text>
                </View>
            </View>
            <View style={styles.movementsContent}>
                <View style={styles.movementsData}>
                    <Image style={styles.movementsImage} source={require('../Images/home.png')}/>
                    <Text style={styles.movementsText}>Inicio</Text>
                </View>
                <View style={styles.movementsData}>
                    <Image style={styles.movementsImage} source={require('../Images/movements.png')}/>
                    <Text style={styles.movementsText}>Movimientos</Text>
                </View>
                <View style={styles.movementsData}>
                    <Image style={styles.movementsImage} source={require('../Images/dashboard.png')}/>
                    <Text style={styles.movementsText}>Servicios</Text>
                </View>
            </View>
        </View> 
    </View>
  )   
}

const styles = StyleSheet.create({
    homeContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 40,
        paddingLeft: 24,
        paddingRight: 24, 
        fontFamily: 'RedHatDisplay_400Regular'

    },
    homeContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    purple: {
        top: -130,
        left: 0,
        width: 600,
        height: 500,
        zIndex: 1
    },

    pink: {
        position: 'absolute',
        width: 400,
        top: 40,
        left: -40,
        zIndex: 0

    },
    homeData: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    navbar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    homeContentProfile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    imageProfile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff40',
        padding: 5,
        borderRadius: 100
    },
    image2: {
        width: 40,
        height: 40
    },

    textContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    
    text: {
        color: '#ffffff',
        fontSize: 10,
        fontWeight: '100'
    },

    text2: {
        color: '#ffffff',
        fontWeight: '300',
    },

    imagesContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },

    imageNot: {
        width: 30,
        height: 30
    }, 

    imageHelp: {
        width: 30,
        height: 30
    },
    moneyContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        position: 'absolute',
        top: 100,
        zIndex: 4
    },
    moneyBox1: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    moneyData:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },

    moneyText:{
        color: '#ffffff',
        fontSize: 12, 
        fontWeight: '300'
    },  

    moneyImage: {
        width: 20,
        height: 20
    },
    moneyNumber:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20
    },
    moneyBox2: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
       
    },
    amount: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '200'
    },

    yourCash: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 14,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    textCash: {
        color: '#ffffff',
        fontSize: 11,
        fontWeight: '200'
    },
    imageCash: {
        width: 15,
        height: 15
    },
    icons: {
        width: '100%',
        position: 'absolute',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        top: 440
    },
    iconsData: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    iconsText: {
        color: '#210049',
        fontSize: 16,
        fontWeight: '600'
    },
    signContainer: {
        width: '100%',
        position: 'absolute',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 592,
        paddingRight: 30
    },
    signContent: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#FF2F73',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    signText: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: '300'
    },
    movementsContent: {
        width: 320,
        height: 60,
        position: 'absolute',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        top: 670,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#D5D5D560'
    },
    movementsData: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    },

    movementsImage: {
        width: 20,
        height: 20
    },

    movementsText: {
        fontSize: 10
    }

})
