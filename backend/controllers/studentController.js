const path = require('path');
const Student = require('../models/studentModel');
const express = require('express');
const app = express();
const router = express.Router();

express.index = function(req,res){
    res.sendFile(path.resolve('views/students.html'));
}

router.post('/putStudent', (req, res) =>{
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

router.get('/getStudent', (req, res) => {
    Student.find((err, data) => {
        if(err) return res.json({success: false, error: err});
        return res.json({success: true, data: data});
    });
});

router.delete('/deleteStudent', (req, res) => {
    await Student.findOneAndDelete({_id: req.params.id}, (err,student) => {
        if(err){
            return res.status(400).json({success: false, error: err});
        }

        if(!student){
            return res
                .status(404)
                .json({success: false, error: 'Student not found'});
        }

        return res.status(200).json({success: true, data: student});
    }).catch(err => console.log(err));
});

router.patch('/updateStudent', (req, res) => {
    const{id, update} = req.body;
    Student.findByIdAndUpdate(id, update, (err) => {
        if(err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});