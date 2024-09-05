import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ScrollView} from 'react-native';
import Testimonio from './pantallas/testimonio';



export default function App() {
  return (

    
    
    <View style={styles.container}>
       <Image style={styles.logo} source={require('./imagenes/logo.png')} />
       <Text style={styles.text_title}>Este es lo que dicen nuestros alumnos sobre FreecodeCamp:</Text>

       <ScrollView>
       <Testimonio titulo='Shawn Wang en Singapur'

       subtitulo='Ingeniero de Software en Amazon'

       descripcion='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar 
       trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. 
       Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
       
        imagen={require('./imagenes/imagen1.png')}
      ></Testimonio>

<Testimonio titulo='Sarah Chima en Nigeria'

       subtitulo='Ingeniera de Software en ChatDesk'

       descripcion='"FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. 
       El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. 
       Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."'

        imagen={require('./imagenes/imagen2.png')}
      ></Testimonio>

<Testimonio titulo='Emma Bostian en Suecia'

       subtitulo='Ingeniera de Software en Spotify'

       descripcion='"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. 
       Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y 
       la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'

        imagen={require('./imagenes/imagen3.png')}
      ></Testimonio>
       </ScrollView>
      <StatusBar style="auto" />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
 height: 80,
 width:'100%',
 top: 60,
  },
  text_title: {
   fontSize: 20,
   top: 20,
    margin: 40,
    textAlign: 'center',
    fontWeight: 'bold'
     },
     scroll: {
    width: '100%'
        },

  
});
