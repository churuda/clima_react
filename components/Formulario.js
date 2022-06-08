import React,{useState} from 'react'
import {Text, View, StyleSheet,TextInput, TouchableWithoutFeedback, Animated, Alert} from 'react-native'
import { Picker } from '@react-native-community/picker';


const Formulario = ({busqueda, guardarBusqueda,guardarConsultar}) => {
    const [animacionboton ] = useState(new Animated.Value(1));
    const {pais, ciudad}=busqueda

    const consultarClima =()=>{
        if (pais.trim()=== '' || ciudad.trim()=== ''){
            mostrarAlerta()
            return
        }
        guardarConsultar(true)
    }

    
    const mostrarAlerta=()=>{
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{text: 'OK'}]
        )
    }
    const animacionEntrada =()=>{
        // Animated.spring( animacionboton , {
        //     toValue: 2,
           
        // }).start();
    };

    const animacionSalida =()=>{
    //    Animated.spring( animacionboton, { 
    //         toValue: 1, 
    //         friction: 4,
    //         tension: 30
    //     }).start();
    }

    const estiloAnimacion={
        trasnform: [{scale:animacionboton}]
    }

  return (
    <>
        <View style={styles.formulario}>
            <View>
                <TextInput
                    value={ciudad}
                    onChangeText={ciudad=>guardarBusqueda({...busqueda,ciudad})}
                    style={styles.input}
                    placeholder='Ciudad'
                    placeholderTextColor={'#666'}
                />

            </View>
                
        </View>
    
        <Picker 
        itemStyle={{height:120, backgroundColor:'#FFF'}}
        selectedValue={pais}
        onValueChange={(pais=>guardarBusqueda({...busqueda,pais}))}
        >
            <Picker.Item label='--Seleccione su País' value=''/>
            <Picker.Item label='Estados Unidos' value='US'/>
            <Picker.Item label='México' value='MX'/>
            <Picker.Item label='Argentina' value='AR'/>
            <Picker.Item label='Ecuador' value='EC'/>
            <Picker.Item label='Colombia' value='CO'/>
            <Picker.Item label='España' value='ES'/>
        </Picker>

        <TouchableWithoutFeedback
            onPressIn={()=> animacionEntrada()}
            onPressOut={()=> animacionSalida()}
            onPress={()=>consultarClima()}
        >
            <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
                <Text style={styles.textoBuscar}>BUSCAR CLIMA</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    </>


  );
};

const styles = StyleSheet.create({
    input:{
        padding:10,
        height:50,
        backgroundColor:'#FFF',
        fontSize:20,
        marginBottom:20,
        textAlign:'center',
        borderRadius:5
    },

    btnBuscar:{
        marginTop:50,
        backgroundColor:'#000',
        padding:10,
        justifyContent:'center',
        borderRadius:5

    },
    textoBuscar:{
        color:'#FFF',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        textTransform:'uppercase',
   
    }
});

export default Formulario