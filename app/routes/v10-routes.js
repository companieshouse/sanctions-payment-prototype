//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here







//   // ******* penalty type question ********************************

// router.post('/v9/02-what-does-the-penalty-reference-start-with', function(request, response) {
//   var penalty = request.body.penalty; // Assuming you're using body-parser middleware to parse the form data

//   if (penalty === "sanction") {
//     response.redirect("/v9/04-penalty-details-sanction");
//   } else if (penalty === "roe") {
//     response.redirect("/v9/04c-penalty-details-roe");
//   } else if (penalty === "lfp") {
//     response.redirect("/v9/04b-penalty-details-lfp");
//   } else {
//     // Handle any other case or error scenario
//     response.redirect("/error-page");
//   }
// });




  // ******* filter-question ********************************
  router.get('/v9/filter-question', function (req, res) {
    // Set URl
    res.render('v9/filter-question', {
      currentUrl: req.originalUrl
    })
  })
  


  // ******* ERROR filter-question ********************************
  // router.post('/v9/filter-question', function (req, res) {
    // Create empty array
   // var errors = []
  
    // Check if user has filled out a value
  //  if (typeof req.session.data['applyToYou'] === 'undefined') {
      // No value so add error to array (the Error summary)
  //    errors.push({
  //      text: 'Select which of these apply to the penalty, or select \'None of these\'',
     //   href: '#applyToYou'
   //   })
  
      // Re-show page with error value as true so errors will show
    //  res.render('v9/filter-question', {
     //   errorApplyToYou: true,
    //    errorList: errors
   //   })
 //  } else {
          // User inputted a specific value, in this case 'none'
       //   if (req.session.data['applyToYou'] == 'none') {   // this was === which doesn't work, changing to == seems to work?!
        //    res.redirect('/v9/sign-in')
       //   } else {
            // User inputted any other value
        //    res.redirect('/v9/stop-you-need-to-pay-another-way')
      //    }
   // }
 // })



    // // ******* ERROR penalty details ********************************
    // router.post('/v9/penalty-details', function (req, res) {
    //   // Create empty array
    //   var errors = []
    
    //   // Check if user has filled out a value
    //   if (typeof req.session.data['penaltyReference'] === 'undefined') {
    //     // No value so add error to array (the Error summary)
    //     errors.push({
    //       text: 'Enter a penalty reference number',
    //       href: '#penaltyReference'
    //     })
    
    //     // Re-show page with error value as true so errors will show
    //     res.render('v9/penalty-details', {
    //       errorPenaltyReference: true,
    //       errorList: errors
    //     })           
    //   } else {
    //       // If selected goes to next page
    //       res.redirect('/v9/penalty-summary')
    //     }           
    //   })
  
  
    // routes for 'What does the penalty reference start with
    router.post('/v9/03-sign-in', function(request, response) {
       var penalty = request.session.data['penalty']
          if (penalty == "lfp") {
                response.redirect("/v9/04b-penalty-details-lfp")
              } else if (penalty == "roe") {
                response.redirect("/v9/04c-penalty-details-roe")
               } else {
             // sanction
                 response.redirect("/v9/04-penalty-details-sanction")
               }
             });


    router.post('/v9/02-what-does-the-penalty-reference-start-with', function(request, response) {
       response.redirect("/v9/03-sign-in")
                
               });
  

               // routes for Bacs
    router.post('/v9/bank-transfer/which-penalty-service', function(request, response) {
      var bacsRef = request.session.data['bacsRef']
         if (bacsRef == "A") {
               response.redirect("/v9/bank-transfer/late-filing-details")
             } else if (bacsRef == "P") {
               response.redirect("/v9/bank-transfer/sanctions-details")
              } else {
            // sanction
                response.redirect("/v9/bank-transfer/roe-details")
              }
            });



  module.exports=router;

