import React from 'react'
import { StyleSheet,Text,View, SafeAreaView, ScrollView, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Slider from './carousel';
const HomePage = () => {
    // const url = "https://codewithsadiq.com/public/images/course/1639916867.jpg"
    const url = ""
  return (
    <ScrollView >
        <Slider/>
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
        }]}>
            {/* <View style={styles.head}>
                <View style={styles.content}>
                </View>
            </View> */}
            <Text style={{ marginBottom:10, fontSize:18 }}>Our Courses</Text>
            <View style={{ height:100,flexDirection:'row', marginBottom:80, padding:0 }} >
                <View style={{ flex: 1,height:160, backgroundColor: "white", marginRight:5, borderRadius:10 }} >
                    {/* <Image
                        source={{uri: url}}
                        style={styles.img}
                    /> */}
                </View>
                <View style={{ flex: 1,height:160, backgroundColor: "white", marginLeft:5, borderRadius:10 }} />
            </View>
            <Text style={{ marginBottom:10, fontSize:18 }}>Students Achievements</Text>
            <View style={{ height:100,flexDirection:'row', marginBottom:80, padding:0 }} >
                <View style={{ flex: 1,height:160, backgroundColor: "white", marginRight:5, borderRadius:10 }} >
                    {/* <Text>hell</Text> */}
                </View>
                <View style={{ flex: 1,height:160, backgroundColor: "white", marginLeft:5, borderRadius:10 }} />
            </View>

            {/* <View style={{ flex: 3, backgroundColor: "white", marginBottom:10 }} /> */}
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      marginBottom:40,
      height:'100%'
    },
    head :{
        height:'auto',
        backgroundColor: "white" , 
        marginBottom:10, 
        PaddingTop:20,
        borderRadius:10,
        // elevation:5
    },
    content:{
        padding:5,
        height:150
    },
    titleText: {
        fontWeight: '400',
        fontSize:22,
        textAlign:'center',
    },
    pgText: {
    color: 'black'
    },
    img:{
        height:"100%",
        width:"100%",
        overflow:'hidden',
        resizeMode:"cover",
        borderRadius:10

    }
});

export default HomePage