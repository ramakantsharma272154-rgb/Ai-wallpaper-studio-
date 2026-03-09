import axios from "axios"
import fs from "fs"

async function generateWallpaper(){

const prompt = "4k mobile wallpaper cyberpunk neon"

const response = await axios.post("77129fef-864e-4846-9c29-1ebd9afdc9e7",{

prompt:prompt

})

const image = response.data.image

fs.writeFileSync("wallpaper.png",image)

}

generateWallpaper()
