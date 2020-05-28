const path = require('path');
const aSpec = require('../models/assignmentSpecModel');
const express = require('express');
const app = express();
const router = express.Router();

express.index = function(req,res){
    res.sendFile(path.resolve('views/assignmentSpec.html'));
}

router.create('/putSpec', (req, res) => {
    var newSpec = new aSpec(req.body);
    console.log(req.body);
    newSpec.save(function(err){
        if(err){
            res.status(400).send('Unable to save Assignment Specifications to database');
        }
        else {
            res.redirect('/students/getSpecs');
        }
    });
});

router.get('/getSpecs', (req, res) => {
    aSpec.find((err, data) => {
        if(err) return res.json({success: false, error: err});
        return res.json({success: true, data: data});
    });
});

router.delete('/deleteSpec', (req, res) => {
    await aSpec.findOneAndDelete({_id: req.params.id}, (err,aSpec) => {
        if(err){
            return res.status(400).json({success: false, error: err});
        }

        if(!aSpec){
            return res
                .status(404)
                .json({success: false, error: 'Assignment Specifications not found'});
        }

        return res.status(200).json({success: true, data: aSpec});
    }).catch(err => console.log(err));
});

router.patch('/updateSpec', (req, res) => {
    const{id, update} = req.body;
    aSpec.findByIdAndUpdate(id, update, (err) => {
        if(err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});

app.use('/api', router);

app.listen(API_POR, () => console.log(`LISTENING ON PORT ${API_PORT}`));