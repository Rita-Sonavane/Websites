//search  Shops

var Maharashtra = ["-- select one --", "Mumbai", "Pune", "Aurangabad", "Nashik", "Akola", "Satara", "Nagpur", "Kolhapur"];
var Gujarat = ["-- select one --", "Ahmedabad", "Baroda", "Vapi", "Surat", "Gandhinagaar", "Rajkot", "Jamnagar"];
var UttarPradesh = ["-- select one --", "Lukhnow", "Kanpur", "Meerut", "Banaras", "Gaziabad", "Agra", "Muzzafarnagar", "Barely", "Aligarh", "Pragraj"];
var Rajasthan = ["-- select one --", "Jaipur", "Udaipur", "Jodhpur", "Bikaner", "Kotta", "Ajmer", "Alwar"];
var MadhyaPradesh = ["-- select one --", "Indore", "Bhopal", "Gwalior", "Jabalpur"];
var Punjab = ["-- select one --", "Amritsar", "Jalandhar", "Ludhiana", "Bhatinda", "Chandigharh", "Patiyala"];
var Delhi = ["-- select one --",];
var Haryana = ["-- select one -- ", "Faridabad", "Panipat", "Ambala", "Gurugram"];
var Karnataka = ["-- select one --", "Banglore", "Manglore", "Hubli", "Mysore", "Kalburgi", "Udpi"];
var TamilNadu = ["-- select one --", "Chennai", "Coimbtore", "Madurai", "Trichy", "Salem", "Vellore", "Harur", "Karur", "Pondicherry", "Terunelvalli"];
var Kerala = ["-- select one --"];
var AndraPradesh = ["-- select one --", "Vijaywada", "Vizag", "Nellore", "Guntur"];
var Telangana = ["-- select one --", "Karimnagar", "Hyderabad", "Wanrangal"];
var Orissa = ["-- select one --", "Bhubaneshwar", "Kuttak", "Raulkilla", "Barhanpur", "Talcher"];
var Bihar = ["-- select one --", "Patna", "Muzzafarnagar(Bihar)"];
var WestBengal = ["-- select one --", "Kolkata"];
var Goa = ["-- select one --"];
var Guwahati = ["-- select one --"];



$("#inputState").change(function () {
    var StateSelected = $(this).val();
    var optionsList;
    var htmlString = "";

    switch (StateSelected) {
        case "Andra Pradesh":
            optionsList = AndraPradesh;
            break;
        case "Bihar":
            optionsList = Bihar;
            break;
        case "Goa":
            optionsList = Goa;
            break;
        case "Gujarat":
            optionsList = Gujarat;
            break;
        case "Haryana":
            optionsList = Haryana;
            break;
        case "Karnataka":
            optionsList = Karnataka;
            break;
        case "Kerala":
            optionsList = Kerala;
            break;
        case "Madya Pradesh":
            optionsList = MadhyaPradesh;
            break;
        case "Maharashtra":
            optionsList = Maharashtra;
            break;
        case "Orissa":
            optionsList = Orissa;
            break;
        case "Punjab":
            optionsList = Punjab;
            break;
        case "Rajasthan":
            optionsList = Rajasthan;
            break;
        case "Tamil Nadu":
            optionsList = TamilNadu;
            break;
        case "Telangana":
            optionsList = Telangana;
            break;
        case "Uttar Pradesh":
            optionsList = UttarPradesh;
            break;
        case "West Bengal":
            optionsList = WestBengal;
            break;
        case "Delhi":
            optionsList = Delhi;
            break;
        case "Guwahati":
            optionsList = Guwahati;
            break;
    }


    for (var i = 0; i < optionsList.length; i++) {
        htmlString = htmlString + "<option value='" + optionsList[i] + "'>" + optionsList[i] + "</option>";
    }

    $("#inputDistrict").html(htmlString);
});


$("#inputDistrict").change(function () {
    var districtSelected = $(this).val();
    console.log("Selected district:", districtSelected);

    //----------------------- Districts of Maharashtra ------------------------------

    if (districtSelected === "Mumbai") {
        $(".mumbai").show();
    } else {
        $(".mumbai").hide();
    }

    if (districtSelected === "Pune") {
        $(".pune").show();
    } else {
        $(".pune").hide();
    }

    if (districtSelected === "Aurangabad") {
        $(".aurangabad").show();
    } else {
        $(".aurangabad").hide();
    }

    if (districtSelected === "Nashik") {
        $(".nashik").show();
    } else {
        $(".nashik").hide();
    }

    if (districtSelected === "Nagpur") {
        $(".nagpur").show();
    } else {
        $(".nagpur").hide();
    }

    // ----------------------- Districts of Gujrat ------------------------------>

    if (districtSelected === "Ahmedabad") {
        $(".ahmedabad").show();
    } else {
        $(".ahmedabad").hide();
    }

    if (districtSelected === "Baroda") {
        $(".baroda").show();
    } else {
        $(".baroda").hide();
    }

    if (districtSelected === "Vapi") {
        $(".vapi").show();
    } else {
        $(".vapi").hide();
    }

    if (districtSelected === "Surat") {
        $(".surat").show();
    } else {
        $(".surat").hide();
    }

    if (districtSelected === "Gandhinagaar") {
        $(".gandhinagaar").show();
    } else {
        $(".gandhinagaar").hide();
    }

    if (districtSelected === "Rajkot") {
        $(".rajkot").show();
    } else {
        $(".rajkot").hide();
    }

    if (districtSelected === "Jamnagar") {
        $(".jamnagar").show();
    } else {
        $(".jamnagar").hide();
    }


    //------------------------- Districts of UP ------------------------------

    if (districtSelected === "Lukhnow") {
        $(".lukhnow").show();
    } else {
        $(".lukhnow").hide();
    }

    if (districtSelected === "Kanpur") {
        $(".kanpur").show();
    } else {
        $(".kanpur").hide();
    }

    if (districtSelected === "Meerut") {
        $(".meerut").show();
    } else {
        $(".meerut").hide();
    }

    if (districtSelected === "Banaras") {
        $(".banaras").show();
    } else {
        $(".banaras").hide();
    }

    if (districtSelected === "Gaziabad") {
        $(".gaziabad").show();
    } else {
        $(".gaziabad").hide();
    }

    if (districtSelected === "Agra") {
        $(".agra").show();
    } else {
        $(".agra").hide();
    }

    if (districtSelected === "Muzzafarnagar") {
        $(".muzzafarnagar").show();
    } else {
        $(".muzzafarnagar").hide();
    }

    if (districtSelected === "Barely") {
        $(".barely").show();
    } else {
        $(".barely").hide();
    }

    if (districtSelected === "Aligarh") {
        $(".aligarh").show();
    } else {
        $(".aligarh").hide();
    }

    if (districtSelected === "Pragraj") {
        $(".pragraj").show();
    } else {
        $(".pragraj").hide();
    }

    if (districtSelected === "Jaipur") {
        $(".jaipur").show();
    } else {
        $(".jaipur").hide();
    }


    //------------------------- Districts of Rajasthan ------------------------------

    if (districtSelected === "Udaipur") {
        $(".udaipur").show();
    } else {
        $(".udaipur").hide();
    }

    if (districtSelected === "Jodhpur") {
        $(".jodhpur").show();
    } else {
        $(".jodhpur").hide();
    }

    if (districtSelected === "Bikaner") {
        $(".bikaner").show();
    } else {
        $(".bikaner").hide();
    }

    if (districtSelected === "Kotta") {
        $(".kotta").show();
    } else {
        $(".kotta").hide();
    }

    if (districtSelected === "Ajmer") {
        $(".ajmer").show();
    } else {
        $(".ajmer").hide();
    }

    if (districtSelected === "Alwar") {
        $(".alwar").show();
    } else {
        $(".alwar").hide();
    }

    //------------------------- Districts of MP ------------------------------


    if (districtSelected === "Indore") {
        $(".indore").show();
    } else {
        $(".indore").hide();
    }

    if (districtSelected === "Bhopal") {
        $(".bhopal").show();
    } else {
        $(".bhopal").hide();
    }

    if (districtSelected === "Gwalior") {
        $(".gwalior").show();
    } else {
        $(".gwalior").hide();
    }

    if (districtSelected === "Jabalpur") {
        $(".jabalpur").show();
    } else {
        $(".jabalpur").hide();
    }

    //  ------------------------- Districts of Panjab ------------------------------

    if (districtSelected === "Amritsar") {
        $(".amritsar").show();
    } else {
        $(".amritsar").hide();
    }

    if (districtSelected === "Jalandhar") {
        $(".jalandhar").show();
    } else {
        $(".jalandhar").hide();
    }

    if (districtSelected === "Ludhiana") {
        $(".ludhiana").show();
    } else {
        $(".ludhiana").hide();
    }

    if (districtSelected === "Bhatinda") {
        $(".bhatinda").show();
    } else {
        $(".bhatinda").hide();
    }

    if (districtSelected === "Chandigharh") {
        $(".chandigarh").show();
    } else {
        $(".chandigarh").hide();
    }

    if (districtSelected === "Patiyala") {
        $(".patiyala").show();
    } else {
        $(".patiyala").hide();
    }


    //  ------------------------- Districts of Delhi -------------------------------

    if (districtSelected === "Faridabad") {
        $(".faridabad").show();
    } else {
        $(".faridabad").hide();
    }

    if (districtSelected === "Panipat") {
        $(".panipat").show();
    } else {
        $(".panipat").hide();
    }

    if (districtSelected === "Ambala") {
        $(".ambala").show();
    } else {
        $(".ambala").hide();
    }

    if (districtSelected === "Gurugram") {
        $(".gurugram").show();
    } else {
        $(".gurugram").hide();
    }

    // ------------------------- Districts of Karnataka -------------------------------

    if (districtSelected === "Banglore") {
        $(".banglore").show();
    } else {
        $(".banglore").hide();
    }

    if (districtSelected === "Manglore") {
        $(".manglore").show();
    } else {
        $(".manglore").hide();
    }

    if (districtSelected === "Hubli") {
        $(".hubli").show();
    } else {
        $(".hubli").hide();
    }

    if (districtSelected === "Mysore") {
        $(".mysore").show();
    } else {
        $(".mysore").hide();
    }

    if (districtSelected === "Kalburgi") {
        $(".kalburgi").show();
    } else {
        $(".kalburgi").hide();
    }

    if (districtSelected === "Udpi") {
        $(".udpi").show();
    } else {
        $(".udpi").hide();
    }


    // ------------------------- Districts of Tamilnadu -------------------------------

    if (districtSelected === "Chennai") {
        $(".chennai").show();
    } else {
        $(".chennai").hide();
    }

    if (districtSelected === "Coimbtore") {
        $(".coimbtore").show();
    } else {
        $(".coimbtore").hide();
    }

    if (districtSelected === "Madurai") {
        $(".madurai").show();
    } else {
        $(".madurai").hide();
    }

    if (districtSelected === "Trichy") {
        $(".trichy").show();
    } else {
        $(".trichy").hide();
    }

    if (districtSelected === "Salem") {
        $(".salem").show();
    } else {
        $(".salem").hide();
    }

    if (districtSelected === "Vellore") {
        $(".vellore").show();
    } else {
        $(".vellore").hide();
    }

    if (districtSelected === "Harur") {
        $(".harur").show();
    } else {
        $(".harur").hide();
    }

    if (districtSelected === "Karur") {
        $(".karur").show();
    } else {
        $(".karur").hide();
    }

    if (districtSelected === "Pondicherry") {
        $(".pondicherry").show();
    } else {
        $(".pondicherry").hide();
    }

    if (districtSelected === "Terunelvalli") {
        $(".terunelvalli").show();
    } else {
        $(".terunelvalli").hide();
    }

    //  ------------------------- Districts of kerla -------------------------------

    // ------------------------- Districts of Ap ------------------------------->

    if (districtSelected === "Vijaywada") {
        $(".vijaywada").show();
    } else {
        $(".vijaywada").hide();
    }

    if (districtSelected === "Vizag") {
        $(".vizag").show();
    } else {
        $(".vizag").hide();
    }

    if (districtSelected === "Nellore") {
        $(".nellore").show();
    } else {
        $(".nellore").hide();
    }

    if (districtSelected === "Guntur") {
        $(".guntur").show();
    } else {
        $(".guntur").hide();
    }

    //  ------------------------- Districts of Telangana -------------------------------

    if (districtSelected === "Karimnagar") {
        $(".karimnagar").show();
    } else {
        $(".karimnagar").hide();
    }


    if (districtSelected === "Hyderabad") {
        $(".hyderabad").show();
    } else {
        $(".hyderabad").hide();
    }

    if (districtSelected === "Wanrangal") {
        $(".wanrangal").show();
    } else {
        $(".wanrangal").hide();
    }

    //  ------------------------- Districts of Odissa---------------------------------

    if (districtSelected === "Bhubaneshwar") {
        $(".bhubhaneshwar").show();
    } else {
        $(".bhubhaneshwar").hide();
    }

    if (districtSelected === "Kuttak") {
        $(".kuttak").show();
    } else {
        $(".kuttak").hide();
    }

    if (districtSelected === "Raulkilla") {
        $(".raulkilla").show();
    } else {
        $(".raulkilla").hide();
    }

    if (districtSelected === "Barhanpur") {
        $(".barhanpur").show();
    } else {
        $(".barhanpur").hide();
    }

    if (districtSelected === "Talcher") {
        $(".talcher").show();
    } else {
        $(".talcher").hide();
    }


    //  ------------------------- Districts of Bihar---------------------------------

    if (districtSelected === "Patna") {
        $(".patna").show();
    } else {
        $(".patna").hide();
    }

    if (districtSelected === "Muzzafarnagar(Bihar)") {
        $(".muzzafarnagarb").show();
    } else {
        $(".muzzafarnagarb").hide();
    }


    //------------------------- Districts of Bihar---------------------------------

    if (districtSelected === "Kolkata") {
        $(".kolkata").show();
    } else {
        $(".kolkata").hide();
    }

    //------------------------- Select one---------------------------------   

    // if (districtSelected === "-- select one --") {
    //     $(".selectOne").show(); 
    // } 
});



function initialize() {

    /* Mumbai */
    var latlng = new google.maps.LatLng(19.0596, 72.8295);
    var latlng2 = new google.maps.LatLng(18.9067, 72.8147);
    var latlng3 = new google.maps.LatLng(19.1075, 72.8263);
    var latlng4 = new google.maps.LatLng(18.9127, 72.8213);
    var latlng5 = new google.maps.LatLng(18.9548, 72.7985);
    var latlng6 = new google.maps.LatLng(18.9986, 72.8174);
    var latlng7 = new google.maps.LatLng(18.9676, 72.8141);

    /* Pune */
    var latlng8 = new google.maps.LatLng(18.5362, 73.8940);
    var latlng9 = new google.maps.LatLng(18.5679, 73.9143);
    var latlng10 = new google.maps.LatLng(18.5538, 73.9477);

    /* Aurangabad */
    var latlng11 = new google.maps.LatLng(19.8718, 75.3650);

    /* Nashik */
    var latlng12 = new google.maps.LatLng(19.9723, 73.7817);

    /**  Nagpur  */
    var latlng13 = new google.maps.LatLng(21.1181, 79.0450);
    var latlng14 = new google.maps.LatLng(21.1041, 79.0773);

    /* Ahmedabad */
    var latlng15 = new google.maps.LatLng(23.1121, 72.5482);
    var latlng16 = new google.maps.LatLng(23.0387, 72.5112);
    var latlng17 = new google.maps.LatLng(23.0265, 72.4817);

    /** Baroda */
    var latlng18 = new google.maps.LatLng(22.2742572, 73.1884402);
    var latlng19 = new google.maps.LatLng(22.28911, 73.19241);

    /** Vapi */
    var latlng20 = new google.maps.LatLng(20.3289, 72.9402);

    /**Surat */
    var latlng21 = new google.maps.LatLng(21.141653, 72.755189);

    /**Gadhinagaar */
    var latlng22 = new google.maps.LatLng(23.1739, 72.6427);

    /* Rajkot */
    var latlng23 = new google.maps.LatLng(22.32795, 70.8292);

    /* Jamnagar */
    var latlng24 = new google.maps.LatLng(22.4844754, 70.0726434);

    /**Lakhnow */
    var latlng25 = new google.maps.LatLng(26.8542, 80.9448);
    var latlng26 = new google.maps.LatLng(26.8496, 81.0072);

    /**Kanpur */
    var latlng27 = new google.maps.LatLng(26.4878, 80.3206);
    var latlng28 = new google.maps.LatLng(26.4077, 80.3683);

    /**Meerut */
    var latlng29 = new google.maps.LatLng(29.0009, 77.7599);

    /**Banaras */
    var latlng30 = new google.maps.LatLng(25.3551, 82.9600);

    /**Gaziabad */
    var latlng31 = new google.maps.LatLng(28.6649, 77.3303);

    /**Agra */
    var latlng32 = new google.maps.LatLng(27.0952194, 78.1706854);

    /** UP Muzzafrnagar */
    var latlng33 = new google.maps.LatLng(29.4677, 77.7116);

    /** Brely */
    var latlng34 = new google.maps.LatLng(28.4026, 79.4245);

    /** Aligarh */
    var latlng35 = new google.maps.LatLng(27.85865, 78.09775);


    // 36 remaining

    /** Jaipur */
    var latlng37 = new google.maps.LatLng(26.9048, 75.7489);
    var latlng38 = new google.maps.LatLng(26.8177, 75.8617);

    /** Udaipur */
    var latlng39 = new google.maps.LatLng(24.5796, 73.6840);

    /** Jodhpur */
    var latlng40 = new google.maps.LatLng(26.90719, 72.83413);

    /** Bikaner */
    var latlng41 = new google.maps.LatLng(26.922070, 75.778885);

    /** Kotta */
    var latlng42 = new google.maps.LatLng(25.1359, 75.8494);
    var latlng43 = new google.maps.LatLng(26.8893, 75.8360);

    /** Ajmer */
    var latlng44 = new google.maps.LatLng(26.9048, 75.7489);

    /** Alwar */
    var latlng45 = new google.maps.LatLng(27.5620, 76.4939);

    /** Indore */
    var latlng46 = new google.maps.LatLng(22.7533, 75.8937);
    var latlng47 = new google.maps.LatLng(22.7130, 75.8236);

    /** Bhopal */
    var latlng48 = new google.maps.LatLng(23.1719, 77.4169);
    var latlng49 = new google.maps.LatLng(23.2313, 77.4326);

    /** Gwalior */
    var latlng50 = new google.maps.LatLng(26.2150, 78.2074);
    var latlng51 = new google.maps.LatLng(26.2674, 78.2077);

    /** Jabalpur */
    var latlng52 = new google.maps.LatLng(23.1874, 79.9051);
    var latlng53 = new google.maps.LatLng(23.1244, 79.9679);

    /** Amritsar*/
    var latlng54 = new google.maps.LatLng(31.823462, 75.205063);

    /** Jalandhar */
    var latlng55 = new google.maps.LatLng(31.3069, 75.5793);

    /** Ludhiyana */
    var latlng56 = new google.maps.LatLng(30.7491526, 75.7036977);

    /** Bhatinda */
    var latlng57 = new google.maps.LatLng(30.2198735, 74.9483);

    /** Chandigarh */
    var latlng58 = new google.maps.LatLng(30.596403, 76.843269);
    var latlng59 = new google.maps.LatLng(30.7036, 76.78024);

    /** Patiyala */
    var latlng60 = new google.maps.LatLng(30.3687, 76.3796);

    /**Faridabad  */
    var latlng61 = new google.maps.LatLng(28.3955, 77.3245);

    /** Panipat */
    var latlng62 = new google.maps.LatLng(29.3660542, 76.9882587);

    /** Ambala */
    var latlng63 = new google.maps.LatLng(30.3675, 76.7665);

    /** Gurugram */
    var latlng64 = new google.maps.LatLng(28.4030, 77.0690);

    /** Banglore */
    var latlng65 = new google.maps.LatLng(12.9304, 77.6784);
    var latlng66 = new google.maps.LatLng(13.0085, 77.6737);
    var latlng67 = new google.maps.LatLng(13.0007, 77.5576);
    var latlng68 = new google.maps.LatLng(13.0173, 77.6665);

    /** Manglore */
    var latlng69 = new google.maps.LatLng(13.0752840089248, 74.7936668049674);

    /** Hubli */
    var latlng70 = new google.maps.LatLng(15.3499, 75.1437);

    /** Mysore  */
    var latlng71 = new google.maps.LatLng(12.3059, 76.5976);
    var latlng72 = new google.maps.LatLng(12.2862, 76.6307);

    /** Kalburgi  */
    var latlng73 = new google.maps.LatLng(17.3290, 76.8278);

    /** Udpi */
    var latlng74 = new google.maps.LatLng(12.91448, 75.18597);

    /** Chennai */
    var latlng75 = new google.maps.LatLng(12.99372, 80.266);
    var latlng76 = new google.maps.LatLng(13.06938, 80.21713);
    var latlng77 = new google.maps.LatLng(13.0155206, 80.2404849);

    /** Coimbtore */
    var latlng78 = new google.maps.LatLng(11.0104173, 76.9498888);
    var latlng79 = new google.maps.LatLng(11.020522, 76.966698);

    /** Madurai*/
    var latlng80 = new google.maps.LatLng(9.9342752, 78.1459899);


    /* Mumbai*/
    var myOptions = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions2 = {
        zoom: 15,
        center: latlng2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions3 = {
        zoom: 15,
        center: latlng3,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions4 = {
        zoom: 15,
        center: latlng4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions5 = {
        zoom: 15,
        center: latlng5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions6 = {
        zoom: 15,
        center: latlng6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions7 = {
        zoom: 15,
        center: latlng7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };



    /* Pune*/

    var myOptions8 = {
        zoom: 15,
        center: latlng8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions9 = {
        zoom: 15,
        center: latlng9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions10 = {
        zoom: 15,
        center: latlng10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /* Aurangabad */
    var myOptions11 = {
        zoom: 15,
        center: latlng11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /* Nashik */
    var myOptions12 = {
        zoom: 15,
        center: latlng12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /* Nagpur  */
    var myOptions13 = {
        zoom: 15,
        center: latlng13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions14 = {
        zoom: 15,
        center: latlng14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /* Ahmedabad */
    var myOptions15 = {
        zoom: 15,
        center: latlng15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions16 = {
        zoom: 15,
        center: latlng16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions17 = {
        zoom: 15,
        center: latlng17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    /** Baroda */
    var myOptions18 = {
        zoom: 15,
        center: latlng18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions19 = {
        zoom: 15,
        center: latlng19,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Vapi */
    var myOptions20 = {
        zoom: 15,
        center: latlng20,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /**Surat */
    var myOptions21 = {
        zoom: 15,
        center: latlng21,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /**Gadhinagaar */
    var myOptions22 = {
        zoom: 15,
        center: latlng22,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /* Rajkot */
    var myOptions23 = {
        zoom: 15,
        center: latlng23,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /* Jamnagar */
    var myOptions24 = {
        zoom: 15,
        center: latlng24,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /**Lakhnow */
    var myOptions25 = {
        zoom: 15,
        center: latlng25,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions26 = {
        zoom: 15,
        center: latlng26,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /**Kanpur */
    var myOptions27 = {
        zoom: 15,
        center: latlng27,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions28 = {
        zoom: 15,
        center: latlng28,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Meerut */
    var myOptions29 = {
        zoom: 15,
        center: latlng29,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /**Banaras */
    var myOptions30 = {
        zoom: 15,
        center: latlng30,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /**Gaziabad */
    var myOptions31 = {
        zoom: 15,
        center: latlng31,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /**Agra */
    var myOptions32 = {
        zoom: 15,
        center: latlng32,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** UP Muzzafrnagar */
    var myOptions33 = {
        zoom: 15,
        center: latlng32,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Brely */
    var myOptions34 = {
        zoom: 15,
        center: latlng33,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Aligarh */
    var myOptions35 = {
        zoom: 15,
        center: latlng34,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };




    // 36 missing



    /** Jaipur */
    var myOptions37 = {
        zoom: 15,
        center: latlng37,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions38 = {
        zoom: 15,
        center: latlng38,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    /** Udaipur */
    var myOptions39 = {
        zoom: 15,
        center: latlng39,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Jodhpur */
    var myOptions40 = {
        zoom: 15,
        center: latlng40,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Bikaner */
    var myOptions41 = {
        zoom: 15,
        center: latlng41,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Kotta */
    var myOptions42 = {
        zoom: 15,
        center: latlng42,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions43 = {
        zoom: 15,
        center: latlng43,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Ajmer */
    var myOptions44 = {
        zoom: 15,
        center: latlng44,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Alwar */
    var myOptions45 = {
        zoom: 15,
        center: latlng45,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Indore */
    var myOptions46 = {
        zoom: 15,
        center: latlng46,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions47 = {
        zoom: 15,
        center: latlng47,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    /** Bhopal */
    var myOptions48 = {
        zoom: 15,
        center: latlng48,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions49 = {
        zoom: 15,
        center: latlng49,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    /** Gwalior */
    var myOptions50 = {
        zoom: 15,
        center: latlng50,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions51 = {
        zoom: 15,
        center: latlng51,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    /** Jabalpur */
    var myOptions52 = {
        zoom: 15,
        center: latlng52,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions53 = {
        zoom: 15,
        center: latlng53,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Amritsar */
    var myOptions54 = {
        zoom: 15,
        center: latlng54,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Jalandhar */
    var myOptions55 = {
        zoom: 15,
        center: latlng55,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    /** Ludhiyana */
    var myOptions56 = {
        zoom: 15,
        center: latlng56,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    /** Bhatind */
    var myOptions57 = {
        zoom: 15,
        center: latlng57,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    /* Chandigarh*/
    var myOptions58 = {
        zoom: 15,
        center: latlng58,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions59 = {
        zoom: 15,
        center: latlng59,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /* Patiyala */
    var myOptions60 = {
        zoom: 15,
        center: latlng60,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Faridabad */
    var myOptions61 = {
        zoom: 15,
        center: latlng61,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Panipat */
    var myOptions62 = {
        zoom: 15,
        center: latlng62,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Ambala */
    var myOptions63 = {
        zoom: 15,
        center: latlng63,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Gurugram */
    var myOptions64 = {
        zoom: 15,
        center: latlng64,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Banglore */
    var myOptions65 = {
        zoom: 15,
        center: latlng65,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions66 = {
        zoom: 15,
        center: latlng66,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions67 = {
        zoom: 15,
        center: latlng67,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions68 = {
        zoom: 15,
        center: latlng68,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Manglore */
    var myOptions69 = {
        zoom: 15,
        center: latlng69,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Hubli */
    var myOptions70 = {
        zoom: 15,
        center: latlng70,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Mysore  */
    var myOptions71 = {
        zoom: 15,
        center: latlng71,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions72 = {
        zoom: 15,
        center: latlng72,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Kalburgi  */
    var myOptions73 = {
        zoom: 15,
        center: latlng73,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Udpi */
    var myOptions74 = {
        zoom: 15,
        center: latlng74,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Chennai */
    var myOptions75 = {
        zoom: 15,
        center: latlng75,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions76 = {
        zoom: 15,
        center: latlng76,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions77 = {
        zoom: 15,
        center: latlng77,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Coimbtore */
    var myOptions78 = {
        zoom: 15,
        center: latlng78,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myOptions79 = {
        zoom: 15,
        center: latlng79,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /** Madurai*/
    var myOptions80 = {
        zoom: 15,
        center: latlng80,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    /* Mumbai*/
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    var map2 = new google.maps.Map(document.getElementById("map_canvas2"), myOptions2);
    var map3 = new google.maps.Map(document.getElementById("map_canvas3"), myOptions3);
    var map4 = new google.maps.Map(document.getElementById("map_canvas4"), myOptions4);
    var map5 = new google.maps.Map(document.getElementById("map_canvas5"), myOptions5);
    var map6 = new google.maps.Map(document.getElementById("map_canvas6"), myOptions6);
    var map7 = new google.maps.Map(document.getElementById("map_canvas7"), myOptions7);

    /* Pune*/
    var map8 = new google.maps.Map(document.getElementById("map_canvas8"), myOptions8);
    var map9 = new google.maps.Map(document.getElementById("map_canvas9"), myOptions9);
    var map10 = new google.maps.Map(document.getElementById("map_canvas10"), myOptions10);

    /* Aurangabad */
    var map11 = new google.maps.Map(document.getElementById("map_canvas11"), myOptions11);

    /* Nashik */
    var map12 = new google.maps.Map(document.getElementById("map_canvas12"), myOptions12);

    /* Nagpur  */
    var map13 = new google.maps.Map(document.getElementById("map_canvas13"), myOptions13);
    var map14 = new google.maps.Map(document.getElementById("map_canvas14"), myOptions14);

    /* Ahmedabad */
    var map15 = new google.maps.Map(document.getElementById("map_canvas15"), myOptions15);
    var map16 = new google.maps.Map(document.getElementById("map_canvas16"), myOptions16);
    var map17 = new google.maps.Map(document.getElementById("map_canvas17"), myOptions17);

    /** Baroda */
    var map18 = new google.maps.Map(document.getElementById("map_canvas18"), myOptions18);
    var map19 = new google.maps.Map(document.getElementById("map_canvas19"), myOptions19);

    /** Vapi */
    var map20 = new google.maps.Map(document.getElementById("map_canvas20"), myOptions20);

    /**Surat*/
    var map21 = new google.maps.Map(document.getElementById("map_canvas21"), myOptions21);

    /**Gadhinagaar */
    var map22 = new google.maps.Map(document.getElementById("map_canvas22"), myOptions22);

    /* Rajkot */
    var map23 = new google.maps.Map(document.getElementById("map_canvas23"), myOptions23);
    /* Jamnagar */
    var map24 = new google.maps.Map(document.getElementById("map_canvas24"), myOptions24);

    /**Lakhnow */
    var map25 = new google.maps.Map(document.getElementById("map_canvas25"), myOptions25);
    var map26 = new google.maps.Map(document.getElementById("map_canvas26"), myOptions26);

    /**Kanpur */
    var map27 = new google.maps.Map(document.getElementById("map_canvas27"), myOptions27);
    var map28 = new google.maps.Map(document.getElementById("map_canvas28"), myOptions28);

    /** Meerut */
    var map29 = new google.maps.Map(document.getElementById("map_canvas29"), myOptions29);

    /**Banaras */
    var map30 = new google.maps.Map(document.getElementById("map_canvas30"), myOptions30);

    /**Gaziabad */
    var map31 = new google.maps.Map(document.getElementById("map_canvas31"), myOptions31);

    /**Agra */
    var map32 = new google.maps.Map(document.getElementById("map_canvas32"), myOptions32);

    /** UP Muzzafrnagar */
    var map33 = new google.maps.Map(document.getElementById("map_canvas33"), myOptions33);

    /** Brely */
    var map34 = new google.maps.Map(document.getElementById("map_canvas34"), myOptions34);

    /** Aligarh */
    var map35 = new google.maps.Map(document.getElementById("map_canvas35"), myOptions35);

    //36 remain

    /** Jaipur */
    var map37 = new google.maps.Map(document.getElementById("map_canvas37"), myOptions37);
    var map38 = new google.maps.Map(document.getElementById("map_canvas38"), myOptions38);

    /** Udaipur */
    var map39 = new google.maps.Map(document.getElementById("map_canvas39"), myOptions39);

    /** Jodhpur */
    var map40 = new google.maps.Map(document.getElementById("map_canvas40"), myOptions40);

    /** Bikaner */
    var map41 = new google.maps.Map(document.getElementById("map_canvas41"), myOptions41);

    /** Kotta */
    var map42 = new google.maps.Map(document.getElementById("map_canvas42"), myOptions42);
    var map43 = new google.maps.Map(document.getElementById("map_canvas43"), myOptions43);

    /** Ajmer */
    var map44 = new google.maps.Map(document.getElementById("map_canvas44"), myOptions44);

    /** Alwar */
    var map45 = new google.maps.Map(document.getElementById("map_canvas45"), myOptions45);

    /** Indore */
    var map46 = new google.maps.Map(document.getElementById("map_canvas46"), myOptions46);
    var map47 = new google.maps.Map(document.getElementById("map_canvas47"), myOptions47);

    /** Bhopal */
    var map48 = new google.maps.Map(document.getElementById("map_canvas48"), myOptions48);
    var map49 = new google.maps.Map(document.getElementById("map_canvas49"), myOptions49);

    /** Gwalior */
    var map50 = new google.maps.Map(document.getElementById("map_canvas50"), myOptions50);
    var map51 = new google.maps.Map(document.getElementById("map_canvas51"), myOptions51);

    /** Jabalpur */
    var map52 = new google.maps.Map(document.getElementById("map_canvas52"), myOptions52);
    var map53 = new google.maps.Map(document.getElementById("map_canvas53"), myOptions53);

    /** Amritsar*/
    var map54 = new google.maps.Map(document.getElementById("map_canvas54"), myOptions54);

    /** Jalandhar */
    var map55 = new google.maps.Map(document.getElementById("map_canvas55"), myOptions55);

    /** Ludhiyana */
    var map56 = new google.maps.Map(document.getElementById("map_canvas56"), myOptions56);

    /** bhatinda */
    var map57 = new google.maps.Map(document.getElementById("map_canvas57"), myOptions57);

    /** chandigarh */
    var map58 = new google.maps.Map(document.getElementById("map_canvas58"), myOptions58);
    var map59 = new google.maps.Map(document.getElementById("map_canvas59"), myOptions59);

    /** Patiyala */
    var map60 = new google.maps.Map(document.getElementById("map_canvas60"), myOptions60);

    /** Faridabad */
    var map61 = new google.maps.Map(document.getElementById("map_canvas61"), myOptions61);

    /** Panipat */
    var map62 = new google.maps.Map(document.getElementById("map_canvas62"), myOptions62);

    /** Ambala */
    var map63 = new google.maps.Map(document.getElementById("map_canvas63"), myOptions63);

    /** Gurugram */
    var map64 = new google.maps.Map(document.getElementById("map_canvas64"), myOptions64);

    /** Banglore */
    var map65 = new google.maps.Map(document.getElementById("map_canvas65"), myOptions65);
    var map66 = new google.maps.Map(document.getElementById("map_canvas66"), myOptions66);
    var map67 = new google.maps.Map(document.getElementById("map_canvas67"), myOptions67);
    var map68 = new google.maps.Map(document.getElementById("map_canvas68"), myOptions68);

    /** Manglore */
    var map69 = new google.maps.Map(document.getElementById("map_canvas69"), myOptions69);

    /** Hubli */
    var map70 = new google.maps.Map(document.getElementById("map_canvas70"), myOptions70);

    /** Mysore  */
    var map71 = new google.maps.Map(document.getElementById("map_canvas71"), myOptions71);
    var map72 = new google.maps.Map(document.getElementById("map_canvas72"), myOptions72);

    /** Kalburgi  */
    var map73 = new google.maps.Map(document.getElementById("map_canvas73"), myOptions73);

    /** Udpi */
    var map74 = new google.maps.Map(document.getElementById("map_canvas74"), myOptions74);

    /** Chennai */
    var map75 = new google.maps.Map(document.getElementById("map_canvas75"), myOptions75);
    var map76 = new google.maps.Map(document.getElementById("map_canvas76"), myOptions76);
    var map77 = new google.maps.Map(document.getElementById("map_canvas77"), myOptions77);

    /** Coimbtore */
    var map78 = new google.maps.Map(document.getElementById("map_canvas78"), myOptions78);
    var map79 = new google.maps.Map(document.getElementById("map_canvas79"), myOptions79);

    /** Madurai */
    var map80 = new google.maps.Map(document.getElementById("map_canvas80"), myOptions80);



    /* Mumbai*/
    var myMarker = new google.maps.Marker(
        {
            position: latlng,
            map: map,
            title: "Bandra West"
        });

    var myMarker2 = new google.maps.Marker(
        {
            position: latlng2,
            map: map2,
            title: "Colaba"
        });

    var myMarker3 = new google.maps.Marker(
        {
            position: latlng3,
            map: map3,
            title: "Juhu"
        });

    var myMarker4 = new google.maps.Marker(
        {
            position: latlng4,
            map: map4,
            title: "Cuffe Parade"
        });

    var myMarker5 = new google.maps.Marker(
        {
            position: latlng5,
            map: map5,
            title: "Malabar Hill"
        });

    var myMarker6 = new google.maps.Marker(
        {
            position: latlng6,
            map: map6,
            title: "Worli"
        });

    var myMarker6 = new google.maps.Marker(
        {
            position: latlng7,
            map: map7,
            title: "Tardeo"
        });


    /* Pune*/
    var myMarker7 = new google.maps.Marker(
        {
            position: latlng8,
            map: map8,
            title: "Koregaon Park"
        });

    var myMarker8 = new google.maps.Marker(
        {
            position: latlng9,
            map: map9,
            title: "Viman Nagar"
        });

    var myMarker9 = new google.maps.Marker(
        {
            position: latlng10,
            map: map10,
            title: "Kharadi"
        });



    /* Aurangabad */
    var myMarker10 = new google.maps.Marker(
        {
            position: latlng11,
            map: map11,
            title: "N-3 Cidco"
        });

    /* Nashik */
    var myMarker11 = new google.maps.Marker(
        {
            position: latlng12,
            map: map12,
            title: "Indira Nagar"
        });


    /* Nagpur  */
    var myMarker12 = new google.maps.Marker(
        {
            position: latlng13,
            map: map13,
            title: "Trimurti Nagar"
        });

    var myMarker13 = new google.maps.Marker(
        {
            position: latlng14,
            map: map14,
            title: "Narendra Nagar"
        });


    /* Ahmedabad */
    var myMarker14 = new google.maps.Marker(
        {
            position: latlng15,
            map: map15,
            title: "Jagatpur"
        });

    var myMarker15 = new google.maps.Marker(
        {
            position: latlng16,
            map: map16,
            title: "S G Highway"
        });

    var myMarker16 = new google.maps.Marker(
        {
            position: latlng17,
            map: map17,
            title: "Ambli - Bopal Road Latitude"
        });


    /** Baroda */
    var myMarker17 = new google.maps.Marker(
        {
            position: latlng18,
            map: map18,
            title: "Manjalpur"
        });

    var myMarker18 = new google.maps.Marker(
        {
            position: latlng19,
            map: map19,
            title: "Waghodia Road"
        });


    /** Vapi */
    var myMarker19 = new google.maps.Marker(
        {
            position: latlng20,
            map: map20,
            title: "Dungra"
        });

    /**Surat */
    var myMarker20 = new google.maps.Marker(
        {
            position: latlng21,
            map: map21,
            title: "Dumas Road"
        });

    /**Gadhinagaar */
    var myMarker21 = new google.maps.Marker(
        {
            position: latlng22,
            map: map22,
            title: "Urjanagar 1"
        });

    /**Rajkot*/
    var myMarker22 = new google.maps.Marker(
        {
            position: latlng23,
            map: map23,
            title: "Kalavad Road"
        });

    /* Jamnagar */
    var myMarker23 = new google.maps.Marker(
        {
            position: latlng24,
            map: map24,
            title: "Rameshwar Nagar"
        });



    /**Lakhnow */
    var myMarker24 = new google.maps.Marker(
        {
            position: latlng25,
            map: map25,
            title: "Hazratganjr"
        });
    var myMarker25 = new google.maps.Marker(
        {
            position: latlng26,
            map: map26,
            title: "Gomti Nagar"
        });


    /**Kanpur */
    var myMarker26 = new google.maps.Marker(
        {
            position: latlng27,
            map: map27,
            title: "Swaroop Nagar"
        });
    var myMarker27 = new google.maps.Marker(
        {
            position: latlng28,
            map: map28,
            title: "Shyam Nagar"
        });


    /** Meerut */
    var myMarker28 = new google.maps.Marker(
        {
            position: latlng29,
            map: map29,
            title: "Ganga Nagar"
        });

    /**Banaras */
    var myMarker29 = new google.maps.Marker(
        {
            position: latlng30,
            map: map30,
            title: "Shivpur"
        });

    /**Gaziabad */
    var myMarker30 = new google.maps.Marker(
        {
            position: latlng31,
            map: map31,
            title: "Chander Nagar"
        });

    /**Agra */
    var myMarker31 = new google.maps.Marker(
        {
            position: latlng32,
            map: map32,
            title: "Fatehabad Road"
        });

    /** UP Muzzafrnagar */
    var myMarker32 = new google.maps.Marker(0 -
    {
        position: latlng33,
        map: map33,
        title: "New Mandi"
    });


    /** Brely */
    var myMarker33 = new google.maps.Marker(
        {
            position: latlng34,
            map: map34,
            title: "Izatnagar"
        });


    /** Aligarh */
    var myMarker34 = new google.maps.Marker(
        {
            position: latlng35,
            map: map35,
            title: "Ramghat Road"
        });


    // 36 Remaining

    /** Jaipur */
    var myMarker37 = new google.maps.Marker(
        {
            position: latlng37,
            map: map37,
            title: "Vaishali Nagar"
        });

    var myMarker38 = new google.maps.Marker(
        {
            position: latlng38,
            map: map38,
            title: "Jagatpura"
        });


    /** Udaipur */
    var myMarker39 = new google.maps.Marker(
        {
            position: latlng39,
            map: map39,
            title: "Jagdish Chowk"
        });


    /** Jodhpur */
    var myMarker40 = new google.maps.Marker(
        {
            position: latlng40,
            map: map40,
            title: "Residency Road"
        });

    /** Bikaner */
    var myMarker41 = new google.maps.Marker(
        {
            position: latlng41,
            map: map41,
            title: "Jaipur Road"
        });

    /** Kotta */
    var myMarker42 = new google.maps.Marker(
        {
            position: latlng42,
            map: map42,
            title: "Rajiv Gandhi Nagar"
        });
    var myMarker43 = new google.maps.Marker(
        {
            position: latlng43,
            map: map43,
            title: "Jawahar Nagar"
        });


    /** Ajmer */
    var myMarker44 = new google.maps.Marker(
        {
            position: latlng44,
            map: map44,
            title: "Vaishali Nagar"
        });


    /** Alwar */
    var myMarker45 = new google.maps.Marker(
        {
            position: latlng45,
            map: map45,
            title: "Ram Nagar"
        });


    /** Indore */
    var myMarker46 = new google.maps.Marker(
        {
            position: latlng46,
            map: map46,
            title: "Vijay Nagar"
        });
    var myMarker47 = new google.maps.Marker(
        {
            position: latlng47,
            map: map47,
            title: "Chandan Nagar"
        });


    /** Bhopal */
    var myMarker48 = new google.maps.Marker(
        {
            position: latlng48,
            map: map48,
            title: "Kolar Road"
        });
    var myMarker49 = new google.maps.Marker(
        {
            position: latlng49,
            map: map49,
            title: "Maharana Pratap Nagar"
        });


    /** Gwalior */
    var myMarker50 = new google.maps.Marker(
        {
            position: latlng50,
            map: map50,
            title: "Thatipur"
        });
    var myMarker51 = new google.maps.Marker(
        {
            position: latlng51,
            map: map51,
            title: "Deen Dayal Nagar"
        });


    /** Jabalpur */
    var myMarker52 = new google.maps.Marker(
        {
            position: latlng52,
            map: map52,
            title: "Vijay Nagar"
        });
    var myMarker53 = new google.maps.Marker(
        {
            position: latlng53,
            map: map53,
            title: "Tilhari"
        });


    /** Amritsar*/
    var myMarker54 = new google.maps.Marker(
        {
            position: latlng54,
            map: map54,
            title: "Batala"
        });

    /** Jalandhar */
    var myMarker55 = new google.maps.Marker(
        {
            position: latlng55,
            map: map55,
            title: "Jalandar"
        });
    /** Ludhiyana */
    var myMarker56 = new google.maps.Marker(
        {
            position: latlng56,
            map: map56,
            title: "Sarabha Nagar"
        });

    /** Bhatinda */
    var myMarker57 = new google.maps.Marker(
        {
            position: latlng57,
            map: map57,
            title: "Chandsar Basti"
        });

    /** chandigarh */
    var myMarker58 = new google.maps.Marker(
        {
            position: latlng58,
            map: map58,
            title: "Dera Bassi"
        });
    var myMarker59 = new google.maps.Marker(
        {
            position: latlng59,
            map: map59,
            title: "Sector 44"
        });

    /** Patiyala */
    var myMarker60 = new google.maps.Marker(
        {
            position: latlng60,
            map: map60,
            title: "Anand Nagar"
        });

    /** Faridabad */
    var myMarker61 = new google.maps.Marker(
        {
            position: latlng61,
            map: map61,
            title: "Sector 15"
        });

    /** Panipat */
    var myMarker62 = new google.maps.Marker(
        {
            position: latlng62,
            map: map62,
            title: "Huda"
        });

    /** Ambala */
    var myMarker63 = new google.maps.Marker(
        {
            position: latlng63,
            map: map63,
            title: "Manav Chowk"
        });

    /** Gurugram */
    var myMarker64 = new google.maps.Marker(
        {
            position: latlng64,
            map: map64,
            title: "Sector 65"
        });

    /** Banglore */
    var myMarker65 = new google.maps.Marker(
        {
            position: latlng65,
            map: map65,
            title: "Bellandur"
        });
    var myMarker66 = new google.maps.Marker(
        {
            position: latlng66,
            map: map66,
            title: "Ramamurthy Nagar"
        });
    var myMarker67 = new google.maps.Marker(
        {
            position: latlng67,
            map: map67,
            title: "Gayathri  Nagar"
        });
    var myMarker68 = new google.maps.Marker(
        {
            position: latlng68,
            map: map68,
            title: "Hoysalanagar"
        });


    /** Manglore */
    var myMarker69 = new google.maps.Marker(
        {
            position: latlng69,
            map: map69,
            title: "Mulki"
        });

    /** Hubli */
    var myMarker70 = new google.maps.Marker(
        {
            position: latlng70,
            map: map70,
            title: "JC Nagar"
        });

    /** Mysore  */
    var myMarker71 = new google.maps.Marker(
        {
            position: latlng71,
            map: map71,
            title: "Bhogadi"
        });
    var myMarker72 = new google.maps.Marker(
        {
            position: latlng72,
            map: map72,
            title: "Kuvempu Nagara"
        });

    /** Kalburgi  */
    var myMarker73 = new google.maps.Marker(
        {
            position: latlng73,
            map: map73,
            title: "Brhampur"
        });

    /** Udpi */
    var myMarker74 = new google.maps.Marker(
        {
            position: latlng74,
            map: map74,
            title: "Katapadi"
        });

    /** Chennai */
    var myMarker75 = new google.maps.Marker(
        {
            position: latlng75,
            map: map75,
            title: "Besantnagar"
        });

    var myMarker76 = new google.maps.Marker(
        {
            position: latlng76,
            map: map76,
            title: "Anna Nagar"
        });
    var myMarker77 = new google.maps.Marker(
        {
            position: latlng77,
            map: map77,
            title: "Kotturpuram"
        });

    /** Coimbtore */
    var myMarker78 = new google.maps.Marker(
        {
            position: latlng78,
            map: map78,
            title: "R.S.Puram East"
        });

    var myMarker79 = new google.maps.Marker(
        {
            position: latlng79,
            map: map79,
            title: "Gandhipuram"
        });

    /** Madurai*/
    var myMarker80 = new google.maps.Marker(
        {
            position: latlng80,
            map: map80,
            title: "KK Nagar"
        });


    google.maps.event.addDomListener(map, map2, map3, map4, map5, map6, map7, myMarker, myMarker2, myMarker3, myMarker4, myMarker5, myMarker6, myMarker7, myMarker8,
        myMarker9, myMarker10, myMarker11, myMarker12, myMarker13, myMarker14, myMarker15, myMarker16, myMarker17, myMarker18, myMarker19, myMarker20, myMarker21, myMarker22,
        myMarker23, myMarker24, myMarker25, myMarker26, myMarker27, myMarker28, myMarker29, myMarker30, myMarker31, myMarker32, myMarker33, myMarker34, myMarker37, myMarker38,
        myMarker39, myMarker40, myMarker41, myMarker42, myMarker43, myMarker44, myMarker45, myMarker46, myMarker47, myMarker48, myMarker49, myMarker50, myMarker51, myMarker52,
        myMarker53, myMarker54, myMarker55, myMarker56, myMarker57, myMarker58, myMarker59, myMarker60, myMarker61, myMarker62, myMarker63, myMarker65, myMarker66, myMarker67,
        myMarker68, myMarker69, myMarker70, myMarker71, myMarker72, myMarker73, myMarker74, myMarker75, myMarker76, myMarker77, myMarker78, myMarker79, myMarker80, initialize);
}


