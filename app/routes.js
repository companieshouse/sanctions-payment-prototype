//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// router.use('/', require('./routes/v1-routes.js'))

// Filter question
router.post('/v1/filter-question', function(request, response) {

    var exports = request.session.data['applyToYou']
    if (exports.includes("none")){
        response.redirect("/v1/sign-in")
    } else {
        response.redirect("/v1/stop-cannot-use-online-service")
    }
})



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