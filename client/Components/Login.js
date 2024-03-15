import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Login(){


    const [password, setPassword] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const navigation = useNavigation();



    const handleLogin = async() => {
        try {
            // Enviar una solicitud POST al servidor para autenticar al usuario
            const response = await axios.post('http://192.168.0.13:8000/api/login', {
                userType: selectedValue, // Tipo de documento seleccionado por el usuario
                documentNumber: password // Número de documento ingresado por el usuario
            });
    
            // Si la autenticación es exitosa, navegar a la pantalla Home
            navigation.navigate('Home');
        } catch (error) {
            // Manejar errores de autenticación
            console.error('Error de autenticación:', error.response.data.error);
        }
    };

    return (
        <View style={styles.containerView}>  
            <View style={styles.contentView}>
                <View style={styles.contentImages}>
                    <Image source={require('../Images/logo2.png')} style={styles.image1}/>
                    <Image source={require('../Images/logo3.png')} style={styles.image2}/>
                </View>
                <Text style={styles.text}>NEQUI</Text>
            </View>

            <View style={styles.form}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                    <Picker.Item label="Seleccione un tipo de documento" value="" />
                    <Picker.Item label="Cédula de ciudadanía" value="1" />
                    <Picker.Item label="Cédula de extranjería" value="2" />
                    <Picker.Item label="Pasaporte" value="3" />
                </Picker>
                <TextInput
                    style={styles.input}
                    placeholder="Número de documento"
                    placeholderTextColor="white"
                    onChangeText={setPassword}
                    value={password}
                    keyboardType="numeric"
                />
                {/* <CustomButton onPress={handleLogin} title="Entrar" /> */}
                <Button
                    style={styles.button}
                    title="Entrar"
                    onPress={() => {
                        console.log("navigation");
                        handleLogin()
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: "#210049",
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 40,
        paddingLeft: 10,
        paddingRight: 10,
    },
    contentView: {
        alignItems: 'center'
    },
    contentImages: {
        width: '100%', 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    image1: {
        width: 90,
        height: 90,
        position: 'absolute',
        zIndex: 2
    },
    image2: {
        width: 80,
        height: 80,
        position: 'absolute',
        zIndex: 1
    },
    text: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: '300',
        letterSpacing: 3
    },
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    picker: {
        width: '90%',
        height: 50,
        backgroundColor: '#FFFFFF70',
        borderRadius: 24,
        paddingLeft: 10,
        color: '#FFFFFF',
        marginBottom: 10
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#FFFFFF70',
        borderRadius: 24,
        paddingLeft: 10,
        color: '#FFFFFF',
        fontFamily: 'RedHatDisplay_400Regular',
        marginBottom: 10
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: '#FF2F73',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
