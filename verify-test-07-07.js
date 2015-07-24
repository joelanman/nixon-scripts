
module.exports = {

    screenshotPath : "screenshots/[script]/[size.width]-[size.crop]/[##]-[step.name]",

    username: "",
    password: "",

    sizes : [
        //[1024, 768, "crop"],
        [1024, 768],
    ],

    steps : [

        {
            name: "start",
            open: "http://govuk-verify-test.herokuapp.com/start-tax-credits"
        },
        {
            name: "first-time",
            js: function(){
                $('a:contains("Start now")')[0].click();
            }
        },
        {
            name: "sign-in",
            js: function(){
                $('input[name="beenVerified"][value="true"]')[0].click();
                $('a:contains("Continue")')[0].click();
            }
        },
        {
            name: "slide-0",
            js: function(){
                $('a:contains("start now")')[0].click();
            }
        },
        {
            name: "slide-1",
            js: function(){
                $('a:contains("Next")')[0].click();
            }
        },
        {
            name: "slide-2",
            js: function(){
                $('a:contains("Next")')[0].click();
            }
        },
        {
            name: "slide-3",
            js: function(){
                $('a:contains("Next")')[0].click();
            }
        },
        {
            name: "slide-4",
            js: function(){
                $('a:contains("Next")')[0].click();
            }
        },
        {
            name: "slide-5",
            js: function(){
                $('a:contains("Next")')[0].click();
            }
        },
        {
            name: "slide-6",
            js: function(){
                $('a:contains("Next")')[0].click();
            }
        },
        {
            name: "documents",
            js: function(){
                $('a:contains("Start now")')[0].click();
            }
        },
        {
            name: "phone",
            js: function(){
                $('input[name="passport"][value="true"]')[0].click();
                $('button:contains("Continue")')[0].click();
            }
        },
        {
            name: "smartphone",
            js: function(){
                $('input[name="method"][value="mobile"]')[0].click();
            }
        },
        {
            name: "age-uk",
            js: function(){
                $('input[name="phoneType"][value="iphone"]')[0].click();
                $('button:contains("Continue")')[0].click();
            }
        },
        {
            name: "statements",
            js: function(){
                $('input[name="age"][value="over20"]')[0].click();
                $('input[name="validTimeInUK"][value="true"]')[0].click();
                $('button:contains("Continue")')[0].click();
            }
        },
        {
            name: "choose-company",
            js: function(){
                $('input[name="method"][value="financialRecords"]')[0].click();
                $('button:contains("Continue")')[0].click();
            }
        },
        {
            name: "about-company",
            js: function(){
                $('a:contains("About Digidentity")')[0].click();
            }
        },
        {
            name: "redirect",
            js: function(){
                $('a:contains("Choose Digidentity")')[0].click();
            }
        },
        {
            name: "create-account",
            js: function(){
                $('a.button')[0].click();
            }
        },
        {
            name: "account-recovery",
            js: function(){
                $('button:contains("Continue")')[0].click();
            }
        },
        {
            name: "name",
            js: function(){
                $('button:contains("Continue")')[0].click();
            }
        },
        {
            name: "date-of-birth",
            js: function(){
                $('button:contains("Continue")')[0].click();
            }
        },
        {
            name: "address-1",
            js: function(){
                $('button:contains("Continue")')[0].click();
            }
        },
        {
            name: "address-2",
            js: function(){
                $('button:contains("Find address")')[0].click();
            }
        },
        {
            name: "security-code-1",
            js: function(){
                $('button:contains("Continue")')[0].click();
            }
        },
        {
            name: "security-code-2",
            js: function(){
                $('button:contains("Send security code")')[0].click();
            }
        },
        {
            name: "passport",
            js: function(){
                $('button:contains("Continue")')[0].click();
            }
        },
        {
            name: "card-payment",
            js: function(){
                $('button:contains("Continue")')[0].click();
            }
        },
        {
            name: "verified-loa2",
            js: function(){
                $('button:contains("Continue")')[0].click();
            }
        },
        {
            name: "hub-confirmation",
            js: function(){
                $('a:contains("Continue to GOV.UK")')[0].click();
            }
        },
        {
            name: "permission",
            js: function(){
                $('a:contains("Continue")')[0].click();
            }
        },
        {
            name: "processing",
            js: function(){
                $('a:contains("Give access")')[0].click();
            }
        },
        // others
        {
            name: "choose-company-show-all",
            open: "http://govuk-verify-test.herokuapp.com/choose-company?requestId=tax-credits&showAll=true"
        },
        {
            name: "about-basic-accounts",
            open: "http://govuk-verify-test.herokuapp.com/basic-identity-accounts?requestId=tax-credits"
        }
    ]
}
