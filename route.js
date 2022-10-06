const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

// employee data
let employee = [
    {
        id: '_a',
        first_name: 'john',
        last_name: 'wilson',
        email: 'john@gmail',
        gender: 'male',
        ip_address: '127.0.0.1'
    },
    {
        id: '_b',
        first_name: 'janet',
        last_name: 'wilson',
        email: 'janet@gmail',
        gender: 'female',
        ip_address: '127.0.0.1'
    },
];

// get id
let getID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// get employees
router.get('/employees', (request, response) => {
    response.json(employees);
});

// post equest
router.post('/employee', (request, response) => {
    let employee = {
        id: getID(),
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        gender: request.body.gender,
        ip_address: request.body.ip_address,
    }
    employee.push(employee);
    console.log(`Post request received at server ..${new Date().toLocaleTimeString()}`);
    response.json(employee);
});

// put request
router.put('/employees/:id', (request, reponse) => {
    let empID = request.params.id;
    let updateEmployee = {
        id: empID,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.ip_address,
        ip_address: request.body.ip_address
    }
    let existingEmployee = employee.find((employee) => {
        return employee.id === empID;
    });
    console.log(`delete request received at server .. ${new Date().tolacaleTimeString()}`);
    response.josn({ msg: 'delete request is success' });
});

module.exports = router;
