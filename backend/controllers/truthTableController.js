const path = require('path');
const TruthTable = require('../models/truthTableModel');
const express = require('express');
const app = express();
const router = express.Router();

router.post('/putTable', (req, res) => {
    var newTruth = new TruthTable(req.body);
    console.log(req.body);
    newTruth.save(function(err){
        if(err){
            res.status(400).send('Unable to save truth table to database');
        } else{
            res.redirect('/truthTable/getTable');
        }
    });
});

router.get('/getTable', (req, res) => {
    TruthTable.find((err, data) => {
        if(err) return res.json({success: false, error: err});
        return res.json({success: true, data: data});
    });
});

router.delete('/deleteTable', (req, res) => {
    await TruthTable.findOneAndDelete({_id: req.params.id}, (err,truthTable) => {
        if(err){
            return res.status(400).json({success: false, error: err});
        }

        if(!truthTable){
            return res
                .status(404)
                .json({success: false, error: 'Student not found'});
        }

        return res.status(200).json({success: true, data: student});
    }).catch(err => console.log(err));
});

router.patch('/updateTable', (req, res) => {
    const{id, update} = req.body;
    TruthTable.findByIdAndUpdate(id, update, (err) => {
        if(err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});

app.use('/api', router);

app.listen(API_POR, () => console.log(`LISTENING ON PORT ${API_PORT}`));