//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here







//   // ******* penalty type question ********************************

// router.post('/v8/02-what-does-the-penalty-reference-start-with', function(request, response) {
//   var penalty = request.body.penalty; // Assuming you're using body-parser middleware to parse the form data

//   if (penalty === "sanction") {
//     response.redirect("/v8/04-penalty-details-sanction");
//   } else if (penalty === "roe") {
//     response.redirect("/v8/04c-penalty-details-roe");
//   } else if (penalty === "lfp") {
//     response.redirect("/v8/04b-penalty-details-lfp");
//   } else {
//     // Handle any other case or error scenario
//     response.redirect("/error-page");
//   }
// });




  // ******* filter-question ********************************
  router.get('/v8/filter-question', function (req, res) {
    // Set URl
    res.render('v8/filter-question', {
      currentUrl: req.originalUrl
    })
  })
  


  // ******* ERROR filter-question ********************************
  // router.post('/v8/filter-question', function (req, res) {
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
    //  res.render('v8/filter-question', {
     //   errorApplyToYou: true,
    //    errorList: errors
   //   })
 //  } else {
          // User inputted a specific value, in this case 'none'
       //   if (req.session.data['applyToYou'] == 'none') {   // this was === which doesn't work, changing to == seems to work?!
        //    res.redirect('/v8/sign-in')
       //   } else {
            // User inputted any other value
        //    res.redirect('/v8/stop-you-need-to-pay-another-way')
      //    }
   // }
 // })



    // // ******* ERROR penalty details ********************************
    // router.post('/v8/penalty-details', function (req, res) {
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
    //     res.render('v8/penalty-details', {
    //       errorPenaltyReference: true,
    //       errorList: errors
    //     })           
    //   } else {
    //       // If selected goes to next page
    //       res.redirect('/v8/penalty-summary')
    //     }           
    //   })
  
  
    // routes for 'What does the penalty reference start with
    router.post('/v8/03-sign-in', function(request, response) {
       var penalty = request.session.data['penalty']
          if (penalty == "lfp") {
                response.redirect("/v8/04-penalty-details-sanction")
              } else if (penalty == "roe") {
                response.redirect("/v8/04c-penalty-details-roe")
               } else {
             // sanction
                 response.redirect("/error-page")
               }
             });


    router.post('/v8/02-what-does-the-penalty-reference-start-with', function(request, response) {
       response.redirect("/v8/03-sign-in")
                
               });
  



  module.exports=router;

