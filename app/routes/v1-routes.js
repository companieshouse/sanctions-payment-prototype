//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


  // ******* filter-question ********************************
  router.get('/v1/filter-question', function (req, res) {
    // Set URl
    res.render('v1/filter-question', {
      currentUrl: req.originalUrl
    })
  })
  


  // ******* ERROR filter-question ********************************
  router.post('/v1/filter-question', function (req, res) {
    // Create empty array
    var errors = []
  
    // Check if user has filled out a value
    if (typeof req.session.data['applyToYou'] === 'undefined') {
      // No value so add error to array (the Error summary)
      errors.push({
        text: 'You must select any options that apply',
        href: '#applyToYou'
      })
  
      // Re-show page with error value as true so errors will show
      res.render('v1/filter-question', {
        errorApplyToYou: true,
        errorList: errors
      })
    } else {
          // User inputted a specific value, in this case 'none'
          if (req.session.data['applyToYou'] == 'none') {   // this was === which doesn't work, changing to == seems to work?!
            res.redirect('/v1/sign-in')
          } else {
            // User inputted any other value
            res.redirect('/v1/stop-cannot-use-online-service')
          }
    }
  })



    // ******* ERROR penalty details ********************************
    router.post('/v1/penalty-details', function (req, res) {
      // Create empty array
      var errors = []
    
      // Check if user has filled out a value
      if (typeof req.session.data['applyToYou'] === 'undefined') {
        // No value so add error to array (the Error summary)
        errors.push({
          text: 'You must select any options that apply',
          href: '#applyToYou'
        })
    
        // Re-show page with error value as true so errors will show
        res.render('v1/filter-question', {
          errorApplyToYou: true,
          errorList: errors
        })
      } else {
            // User inputted a specific value, in this case 'none'
            if (req.session.data['applyToYou'] == 'none') {   // this was === which doesn't work, changing to == seems to work?!
              res.redirect('/v1/sign-in')
            } else {
              // User inputted any other value
              res.redirect('/v1/stop-cannot-use-online-service')
            }
      }
    })
  
  




  module.exports=router;

