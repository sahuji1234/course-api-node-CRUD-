const express= require('express')
const course = require('../models/course')
const Course = require('../models/course')
const router = express.Router()


// creting the routes


//get all courses
router.get("/",async (req,res)=>{

   try{

    const courses = await Course.find()
    res.json(courses)
   
   }catch(error){
     res.json(error)
   }

   
})

// get single coursse
router.get("/:courseId",async (req,res)=>{
  const courseId= req.params.courseId
  
    try{
     const c= await Course.findById(courseId)
     res.json(c)
    }catch(error){
        res.json(error);
    }
})
//create course

router.post("/",async (req,resp)=>{
   const course =await Course.create(req.body)
   resp.json(course)
})

//update course
router.put("/:courseId",async (req,res)=>{
    const courseId= req.params.courseId 
    try{
   const updatedCourse = await Course.updateOne(
        {
            "_id":courseId
        },
        req.body
       )
       res.json(course)
    }catch(error){
       res.json(error)
    }
})

//delete course3
router.delete("/:courseId",async (req,res)=>{
    try{
    await Course.remove({_id:req.params.courseId})
    res.status(200).json({
        message:"done"
    })
    }catch(error){
       resp.json(error)
    }
})

module.exports = router;