document.addEventListener("DOMContentLoaded", function() {
    const context = {
        faqs: [
            {
                question: "What is Devcher?",
                answer: "Devcher presents live, limited-seat virtual classes that let you learn directly from the best frontend engineers in the industry.As we grow, you will see a wide range of classes covering every aspect of modern frontend development - from the basics responsive design to React, Vue, Typescript and advanced techniques for production codebases. Whatever your skill level, whatever you want to learn, Devcher's got you covered. Learn from the best and stay up to date easily. Sign up today for course updates!"
            },
            {
                question: "How does a Devcher class work?",
                answer: "Attending your class is straight forward. Once you register for a class, you will receive a confirmation and an attendance URL to access the live class shortly before the arranged date and time. Our live classes take place on our video conferencing platform similar to Google meet or Zoom. There's nothing to install. Our video platform runs directly in your browser. Being an online platform, you'll be reliably connected with your instructor and fellow class mates no matter their location around the globe."
            },
            {
                question:"How long is a class sale available for?",
                answer:"Seats for a live class sell out quite fast. To retain our mission to make learning more effective, class seats are typically limited at the discretion of the instructor.            Once sold out, we stop registration. Do not miss out on great live classes. Reserve a seat in a live class"
            },
            {
                question: "Do I need a Devcher account to attend?",
                answer:"To finalize your registration, you will be asked to create a Devcher account. This is important to know who's attending what class and where to send your confirmation. Registration takes less than a minute!"
            },
            {
                question: "Are the classes pre-recorded?",
                answer:"Nooo! Devcher classes are live and vibrant in all its glory. You will be sitting in the same virtual class as your instructor. This means you'll have the opportunity to ask questions and network with fellow classmates - engineers like you."
            },
            {
                question: "Can I get access to a live class playback?",
                answer:"If you participate in a live class, you'll have access to the class playback at no extra cost. By registering for a live class, you permit us to record and (or) redistribute the recorded live class. This helps you replay the class to refresh what you've learned. The recorded class could also be purchased and will help thousands of students who could not join the live class e.g., because seats were sold out."
            },
            {
                question: "Don't see what you're looking for?",
                answer:"Drop us a line and we'll see if we can make it happen. We wanna give you what you want!"
            },
            {
                question: "Can I get a refund?",
                answer:"Sorry, all class seat sales are final. But if you’d like to transfer your ticket to another person, just drop us a line at here4you@devcher.com at least 2 days before the class."
            }
        ]
    };
    // Get the template source
    var faqHTML = Handlebars.templates.faq(context);
    
    document.getElementById("faq").innerHTML = faqHTML;
    
    });