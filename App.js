import * as React from 'react';
import { View, Text, Button,Icon, Image,ScrollView,StyleSheet,Dimensions,SafeAreaView } from 'react-native';
import Category from './components/Category'
import Category2 from './components/Category2'

const image=[
  'https://www.gizbot.com/img/2020/10/infinixhot10-1601998099.jpg',
  'https://creativemachine.co/wp-content/uploads/2020/03/ecommerce_electronics_banner_template_30_1200x628.jpg',
  'https://s3.envato.com/files/193924901/BEE-1528-Fashion%20Sale%20Banners_1_preview4.jpg'  
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
 const App = () => {
  const [imgActive,setImgActive] = React.useState(0);

  const onchange=(nativeEvent)=>{
    if(nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide != imgActive){
        setImgActive(slide)
      }
    }
  }
  return (
       <SafeAreaView style={styles.container}>
    <View style={styles.wrap}>
    <ScrollView
                 onScroll={({nativeEvent})=>onchange(nativeEvent)}
                 showsHorizontalScrollIndicator={false} 
                 pagingEnabled
                 horizontal
                 style={styles.wrap}>
                                     {
                                       image.map((e,index)=>
    <Image
                                       key={e}
                                       resizeMode='stretch'
                                       style={styles.wrap}
                                       source={{uri:e}}
    />
                                       )
                                     }
    </ScrollView>         
    <View 
          style={styles.wrapDot}>{
            image.map((e,index)=>
            <Text key={e}
                  style={imgActive == index ? styles.dotActive : styles.dot}>●
    </Text>)
          }
    
    </View>
           

    </View>
    
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Men's Footwear
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('./assets/images/shoe.webp')}
                                        name="Shoes"
                                    />
                                    <Category imageUri={require('./assets/images/glass.webp')}
                                        name="Sun Glasses"
                                    />
                                    <Category imageUri={require('./assets/images/t-shirt.jpg')}
                                        name="T-Shirts"
                                    />
                                     <Category imageUri={require('./assets/images/pants.jpg')}
                                        name="Pants"
                                    />
                                </ScrollView>
                            </View>


                           
    </View>

    <View style={{ flex: 1, backgroundColor: 'red', paddingTop: -22  }}>

                            <View style={{ height: 530, marginTop: -63}}>
                                <ScrollView
                                    horizontal={false}
                                    showsVerticalScrollIndicator={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category2 imageUri={require('./assets/images/shoe.webp')}
                                        name="Shoes"
                                    />
                                    <Category2 imageUri={require('./assets/images/glass.webp')}
                                        name="Sun Glasses"
                                    />
                                    <Category2 imageUri={require('./assets/images/t-shirt.jpg')}
                                        name="T-Shirts"
                                    />
                                     <Category2 imageUri={require('./assets/images/pants.jpg')}
                                        name="Pants"
                                    />
                                </ScrollView>
                            </View>


                           
    </View>
    </SafeAreaView>

  );
}
export default App
const styles = StyleSheet.create({
  container:{
       flex:1,
  },
  wrap:{
    width:WIDTH,
    height:HEIGHT*0.25
  },
  wrapDot:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf:'center'
  },
  dotActive:{
    margin:3,
    color:'black'
  },
  dot:{
    margin:3,
    color:'#ffff'
  }

})
