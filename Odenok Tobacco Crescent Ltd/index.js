var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");

mongoose.connect('mongodb://localhost:27017/OTC-web-Page');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})


var app = express();
// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

var OTP;
var super_stockist;
var objectId;
var stockist;
var stockistid;
var distributor;
var distributorid;
var dealer;
var dealerid;

// sign-up Super Stockist

// Defined the schema for the "Super-Stockist" collection
var SuperStockistSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: {
        type: String,
        unique: true
    },
    mobile: String,
    gender: String,
    password: String,
    otp: String,
    // step 2 A. Details of Applicant Firm 

    applicantFullname: {
        type: String,
        //required: true
    },
    applicantFHName: {
        type: String,
        //  required: true
    },
    applicantAdd: {
        type: String,
        //  required: true
    },
    applicantPO: {
        type: String,
        //   required: true
    },
    applicantPS: {
        type: String,
        //   required: true
    },
    district: {
        type: String,

    },
    state: {
        type: String,
    },
    applicantLandmark: {
        type: String,
        //    required: true
    },
    applicantPin: {
        type: String,
        //  required: true
    },
    applicantPan: {
        type: String,
        //  required: true
    },
    applicantDOE: {
        type: String,
        //  required: true
    },
    applicantGST: {
        type: String,
        //   required: true
    },
    applicantDate: {
        type: String,
        //  required: true
    },
    applicantTelNo: {
        type: String,
        //    required: true
    },
    applicantMobile: {
        type: String,
        //   required: true
    },
    applicantEmail: {
        type: String,
        // required: true
    },
    applicantCOF: {
        type: String,
        //  required: true
    },

    // step 3 B.1 Details of Owner*

    B1_Fullname: {
        type: String,
        // required: true
    },
    B1_FHName: {
        type: String,
        //  required: true
    },
    B1_Add: {
        type: String,
        //required: true
    },
    B1_PO: {
        type: String,
        // required: true
    },
    B1_PS: {
        type: String,
        //  required: true
    },
    B1_district: {
        type: String,
    },
    B1_state: {
        type: String,
    },
    B1_Landmark: {
        type: String,
        // required: true
    },
    B1_Pin: {
        type: String,
        // required: true
    },
    B1_Pan: {
        type: String,
        //required: true
    },
    B1_DOB: {
        type: String,
        // required: true
    },
    B1_Adhar: {
        type: String,
        //required: true
    },
    B1_Mobile: {
        type: String,
        // required: true
    },
    B1_Resi: {
        type: String,
        //  required: true
    },
    B1_Email: {
        type: String,
        // required: true
    },
    B1_Sign: {
        type: String,
        // required: true
    },

    // step 4. C. Details Of Assets

    c1_assetDropDown: {
        type: String,
    },
    c1_Location: {
        type: String,
    },
    c1_Area: {
        type: String,
    },
    c1_OpenClosed: {
        type: String,
    },
    c1_OwnRented: {
        type: String,
    },

    //

    c2_assetDropDown: {
        type: String,
    },
    c2_Location: {
        type: String,
    },
    c2_Area: {
        type: String,
    },
    c2_OpenClosed: {
        type: String,
    },
    c2_OwnRented: {
        type: String,
    },

    // step 5. D. Details Of Bank

    bankName: {
        type: String,
        // required: true
    },
    branch: {
        type: String,
        // required: true
    },
    bankAC: {
        type: String,
        // required: true
    },
    bankAT: {
        type: String,
        //  required: true
    },
    bank_IFSC: {
        type: String,
        //  required: true
    },
    authorisedSignatory: {
        type: String,
        //  required: true
    },
    SpecimenSignature: {
        type: String,
        //   required: true
    },

    // step 6.  Details Of Presenet Business In OTC

    DealingBrand_1: {
        type: String,
    },
    LastFY1_1: {
        type: String,
    },
    LastFY2_1: {
        type: String,
    },
    Remark_1: {
        type: String,
    },

    // step 7. Details Of Present Business In Other Items:

    Item_1: {
        type: String,
    },
    Brand_1: {
        type: String,
    },
    LastFY_1_1: {
        type: String,
    },

    // step 8. Details Of Contract Person

    Contract_PName: {
        type: String,
    },
    Contract_PDesig: {
        type: String,
    },
    Contract_PMobile: {
        type: String,
    },
    Contract_PEmail: {
        type: String,
    },
    Contract_PDOB: {
        type: String,
    },
    Contract_PID: {
        type: String,
    },
    Contract_PWCD: {
        type: String,
    },

    // step 9. Details Of Application Dealership

    Area_of_Op: {
        type: String,
    },
    ACOITA: {
        type: String,
    },

    // 4 phase
    brand_1: {
        type: String,
    },
    brandNonBrand_1: {
        type: String,
    },
    QIMTH_1: {
        type: String,
    },


    MinimumSel: {
        type: String,
    },
    Sale_Marketing: {
        type: String,
    },


    Ref1_Name: {
        type: String,
    },
    Ref1_Mobile: {
        type: String,
    },
    Ref1_Add: {
        type: String,
    },


    ARemark: {
        type: String,
    },



    Name_9: {
        type: String,
    },
    Place_9: {
        type: String,
    },
    Date_9: {
        type: String,
    },
    SignStamp_9: {
        type: String,
    },


    // Step 10 Last Step

    ArearegManager: {
        type: String,
    },
    Date_10: {
        type: String,
    },
    RegSateHead: {
        type: String,
    },
    Sign_10: {
        type: String,
    },
    Date_11: {
        type: String,
    },
    StatusApp: {
        type: String,
    },
    DealerCode: {
        type: String,
    },
    Date_12: {
        type: String,
    },
    ApprovedBy: {
        type: String,
    },
    Date_13: {
        type: String,
    },
});

// Create the "Super-Stockist" model based on the schema
var SuperStockist = mongoose.model('Super-Stockist', SuperStockistSchema);



app.post('/sign_up', function (req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var gender = req.body.gender;
    var gender = req.body.gender;


    console.log("Checking Values>>>", fname, lname, email, mobile, gender)


    super_stockist = new SuperStockist({
        "fname": fname,
        "lname": lname,
        "email": email,
        "mobile": mobile,
        "gender": gender,

    });

    var FnameFilled = req.body.fname;
    var LnameFilled = req.body.lname;
    var EmailFilled = req.body.email;
    var MobileFilled = req.body.mobile;
    var GenderFilled = req.body.gender;

    console.log(!(FnameFilled === ""));

    if ((!(FnameFilled === "") && !(LnameFilled === "") && !(EmailFilled === "") && !(MobileFilled === "") && !(GenderFilled === ""))) {
        console.log("Inside")
        super_stockist.save()
            .then((user) => {


                objectId = user.id;
                console.log("ID", objectId);

                sendRegisterMail(user);
                console.log("Record inserted Successfully");
            })
            .catch((err) => {
                console.log("err", err);
                if (err.code === 11000 && err.keyPattern && err.keyPattern.email === 1) {
                    return res.status(400).json({ message: "Email address already exists." });
                } else {
                    return res.status(500).json({ message: "Internal Server Error" });
                }
            });

    }

});





// Application Form Super Stockist

app.post('/application-form-super-stockist-sign_up', async function (req, res) {
    // step 2 A. Details of Applicant Firm 

    let applicantFullname = req.body.applicantFullname;
    let applicantFHName = req.body.applicantFHName;
    let applicantAdd = req.body.applicantAdd;
    let applicantPO = req.body.applicantPO;
    let applicantPS = req.body.applicantPS;
    let district = req.body.district;
    let state = req.body.state;
    let applicantLandmark = req.body.applicantLandmark;
    let applicantPin = req.body.applicantPin;
    let applicantPan = req.body.applicantPan;
    let applicantDOE = req.body.applicantDOE;
    let applicantGST = req.body.applicantGST;
    let applicantDate = req.body.applicantDate;
    let applicantTelNo = req.body.applicantTelNo;
    let applicantMobile = req.body.applicantMobile;
    let applicantEmail = req.body.applicantEmail;
    let applicantCOF = req.body.applicantCOF;

    console.log("applicantFullname", applicantFullname);

    // step 3 B.1 Details of Owner*
    let B1_Fullname = req.body.B1_Fullname;
    let B1_FHName = req.body.B1_FHName;
    let B1_Add = req.body.B1_Add;
    let B1_PO = req.body.B1_PO;
    let B1_PS = req.body.B1_PS;
    let B1_district = req.body.B1_district;
    let B1_state = req.body.B1_state;
    let B1_Landmark = req.body.B1_Landmark;
    let B1_Pin = req.body.B1_Pin;
    let B1_Pan = req.body.B1_Pan;
    let B1_DOB = req.body.B1_DOB;
    let B1_Adhar = req.body.B1_Adhar;
    let B1_Mobile = req.body.B1_Mobile;
    let B1_Resi = req.body.B1_Resi;
    let B1_Email = req.body.B1_Email;
    let B1_Sign = req.body.B1_Sign;

    // step 4. C. Details Of Assets

    let c1_assetDropDown = req.body.c1_assetDropDown;
    let c1_Location = req.body.c1_Location;
    let c1_Area = req.body.c1_Area;
    let c1_OpenClosed = req.body.c1_OpenClosed;
    let c1_OwnRented = req.body.c1_OwnRented;

    let c2_assetDropDown = req.body.c2_assetDropDown;
    let c2_Location = req.body.c2_Location;
    let c2_Area = req.body.c2_Area;
    let c2_OpenClosed = req.body.c2_OpenClosed;
    let c2_OwnRented = req.body.c2_OwnRented;

    // step 5. D. Details Of Bank

    let bankName = req.body.bankName;
    let branch = req.body.branch;
    let bankAC = req.body.bankAC;
    let bankAT = req.body.bankAT;
    let bank_IFSC = req.body.bank_IFSC;
    let authorisedSignatory = req.body.authorisedSignatory;
    let SpecimenSignature = req.body.SpecimenSignature;


    // step 6.  Details Of Presenet Business In OTC

    let DealingBrand_1 = req.body.DealingBrand_1;
    let LastFY1_1 = req.body.LastFY1_1;
    let LastFY2_1 = req.body.LastFY2_1;
    let Remark_1 = req.body.Remark_1;

    // step 7. Details Of Present Business In Other Items:

    let Item_1 = req.body.Item_1;
    let Brand_1 = req.body.Brand_1;
    let LastFY_1_1 = req.body.LastFY_1_1;

    // step 8. Details Of Contract Person

    let Contract_PName = req.body.Contract_PName;
    let Contract_PDesig = req.body.Contract_PDesig;
    let Contract_PMobile = req.body.Contract_PMobile;
    let Contract_PEmail = req.body.Contract_PEmail;
    let Contract_PDOB = req.body.Contract_PDOB;
    let Contract_PID = req.body.Contract_PID;
    let Contract_PWCD = req.body.Contract_PWCD;

    // step 9. Details Of Application Dealership

    let Area_of_Op = req.body.Area_of_Op;
    let ACOITA = req.body.ACOITA;

    // 4 phase
    let brand_1 = req.body.brand_1;
    let brandNonBrand_1 = req.body.brandNonBrand_1;
    let QIMTH_1 = req.body.QIMTH_1;

    let MinimumSel = req.body.MinimumSel;
    let Sale_Marketing = req.body.Sale_Marketing;

    let Ref1_Name = req.body.Ref1_Name;
    let Ref1_Mobile = req.body.Ref1_Mobile;
    let Ref1_Add = req.body.Ref1_Add;

    let ARemark = req.body.ARemark;

    let Name_9 = req.body.Name_9;
    let Place_9 = req.body.Place_9;
    let Date_9 = req.body.Date_9;
    let SignStamp_9 = req.body.SignStamp_9;

    // Step 10 Last Step

    let ArearegManager = req.body.ArearegManager;
    let Date_10 = req.body.Date_10;
    let RegSateHead = req.body.RegSateHead;
    let Sign_10 = req.body.Sign_10;
    let Date_11 = req.body.Date_11;
    let StatusApp = req.body.StatusApp;
    let DealerCode = req.body.DealerCode;
    let Date_12 = req.body.Date_12;
    let ApprovedBy = req.body.ApprovedBy;
    let Date_13 = req.body.Date_13;



    super_stockist = {
        // step 2 A. Details of Applicant Firm 
        applicantFullname: applicantFullname,
        applicantFHName: applicantFHName,
        applicantAdd: applicantAdd,
        applicantPO: applicantPO,
        applicantPS: applicantPS,
        district: district,
        state: state,
        applicantLandmark: applicantLandmark,
        applicantPin: applicantPin,
        applicantPan: applicantPan,
        applicantDOE: applicantDOE,
        applicantGST: applicantGST,
        applicantDate: applicantDate,
        applicantTelNo: applicantTelNo,
        applicantMobile: applicantMobile,
        applicantEmail: applicantEmail,
        applicantCOF: applicantCOF,

        // step 3 B.1 Details of Owner*

        B1_Fullname: B1_Fullname,
        B1_FHName: B1_FHName,
        B1_Add: B1_Add,
        B1_PO: B1_PO,
        B1_PS: B1_PS,
        B1_district: B1_district,
        B1_state: B1_state,
        B1_Landmark: B1_Landmark,
        B1_Pin: B1_Pin,
        B1_Pan: B1_Pan,
        B1_DOB: B1_DOB,
        B1_Adhar: B1_Adhar,
        B1_Mobile: B1_Mobile,
        B1_Resi: B1_Resi,
        B1_Email: B1_Email,
        B1_Sign: B1_Sign,

        // step 4. C. Details Of Assets

        c1_assetDropDown: c1_assetDropDown,
        c1_Location: c1_Location,
        c1_Area: c1_Area,
        c1_OpenClosed: c1_OpenClosed,
        c1_OwnRented: c1_OwnRented,

        // c2_assetDropDown: c2_assetDropDown,
        // c2_Location: c2_Location,
        // c2_Area: c2_Area,
        // c2_OpenClosed: c2_OpenClosed,
        // c2_OwnRented: c2_OwnRented,

        // step 5. D. Details Of Bank

        bankName: bankName,
        branch: branch,
        bank_IFSC: bank_IFSC,
        bankAC: bankAC,
        bankAT: bankAT,
        authorisedSignatory: authorisedSignatory,
        SpecimenSignature: SpecimenSignature,

        // step 6.  Details Of Presenet Business In OTC

        DealingBrand_1: DealingBrand_1,
        LastFY1_1: LastFY1_1,
        LastFY2_1: LastFY2_1,
        Remark_1: Remark_1,

        //
        Item_1: Item_1,
        Brand_1: Brand_1,
        LastFY_1_1: LastFY_1_1,

        // step 8. Details Of Contract Person

        Contract_PName: Contract_PName,
        Contract_PDesig: Contract_PDesig,
        Contract_PMobile: Contract_PMobile,
        Contract_PEmail: Contract_PEmail,
        Contract_PDOB: Contract_PDOB,
        Contract_PID: Contract_PID,
        Contract_PWCD: Contract_PWCD,

        // step 9. Details Of Application Dealership
        Area_of_Op: Area_of_Op,
        ACOITA: ACOITA,

        brand_1: brand_1,
        brandNonBrand_1: brandNonBrand_1,
        QIMTH_1: QIMTH_1,


        MinimumSel: MinimumSel,
        Sale_Marketing: Sale_Marketing,

        Ref1_Name: Ref1_Name,
        Ref1_Mobile: Ref1_Mobile,
        Ref1_Add: Ref1_Add,

        ARemark: ARemark,

        Name_9: Name_9,
        Place_9: Place_9,
        Date_9: Date_9,
        SignStamp_9: SignStamp_9,


        // Step 10 Last Step
        ArearegManager: ArearegManager,
        Date_10: Date_10,
        RegSateHead: RegSateHead,
        Sign_10: Sign_10,
        Date_11: Date_11,
        StatusApp: StatusApp,
        DealerCode: DealerCode,
        Date_12: Date_12,
        ApprovedBy: ApprovedBy,
        Date_13: Date_13

    };


    const updateuser = await SuperStockist.findByIdAndUpdate(objectId, super_stockist, { new: true });
    console.log("Record inserted Successfully", objectId, super_stockist);
    // res.redirect('Sign_up_successfull.html');
    return updateuser;
});






//Super-Stockist

async function sendRegisterMail(user, callback) {

    this.OTP = Math.floor(1000 + Math.random() * 9000);


    const updatedUser = await SuperStockist.findByIdAndUpdate(user.id, { otp: this.OTP }, { new: true });


    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'sonavaners1999@gmail.com',
            pass: 'mpeiuiikrjqovnnc'
        }
    });

    let mailOptions = {
        from: 'sonavaners1999@gmail.com',
        to: user.email,
        subject: "Hello",
        html:
            `
   <span>Hi, ${user.fname}</span><br>
   <br>
   <span><b>Welcome..!</b></span>
   <br>
   <span>Here's Your Login Credential's</span>
   <br>
   <h4>Email: ${user.email}</h4>
   <h4>OTP: ${this.OTP}</h4>
   <h1>Thank You For Joining With Us</h1>
   `
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
    return updatedUser;
}




// sign-up Stockist

var StockistSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: {
        type: String,
        unique: true
    },
    mobile: String,
    gender: String,
    password: String,
    otp: String,
    // step 2 A. Details of Applicant Firm 

    applicantFullname: {
        type: String,
        //required: true
    },
    applicantFHName: {
        type: String,
        //  required: true
    },
    applicantAdd: {
        type: String,
        //  required: true
    },
    applicantPO: {
        type: String,
        //   required: true
    },
    applicantPS: {
        type: String,
        //   required: true
    },
    district: {
        type: String,

    },
    state: {
        type: String,
    },
    applicantLandmark: {
        type: String,
        //    required: true
    },
    applicantPin: {
        type: String,
        //  required: true
    },
    applicantPan: {
        type: String,
        //  required: true
    },
    applicantDOE: {
        type: String,
        //  required: true
    },
    applicantGST: {
        type: String,
        //   required: true
    },
    applicantDate: {
        type: String,
        //  required: true
    },
    applicantTelNo: {
        type: String,
        //    required: true
    },
    applicantMobile: {
        type: String,
        //   required: true
    },
    applicantEmail: {
        type: String,
        // required: true
    },
    applicantCOF: {
        type: String,
        //  required: true
    },

    // step 3 B.1 Details of Owner*

    B1_Fullname: {
        type: String,
        // required: true
    },
    B1_FHName: {
        type: String,
        //  required: true
    },
    B1_Add: {
        type: String,
        //required: true
    },
    B1_PO: {
        type: String,
        // required: true
    },
    B1_PS: {
        type: String,
        //  required: true
    },
    B1_district: {
        type: String,
    },
    B1_state: {
        type: String,
    },
    B1_Landmark: {
        type: String,
        // required: true
    },
    B1_Pin: {
        type: String,
        // required: true
    },
    B1_Pan: {
        type: String,
        //required: true
    },
    B1_DOB: {
        type: String,
        // required: true
    },
    B1_Adhar: {
        type: String,
        //required: true
    },
    B1_Mobile: {
        type: String,
        // required: true
    },
    B1_Resi: {
        type: String,
        //  required: true
    },
    B1_Email: {
        type: String,
        // required: true
    },
    B1_Sign: {
        type: String,
        // required: true
    },

    // step 4. C. Details Of Assets

    c1_assetDropDown: {
        type: String,
    },
    c1_Location: {
        type: String,
    },
    c1_Area: {
        type: String,
    },
    c1_OpenClosed: {
        type: String,
    },
    c1_OwnRented: {
        type: String,
    },

    //

    c2_assetDropDown: {
        type: String,
    },
    c2_Location: {
        type: String,
    },
    c2_Area: {
        type: String,
    },
    c2_OpenClosed: {
        type: String,
    },
    c2_OwnRented: {
        type: String,
    },

    // step 5. D. Details Of Bank

    bankName: {
        type: String,
        // required: true
    },
    branch: {
        type: String,
        // required: true
    },
    bankAC: {
        type: String,
        // required: true
    },
    bankAT: {
        type: String,
        //  required: true
    },
    bank_IFSC: {
        type: String,
        //  required: true
    },
    authorisedSignatory: {
        type: String,
        //  required: true
    },
    SpecimenSignature: {
        type: String,
        //   required: true
    },

    // step 6.  Details Of Presenet Business In OTC

    DealingBrand_1: {
        type: String,
    },
    LastFY1_1: {
        type: String,
    },
    LastFY2_1: {
        type: String,
    },
    Remark_1: {
        type: String,
    },

    // step 7. Details Of Present Business In Other Items:

    Item_1: {
        type: String,
    },
    Brand_1: {
        type: String,
    },
    LastFY_1_1: {
        type: String,
    },

    // step 8. Details Of Contract Person

    Contract_PName: {
        type: String,
    },
    Contract_PDesig: {
        type: String,
    },
    Contract_PMobile: {
        type: String,
    },
    Contract_PEmail: {
        type: String,
    },
    Contract_PDOB: {
        type: String,
    },
    Contract_PID: {
        type: String,
    },
    Contract_PWCD: {
        type: String,
    },

    // step 9. Details Of Application Dealership

    Area_of_Op: {
        type: String,
    },
    ACOITA: {
        type: String,
    },

    // 4 phase
    brand_1: {
        type: String,
    },
    brandNonBrand_1: {
        type: String,
    },
    QIMTH_1: {
        type: String,
    },


    MinimumSel: {
        type: String,
    },
    Sale_Marketing: {
        type: String,
    },


    Ref1_Name: {
        type: String,
    },
    Ref1_Mobile: {
        type: String,
    },
    Ref1_Add: {
        type: String,
    },


    ARemark: {
        type: String,
    },



    Name_9: {
        type: String,
    },
    Place_9: {
        type: String,
    },
    Date_9: {
        type: String,
    },
    SignStamp_9: {
        type: String,
    },


    // Step 10 Last Step

    ArearegManager: {
        type: String,
    },
    Date_10: {
        type: String,
    },
    RegSateHead: {
        type: String,
    },
    Sign_10: {
        type: String,
    },
    Date_11: {
        type: String,
    },
    StatusApp: {
        type: String,
    },
    DealerCode: {
        type: String,
    },
    Date_12: {
        type: String,
    },
    ApprovedBy: {
        type: String,
    },
    Date_13: {
        type: String,
    },
});

// Create the "Super-Stockist" model based on the schema
var Stockist = mongoose.model('Stockist', StockistSchema);

app.post('/stockist_sign_up', function (req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var gender = req.body.gender;
    var gender = req.body.gender;


    console.log("Checking Values>>>", fname, lname, email, mobile, gender)


    stockist = new Stockist({
        "fname": fname,
        "lname": lname,
        "email": email,
        "mobile": mobile,
        "gender": gender,

    });

    var FnameFilled = req.body.fname;
    var LnameFilled = req.body.lname;
    var EmailFilled = req.body.email;
    var MobileFilled = req.body.mobile;
    var GenderFilled = req.body.gender;

    console.log(!(FnameFilled === ""));

    if ((!(FnameFilled === "") && !(LnameFilled === "") && !(EmailFilled === "") && !(MobileFilled === "") && !(GenderFilled === ""))) {
        console.log("Inside")
        stockist.save()
            .then((user) => {
                stockistid = user.id;
                stockistsendRegisterMail(user);
                console.log("Record inserted Successfully");
            })
            .catch((err) => {
                console.log("err", err);
                if (err.code === 11000 && err.keyPattern && err.keyPattern.email === 1) {
                    return res.status(400).json({ message: "Email address already exists." });
                } else {
                    return res.status(500).json({ message: "Internal Server Error" });
                }
            });

    }

});


// Application Form Stockist

app.post('/application-form-stockist-sign_up', async function (req, res) {
    // step 2 A. Details of Applicant Firm 

    let applicantFullname = req.body.applicantFullname;
    let applicantFHName = req.body.applicantFHName;
    let applicantAdd = req.body.applicantAdd;
    let applicantPO = req.body.applicantPO;
    let applicantPS = req.body.applicantPS;
    let district = req.body.district;
    let state = req.body.state;
    let applicantLandmark = req.body.applicantLandmark;
    let applicantPin = req.body.applicantPin;
    let applicantPan = req.body.applicantPan;
    let applicantDOE = req.body.applicantDOE;
    let applicantGST = req.body.applicantGST;
    let applicantDate = req.body.applicantDate;
    let applicantTelNo = req.body.applicantTelNo;
    let applicantMobile = req.body.applicantMobile;
    let applicantEmail = req.body.applicantEmail;
    let applicantCOF = req.body.applicantCOF;

    console.log("applicantFullname", applicantFullname);

    // step 3 B.1 Details of Owner*
    let B1_Fullname = req.body.B1_Fullname;
    let B1_FHName = req.body.B1_FHName;
    let B1_Add = req.body.B1_Add;
    let B1_PO = req.body.B1_PO;
    let B1_PS = req.body.B1_PS;
    let B1_district = req.body.B1_district;
    let B1_state = req.body.B1_state;
    let B1_Landmark = req.body.B1_Landmark;
    let B1_Pin = req.body.B1_Pin;
    let B1_Pan = req.body.B1_Pan;
    let B1_DOB = req.body.B1_DOB;
    let B1_Adhar = req.body.B1_Adhar;
    let B1_Mobile = req.body.B1_Mobile;
    let B1_Resi = req.body.B1_Resi;
    let B1_Email = req.body.B1_Email;
    let B1_Sign = req.body.B1_Sign;

    // step 4. C. Details Of Assets

    let c1_assetDropDown = req.body.c1_assetDropDown;
    let c1_Location = req.body.c1_Location;
    let c1_Area = req.body.c1_Area;
    let c1_OpenClosed = req.body.c1_OpenClosed;
    let c1_OwnRented = req.body.c1_OwnRented;

    let c2_assetDropDown = req.body.c2_assetDropDown;
    let c2_Location = req.body.c2_Location;
    let c2_Area = req.body.c2_Area;
    let c2_OpenClosed = req.body.c2_OpenClosed;
    let c2_OwnRented = req.body.c2_OwnRented;

    // step 5. D. Details Of Bank

    let bankName = req.body.bankName;
    let branch = req.body.branch;
    let bankAC = req.body.bankAC;
    let bankAT = req.body.bankAT;
    let bank_IFSC = req.body.bank_IFSC;
    let authorisedSignatory = req.body.authorisedSignatory;
    let SpecimenSignature = req.body.SpecimenSignature;


    // step 6.  Details Of Presenet Business In OTC

    let DealingBrand_1 = req.body.DealingBrand_1;
    let LastFY1_1 = req.body.LastFY1_1;
    let LastFY2_1 = req.body.LastFY2_1;
    let Remark_1 = req.body.Remark_1;

    // step 7. Details Of Present Business In Other Items:

    let Item_1 = req.body.Item_1;
    let Brand_1 = req.body.Brand_1;
    let LastFY_1_1 = req.body.LastFY_1_1;

    // step 8. Details Of Contract Person

    let Contract_PName = req.body.Contract_PName;
    let Contract_PDesig = req.body.Contract_PDesig;
    let Contract_PMobile = req.body.Contract_PMobile;
    let Contract_PEmail = req.body.Contract_PEmail;
    let Contract_PDOB = req.body.Contract_PDOB;
    let Contract_PID = req.body.Contract_PID;
    let Contract_PWCD = req.body.Contract_PWCD;

    // step 9. Details Of Application Dealership

    let Area_of_Op = req.body.Area_of_Op;
    let ACOITA = req.body.ACOITA;

    // 4 phase
    let brand_1 = req.body.brand_1;
    let brandNonBrand_1 = req.body.brandNonBrand_1;
    let QIMTH_1 = req.body.QIMTH_1;

    let MinimumSel = req.body.MinimumSel;
    let Sale_Marketing = req.body.Sale_Marketing;

    let Ref1_Name = req.body.Ref1_Name;
    let Ref1_Mobile = req.body.Ref1_Mobile;
    let Ref1_Add = req.body.Ref1_Add;

    let ARemark = req.body.ARemark;

    let Name_9 = req.body.Name_9;
    let Place_9 = req.body.Place_9;
    let Date_9 = req.body.Date_9;
    let SignStamp_9 = req.body.SignStamp_9;

    // Step 10 Last Step

    let ArearegManager = req.body.ArearegManager;
    let Date_10 = req.body.Date_10;
    let RegSateHead = req.body.RegSateHead;
    let Sign_10 = req.body.Sign_10;
    let Date_11 = req.body.Date_11;
    let StatusApp = req.body.StatusApp;
    let DealerCode = req.body.DealerCode;
    let Date_12 = req.body.Date_12;
    let ApprovedBy = req.body.ApprovedBy;
    let Date_13 = req.body.Date_13;



    stockist = {
        // step 2 A. Details of Applicant Firm 
        applicantFullname: applicantFullname,
        applicantFHName: applicantFHName,
        applicantAdd: applicantAdd,
        applicantPO: applicantPO,
        applicantPS: applicantPS,
        district: district,
        state: state,
        applicantLandmark: applicantLandmark,
        applicantPin: applicantPin,
        applicantPan: applicantPan,
        applicantDOE: applicantDOE,
        applicantGST: applicantGST,
        applicantDate: applicantDate,
        applicantTelNo: applicantTelNo,
        applicantMobile: applicantMobile,
        applicantEmail: applicantEmail,
        applicantCOF: applicantCOF,

        // step 3 B.1 Details of Owner*

        B1_Fullname: B1_Fullname,
        B1_FHName: B1_FHName,
        B1_Add: B1_Add,
        B1_PO: B1_PO,
        B1_PS: B1_PS,
        B1_district: B1_district,
        B1_state: B1_state,
        B1_Landmark: B1_Landmark,
        B1_Pin: B1_Pin,
        B1_Pan: B1_Pan,
        B1_DOB: B1_DOB,
        B1_Adhar: B1_Adhar,
        B1_Mobile: B1_Mobile,
        B1_Resi: B1_Resi,
        B1_Email: B1_Email,
        B1_Sign: B1_Sign,

        // step 4. C. Details Of Assets

        c1_assetDropDown: c1_assetDropDown,
        c1_Location: c1_Location,
        c1_Area: c1_Area,
        c1_OpenClosed: c1_OpenClosed,
        c1_OwnRented: c1_OwnRented,

        // c2_assetDropDown: c2_assetDropDown,
        // c2_Location: c2_Location,
        // c2_Area: c2_Area,
        // c2_OpenClosed: c2_OpenClosed,
        // c2_OwnRented: c2_OwnRented,

        // step 5. D. Details Of Bank

        bankName: bankName,
        branch: branch,
        bank_IFSC: bank_IFSC,
        bankAC: bankAC,
        bankAT: bankAT,
        authorisedSignatory: authorisedSignatory,
        SpecimenSignature: SpecimenSignature,

        // step 6.  Details Of Presenet Business In OTC

        DealingBrand_1: DealingBrand_1,
        LastFY1_1: LastFY1_1,
        LastFY2_1: LastFY2_1,
        Remark_1: Remark_1,

        //
        Item_1: Item_1,
        Brand_1: Brand_1,
        LastFY_1_1: LastFY_1_1,

        // step 8. Details Of Contract Person

        Contract_PName: Contract_PName,
        Contract_PDesig: Contract_PDesig,
        Contract_PMobile: Contract_PMobile,
        Contract_PEmail: Contract_PEmail,
        Contract_PDOB: Contract_PDOB,
        Contract_PID: Contract_PID,
        Contract_PWCD: Contract_PWCD,

        // step 9. Details Of Application Dealership
        Area_of_Op: Area_of_Op,
        ACOITA: ACOITA,

        brand_1: brand_1,
        brandNonBrand_1: brandNonBrand_1,
        QIMTH_1: QIMTH_1,


        MinimumSel: MinimumSel,
        Sale_Marketing: Sale_Marketing,

        Ref1_Name: Ref1_Name,
        Ref1_Mobile: Ref1_Mobile,
        Ref1_Add: Ref1_Add,

        ARemark: ARemark,

        Name_9: Name_9,
        Place_9: Place_9,
        Date_9: Date_9,
        SignStamp_9: SignStamp_9,


        // Step 10 Last Step
        ArearegManager: ArearegManager,
        Date_10: Date_10,
        RegSateHead: RegSateHead,
        Sign_10: Sign_10,
        Date_11: Date_11,
        StatusApp: StatusApp,
        DealerCode: DealerCode,
        Date_12: Date_12,
        ApprovedBy: ApprovedBy,
        Date_13: Date_13

    };


    const updateuser = await Stockist.findByIdAndUpdate(stockistid, stockist, { new: true });
    console.log("Record inserted Successfully", stockistid, stockist);
    //res.redirect('Sign_up_successfull.html');
    return updateuser;
});


//Stockist

async function stockistsendRegisterMail(user, callback) {

    this.OTP = Math.floor(1000 + Math.random() * 9000);


    const updatedUser = await Stockist.findByIdAndUpdate(user.id, { otp: this.OTP }, { new: true });


    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'sonavaners1999@gmail.com',
            pass: 'mpeiuiikrjqovnnc'
        }
    });

    let mailOptions = {
        from: 'sonavaners1999@gmail.com',
        to: user.email,
        subject: "Hello",
        html:
            `
   <span>Hi, ${user.fname}</span><br>
   <br>
   <span><b>Welcome..!</b></span>
   <br>
   <span>Here's Your Login Credential's</span>
   <br>
   <h4>Email: ${user.email}</h4>
   <h4>OTP: ${this.OTP}</h4>
   <h1>Thank You For Joining With Us</h1>
   `
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
    return updatedUser;
}



// sign-up Distributor
// add and update here look angular application
var Distributor = new mongoose.Schema({
    fname: String,
    lname: String,
    email: {
        type: String,
        unique: true
    },
    mobile: String,
    gender: String,
    password: String,
    otp: String,
    // step 2 A. Details of Applicant Firm 

    applicantFullname: {
        type: String,
        //required: true
    },
    applicantFHName: {
        type: String,
        //  required: true
    },
    applicantAdd: {
        type: String,
        //  required: true
    },
    applicantPO: {
        type: String,
        //   required: true
    },
    applicantPS: {
        type: String,
        //   required: true
    },
    district: {
        type: String,

    },
    state: {
        type: String,
    },
    applicantLandmark: {
        type: String,
        //    required: true
    },
    applicantPin: {
        type: String,
        //  required: true
    },
    applicantPan: {
        type: String,
        //  required: true
    },
    applicantDOE: {
        type: String,
        //  required: true
    },
    applicantGST: {
        type: String,
        //   required: true
    },
    applicantDate: {
        type: String,
        //  required: true
    },
    applicantTelNo: {
        type: String,
        //    required: true
    },
    applicantMobile: {
        type: String,
        //   required: true
    },
    applicantEmail: {
        type: String,
        // required: true
    },
    applicantCOF: {
        type: String,
        //  required: true
    },

    // step 3 B.1 Details of Owner*

    B1_Fullname: {
        type: String,
        // required: true
    },
    B1_FHName: {
        type: String,
        //  required: true
    },
    B1_Add: {
        type: String,
        //required: true
    },
    B1_PO: {
        type: String,
        // required: true
    },
    B1_PS: {
        type: String,
        //  required: true
    },
    B1_district: {
        type: String,
    },
    B1_state: {
        type: String,
    },
    B1_Landmark: {
        type: String,
        // required: true
    },
    B1_Pin: {
        type: String,
        // required: true
    },
    B1_Pan: {
        type: String,
        //required: true
    },
    B1_DOB: {
        type: String,
        // required: true
    },
    B1_Adhar: {
        type: String,
        //required: true
    },
    B1_Mobile: {
        type: String,
        // required: true
    },
    B1_Resi: {
        type: String,
        //  required: true
    },
    B1_Email: {
        type: String,
        // required: true
    },
    B1_Sign: {
        type: String,
        // required: true
    },

    // step 4. C. Details Of Assets

    c1_assetDropDown: {
        type: String,
    },
    c1_Location: {
        type: String,
    },
    c1_Area: {
        type: String,
    },
    c1_OpenClosed: {
        type: String,
    },
    c1_OwnRented: {
        type: String,
    },

    //

    c2_assetDropDown: {
        type: String,
    },
    c2_Location: {
        type: String,
    },
    c2_Area: {
        type: String,
    },
    c2_OpenClosed: {
        type: String,
    },
    c2_OwnRented: {
        type: String,
    },

    // step 5. D. Details Of Bank

    bankName: {
        type: String,
        // required: true
    },
    branch: {
        type: String,
        // required: true
    },
    bankAC: {
        type: String,
        // required: true
    },
    bankAT: {
        type: String,
        //  required: true
    },
    bank_IFSC: {
        type: String,
        //  required: true
    },
    authorisedSignatory: {
        type: String,
        //  required: true
    },
    SpecimenSignature: {
        type: String,
        //   required: true
    },

    // step 6.  Details Of Presenet Business In OTC

    DealingBrand_1: {
        type: String,
    },
    LastFY1_1: {
        type: String,
    },
    LastFY2_1: {
        type: String,
    },
    Remark_1: {
        type: String,
    },

    // step 7. Details Of Present Business In Other Items:

    Item_1: {
        type: String,
    },
    Brand_1: {
        type: String,
    },
    LastFY_1_1: {
        type: String,
    },

    // step 8. Details Of Contract Person

    Contract_PName: {
        type: String,
    },
    Contract_PDesig: {
        type: String,
    },
    Contract_PMobile: {
        type: String,
    },
    Contract_PEmail: {
        type: String,
    },
    Contract_PDOB: {
        type: String,
    },
    Contract_PID: {
        type: String,
    },
    Contract_PWCD: {
        type: String,
    },

    // step 9. Details Of Application Dealership

    Area_of_Op: {
        type: String,
    },
    ACOITA: {
        type: String,
    },

    // 4 phase
    brand_1: {
        type: String,
    },
    brandNonBrand_1: {
        type: String,
    },
    QIMTH_1: {
        type: String,
    },


    MinimumSel: {
        type: String,
    },
    Sale_Marketing: {
        type: String,
    },


    Ref1_Name: {
        type: String,
    },
    Ref1_Mobile: {
        type: String,
    },
    Ref1_Add: {
        type: String,
    },


    ARemark: {
        type: String,
    },



    Name_9: {
        type: String,
    },
    Place_9: {
        type: String,
    },
    Date_9: {
        type: String,
    },
    SignStamp_9: {
        type: String,
    },


    // Step 10 Last Step

    ArearegManager: {
        type: String,
    },
    Date_10: {
        type: String,
    },
    RegSateHead: {
        type: String,
    },
    Sign_10: {
        type: String,
    },
    Date_11: {
        type: String,
    },
    StatusApp: {
        type: String,
    },
    DealerCode: {
        type: String,
    },
    Date_12: {
        type: String,
    },
    ApprovedBy: {
        type: String,
    },
    Date_13: {
        type: String,
    },
});

// Create the "Super-Stockist" model based on the schema
var Distributor = mongoose.model('Distributor', Distributor);

app.post('/distributor_sign_up', function (req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var gender = req.body.gender;
    var gender = req.body.gender;


    console.log("Checking Values>>>", fname, lname, email, mobile, gender)


    distributor = new Distributor({
        "fname": fname,
        "lname": lname,
        "email": email,
        "mobile": mobile,
        "gender": gender,

    });

    var FnameFilled = req.body.fname;
    var LnameFilled = req.body.lname;
    var EmailFilled = req.body.email;
    var MobileFilled = req.body.mobile;
    var GenderFilled = req.body.gender;

    console.log(!(FnameFilled === ""));

    if ((!(FnameFilled === "") && !(LnameFilled === "") && !(EmailFilled === "") && !(MobileFilled === "") && !(GenderFilled === ""))) {
        console.log("Inside")
        distributor.save()
            .then((user) => {
                distributorid = user.id;

                distributorsendRegisterMail(user);
                console.log("Record inserted Successfully");
            })
            .catch((err) => {
                console.log("err", err);
                if (err.code === 11000 && err.keyPattern && err.keyPattern.email === 1) {
                    return res.status(400).json({ message: "Email address already exists." });
                } else {
                    return res.status(500).json({ message: "Internal Server Error" });
                }
            });

    }

});


// Application Form Distributor

app.post('/application-form-distributor-sign_up', async function (req, res) {
    // step 2 A. Details of Applicant Firm 

    let applicantFullname = req.body.applicantFullname;
    let applicantFHName = req.body.applicantFHName;
    let applicantAdd = req.body.applicantAdd;
    let applicantPO = req.body.applicantPO;
    let applicantPS = req.body.applicantPS;
    let district = req.body.district;
    let state = req.body.state;
    let applicantLandmark = req.body.applicantLandmark;
    let applicantPin = req.body.applicantPin;
    let applicantPan = req.body.applicantPan;
    let applicantDOE = req.body.applicantDOE;
    let applicantGST = req.body.applicantGST;
    let applicantDate = req.body.applicantDate;
    let applicantTelNo = req.body.applicantTelNo;
    let applicantMobile = req.body.applicantMobile;
    let applicantEmail = req.body.applicantEmail;
    let applicantCOF = req.body.applicantCOF;

    console.log("applicantFullname", applicantFullname);

    // step 3 B.1 Details of Owner*
    let B1_Fullname = req.body.B1_Fullname;
    let B1_FHName = req.body.B1_FHName;
    let B1_Add = req.body.B1_Add;
    let B1_PO = req.body.B1_PO;
    let B1_PS = req.body.B1_PS;
    let B1_district = req.body.B1_district;
    let B1_state = req.body.B1_state;
    let B1_Landmark = req.body.B1_Landmark;
    let B1_Pin = req.body.B1_Pin;
    let B1_Pan = req.body.B1_Pan;
    let B1_DOB = req.body.B1_DOB;
    let B1_Adhar = req.body.B1_Adhar;
    let B1_Mobile = req.body.B1_Mobile;
    let B1_Resi = req.body.B1_Resi;
    let B1_Email = req.body.B1_Email;
    let B1_Sign = req.body.B1_Sign;

    // step 4. C. Details Of Assets

    let c1_assetDropDown = req.body.c1_assetDropDown;
    let c1_Location = req.body.c1_Location;
    let c1_Area = req.body.c1_Area;
    let c1_OpenClosed = req.body.c1_OpenClosed;
    let c1_OwnRented = req.body.c1_OwnRented;

    let c2_assetDropDown = req.body.c2_assetDropDown;
    let c2_Location = req.body.c2_Location;
    let c2_Area = req.body.c2_Area;
    let c2_OpenClosed = req.body.c2_OpenClosed;
    let c2_OwnRented = req.body.c2_OwnRented;

    // step 5. D. Details Of Bank

    let bankName = req.body.bankName;
    let branch = req.body.branch;
    let bankAC = req.body.bankAC;
    let bankAT = req.body.bankAT;
    let bank_IFSC = req.body.bank_IFSC;
    let authorisedSignatory = req.body.authorisedSignatory;
    let SpecimenSignature = req.body.SpecimenSignature;


    // step 6.  Details Of Presenet Business In OTC

    let DealingBrand_1 = req.body.DealingBrand_1;
    let LastFY1_1 = req.body.LastFY1_1;
    let LastFY2_1 = req.body.LastFY2_1;
    let Remark_1 = req.body.Remark_1;

    // step 7. Details Of Present Business In Other Items:

    let Item_1 = req.body.Item_1;
    let Brand_1 = req.body.Brand_1;
    let LastFY_1_1 = req.body.LastFY_1_1;

    // step 8. Details Of Contract Person

    let Contract_PName = req.body.Contract_PName;
    let Contract_PDesig = req.body.Contract_PDesig;
    let Contract_PMobile = req.body.Contract_PMobile;
    let Contract_PEmail = req.body.Contract_PEmail;
    let Contract_PDOB = req.body.Contract_PDOB;
    let Contract_PID = req.body.Contract_PID;
    let Contract_PWCD = req.body.Contract_PWCD;

    // step 9. Details Of Application Dealership

    let Area_of_Op = req.body.Area_of_Op;
    let ACOITA = req.body.ACOITA;

    // 4 phase
    let brand_1 = req.body.brand_1;
    let brandNonBrand_1 = req.body.brandNonBrand_1;
    let QIMTH_1 = req.body.QIMTH_1;

    let MinimumSel = req.body.MinimumSel;
    let Sale_Marketing = req.body.Sale_Marketing;

    let Ref1_Name = req.body.Ref1_Name;
    let Ref1_Mobile = req.body.Ref1_Mobile;
    let Ref1_Add = req.body.Ref1_Add;

    let ARemark = req.body.ARemark;

    let Name_9 = req.body.Name_9;
    let Place_9 = req.body.Place_9;
    let Date_9 = req.body.Date_9;
    let SignStamp_9 = req.body.SignStamp_9;

    // Step 10 Last Step

    let ArearegManager = req.body.ArearegManager;
    let Date_10 = req.body.Date_10;
    let RegSateHead = req.body.RegSateHead;
    let Sign_10 = req.body.Sign_10;
    let Date_11 = req.body.Date_11;
    let StatusApp = req.body.StatusApp;
    let DealerCode = req.body.DealerCode;
    let Date_12 = req.body.Date_12;
    let ApprovedBy = req.body.ApprovedBy;
    let Date_13 = req.body.Date_13;



    distributor = {
        // step 2 A. Details of Applicant Firm 
        applicantFullname: applicantFullname,
        applicantFHName: applicantFHName,
        applicantAdd: applicantAdd,
        applicantPO: applicantPO,
        applicantPS: applicantPS,
        district: district,
        state: state,
        applicantLandmark: applicantLandmark,
        applicantPin: applicantPin,
        applicantPan: applicantPan,
        applicantDOE: applicantDOE,
        applicantGST: applicantGST,
        applicantDate: applicantDate,
        applicantTelNo: applicantTelNo,
        applicantMobile: applicantMobile,
        applicantEmail: applicantEmail,
        applicantCOF: applicantCOF,

        // step 3 B.1 Details of Owner*

        B1_Fullname: B1_Fullname,
        B1_FHName: B1_FHName,
        B1_Add: B1_Add,
        B1_PO: B1_PO,
        B1_PS: B1_PS,
        B1_district: B1_district,
        B1_state: B1_state,
        B1_Landmark: B1_Landmark,
        B1_Pin: B1_Pin,
        B1_Pan: B1_Pan,
        B1_DOB: B1_DOB,
        B1_Adhar: B1_Adhar,
        B1_Mobile: B1_Mobile,
        B1_Resi: B1_Resi,
        B1_Email: B1_Email,
        B1_Sign: B1_Sign,

        // step 4. C. Details Of Assets

        c1_assetDropDown: c1_assetDropDown,
        c1_Location: c1_Location,
        c1_Area: c1_Area,
        c1_OpenClosed: c1_OpenClosed,
        c1_OwnRented: c1_OwnRented,

        // c2_assetDropDown: c2_assetDropDown,
        // c2_Location: c2_Location,
        // c2_Area: c2_Area,
        // c2_OpenClosed: c2_OpenClosed,
        // c2_OwnRented: c2_OwnRented,

        // step 5. D. Details Of Bank

        bankName: bankName,
        branch: branch,
        bank_IFSC: bank_IFSC,
        bankAC: bankAC,
        bankAT: bankAT,
        authorisedSignatory: authorisedSignatory,
        SpecimenSignature: SpecimenSignature,

        // step 6.  Details Of Presenet Business In OTC

        DealingBrand_1: DealingBrand_1,
        LastFY1_1: LastFY1_1,
        LastFY2_1: LastFY2_1,
        Remark_1: Remark_1,

        //
        Item_1: Item_1,
        Brand_1: Brand_1,
        LastFY_1_1: LastFY_1_1,

        // step 8. Details Of Contract Person

        Contract_PName: Contract_PName,
        Contract_PDesig: Contract_PDesig,
        Contract_PMobile: Contract_PMobile,
        Contract_PEmail: Contract_PEmail,
        Contract_PDOB: Contract_PDOB,
        Contract_PID: Contract_PID,
        Contract_PWCD: Contract_PWCD,

        // step 9. Details Of Application Dealership
        Area_of_Op: Area_of_Op,
        ACOITA: ACOITA,

        brand_1: brand_1,
        brandNonBrand_1: brandNonBrand_1,
        QIMTH_1: QIMTH_1,


        MinimumSel: MinimumSel,
        Sale_Marketing: Sale_Marketing,

        Ref1_Name: Ref1_Name,
        Ref1_Mobile: Ref1_Mobile,
        Ref1_Add: Ref1_Add,

        ARemark: ARemark,

        Name_9: Name_9,
        Place_9: Place_9,
        Date_9: Date_9,
        SignStamp_9: SignStamp_9,


        // Step 10 Last Step
        ArearegManager: ArearegManager,
        Date_10: Date_10,
        RegSateHead: RegSateHead,
        Sign_10: Sign_10,
        Date_11: Date_11,
        StatusApp: StatusApp,
        DealerCode: DealerCode,
        Date_12: Date_12,
        ApprovedBy: ApprovedBy,
        Date_13: Date_13

    };


    const updateuser = await Distributor.findByIdAndUpdate(distributorid, distributor, { new: true });
    console.log("Record inserted Successfully", distributorid, distributor);
    //res.redirect('Sign_up_successfull.html');
    return updateuser;
});

//Distributor

async function distributorsendRegisterMail(user, callback) {

    this.OTP = Math.floor(1000 + Math.random() * 9000);


    const updatedUser = await Distributor.findByIdAndUpdate(user.id, { otp: this.OTP }, { new: true });


    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'sonavaners1999@gmail.com',
            pass: 'mpeiuiikrjqovnnc'
        }
    });

    let mailOptions = {
        from: 'sonavaners1999@gmail.com',
        to: user.email,
        subject: "Hello",
        html:
            `
   <span>Hi, ${user.fname}</span><br>
   <br>
   <span><b>Welcome..!</b></span>
   <br>
   <span>Here's Your Login Credential's</span>
   <br>
   <h4>Email: ${user.email}</h4>
   <h4>OTP: ${this.OTP}</h4>
   <h1>Thank You For Joining With Us</h1>
   `
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
    return updatedUser;
}




// sign-up Dealer
// Defined the schema for the "Super-Stockist" collection
var Dealer = new mongoose.Schema({
    fname: String,
    lname: String,
    email: {
        type: String,
        unique: true
    },
    mobile: String,
    gender: String,
    password: String,
    otp: String,
    // step 2 A. Details of Applicant Firm 

    applicantFullname: {
        type: String,
        //required: true
    },
    applicantFHName: {
        type: String,
        //  required: true
    },
    applicantAdd: {
        type: String,
        //  required: true
    },
    applicantPO: {
        type: String,
        //   required: true
    },
    applicantPS: {
        type: String,
        //   required: true
    },
    district: {
        type: String,

    },
    state: {
        type: String,
    },
    applicantLandmark: {
        type: String,
        //    required: true
    },
    applicantPin: {
        type: String,
        //  required: true
    },
    applicantPan: {
        type: String,
        //  required: true
    },
    applicantDOE: {
        type: String,
        //  required: true
    },
    applicantGST: {
        type: String,
        //   required: true
    },
    applicantDate: {
        type: String,
        //  required: true
    },
    applicantTelNo: {
        type: String,
        //    required: true
    },
    applicantMobile: {
        type: String,
        //   required: true
    },
    applicantEmail: {
        type: String,
        // required: true
    },
    applicantCOF: {
        type: String,
        //  required: true
    },

    // step 3 B.1 Details of Owner*

    B1_Fullname: {
        type: String,
        // required: true
    },
    B1_FHName: {
        type: String,
        //  required: true
    },
    B1_Add: {
        type: String,
        //required: true
    },
    B1_PO: {
        type: String,
        // required: true
    },
    B1_PS: {
        type: String,
        //  required: true
    },
    B1_district: {
        type: String,
    },
    B1_state: {
        type: String,
    },
    B1_Landmark: {
        type: String,
        // required: true
    },
    B1_Pin: {
        type: String,
        // required: true
    },
    B1_Pan: {
        type: String,
        //required: true
    },
    B1_DOB: {
        type: String,
        // required: true
    },
    B1_Adhar: {
        type: String,
        //required: true
    },
    B1_Mobile: {
        type: String,
        // required: true
    },
    B1_Resi: {
        type: String,
        //  required: true
    },
    B1_Email: {
        type: String,
        // required: true
    },
    B1_Sign: {
        type: String,
        // required: true
    },

    // step 4. C. Details Of Assets

    c1_assetDropDown: {
        type: String,
    },
    c1_Location: {
        type: String,
    },
    c1_Area: {
        type: String,
    },
    c1_OpenClosed: {
        type: String,
    },
    c1_OwnRented: {
        type: String,
    },

    //

    c2_assetDropDown: {
        type: String,
    },
    c2_Location: {
        type: String,
    },
    c2_Area: {
        type: String,
    },
    c2_OpenClosed: {
        type: String,
    },
    c2_OwnRented: {
        type: String,
    },

    // step 5. D. Details Of Bank

    bankName: {
        type: String,
        // required: true
    },
    branch: {
        type: String,
        // required: true
    },
    bankAC: {
        type: String,
        // required: true
    },
    bankAT: {
        type: String,
        //  required: true
    },
    bank_IFSC: {
        type: String,
        //  required: true
    },
    authorisedSignatory: {
        type: String,
        //  required: true
    },
    SpecimenSignature: {
        type: String,
        //   required: true
    },

    // step 6.  Details Of Presenet Business In OTC

    DealingBrand_1: {
        type: String,
    },
    LastFY1_1: {
        type: String,
    },
    LastFY2_1: {
        type: String,
    },
    Remark_1: {
        type: String,
    },

    // step 7. Details Of Present Business In Other Items:

    Item_1: {
        type: String,
    },
    Brand_1: {
        type: String,
    },
    LastFY_1_1: {
        type: String,
    },

    // step 8. Details Of Contract Person

    Contract_PName: {
        type: String,
    },
    Contract_PDesig: {
        type: String,
    },
    Contract_PMobile: {
        type: String,
    },
    Contract_PEmail: {
        type: String,
    },
    Contract_PDOB: {
        type: String,
    },
    Contract_PID: {
        type: String,
    },
    Contract_PWCD: {
        type: String,
    },

    // step 9. Details Of Application Dealership

    Area_of_Op: {
        type: String,
    },
    ACOITA: {
        type: String,
    },

    // 4 phase
    brand_1: {
        type: String,
    },
    brandNonBrand_1: {
        type: String,
    },
    QIMTH_1: {
        type: String,
    },


    MinimumSel: {
        type: String,
    },
    Sale_Marketing: {
        type: String,
    },


    Ref1_Name: {
        type: String,
    },
    Ref1_Mobile: {
        type: String,
    },
    Ref1_Add: {
        type: String,
    },


    ARemark: {
        type: String,
    },



    Name_9: {
        type: String,
    },
    Place_9: {
        type: String,
    },
    Date_9: {
        type: String,
    },
    SignStamp_9: {
        type: String,
    },


    // Step 10 Last Step

    ArearegManager: {
        type: String,
    },
    Date_10: {
        type: String,
    },
    RegSateHead: {
        type: String,
    },
    Sign_10: {
        type: String,
    },
    Date_11: {
        type: String,
    },
    StatusApp: {
        type: String,
    },
    DealerCode: {
        type: String,
    },
    Date_12: {
        type: String,
    },
    ApprovedBy: {
        type: String,
    },
    Date_13: {
        type: String,
    },
});

// Create the "Super-Stockist" model based on the schema
var Dealer = mongoose.model('Dealer', Dealer);

app.post('/dealer_sign_up', function (req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var gender = req.body.gender;
    var gender = req.body.gender;


    console.log("Checking Values>>>", fname, lname, email, mobile, gender)


    dealer = new Dealer({
        "fname": fname,
        "lname": lname,
        "email": email,
        "mobile": mobile,
        "gender": gender,

    });

    var FnameFilled = req.body.fname;
    var LnameFilled = req.body.lname;
    var EmailFilled = req.body.email;
    var MobileFilled = req.body.mobile;
    var GenderFilled = req.body.gender;

    console.log(!(FnameFilled === ""));

    if ((!(FnameFilled === "") && !(LnameFilled === "") && !(EmailFilled === "") && !(MobileFilled === "") && !(GenderFilled === ""))) {
        console.log("Inside")
        dealer.save()
            .then((user) => {
                dealerid = user.id;
                dealersendRegisterMail(user);
                console.log("Record inserted Successfully", dealerid);
            })
            .catch((err) => {
                console.log("err", err);
                if (err.code === 11000 && err.keyPattern && err.keyPattern.email === 1) {
                    return res.status(400).json({ message: "Email address already exists." });
                } else {
                    return res.status(500).json({ message: "Internal Server Error" });
                }
            });

    }

});



// Application Form Dealer

app.post('/application-form-dealer-sign_up', async function (req, res) {
    // step 2 A. Details of Applicant Firm 

    let applicantFullname = req.body.applicantFullname;
    let applicantFHName = req.body.applicantFHName;
    let applicantAdd = req.body.applicantAdd;
    let applicantPO = req.body.applicantPO;
    let applicantPS = req.body.applicantPS;
    let district = req.body.district;
    let state = req.body.state;
    let applicantLandmark = req.body.applicantLandmark;
    let applicantPin = req.body.applicantPin;
    let applicantPan = req.body.applicantPan;
    let applicantDOE = req.body.applicantDOE;
    let applicantGST = req.body.applicantGST;
    let applicantDate = req.body.applicantDate;
    let applicantTelNo = req.body.applicantTelNo;
    let applicantMobile = req.body.applicantMobile;
    let applicantEmail = req.body.applicantEmail;
    let applicantCOF = req.body.applicantCOF;

    console.log("applicantFullname", applicantFullname);

    // step 3 B.1 Details of Owner*
    let B1_Fullname = req.body.B1_Fullname;
    let B1_FHName = req.body.B1_FHName;
    let B1_Add = req.body.B1_Add;
    let B1_PO = req.body.B1_PO;
    let B1_PS = req.body.B1_PS;
    let B1_district = req.body.B1_district;
    let B1_state = req.body.B1_state;
    let B1_Landmark = req.body.B1_Landmark;
    let B1_Pin = req.body.B1_Pin;
    let B1_Pan = req.body.B1_Pan;
    let B1_DOB = req.body.B1_DOB;
    let B1_Adhar = req.body.B1_Adhar;
    let B1_Mobile = req.body.B1_Mobile;
    let B1_Resi = req.body.B1_Resi;
    let B1_Email = req.body.B1_Email;
    let B1_Sign = req.body.B1_Sign;

    // step 4. C. Details Of Assets

    let c1_assetDropDown = req.body.c1_assetDropDown;
    let c1_Location = req.body.c1_Location;
    let c1_Area = req.body.c1_Area;
    let c1_OpenClosed = req.body.c1_OpenClosed;
    let c1_OwnRented = req.body.c1_OwnRented;

    let c2_assetDropDown = req.body.c2_assetDropDown;
    let c2_Location = req.body.c2_Location;
    let c2_Area = req.body.c2_Area;
    let c2_OpenClosed = req.body.c2_OpenClosed;
    let c2_OwnRented = req.body.c2_OwnRented;

    // step 5. D. Details Of Bank

    let bankName = req.body.bankName;
    let branch = req.body.branch;
    let bankAC = req.body.bankAC;
    let bankAT = req.body.bankAT;
    let bank_IFSC = req.body.bank_IFSC;
    let authorisedSignatory = req.body.authorisedSignatory;
    let SpecimenSignature = req.body.SpecimenSignature;


    // step 6.  Details Of Presenet Business In OTC

    let DealingBrand_1 = req.body.DealingBrand_1;
    let LastFY1_1 = req.body.LastFY1_1;
    let LastFY2_1 = req.body.LastFY2_1;
    let Remark_1 = req.body.Remark_1;

    // step 7. Details Of Present Business In Other Items:

    let Item_1 = req.body.Item_1;
    let Brand_1 = req.body.Brand_1;
    let LastFY_1_1 = req.body.LastFY_1_1;

    // step 8. Details Of Contract Person

    let Contract_PName = req.body.Contract_PName;
    let Contract_PDesig = req.body.Contract_PDesig;
    let Contract_PMobile = req.body.Contract_PMobile;
    let Contract_PEmail = req.body.Contract_PEmail;
    let Contract_PDOB = req.body.Contract_PDOB;
    let Contract_PID = req.body.Contract_PID;
    let Contract_PWCD = req.body.Contract_PWCD;

    // step 9. Details Of Application Dealership

    let Area_of_Op = req.body.Area_of_Op;
    let ACOITA = req.body.ACOITA;

    // 4 phase
    let brand_1 = req.body.brand_1;
    let brandNonBrand_1 = req.body.brandNonBrand_1;
    let QIMTH_1 = req.body.QIMTH_1;

    let MinimumSel = req.body.MinimumSel;
    let Sale_Marketing = req.body.Sale_Marketing;

    let Ref1_Name = req.body.Ref1_Name;
    let Ref1_Mobile = req.body.Ref1_Mobile;
    let Ref1_Add = req.body.Ref1_Add;

    let ARemark = req.body.ARemark;

    let Name_9 = req.body.Name_9;
    let Place_9 = req.body.Place_9;
    let Date_9 = req.body.Date_9;
    let SignStamp_9 = req.body.SignStamp_9;

    // Step 10 Last Step

    let ArearegManager = req.body.ArearegManager;
    let Date_10 = req.body.Date_10;
    let RegSateHead = req.body.RegSateHead;
    let Sign_10 = req.body.Sign_10;
    let Date_11 = req.body.Date_11;
    let StatusApp = req.body.StatusApp;
    let DealerCode = req.body.DealerCode;
    let Date_12 = req.body.Date_12;
    let ApprovedBy = req.body.ApprovedBy;
    let Date_13 = req.body.Date_13;



    dealer = {
        // step 2 A. Details of Applicant Firm 
        applicantFullname: applicantFullname,
        applicantFHName: applicantFHName,
        applicantAdd: applicantAdd,
        applicantPO: applicantPO,
        applicantPS: applicantPS,
        district: district,
        state: state,
        applicantLandmark: applicantLandmark,
        applicantPin: applicantPin,
        applicantPan: applicantPan,
        applicantDOE: applicantDOE,
        applicantGST: applicantGST,
        applicantDate: applicantDate,
        applicantTelNo: applicantTelNo,
        applicantMobile: applicantMobile,
        applicantEmail: applicantEmail,
        applicantCOF: applicantCOF,

        // step 3 B.1 Details of Owner*

        B1_Fullname: B1_Fullname,
        B1_FHName: B1_FHName,
        B1_Add: B1_Add,
        B1_PO: B1_PO,
        B1_PS: B1_PS,
        B1_district: B1_district,
        B1_state: B1_state,
        B1_Landmark: B1_Landmark,
        B1_Pin: B1_Pin,
        B1_Pan: B1_Pan,
        B1_DOB: B1_DOB,
        B1_Adhar: B1_Adhar,
        B1_Mobile: B1_Mobile,
        B1_Resi: B1_Resi,
        B1_Email: B1_Email,
        B1_Sign: B1_Sign,

        // step 4. C. Details Of Assets

        c1_assetDropDown: c1_assetDropDown,
        c1_Location: c1_Location,
        c1_Area: c1_Area,
        c1_OpenClosed: c1_OpenClosed,
        c1_OwnRented: c1_OwnRented,

        // c2_assetDropDown: c2_assetDropDown,
        // c2_Location: c2_Location,
        // c2_Area: c2_Area,
        // c2_OpenClosed: c2_OpenClosed,
        // c2_OwnRented: c2_OwnRented,

        // step 5. D. Details Of Bank

        bankName: bankName,
        branch: branch,
        bank_IFSC: bank_IFSC,
        bankAC: bankAC,
        bankAT: bankAT,
        authorisedSignatory: authorisedSignatory,
        SpecimenSignature: SpecimenSignature,

        // step 6.  Details Of Presenet Business In OTC

        DealingBrand_1: DealingBrand_1,
        LastFY1_1: LastFY1_1,
        LastFY2_1: LastFY2_1,
        Remark_1: Remark_1,

        //
        Item_1: Item_1,
        Brand_1: Brand_1,
        LastFY_1_1: LastFY_1_1,

        // step 8. Details Of Contract Person

        Contract_PName: Contract_PName,
        Contract_PDesig: Contract_PDesig,
        Contract_PMobile: Contract_PMobile,
        Contract_PEmail: Contract_PEmail,
        Contract_PDOB: Contract_PDOB,
        Contract_PID: Contract_PID,
        Contract_PWCD: Contract_PWCD,

        // step 9. Details Of Application Dealership
        Area_of_Op: Area_of_Op,
        ACOITA: ACOITA,

        brand_1: brand_1,
        brandNonBrand_1: brandNonBrand_1,
        QIMTH_1: QIMTH_1,


        MinimumSel: MinimumSel,
        Sale_Marketing: Sale_Marketing,

        Ref1_Name: Ref1_Name,
        Ref1_Mobile: Ref1_Mobile,
        Ref1_Add: Ref1_Add,

        ARemark: ARemark,

        Name_9: Name_9,
        Place_9: Place_9,
        Date_9: Date_9,
        SignStamp_9: SignStamp_9,


        // Step 10 Last Step
        ArearegManager: ArearegManager,
        Date_10: Date_10,
        RegSateHead: RegSateHead,
        Sign_10: Sign_10,
        Date_11: Date_11,
        StatusApp: StatusApp,
        DealerCode: DealerCode,
        Date_12: Date_12,
        ApprovedBy: ApprovedBy,
        Date_13: Date_13

    };


    const updateuser = await Dealer.findByIdAndUpdate(dealerid, dealer, { new: true });
    console.log("Record inserted Successfully", dealerid, dealer);
    //res.redirect('Sign_up_successfull.html');
    return updateuser;
});



//Dealer

async function dealersendRegisterMail(user, callback) {

    this.OTP = Math.floor(1000 + Math.random() * 9000);


    const updatedUser = await Dealer.findByIdAndUpdate(user.id, { otp: this.OTP }, { new: true });


    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'sonavaners1999@gmail.com',
            pass: 'mpeiuiikrjqovnnc'
        }
    });

    let mailOptions = {
        from: 'sonavaners1999@gmail.com',
        to: user.email,
        subject: "Hello",
        html:
            `
   <span>Hi, ${user.fname}</span><br>
   <br>
   <span><b>Welcome..!</b></span>
   <br>
   <span>Here's Your Login Credential's</span>
   <br>
   <h4>Email: ${user.email}</h4>
   <h4>OTP: ${this.OTP}</h4>
   <h1>Thank You For Joining With Us</h1>
   `
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
    return updatedUser;
}




app.get('/', function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    // return res.redirect('index.html');
}).listen(3000)


console.log("server listening at port 3000");