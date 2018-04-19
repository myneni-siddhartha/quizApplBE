"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
const moment = require('moment');
Promise.promisifyAll(mongoose);
var mongoose = require('mongoose');
var collegeSchema = new mongoose.Schema({
    College: {
        type: String,
    },
    city: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }],
    programs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Departement'
    }],
    state: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State'
    }],
    region: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Region'
    }],
    viewCount:{
      type:Number,
      default: 0.0
    },

    establishment_Year: {
          type:String
    },

    type: {
        type: String
    },

    Popular: {
        type: Number
    },
    

    logo: {
        type: String
    },

    Placement_Email_Id: {
        type: String
    },

    Placement_Mobile_No: {
        type: String
    },

    contact_no: {
        type: String
    },

    Placement_Head: {
        type: String
    },

    Source: {
        type: String
    },

    isLive: {
        type: Boolean,
        default: false
    },
    isAutoGenerated: {
        type: Boolean,
        
    },
    isAutoGeneratedByAdmin: {
        type: Boolean,
            },
    liveBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AdminUser'
    },
    liveOn:{
        type:Date,
        default:moment().format()
    },
    isNewData:{
        type:Boolean,
        default:true
    },

    isSmart: {
        type: Number,
        default: 0
    },
    
    website_url : {
        type : String,
        default: null
    },

    about: {
        type: String,
        default: null
    },
    
    slug: {
        type: String,
        default: null
    },

    ownership: {
        type: String,
        default: null
    },

    isNewData: {
        type: Boolean,
        default: true
    },

    accreditations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'universityAccreditation'
    }],

    affiliations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Affiliation'
    }],

    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AdminUser'
         
    },
    created_date:{
        type:Date,
        default:moment().format()
    }
    ,
    noOfStudents:{
        type:Number
    },
    
    placement_contact : [{
        name : {
            type : String
        },
        email: {
            type: String
        },
        mobile: {
            type: String
        }
    }],
     

    placements: [{
        batch: {
            type: String
        },
        average_package: {
            type: String
        },
        highest_package: {
            type: String
        }
    }],

    companies: [{
        company_name: {
            type: String
        },
        company_url: {
            type: String
        },
        company_logo: {
            type: String
        }
    }],

    totalReviews:{
        type:Number,
        default:0
    },
    reviewsAverage:{
        type:Number,
        default: 0
    },

    univeristyIdLink:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'University',
        default: null
    }
    // name: {
    //     type: String,
    //     // required: [true, "University name required"],
    //     trim: true,
    //     lowercase: true,
    //     type: String,
    // },
    // address: {
    //     // required: [true, "University address required"],
    //     trim: true,
    //     lowercase: true,
    // },
    // phoneNumbers: [{
    //     type: String,
    //     // required: [true, "Phone number required"]
    // }],
    // pinCode: String,
    // country: {
    //     type: String,
    //     // required: [true, "University country required"]

    // },
    // state: {
    //     type: String,
    //     // required: [true, "University state required"]

    // },
    // city: {
    //     type: String,
    //     // required: [true, "University city required"]

    // },
    // establishmentYear: Number,
    // gradingSystem: {
    //     type: String,
    //     enum: ['CGPA', 'PERCENTAGE']
    // },
    // gradingOutOf: {
    //     type: String
    // },
    // totalStudentsRange: {
    //     type: String,
    //     // required: [true, "University students range required"]

    // },
    // studentProfileEditable: {
    //     type: String,
    // }
    // ,
    // numberOfCampus: {
    //     type: String,
    // },
    // universityLogoAttachment: {
    //     type: String,
    // },
    // description: { type: String, trim: true },
    // affiliations: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Affiliation'
    // }],
    // universityType: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'UniversityType'
    // },
    // coursesOffered: [{
    //     type: String,
    //     lowercase: true
    // }],
    // created_by: {
    //     type: String,
    //     default: null
    // },
    // created_on: {
    //     type: Date,
    //     default: moment().format()
    // },
    // modified_on: {
    //     type: Date,
    //     default: moment().format()
    // },
    // modified_by: {
    //     type: String,
    //     default: null
    // },

    // domainName: {
    //     type: String,
    //     unique: true,
    //     lowercase: true,
    //     trim: true
    // },
    // logoName: {
    //     type: String,
    // },
   , isDeleted: { type: Boolean, default: false }
}, { versionKey: false });
var University = mongoose.model('College', collegeSchema);
module.exports = University;
