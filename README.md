# covid-API
an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of  COVID-19 patients applied with unit testings

# dependencies used

1. express
2. passport
3. body-parser
4. passport-jwt
5. nodemon
6. jsonwebtoken
7. Mongoose

# Routes
1. /doctors/register → with username and password
2. /doctors/login → returns the JWT to be used
3. /register_patient 
4. /patients/:id/create_report 
5. /patients/:id/all_reports → List all the reports of a patient oldest to latest 
6. /reports/:status

# setup
1. clone the project
2. cd covid-API
3. npm start
4. open postman and visit above routes
5. data models are:
--doctors: username,password,name
--patients: phone,name
--reports: doctor,patient,status


# Project structure
.

    ├── index.js
    ├── package.json
    ├── config
        ├── mongoose.js
        ├── config.js     
        ├── passport-local-strategy.js    
    ├── controllers
    |    ├── api
    |        ├── v1
    |            ├── doctor_controller.js  
    |            ├── patient_controller.js     
    |            ├── report_controller.js             
    ├── models
    │   ├── doctor.js
        ├── patient.js
        ├── report.js
    ├── routes
    |    ├── api
    |        ├── v1
    |            ├── index.js  
    |            ├── doctors.js
                 ├── patients.js
                 ├── reports.js
    ├── test
    │   ├── registerPatient.js
    ├── .gitignore


