import fs from "fs"
import axios from "axios"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
process.env.hwdlqgglyxqiccyzzhof,
process.env."eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3ZGxxZ2dseXhxaWNjeXp6aG9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMzgxMjcsImV4cCI6MjA4ODYxNDEyN30.qOYL5Zhxrlb-rfeTGnGlSM9AhzMPhNSOZ772pqEfwjo"
)

const prompts = JSON.parse(fs.readFileSync("prompts.json"))

async function generateWallpaper(prompt){

const response = await axios.post("77129fef-864e-4846-9c29-1ebd9afdc9e7
",{
prompt: prompt
})

return response.data.image_url
}

async function uploadWallpaper(imageUrl, category){

await supabase
.from("wallpapers")
.insert([
{
title: category + " wallpaper",
category: category,
image_url: imageUrl
}
])

}

async function runBot(){

for(let i=0;i<100;i++){

const prompt =
prompts[Math.floor(Math.random()*prompts.length)]

const category = prompt.split(" ")[0]

const image = await generateWallpaper(prompt)

await uploadWallpaper(image,category)

}

}

runBot()
