import { View, Text,Image, StyleSheet} from "react-native";
import React from "react";

function Testimonio(props) {
    return (
        <View style={styles.view}>
            <View style={styles.view2}>
            <Image style={styles.image} source={props.imagen} />
            </View>

            <View style={styles.view3}>
            <Text style={styles.text_titulo} > {props.titulo}</Text>
            <Text style={styles.text_subtitulo} > {props.subtitulo}</Text>
            <Text style={styles.text_descrip} > {props.descripcion}</Text>
            </View>

        </View>
        

    )





}
export default Testimonio;

const styles = StyleSheet.create({
    view: {
      flex: 1,
      flexDirection:'row',
      minHeight: 250,
      backgroundColor: '#fff',
      margin: 10,
      shadowColor: "#000",
      shadowOpacity: 0.39,
      shadowRadius: 8.30,
      elevation: 13,
      shadowOffset: {
        width: 0,
        height: 6,
    },
      
    },
    view2: {
        flex: 1,
      alignSelf:'center',
      marginLeft: 5
      
      },
      view3: {
        flex: 2,
      alignSelf:'center',
      marginLeft: 10,
      
      },
    image: {
        height: '60%', // Cambiado para que cubra todo el view2
        width: '100%', // Mantener el ancho al 100%
        resizeMode: 'stretch', // Cambiado para estirar la imagen
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        margin: 5,
    },
    text_titulo: {
     textAlign: 'center',
     margin: 15,  
     fontSize: 20,
     fontWeight: 'bold',
         },
         text_subtitulo: {
            textAlign: 'center',
            margin: 5,
            fontSize: 15,
             },
             text_descrip: {
                margin: 2,
                textAlign: 'justify',
                fontSize: 15,
                 },
 });