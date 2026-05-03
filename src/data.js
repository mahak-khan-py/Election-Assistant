const electionData = {
    timeline: [
        {
            id: 1,
            title: "Announcement",
            date: "Day 0",
            description: "The Election Commission of India (ECI) announces the election dates. The Model Code of Conduct (MCC) comes into effect immediately.",
            icon: "📢"
        },
        {
            id: 2,
            title: "Notification",
            date: "Day 7-10",
            description: "The President (for Lok Sabha) or Governor (for State Assembly) issues the statutory notification for the elections.",
            icon: "📜"
        },
        {
            id: 3,
            title: "Nominations",
            date: "7 Days",
            description: "Candidates file their nomination papers. This is followed by 'Scrutiny' to verify eligibility and a window for 'Withdrawal'.",
            icon: "✍️"
        },
        {
            id: 4,
            title: "Campaigning",
            date: "Ongoing",
            description: "Political parties and candidates campaign to reach voters. Campaigning must stop 48 hours before the conclusion of polls.",
            icon: "🎤"
        },
        {
            id: 5,
            title: "Polling Day",
            date: "Phase-wise",
            description: "Voters cast their ballots using Electronic Voting Machines (EVMs) and VVPATs at designated polling stations.",
            icon: "🗳️"
        },
        {
            id: 6,
            title: "Counting & Results",
            date: "Scheduled Day",
            description: "Votes from all phases are counted simultaneously, and the results are declared on the same day.",
            icon: "🏆"
        }
    ],
    guideSteps: [
        {
            num: 1,
            title: "Check Voter List",
            content: "Verify your name in the electoral roll on the NVSP portal (electoralsearch.in) or via the Voter Helpline App."
        },
        {
            num: 2,
            title: "Find Polling Station",
            content: "Locate your assigned polling booth. You can find this on your Voter Slip or by SMS to 1950."
        },
        {
            num: 3,
            title: "Identity Proof",
            content: "Carry your EPIC (Voter ID) card. If you don't have it, carry one of 12 alternative documents like Aadhaar or PAN card."
        },
        {
            num: 4,
            title: "At the Booth",
            content: "First official checks name, second inks your finger, third takes signature. You then proceed to the voting compartment."
        },
        {
            num: 5,
            title: "Cast Your Vote",
            content: "Press the blue button on the EVM next to your candidate's symbol. Verify the slip in the VVPAT window for 7 seconds."
        }
    ],
    flashcards: [
        {
            term: "MCC",
            definition: "Model Code of Conduct: Guidelines for political parties and candidates during elections to ensure free and fair polls."
        },
        {
            term: "EVM",
            definition: "Electronic Voting Machine: The device used in India to record votes electronically since 2004."
        },
        {
            term: "VVPAT",
            definition: "Voter Verifiable Paper Audit Trail: A machine that provides feedback to voters using a paper slip to verify their vote."
        },
        {
            term: "NOTA",
            definition: "None Of The Above: A ballot option that allows the voter to officially register a vote of rejection for all candidates."
        },
        {
            term: "ECI",
            definition: "Election Commission of India: An autonomous constitutional authority responsible for administering election processes in India."
        }
    ],
    quiz: [
        {
            question: "What is the minimum age to vote in India?",
            options: ["16 years", "18 years", "21 years", "25 years"],
            answer: 1
        },
        {
            question: "Who appoints the Chief Election Commissioner of India?",
            options: ["Prime Minister", "Chief Justice", "President of India", "Parliament"],
            answer: 2
        },
        {
            question: "How long does a VVPAT slip stay visible to the voter?",
            options: ["3 seconds", "7 seconds", "10 seconds", "15 seconds"],
            answer: 1
        },
        {
            question: "What is the term of the Lok Sabha in India?",
            options: ["4 years", "5 years", "6 years", "Permanent"],
            answer: 1
        },
        {
            question: "Which article of the Constitution provides for the Election Commission?",
            options: ["Article 324", "Article 370", "Article 15", "Article 51A"],
            answer: 0
        }
    ],
    chatResponses: {
        "voter id": "To apply for a Voter ID (EPIC), visit nvsp.in. You'll need Form 6 for a new registration. Ensure you have a passport photo, age proof, and address proof ready.",
        "mcc": "The Model Code of Conduct (MCC) is a set of guidelines issued by the ECI for parties and candidates. It ensures no party uses government resources for campaigning and maintains a level playing field.",
        "ink": "The indelible ink is applied to your left index finger. It's a silver nitrate compound that reacts with the skin and cannot be washed off for weeks, preventing double voting.",
        "evm": "EVMs (Electronic Voting Machines) are secure, stand-alone devices. You press the blue button next to your candidate's name/symbol. A beep confirms your vote.",
        "vvpat": "VVPAT is the Voter Verifiable Paper Audit Trail. After voting on the EVM, a slip shows in the VVPAT window for 7 seconds, confirming exactly which candidate you voted for.",
        "process": "The Indian election process follows these steps: 1. ECI Announcement (MCC starts) -> 2. Notifications -> 3. Nominations & Scrutiny -> 4. Campaigning -> 5. Polling Phases -> 6. Counting -> 7. Result Declaration.",
        "candidate": "Candidates must be Indian citizens, at least 25 years old for Lok Sabha, and not hold any office of profit. They must file an affidavit disclosing their assets, education, and criminal records.",
        "booth": "Find your polling booth by sending an SMS: 'ECI <EPIC Number>' to 1950, or use the Voter Helpline App. Your booth is usually within 2km of your residence.",
        "default": "I can guide you through the entire Indian election cycle! Ask me about Registration, the 7-step Process, EVM/VVPAT security, or the Model Code of Conduct."
    }
};
