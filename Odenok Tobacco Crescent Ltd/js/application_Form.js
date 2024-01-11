var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;
$(document).ready(function () {
$(".next").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    next_fs.show();
    current_fs.animate({ opacity: 0 }, {
        step: function (now, mx) {
            scale = 1 - (1 - now) * 0.2;
            left = (now * 50) + "%";
            opacity = 1 - now;
            current_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'relative'
            });
            next_fs.css({ 'left': left, 'opacity': opacity });
        },
        duration: 300,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing pluginfieldset
        easing: 'easeInOutBack'
    });
});




$(".previous").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    console.log("current_fs",current_fs)
    previous_fs = $(this).parent().prev();
    console.log("previous_fs",previous_fs)

    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    previous_fs.show();
    current_fs.animate({ opacity: 0 }, {
        step: function (now, mx) {
            scale = 0.8 + (1 - now) * 0.2;
            left = ((1 - now) * 50) + "%";
            opacity = 1 - now;
            current_fs.css({ 'left': left });
            previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
        },
        duration: 300,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});
});

$(".submit").click(function () {
    return false;
})




var state = "";
var district = "";

function searchPin(event) {
    console.log("Pincode ", event.target.value);

    $.getJSON("https://api.postalpincode.in/pincode/" + event.target.value, (data) => {
        console.log("check data", data)
        console.log("check district", data[0].PostOffice[2].District);
        console.log("check state", data[0].PostOffice[2].State);


        const stateInput = document.getElementById('state');
        const districtInput = document.getElementById('district');

        this.state = data[0].PostOffice[2].State;
        this.district = data[0].PostOffice[2].District;

        stateInput.value = this.state;
        districtInput.value = this.district;

    });
}


var B1_state = "";
var B1_district = "";


function b1_searchPin(event) {

    console.log("b1_searchPin", event.target.value);
    $.getJSON("https://api.postalpincode.in/pincode/" + event.target.value, (data) => {
        console.log("check data", data)
        console.log("check district", data[0].PostOffice[2].District);
        console.log("check state", data[0].PostOffice[2].State);


        const B1stateInput = document.getElementById('B1_state');
        const B1districtInput = document.getElementById('B1_district');


        this.B1_state = data[0].PostOffice[2].State;
        this.B1_district = data[0].PostOffice[2].District;

        B1stateInput.value = this.B1_state;
        B1districtInput.value = this.B1_district;

    });

}


var bankName = "";
var branch = "";


function searchIFSC(event) {

    console.log("IFSC", event.target.value);
    $.getJSON("https://ifsc.razorpay.com/" + event.target.value, (data) => {
        console.log("IFSC data", data)
        console.log("check NAME", data.BANK);
        console.log("check BRANCH", data.BRANCH);

        const BankName = document.getElementById('bankName');
        const Branch = document.getElementById('branch');

        this.bankName = data.BANK;
        this.branch = data.BRANCH;

        BankName.value = this.bankName;
        Branch.value = this.branch;

    });

}


// //applicantPin
const inputdistrict = document.getElementById("district");
const inputstate = document.getElementById("state");

const applicantPin = document.getElementById("applicantPin");

applicantPin.addEventListener("input", function () {
    if (parseInt(applicantPin.value) > 0) {
        console.log("Inside parse");
        inputdistrict.disabled = false;
        inputstate.disabled = false;
    }
});

// //B1_Pin
const B1_districtnew = document.getElementById("B1_district");
const B1_statenew = document.getElementById("B1_state");

const B1_Pinnew = document.getElementById("B1_Pin");

B1_Pinnew.addEventListener("input", function () {
    if (parseInt(B1_Pinnew.value) > 0) {
        B1_districtnew.disabled = false;
        B1_statenew.disabled = false;
    }
});

// //bank_IFSC
// const bankNamenew = document.getElementById("bankName");
// const branchnew = document.getElementById("branch");

// const bank_IFSC = document.getElementById("bank_IFSC");

// bank_IFSC.addEventListener("input", function () {
//     if (parseInt(bank_IFSC.value) > 0) {
//         console.log("Inside Parse")
//         bankNamenew.disabled = false;
//         branchnew.disabled = false;
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("msform");

    const pincodeInput = document.getElementById("applicantPin");
    const pincodeError = document.getElementById("pincodeError");

    const panInput = document.getElementById("applicantPan");
    const panError = document.getElementById("panError");

    const gstNumberInput = document.getElementById("applicantGST");
    const gstNumberError = document.getElementById("gstNumberError");

    const mobileInput = document.getElementById("applicantMobile");
    const mobileError = document.getElementById("mobileError");

    const emailInput = document.getElementById("applicantEmail");
    const emailError = document.getElementById("emailError");

    const B1_emailInput = document.getElementById("B1_Email");
    const B1_emailError = document.getElementById("B1_emailError");

    const B1_pincodeInput = document.getElementById("B1_Pin");
    const B1_pincodeError = document.getElementById("B1_pincodeError");

    const B1_panInput = document.getElementById("B1_Pan");
    const B1_panError = document.getElementById("B1_panError");

    const B1_mobileInput = document.getElementById("B1_Mobile");
    const B1_mobileError = document.getElementById("B1_mobileError");

    const B1_AdharInput = document.getElementById("B1_Adhar");
    const aadhaarError = document.getElementById("aadhaarError");

    const accountNumberInput = document.getElementById("bankAC");
    const accountNumberError = document.getElementById("accountNumberError");

    const ifscCodeInput = document.getElementById("bank_IFSC");
    const ifscCodeError = document.getElementById("ifscCodeError");


    B1_AdharInput.addEventListener("input", function () {
        validateAadhaar();
    });

    accountNumberInput.addEventListener("input", function () {
        validateAccountNumber();
    });

    ifscCodeInput.addEventListener("input", function () {
        validateIFSCCode();
    });

    pincodeInput.addEventListener("input", function () {
        validatePincode();
    });

    B1_pincodeInput.addEventListener("input", function () {
        B1_validatePincode();
    });

    panInput.addEventListener("input", function () {
        validatePan();
    });

    emailInput.addEventListener("input", function () {
        validateEmail();
    });

    B1_emailInput.addEventListener("input", function () {
        B1_validateEmail();
    });

    B1_panInput.addEventListener("input", function () {
        B1_validatePan();
    });

    gstNumberInput.addEventListener("input", function () {
        validateGSTNumber();
    });

    mobileInput.addEventListener("input", function () {
        validateMobile();
    });

    B1_mobileInput.addEventListener("input", function () {
        B1_validateMobile();
    });

    function validatePincode() {
        const pincodeValue = pincodeInput.value.trim();

        if (!isValidPincode(pincodeValue)) {
            B1_pincodeError.textContent = "Invalid PIN Code format";
            return false;
        } else {
            B1_pincodeError.textContent = "";
            return true;
        }
    }

    function B1_validatePincode() {
        const B1_pincodeValue = B1_pincodeInput.value.trim();

        if (!isValidPincode(B1_pincodeValue)) {
            pincodeError.textContent = "Invalid PIN Code format";
            return false;
        } else {
            pincodeError.textContent = "";
            return true;
        }
    }

    function isValidPincode(pincode) {
        const pincodePattern = /^\d{6}$/; // Assumes a 6-digit PIN code format
        return pincodePattern.test(pincode);
    }


    function validatePan() {
        const panValue = panInput.value.trim();

        if (!isValidPan(panValue)) {
            panError.textContent = "Invalid PAN Number format";
            return false;
        } else {
            panError.textContent = "";
            return true;
        }
    }

    function B1_validatePan() {
        const B1_panValue = B1_panInput.value.trim();

        if (!isValidPan(B1_panValue)) {
            B1_panError.textContent = "Invalid PAN Number format";
            return false;
        } else {
            B1_panError.textContent = "";
            return true;
        }
    }

    function B1_validateMobile() {
        const B1_mobileValue = B1_mobileInput.value.trim();

        if (!isValidMobile(B1_mobileValue)) {
            B1_mobileError.textContent = "Invalid mobile number format";
            return false;
        } else {
            B1_mobileError.textContent = "";
            return true;
        }
    }

    function isValidPan(pan) {
        const panPattern = /^[A-Z]{5}\d{4}[A-Z]{1}$/; // PAN format: 5 letters, 4 digits, 1 letter
        return panPattern.test(pan);
    }


    function validateGSTNumber() {
        const gstNumberValue = gstNumberInput.value.trim();


        if (!isValidGSTNumber(gstNumberValue)) {
            gstNumberError.textContent = "Invalid GST Number format";
            return false;
        } else {
            gstNumberError.textContent = "";
            return true;
        }
    }

    function isValidGSTNumber(gstNumber) {
        const gstNumberPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
        return gstNumberPattern.test(gstNumber);
    }

    function validateMobile() {
        const mobileValue = mobileInput.value.trim();

        if (!isValidMobile(mobileValue)) {
            mobileError.textContent = "Invalid mobile number format";
            return false;
        } else {
            mobileError.textContent = "";
            return true;
        }
    }

    function isValidMobile(mobile) {
        const mobilePattern = /^\d{10}$/;
        return mobilePattern.test(mobile);
    }


    function validateEmail() {
        const emailValue = emailInput.value.trim();

        if (!isValidEmail(emailValue)) {
            emailError.textContent = "Invalid email format";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
    }

    function B1_validateEmail() {
        const B1_emailValue = B1_emailInput.value.trim();

        if (!isValidEmail(B1_emailValue)) {
            B1_emailError.textContent = "Invalid email format";
            return false;
        } else {
            B1_emailError.textContent = "";
            return true;
        }
    }



    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }


    function validateAadhaar() {
        const aadhaarValue = B1_AdharInput.value.trim();

        if (!isValidAadhaar(aadhaarValue)) {
            aadhaarError.textContent = "Invalid Aadhaar Card Number format";
            return false;
        } else {
            aadhaarError.textContent = "";
            return true;
        }
    }

    function isValidAadhaar(aadhaar) {
        const aadhaarPattern = /^\d{12}$/; // Aadhaar Card format: 12 digits
        return aadhaarPattern.test(aadhaar);
    }


    function validateAccountNumber() {
        const accountNumberValue = accountNumberInput.value.trim();

        // if (accountNumberValue === "") {
        //     accountNumberError.textContent = "Account Number is required";
        //     return false;
        // } else 
        if (!isValidAccountNumber(accountNumberValue)) {
            accountNumberError.textContent = "Invalid Account Number format";
            return false;
        } else {
            accountNumberError.textContent = "";
            return true;
        }
    }

    function isValidAccountNumber(accountNumber) {
        const accountNumberPattern = /^\d{9,18}$/; // Example: 9 to 18 digits
        return accountNumberPattern.test(accountNumber);
    }


    function validateIFSCCode() {
        const ifscCodeValue = ifscCodeInput.value.trim();

        // if (ifscCodeValue === "") {
        //     ifscCodeError.textContent = "IFSC Code is required";
        //     return false;
        // } else 
        if (!isValidIFSCCode(ifscCodeValue)) {
            ifscCodeError.textContent = "Invalid IFSC Code format";
            return false;
        } else {
            ifscCodeError.textContent = "";
            return true;
        }
    }

    function isValidIFSCCode(ifscCode) {
        const ifscCodePattern = /^[A-Z]{4}0[A-Z0-9]{6}$/; // IFSC Code format: 4 letters, 0, and 6 digits
        return ifscCodePattern.test(ifscCode);
    }


    form.addEventListener("submit", function (event) {
        let isValid = true;

        isValid = validatePincode() && isValid;
        isValid = validatePan() && isValid;
        isValid = validateGSTNumber() && isValid;
        isValid = validateMobile() && isValid;
        isValid = validateEmail() && isValid;

        isValid = B1_validatePincode() && isValid;
        isValid = B1_validatePan() && isValid;
        isValid = B1_validateMobile() && isValid;
        isValid = B1_validateEmail() && isValid;
        isValid = validateAadhaar() && isValid;
        isValid = validateAccountNumber() && isValid;
        isValid = validateIFSCCode() && isValid;


        alert("Registration Successfull...!");
        if (isValid) {
            alert("Registration Successfull...!");
            console.log("Inside submit");
        }
    });

});