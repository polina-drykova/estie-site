import {
  flurryMediaContent,
  flurryCollageContent,
  flurryCollageContentMobile,
} from './flurryAssets';

export const flurryContent = {
  id: "flurry-ai",
  title: "Flurry ai",
  slug: "flurry-ai",
  thumbnail: "/flurry-thumbnail.png",
  details: [
    {
      title: "Flurry: A Bold Experiment.",
      content: [
        "A friend and I had a simple idea: dating apps don’t tell you what’s wrong with your profile or how to optimise it. Maybe that’s because a semi-bad profile keeps you paying for a subscription.",
        "We noticed people crowdsourcing feedback on TikTok and Reddit and thought an app for that would be useful. So we asked around, did some research, and got started. Oh boy… we were in for a ride.",
        flurryMediaContent[0],
      ],
    },
    {
      title: "Flurry 1.0 The Journey Begins",
      content: [
        "After our initial research, we got started and iterated quickly. <b>We saw the main problem as people not knowing which photos work best</b>. So for our MVP, we built an app where users upload two photos, and others vote for their favourite.",
        flurryMediaContent[1],
      ],
    },
    {
      title: "Flurry 2.0 – Refining the Experience",
      content: [
        "If 1.0 did well, the next step was allowing users to upload full dating profiles, letting them test multiple photos over time. We also wanted to introduce a reward system to encourage people to give feedback on others’ photos, creating a feedback loop.",
        flurryMediaContent[2],
      ],
    },
    {
      title: "Deep in the Build",
      content: [
        "A few weeks into working on 1.0, Xiao took a break from work and was able to go full-time on Flurry. He suggested diving straight into 2.0, and I agreed. In hindsight, we should’ve finished 1.0, tested it, and made decisions based on real results. But maybe the excitement of building something truly our own made us go all in.",
        "With 2.0, I wore more hats than ever before—even more than at Meta or in start-ups. I learnt Swift with ChatGPT to implement simple screens, fine-tuned icons, colours, typefaces, the app icon, and animations, and learnt how to commit code remotely from Xcode. I loved every part of it. The late nights, seeing it go from nothing to a finished product. It made me realise just how big the gap is between designing something in a tool like Figma and actually bringing it to life through programming. It made me understand my job as a designer better.",
        {
          mobile: flurryCollageContentMobile,
          desktop: flurryCollageContent,
        },
      ],
    },
    {
      title: "Six Months in the making",
      content: [
        "We started in April, planning to finish in three months—but after six intense months, Flurry was finally ready. We had built it from scratch, and it was all ours. We were so proud of what we had made, we had put in the work and made something beautiful for people. And on our second try, the App Store accepted it. We were ready to launch! :~)",
        flurryMediaContent[3],
        "So we did! We launched Flurry, people flooded in, our servers crashed, and after three all-nighters, we managed to recover—welcoming 20,000 users in the first two days and 50,000 more in the next four. We then sold the idea to Tinder for £19M and became rich and famous. Now, I write from Puerto Rico for fun, and Xiao is off exploring ancient civilisations in Cairo.",
        "I wish…",
      ],
    },
    {
      title: "Is it always this quiet in here?",
      content: [
        "Even with all our efforts to promote Flurry, very few people joined, and activity was far below expectations. Even a feature on Product Hunt wasn’t enough to create the ‘community feel’ Flurry needed to take off. After months of work, it was disappointing—a tough lesson to learn.",
        flurryMediaContent[4],
      ],
    },
    {
      title: "How Flurry 2.0 Looked",
      content: [
        "These are real videos of the app, captured before launch. Remember, this was built by a team of two in six months.",
        flurryMediaContent[5],
      ],
      className: "group-gap-20",
    },
    {
      title: "Lessons from a Failed Product",
      content: [
        "We missed a few crucial clues in the excitement of building our own product:",
        "	1.	Most people weren’t comfortable with strangers seeing their private dating profiles—privacy was key.",
        "	2.	People didn’t really want or need a whole new app just for profile feedback.",
        "	3.	Investors didn’t see the market as big enough. They were more interested in Xiao and me as a team and were eager to see what we’d build next.",
        flurryMediaContent[6],
      ],
      className: "margin-l-auto",
    },
    {
      title: "Flurry 3.0 a fast pivot",
      content: [
        "A few weeks after launching Flurry, OpenAI made it easier to integrate their API. After some experiments, we realised the AI’s feedback on photos was incredibly insightful—far more advanced and detailed than anything we’d seen on Reddit, Twitter, or TikTok.",
        "So, we quickly revamped Flurry to work with AI and did a soft relaunch. This also helped solve one of the biggest issues we’d identified: privacy. People didn’t want their photos reviewed by strangers.",
        flurryMediaContent[7],
      ],
    },
    {
      title: "Experience of Flurry 3.0",
      content: [
        "Users were able to upload their entire dating profile and receive instant, detailed advice from the AI privately.",
        flurryMediaContent[8],
        "This version did so much better (and this time, I’m not joking—haha!). We didn’t sell it for millions to Tinder, and I’m not writing from Puerto Rico (yet), but people actually used it! We made $40 in subscriptions in the first month—pretty awesome for our first (well, second) app. And this time, we validated the concept in just two weeks instead of six months."
      ],
    },
    {
      title: "Flurry 3.1 – the future that never was",
      content: [
        "This is where we wanted to take Flurry if we ever saw sufficient engagement. We realised AI could be a game-changer—not just for refining profiles but also for helping users start better conversations with matches. Flurry could have evolved into an app that improved both.",
        "It didn’t become a massive success, but we proved we could build, iterate, and adapt quickly—something we’d carry forward into whatever comes next.",
        flurryMediaContent[9],
      ],
    },
    {
      title: "What I’d do differently.",
      content: [
        "People always say, “If I could, I’d do it all over again.” I’m not sure I’d build Flurry again. But I’d definitely build my own product again, armed with the insights and lessons I’ve gained. Here are a few:",
        "	•	Building for consumers is harder than ever. People don’t seek out new niche apps unless they’re significantly better than existing alternatives. If your idea isn’t at least 10x better, it might not be worth pursuing.",
        "	•	Validate ideas as cheaply as possible to avoid wasting time and effort.",
        "	•	Move fast—if you don’t, someone else will. If I had paid more attention to AI’s potential earlier, we might have skipped 1.0 entirely and built an AI-first product from the start.",
        "	•	Distribution matters as much as the product. We spent months making something great but didn’t prioritise how people would find and adopt it. Next time, I’d focus more on partnerships and organic growth strategies.",
        "	•	If an idea visits you every day, maybe listen. Don’t get discouraged. The world belongs to those who don’t give up.",
      ],
    },
    {
      title: "Thanks for reading.",
    },
  ],
};