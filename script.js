document.addEventListener('DOMContentLoaded', () => {
    const scheduleList = document.getElementById('schedule-list');
    const faqList = document.getElementById('faq-list');
    const scrollToBottomButton = document.getElementById('scroll-to-bottom');

    // Schedule data
    const scheduleItems = [
        { time: "7:45-8:30", event: "check-in" },
        { time: "8:30-9:15", event: "debrief" },
        { time: "9:30-10:15", event: "workshop #1" },
        { time: "10:15-11:00", event: "workshop #2" },
        { time: "11:30-1:00", event: "lunch" },
        { time: "2:00-2:45", event: "workshop #3" },
        { time: "3:00-3:45", event: "workshop #4" },
        { time: "7:00", event: "submissions due" },
        { time: "5:30-6:30", event: "dinner" },
        { time: "7:30-9:00", event: "presentations" },
        { time: "9:15-9:30", event: "award ceremony" }
    ];

    // FAQ data
    const faqItems = [
        {
            question: "How large can a team be?",
            answer: "Team can have up to 1-4 members"
        },
        {
            question: "Where will eagle.hack be?",
            answer: "At Oak Grove High School in San Jose, we'll start in the school theater."
        },
        {
            question: "Will lunch and dinner be provided?",
            answer: "Yes, we'll provide food for lunch and dinner. Make sure to tell if you have any allergies"
        },
        {
            question: "What do we have to bring?",
            answer: "Only computer and charger!"
        },
        {
            question: "Is there anything specific we have to develop?",
            answer: "No, you can develop anything with your creativity. Also, we have specific ideas for inspiration!"
        }
    ];

    // Populate schedule
    scheduleItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `flex items-center p-4 ${index % 2 === 0 ? 'bg-[#1E1E1E]' : 'bg-[#2D2D2D]'}`;
        div.innerHTML = `
            <div class="w-1/3 text-white tracking-wide font-bold">${item.time}</div>
            <div class="w-2/3 text-white tracking-wide">${item.event}</div>
        `;
        scheduleList.appendChild(div);
    });

    // Populate FAQ
    faqItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'rounded-lg border border-[#ec3750] bg-[#161a1d] p-6';
        div.innerHTML = `
            <h3 class="text-xl font-bold text-white mb-2 tracking-wide">${item.question}</h3>
            <p class="text-white text-justify leading-relaxed">${item.answer}</p>
        `;
        faqList.appendChild(div);
    });

    // Scroll to bottom functionality
    scrollToBottomButton.addEventListener('click', () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            const bottomPosition = homeSection.offsetTop + homeSection.offsetHeight;
            window.scrollTo({
                top: bottomPosition,
                behavior: 'smooth'
            });
        }
    });
});

