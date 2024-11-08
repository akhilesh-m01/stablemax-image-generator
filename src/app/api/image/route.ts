import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const {prompt} = await req.json()

    function generateRandomNumber():number{
        return Math.floor(Math.random()*10000000)+1;
    }
    const randomSeed = generateRandomNumber();
    const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}&seed=${randomSeed}`;
    await fetch(imageURL) 
    return NextResponse.json({message:"OK",body:imageURL})
}

