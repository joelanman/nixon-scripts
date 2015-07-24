
module.exports = {

    screenshotPath : "screenshots/[script]/[size.width]-[size.crop]/[##]-[step.name]",

    username: "",
    password: "",

    sizes : [,
        [1024, 768, "crop"],
        [1024, 768],
        [320, 480]
    ],

    steps : [

        {
            name: "start",
            open: "http://localhost:50150/dvla"
        },
        {
            name: "saml",
            js: function(){
                $('a:contains("Your driving licence")')[0].click();
            },
            screenshot: false
        },
        {
            name: "verify-home"
        },
        {
            name: "sign-in",
            js: function(){
                $('#no')[0].click();
                $('#next-button')[0].click();
            }
        },
        {
            name: "slide-2",
            open: "http://localhost:50190/about"
        },
        {
            name: "slide-3",
            js: function(){
                $('#next-button')[0].click();
            }
        },
        {
            name: "slide-4",
            js: function(){
                $('#next-button')[0].click();
            }
        },
        {
            name: "age-uk",
            js: function(){
                $('#next-button')[0].click();
            }
        },
        {
            name: "statements",
            js: function(){
                $('#age-yes')[0].click();
                $('#residency-more-than-12')[0].click();
                $('#next-button')[0].click();
            }
        },
        {
            name: "documents",
            js: function(){
                $('#yes')[0].click();
                $('#next-button')[0].click();
            }
        },
        {
            name: "choose-company",
            js: function(){
                $('#driving-licence')[0].click();
                $('#passport')[0].click();
                $('#next-button')[0].click();
            }
        },
        {
            name: "choose-company-back",
            js: function(){
                window.history.back()
            },
            screenshot: false
        },
        {
            name: "choose-company-limited",
            js: function(){
                $('#passport')[0].click();
                $('#next-button')[0].click();
            }
        },
        {
            name: "about-company",
            js: function(){
                $('.company-about a')[0].click();
            }
        },
        {
            name: "company-chosen",
            js: function(){
                $('.dialog-inner:visible button')[0].click();
            }
        }

    ]

}
