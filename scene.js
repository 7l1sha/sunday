const gameData = {
    chapters: [
        {
            title: "Chapter 1: Amateur Athletics",
            scenarios: [
                {
                    text: "Scenario 1: The Coach's Advice\nYou're a young athlete, and your coach offers you a supplement to improve your performance. Do you accept or decline?",
                    choices: [
                        { text: "Accept the supplement", result: "Wrong choice: Your character gets caught and is banned from competition for a year." },
                        { text: "Decline the supplement", result: "Correct choice: Your character declines and continues to train hard, earning a spot on the national team." }
                    ]
                },
                {
                    text: "Scenario 2: The Teammate's Secret\nA teammate confides in you about their doping habits. Do you report them or keep the secret?",
                    choices: [
                        { text: "Report them", result: "Correct choice: You report your teammate, and they receive help and support." },
                        { text: "Keep the secret", result: "Wrong choice: Your teammate gets caught, and you're implicated, leading to a ban." }
                    ]
                },
                {
                    text: "Scenario 3: The Pressure to Perform\nYou're under pressure to perform well in an upcoming competition. Do you give in to the pressure and take a performance-enhancing substance or stay clean?",
                    choices: [
                        { text: "Take the substance", result: "Wrong choice: Your character takes the substance and gets caught, leading to a ban." },
                        { text: "Stay clean", result: "Correct choice: Your character stays clean and performs well, earning a spot on the national team." }
                    ]
                }
            ]
        },
        {
            title: "Chapter 2: Professional Athletics",
            scenarios: [
                {
                    text: "Scenario 1: The Sponsor's Expectations\nYour sponsor expects you to perform well in an upcoming competition. Do you take a performance-enhancing substance to meet their expectations or stay clean?",
                    choices: [
                        { text: "Take the substance", result: "Wrong choice: Your character takes the substance and gets caught, leading to a loss of sponsorship." },
                        { text: "Stay clean", result: "Correct choice: Your character stays clean and performs well, earning a renewal of their sponsorship contract." }
                    ]
                },
                {
                    text: "Scenario 2: The Team Doctor's Advice\nThe team doctor offers you a medication that can enhance your performance. Do you take it or decline?",
                    choices: [
                        { text: "Take the medication", result: "Wrong choice: Your character takes the medication and gets caught, leading to a ban." },
                        { text: "Decline the medication", result: "Correct choice: Your character declines and continues to train hard, earning a spot on the national team." }
                    ]
                },
                {
                    text: "Scenario 3: The Rival's Taunts\nA rival athlete taunts you about your performance, suggesting you're not good enough. Do you give in to the pressure and take a performance-enhancing substance or stay focused?",
                    choices: [
                        { text: "Take the substance", result: "Wrong choice: Your character takes the substance and gets caught, leading to a ban." },
                        { text: "Stay focused", result: "Correct choice: Your character stays focused and performs well, earning a victory over their rival." }
                    ]
                }
            ]
        },
        {
            title: "Chapter 3: The Dark Side",
            scenarios: [
                {
                    text: "Scenario 1: The Black Market\nYou're offered performance-enhancing substances on the black market. Do you accept or decline?",
                    choices: [
                        { text: "Accept", result: "Wrong choice: Your character gets caught and is banned from competition for life." },
                        { text: "Decline", result: "Correct choice: Your character declines and reports the incident to the authorities." }
                    ]
                },
                {
                    text: "Scenario 2: The Corrupt Coach\nYour coach is involved in a doping scandal. Do you report them or stay quiet?",
                    choices: [
                        { text: "Report them", result: "Correct choice: You report your coach, and they receive consequences." },
                        { text: "Stay quiet", result: "Wrong choice: Your coach gets caught, and you're implicated, leading to a ban." }
                    ]
                },
                {
                    text: "Scenario 3: The Athlete's Desperation\nYou're struggling with an injury and are tempted to take a performance-enhancing substance to recover faster. Do you give in or stay clean?",
                    choices: [
                        { text: "Take the substance", result: "Wrong choice: Your character takes the substance and gets caught, leading to a ban." },
                        { text: "Stay clean", result: "Correct choice: Your character stays clean and seeks medical attention, recovering from the injury." }
                    ]
                }
            ]
        },
        {
            title: "Chapter 4: The Consequences",
            scenarios: [
                {
                    text: "Scenario 1: The Ban\nYou've been banned from competition for doping. Do you appeal the decision or accept the consequences?",
                    choices: [
                        { text: "Appeal the decision", result: "Correct choice: Your character's appeal is successful, and they're allowed to return to competition." },
                        { text: "Accept the consequences", result: "Wrong choice: Your character's appeal is denied, and they're forced to retire." }
                    ]
                },
                {
                    text: "Scenario 2: The Fallout\nYour doping scandal has affected your relationships with your teammates and family. Do you try to repair them or move on?",
                    choices: [
                        { text: "Try to repair them", result: "Correct choice: Your character works to repair their relationships and rebuild trust." },
                        { text: "Move on", result: "Wrong choice: Your character's relationships are irreparably damaged." }
                    ]
                },
                {
                    text: "Scenario 3: The Redemption\nYou've been given a chance to redeem yourself after a doping scandal. Do you take it or give up?",
                    choices: [
                        { text: "Take the chance", result: "Correct choice: Your character takes the chance and works to regain their reputation." },
                        { text: "Give up", result: "Wrong choice: Your character gives up and retires." }
                    ]
                }
            ]
        },
        {
            title: "Chapter 5: The Road to Recovery",
            scenarios: [
                {
                    text: "Scenario 1: The Comeback\nAfter serving a ban, you're eager to make a comeback. Do you use the opportunity to improve your skills cleanly or take shortcuts?",
                    choices: [
                        { text: "Take shortcuts", result: "Wrong choice: Your character chooses shortcuts, gets caught again, and faces an extended ban." },
                        { text: "Improve cleanly", result: "Correct choice: Your character trains hard and returns to competition cleanly, earning respect and success." }
                    ]
                },
                {
                    text: "Scenario 2: The Support Network\nYou need support to help you stay clean and focused. Do you seek help from a mentor or try to go it alone?",
                    choices: [
                        { text: "Seek help from a mentor", result: "Correct choice: Your character builds a strong support network and successfully navigates challenges." },
                        { text: "Go it alone", result: "Wrong choice: Your character struggles without support and faces setbacks." }
                    ]
                },
                {
                    text: "Scenario 3: The New Goals\nYou're redefining your goals after the scandal. Do you set new, realistic goals or try to immediately reach former heights?",
                    choices: [
                        { text: "Set new, realistic goals", result: "Correct choice: Your character sets achievable goals and steadily works towards them, achieving personal growth." },
                        { text: "Try to reach former heights", result: "Wrong choice: Your character sets unrealistic goals, leading to frustration and possible relapse." }
                    ]
                }
            ]
        },
        {
            title: "Chapter 6: Legacy and Impact",
            scenarios: [
                {
                    text: "Scenario 1: The Advocacy\nYou decide to become an advocate against doping. Do you actively campaign and educate others or stay in the background?",
                    choices: [
                        { text: "Actively campaign", result: "Correct choice: Your character actively campaigns and makes a significant impact in the fight against doping." },
                        { text: "Stay in the background", result: "Wrong choice: Your character remains passive, and their impact is minimal." }
                    ]
                },
                {
                    text: "Scenario 2: The Future Generation\nYou mentor young athletes about the dangers of doping. Do you use your experience to guide them or avoid discussing your past?",
                    choices: [
                        { text: "Use your experience", result: "Correct choice: Your character shares their experience honestly, helping young athletes make informed decisions." },
                        { text: "Avoid discussing your past", result: "Wrong choice: Your character avoids discussing their past, missing the opportunity to influence the next generation." }
                    ]
                },
                {
                    text: "Scenario 3: The Reflection\nLooking back on your career, do you focus on the mistakes or celebrate the positive changes and lessons learned?",
                    choices: [
                        { text: "Focus on mistakes", result: "Wrong choice: Your character focuses on past mistakes, leading to ongoing regret." },
                        { text: "Celebrate achievements", result: "Correct choice: Your character reflects on both the challenges and achievements, using their experience to inspire others and contribute positively to the sports community." }
                    ]
                }
            ]
        }
    ]
};

let currentChapter = 0;
let currentScenario = 0;

function loadScenario() {
    const chapter = gameData.chapters[currentChapter];
    const scenario = chapter.scenarios[currentScenario];
    
    document.getElementById('chapter').innerText = chapter.title;
    document.getElementById('scenario').innerText = scenario.text;
    
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    
    scenario.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => showResult(choice.result);
        choicesContainer.appendChild(button);
    });
}

function showResult(resultText) {
    alert(resultText);
    // Move to the next scenario or chapter
    currentScenario++;
    if (currentScenario >= gameData.chapters[currentChapter].scenarios.length) {
        currentScenario = 0;
        currentChapter++;
        if (currentChapter >= gameData.chapters.length) {
            alert("Game Over! You've completed all chapters.");
            return;
        }
    }
    loadScenario();
}

window.onload = loadScenario;
