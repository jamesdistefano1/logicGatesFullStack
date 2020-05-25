const path = require('path');
const Student = require('../models/studentModel');
const express = require('express');
const app = express();
const router = express.Router();

express.index = function(req,res){
    res.sendFile(path.resolve('views/students.html'));
}

router.create('/putStudent', (req, res) =>{
    var newStudent = new Student(req.body);
    console.log(req.body);
    newStudent.save(function(err){
        if(err){
            res.status(400).send('Unable to save student to database');
        } else{
            res.redirect('/students/getstudents');
        }
    });
});

router.delete('/deleteStudent', (req, res) => {
    await Student.findOneAndDelete({_id: req.params.id}, (err,Student) => {
        if(err){
            return res.status(400).json({success: false, error: err});
        }

        if(!Student){
            return res
                .status(404)
                .json({success: false, error: 'Student not found'});
        }

        return res.status(200).json({success: true, data: Student});
    }).catch(err => console.log(err));
});