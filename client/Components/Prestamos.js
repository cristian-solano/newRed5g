import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, Platform, FlatList, TextInput, Button } from "react-native";
import axios from 'axios'


const filtrarPrestamos = (prestamos, monto, fecha) => {
    return prestamos.filter((prestamo) => {
      let coincideMonto = monto ? prestamo.prestamo >= monto : true;
      let coincideFecha = fecha ? prestamo.pago === fecha : true;
      return coincideMonto && coincideFecha;
    });
  };


export default function Prestamos (){

    const [data, setData] = useState([])
    const [monto, setMonto] = useState('');
    const [fecha, setFecha] = useState('');




    const getData = async() => {
        await axios.get('http://192.168.0.13:8000/api/prestamos')
        .then((res) => {
            setData(res.data)
            console.log(res.data)
            setResultados(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const [resultados, setResultados] = useState([]);
    useEffect(() => {
        getData()
    }, [])
    
    

   
    const handleBuscar = () => {
        const filtrados = filtrarPrestamos(data, monto, fecha);
        setResultados(filtrados);
      };
        
    
    const renderPrestamo = ({ item }) => (
        <View style={styles.listContentInfo}>
          <Text style={styles.listText}>{item.prestamo}</Text>
          <Text style={styles.listText}>{item.intereses}</Text>
          <Text style={styles.listText}>{item.total}</Text>
          <Text style={styles.listText}>{item.pago}</Text>
        </View>
      );


    return (
        <View style={styles.listContainer}>
            <View style={styles.listAll}>
                <View style={styles.listTitle}>
                    <Text style={styles.listTextTitle}>Préstamos Salvavidas</Text>
                    <View style={styles.listTitle}>
                        <Text style={styles.listTextSubTitle}>Informacion del salvavidas</Text>
                    </View>
                </View>
                {/* <View style={styles.inputContent}>
                    <TextInput onChangeText={setFecha} value={fecha} style={styles.inputText} placeholder="Escribe fecha de pago" ></TextInput>
                    <Button title="Buscar" onPress={handleBuscar} />
                </View> */}
                <View style={styles.inputContent}>
                    <TextInput onChangeText={setMonto} value={monto} style={styles.inputText} placeholder="Escribe el monto" ></TextInput>
                    <Button title="Buscar" onPress={handleBuscar} />
                </View>
                <View style={styles.list}>
                    <View style={styles.listContentItem}>
                        <Text style={styles.listTextItem}>Prestamo</Text>
                        <Text style={styles.listTextItem}>Intereses</Text>
                        <Text style={styles.listTextItem}>Total</Text>
                        <Text style={styles.listTextItem}>Pago</Text>
                    </View>
                    <FlatList data={resultados}

                        renderItem={renderPrestamo}
                        keyExtractor={persona => persona.id.toString()}
                    />
                </View>
            </View>
            
            
        </View>
    )
}


const styles= StyleSheet.create({
    listContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        padding: 30,
        position: 'absolute', 
        top:'40%',
        left: 0,
    },

    listAll: {
        width: '100%',
        display: "flex",
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: "center",
        gap: 50
    },

    inputContent: {
        width: "100%",
        height: 35,
        backgroundColor: "#A2B0B7"
    },

    inputText: {
        padding: 10,
        fontSize: 10
    },  
    
    listTitle: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex=start',
        gap: 20
    },
    listTextTitle: {
        fontWeight: '800',
        fontSize: 24,
    },
    listTextSubTitle: {
        color: '#A2B0B7',
        fontSize: 14
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContentItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#210049',
        padding: 5,
        borderRadius: 10
    },
    listTextItem: {
        width: 80,
        height: 35,
        fontSize: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff'
    },

    listContentInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 5,
        borderRadius: 10
    },

    listText: {
        width: 80,
        height: 35,
        fontSize: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000'
    }
})
