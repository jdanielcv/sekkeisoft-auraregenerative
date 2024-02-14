
document.addEventListener("DOMContentLoaded", function () {
    const languageButtons = document.querySelectorAll('[id^="english"], [id^="spanish"]');
    const menuContainer = document.getElementById("menu");

    let currentLanguage = "english";

    async function loadContent(language) {
        console.log(language);
        fetch(`${language}.json`)
            .then(response => response.json())
            .then(data => {
                document.documentElement.lang = language;
                languageButtons.forEach(button => {
                    button.classList.remove("active");
                });
                document.getElementById(language).classList.add("active");
                document.getElementById('english').textContent = data.nav.english;
                document.getElementById('spanish').textContent = data.nav.spanish;
                document.getElementById('home').textContent = data.menu.home;
                document.getElementById('about').textContent = data.menu.about;
                document.getElementById('services').textContent = data.menu.services;
                document.getElementById('contact').textContent = data.menu.contact;
                document.getElementById('subTitle').textContent = data.subMenu.subTitle;
                document.getElementById('subTitle2').textContent = data.subMenu.subTitle;
                document.getElementById('phone').textContent = data.subMenu.phone;
                document.getElementById('location').textContent = data.subMenu.location;
                document.getElementById('follow').textContent = data.subMenu.follow;
                document.getElementById('ourTherapies').textContent = data.subMenu.ourTherapies;
                document.getElementById('yourHealth').textContent = data.subMenu.yourHealth;
                document.getElementById('wellnessDrip').textContent = data.therapies.wellnessDrip;
                document.getElementById('serum').textContent = data.therapies.serum;
                document.getElementById('infusion').textContent = data.therapies.infusion;
                document.getElementById('aestheticMedicine').textContent = data.therapies.aestheticMedicine;
                document.getElementById('specialConsult').textContent = data.therapies.specialConsult;
                document.getElementById('laboratories').textContent = data.therapies.laboratories;
                document.getElementById('aboutUs').textContent = data.home.aboutUs;
                document.getElementById('aboutText').textContent = data.home.aboutText;
                document.getElementById('read').textContent = data.home.readMore;
                document.getElementById('howWork').textContent = data.home.howWork;
                document.getElementById('firstStepTitle').textContent = data.home.firstStepTitle;
                document.getElementById('firstStepText').textContent = data.home.firstStepText;
                document.getElementById('firstStepText2').textContent = data.home.firstStepText2;
                document.getElementById('firstStepText3').textContent = data.home.firstStepText3;
                document.getElementById('secondStepTitle').textContent = data.home.secondStepTitle;
                document.getElementById('secondStepText').textContent = data.home.secondStepText;
                document.getElementById('secondStepText2').textContent = data.home.secondStepText2;
                document.getElementById('secondStepText3').textContent = data.home.secondStepText3;
                document.getElementById('secondStepText4').textContent = data.home.secondStepText4;
                document.getElementById('thirdStepTitle').textContent = data.home.thirdStepTitle;
                document.getElementById('thirdStepText').textContent = data.home.thirdStepText;
                document.getElementById('thirdStepText2').textContent = data.home.thirdStepText2;
                document.getElementById('thirdStepText3').textContent = data.home.thirdStepText3;
                document.getElementById('fourthStepTitle').textContent = data.home.fourthStepTitle;
                document.getElementById('fourthStepTitle2').textContent = data.home.fourthStepTitle2;
                document.getElementById('fourthStepText').textContent = data.home.fourthStepText;
                document.getElementById('fourthStepText2').textContent = data.home.fourthStepText2;
                document.getElementById('fourthStepText3').textContent = data.home.fourthStepText3;
                document.getElementById('youReady').textContent = data.home.youReady;
                document.getElementById('whatPeople').textContent = data.home.whatPeople;
                document.getElementById('letStart').textContent = data.home.letStart;
                document.getElementById('trustUs').textContent = data.home.trustUs;
                document.getElementById('usuallyAsked').textContent = data.home.usuallyAsked;
                document.getElementById('firstQuestion').textContent = data.faqs.firstQuestion;
                document.getElementById('firstAnswer').textContent = data.faqs.firstAnswer;
                document.getElementById('fourthQuestion').textContent = data.faqs.fourthQuestion;
                document.getElementById('fourthAnswer').textContent = data.faqs.fourthAnswer;
                document.getElementById('fifthQuestion').textContent = data.faqs.fifthQuestion;
                document.getElementById('fifthAnswer').textContent = data.faqs.fifthAnswer;
                document.getElementById('seventhQuestion').textContent = data.faqs.seventhQuestion;
                document.getElementById('seventhAnswer').textContent = data.faqs.seventhAnswer;
                document.getElementById('nineQuestion').textContent = data.faqs.nineQuestion;
                document.getElementById('nineAnswer').textContent = data.faqs.nineAnswer;
                document.getElementById('bookAn').textContent = data.general.bookAn;
                document.getElementById('appointment').textContent = data.general.appointment;
                document.getElementById('name').textContent = data.general.name;
                document.getElementById('phoneNumber').textContent = data.general.phoneNumber;
                document.getElementById('preferredDate').textContent = data.general.preferredDate;
                document.getElementById('interestTherapy').textContent = data.general.interestTherapy;
                document.getElementById('commentsForm').textContent = data.general.comments;
                document.getElementById('submit').textContent = data.general.submit;
                document.getElementById('footerAbout').textContent = data.menu.about;
                document.getElementById('footerService').textContent = data.menu.services;
                document.getElementById('footerContact').textContent = data.menu.contact;
                document.getElementById('contactUs').textContent = data.footer.contactUs;
                document.getElementById('footerSubmit').textContent = data.general.submit;
                document.getElementById('footerFollow').textContent = data.footer.followUs;
                document.getElementById('certification').textContent = data.footer.certification;
                document.getElementById('started').textContent = data.footer.started;
            })
            .catch(error => console.error("Error loading language file:", error));
    }

    languageButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const language = this.id;
            if (language !== currentLanguage) {
                currentLanguage = language;
                loadContent(language);
            }
        });
    });

    // Initial content load
    loadContent(currentLanguage);
});
