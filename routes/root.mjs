// import express from 'express'
import { Router } from 'express'
import { fileURLToPath } from 'url';
import path from 'path'
let orgPath =fileURLToPath(import.meta.url)
let dirPath = path.join(path.dirname(orgPath),'..','views','index.html')

// console.log( orgPath)
// console.log( dirPath)
const router = Router();

router.get('/test',(req,res)=>{
    res.send([
        {id:1 , name:"hi1"},
        {id:2 , name:"hi2"},
        {id:3 , name:"hi3"},
        {id:4 , name:"hi4"},
        {id:5 , name:"hi5"},
    ]

    )
})

router.get("/",(req,res)=>{
    res.sendFile(dirPath)
})

export default router;
