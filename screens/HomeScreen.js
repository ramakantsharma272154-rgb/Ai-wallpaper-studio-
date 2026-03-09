import React, { useEffect, useState } from "react"
import { View, FlatList, Image } from "react-native"
import { supabase } from "../supabase"

export default function HomeScreen(){

const [wallpapers,setWallpapers]=useState([])

useEffect(()=>{
fetchWallpapers()
},[])

const fetchWallpapers = async () => {

const { data } = await supabase
.from("wallpapers")
.select("*")

setWallpapers(data)

}

return(

<View>

<FlatList
data={wallpapers}
keyExtractor={(item)=>item.id}
renderItem={({item})=>(
<Image
source={{uri:item.image_url}}
style={{width:180,height:320}}
/>
)}
/>

</View>

)

  }
