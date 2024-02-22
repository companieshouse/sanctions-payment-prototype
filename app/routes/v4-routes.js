//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


  // ******* filter-question ********************************
  router.get('/v4/filter-question', function (req, res) {
    // Set URl
    res.render('v4/filter-question', {
      currentUrl: req.originalUrl
    })
  })
  


  // ******* ERROR filter-question ********************************
  router.post('/v4/filter-question', function (req, res) {
    // Create empty array
    var errors = []
  
    // Check if user has filled out a value
    if (typeof req.session.data['applyToYou'] === 'undefined') {
      // No value so add error to array (the Error summary)
      errors.push({
        text: 'Select which of these apply to the penalty, or select \'None of these\'',
        href: '#applyToYou'
      })
  
      // Re-show page with error value as true so errors will show
      res.render('v4/filter-question', {
        errorApplyToYou: true,
        errorList: errors
      })
    } else {
          // User inputted a specific value, in this case 'none'
          if (req.session.data['applyToYou'] == 'none') {   // this was === which doesn't work, changing to == seems to work?!
            res.redirect('/v4/sign-in')
          } else {
            // User inputted any other value
            res.redirect('/v4/stop-you-need-to-pay-another-way')
          }
    }
  })



    // // ******* ERROR penalty details ********************************
    // router.post('/v4/penalty-details', function (req, res) {
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
    //     res.render('v4/penalty-details', {
    //       errorPenaltyReference: true,
    //       errorList: errors
    //     })           
    //   } else {
    //       // If selected goes to next page
    //       res.redirect('/v4/penalty-summary')
    //     }           
    //   })
  
  




  module.exports=router;

