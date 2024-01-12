//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()




router.use('/', require('./routes/v1-routes.js'))


// Filter question
// router.post('/v1/filter-question', function(request, response) {

//     var exports = request.session.data['applyToYou']
//      if (exports == "none"){
//         response.redirect("/v1/sign-in")
//     } else {
//         response.redirect("/v1/stop-cannot-use-online-service")
//     }
// })




// // ARCHIVED Do you want to sign in
// router.post('/v1/do-you-want-to-sign-in', function(request, response) {

//     var country = request.session.data['signIn']
//     if (country == "yes"){
//         response.redirect("/v1/sign-in")
//     } else {
//         response.redirect("/v1/enter-email-address")
//     }
// })


// // ARCHIVED Email address correct
// router.post('/v1/email-address-correct', function(request, response) {

//     var country = request.session.data['emailAddressCorrect']
//     if (country == "yes"){
//         response.redirect("/v1/penalty-details")
//     } else {
//         response.redirect("/v1/enter-email-address")
//     }
// })


// Errors -  v1 code
// module.exports = function (router) {
//     router.post('/v1/filter-question', function (req, res) {
//         var errors = [];
//         var errorApply = false;

//         if (req.session.data['apply-to-you'] === '') {
//             errorApply = true;
//             errors.push({
//                 text: 'Select any that apply',
//                 href: '#applyToYou'
//             });
//         } else {
//             // Required fields have been captured and as such set the "are we signed in?" variable (gSignedIn) to TRUE
//             errorApply = true;  // Remove 'var' from here
//             res.redirect('/v1/sign-in');
//         }
//     });
// };



// ******* ERRORS - FILTER QUESTION  ************
// router.get('/v1/filter-question', function (req, res) {
//     // Set URl
//     res.render('v1/filter-question', {
//       currentUrl: req.originalUrl
//     })
//   })
  
//   router.post('/v1/filter-question', function (req, res) {
//     // Create empty array
//     var errors = []
  
//     // Check if user has filled out a value
//     if (req.session.data['apply-to-you'] == '') {
//       // No value so add error to array
//       errors.push({
//         text: 'Select any that apply',
//         href: '#applyToYou'
//       })
  
//       // Re-show page with error value as true so errors will show
//       res.render('v1/filter-question', {
//         errorEmail: true, 
//         errorList: errors
//       })
//     } else {
//       // User inputted value so move to next page
//       res.redirect('/v1/sign-in')
//     }
//   })



