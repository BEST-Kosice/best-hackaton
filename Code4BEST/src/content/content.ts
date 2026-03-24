export const content = {
    nav: [
        { label: "Pre účastníkov", href: "#participants" },
        { label: "Pre sponzorov", href: "#sponsors" },
        { label: "O projekte", href: "#about-project" },
        { label: "O nás", href: "#about-us" },
        { label: "Kontakt", href: "#contact" },
    ],
    hero: {
        subtitle: "Hackathon študentov pre študentov",
        tagline: "24 hodín. 100 účastníkov. 1 víťaz.",
        infoItems: [
            { icon: "clock" as const, value: "24", label: "hodín" },
            { icon: "calendar" as const, value: "Apríl", label: "2026" },
            { icon: "user" as const, value: "100", label: "participantov" },
        ],
        countdownDate: "2026-04-01T24:00:00+02:00",
        countdownLabel: "DO KONCA REGISTRÁCIE",
        countdownUnits: { days: "DNÍ", hours: "HODÍN", minutes: "MINÚT", seconds: "SEKÚND" },
        cta: { label: "REGISTRUJ SA", href: "#participants" },
        secondary: { label: "STAŇTE SA PARTNEROM", href: "#sponsors" },
    },
    participants: {
        title: "Pre účastníkov",
        heading: "Čo je Code4BEST?",
        paragraphs: [
            `Code4BEST je 24-hodinový offline hackathon organizovaný BEST Košice pre študentov TUKE. Tento ročník je zameraný na tvorbu hier vo <b>React Native</b> s vesmírnou témou.`,
            `Nechceme „ďalšiu bežnú appku“. Cieľ je preskúmať hranice React Native: animácie, gestá, senzory, výkon, multiplayer, audio, alebo integráciu native modulov. Na konci musí byť <b>hrateľný prototyp</b> a krátke demo.`,
        ],
        benefitsTitle: "Čo získate?",
        benefits: [
            "24 hodín intenzívneho vývoja a reálny „ship“ pod tlakom",
            "Praktická skúsenosť s game dev v React Native",
            "Priestor na experimenty: animácie, gestá, senzory, výkon, native integrácie",
            "Mentoring, konzultácie a feedback počas hackathonu",
            "Networking s ľuďmi z praxe a partnermi",
            "Mentoring a odborný dohľad počas celej súťaže",
            "Jedlo a nápoje počas podujatia",
            "Ceny pre najlepšie tímy",
            "Tričko a ďalšie drobnosti",
        ],
        schedule: {
            fridayLabel: "Piatok <10.04.>",
            saturdayLabel: "Sobota <11.04.>",
            friday: [
                { time: "14:00", activity: "Registrácia a welcome coffee" },
                { time: "15:00", activity: "Oficiálne otvorenie a privítanie" },
                { time: "16:00", activity: "Sprint 1" },
                { time: "19:00", activity: "Večera" },
                { time: "20:00", activity: "Stand-up #1" },
                { time: "21:00", activity: "Večerný program" },
                { time: "22:00", activity: "Sprint 2" },
            ],
            saturday: [
                { time: "08:00", activity: "Stand-up #2" },
                { time: "09:00", activity: "Sprint 3" },
                { time: "11:00", activity: "Obed" },
                { time: "13:00", activity: "Wrap-up" },
                { time: "14:00", activity: "Deadline a prezentácie" },
                { time: "15:00", activity: "Vyhodnotenie a ceny" }
            ],
        },
        bringListTitle: "Čo si priniesť?",
        bringList: [
            "Notebook + nabíjačka",
            "Predlžovačka (odporúčané)",
            "Študentský preukaz (povinné)",
            "Pohodlné oblečenie",
            "Základná hygiena (24 hodín je 24 hodín)",
            "Slúchadlá",
            "Powerbank (voliteľné)",
            "Mikina / ľahká deka (voliteľné)",
        ],
    },
    sponsors: {
        title: "Pre sponzorov",
        heading: "Prečo podporiť Code4BEST?",
        reasons: [
            {
                title: "Talent scouting v praxi",
                description: "Uvidíte študentov pri reálnom vývoji: tímová práca, technické rozhodnutia, delivery pod tlakom a schopnosť odprezentovať výsledok."
            },
            {
                title: "Reálna interakcia na mieste",
                description: "24-hodinový offline formát = prirodzené rozhovory, mentoring, feedback a kontakt s účastníkmi počas celej akcie."
            },
            {
                title: "Viditeľnosť značky",
                description: "Logo na webe a materiáloch + prítomnosť na mieste (roll-up / stánok). Značku uvidia účastníci aj komunita TUKE."
            },
            {
                title: "Vlastná challenge / mentoring / porota",
                description: "Môžete priniesť vlastnú mini-výzvu, poslať mentorov alebo byť súčasťou poroty. Ideálne pre employer branding."
            },
        ],
        benefitsTitle: "Čo získate?",
        benefits: [
            "Získavanie talentov cez reálny výkon v tímoch",
            "Reklamu medzi technickou mládežou",
            "Networking s účastníkmi a komunitou TUKE",
            "Možnosť byť mentorom alebo porotcom",
            "Vlastná challenge a prize (voliteľné)",
            "Branding online aj na mieste",
        ],
        packagesTitle: "Partnerské balíčky",
        packagesSubtitle: "Ponúkame rôzne úrovne partnerstva, aby sme vyhoveli vašim potrebám a cieľom.",
        allFeatures: [
            "Logo na webstránke podujatia",
            "Exkluzívny obsah z podujatia",
            "Prítomnosť v médiách a online",
            "Roll-up na mieste konania",
            "Vlastný priestor na mieste konania",
            "Interakcia s účastníkmi",
            "Uvítací príhovor na otvorení podujatia",
            "Možnosť byť súčasťou poroty",
            "Vlastná súťažná kategória",
            "Maximálna viditeľnosť, logo na všetkých materiáloch",
        ],
        tiers: [
            { name: "Hlavný partner", activeCount: 10 },
            { name: "Štandardný partner", activeCount: 6 },
            { name: "Mediálny partner", activeCount: 3 },
        ],
    },
    aboutProject: {
        title: "O projekte",
        heading: "Code4BEST",
        paragraphs: [
            "Code4BEST je 24-hodinový offline hackathon v Košiciach organizovaný BEST Košice pre študentov TUKE.",
            "Tento ročník je zameraný na tvorbu hier vo React Native v téme vesmíru. Cieľom je postaviť hrateľný prototyp a ukázať technickú kreativitu.",
            "Hackathon podporuje tímovú spoluprácu, rýchle prototypovanie a schopnosť dotiahnuť projekt do prezentovateľného výsledku.",
            "Podujatie je otvorené pre študentov rôznych odborov — programátori, dizajnéri aj produktovo zmýšľajúci ľudia sú vítaní.",
        ],
        timelineTitle: "Priebeh hackathonu",
        timeline: [
            { step: 1, title: "Otvorenie a pravidlá", description: "Úvod, hodnotenie, téma a praktické info k priebehu." },
            { step: 2, title: "Tvorba tímov a ideácie", description: "Hľadanie tímu, nápad, scope a plán na 24 hodín." },
            { step: 3, title: "24 hodín vývoja + mentoring", description: "Intenzívna práca na hre v React Native s feedbackom od mentorov." },
            { step: 4, title: "Submission, demo a ceny", description: "Odovzdanie projektu, krátke demo pred porotou a vyhodnotenie." },
        ],
    },
    aboutUs: {
        title: "O nás",
        heading: "BEST Košice",
        paragraphs: [
            "BEST Košice je študentská organizácia zameraná na osobnostný a profesionálny rozvoj študentov technických odborov prostredníctvom vzdelávacích projektov, kultúrnej výmeny a medzinárodnej spolupráce.",
            "Sme súčasťou medzinárodnej organizácie Board of European Students of Technology (BEST), ktorá pôsobí na viac ako 90 univerzitách v 33 krajinách Európy. V Košiciach pôsobíme od roku 1994 a za ten čas sme zorganizovali desiatky podujatí pre študentov.",
            "Naším cieľom je prepájať študentov s firmami, poskytovať im príležitosti na rozvoj ich zručností a podporovať ich v realizácii vlastných nápadov. Organizujeme akademické kurzy, inžinierske súťaže, kultúrne výmeny a ďalšie podujatia.",
        ],
        valuesTitle: "Naše hodnoty:",
        values: ["Vzdelávanie", "Inovácie", "Spolupráca", "Diverzita", "Udržateľnosť", "Komunita"],
        projectsTitle: "Naše predchádzajúce projekty",
        projects: [
            { title: "Košice Engineering Competition", description: "Inžinierska súťaž pre študentov technických odborov zameraná na riešenie praktických problémov.", link: "https://www.instagram.com/share/p/_jM8hNv1G" },
            { title: "Infobip workshop", description: "Workshop pre študentov o príprave životopisu a najnovších trendoch v oblasti IT.", link: "https://www.instagram.com/share/p/BAWZRVWjLK" },
            { title: "BEST Summer Course", description: "Vzdelávaci medzinárodní kurz vedený odborníkmi z praxe a akademickej sféry.", link: "https://www.instagram.com/share/p/_mUaMlGSx" },
        ],
    },
    contact: {
        title: "Kontakt",
        heading: "Kontaktujte nás",
        description: "Máte záujem o spoluprácu alebo otázky ohľadom Code4BEST? Neváhajte nás kontaktovať. Radi vám poskytneme všetky potrebné informácie.",
        links: [
            { icon: "mail" as const, label: "kosice@best-eu.org", href: "mailto:kosice@best-eu.org" },
            { icon: "linkedin" as const, label: "@BESTKosice", href: "https://www.linkedin.com/company/bestkosice", external: true },
            { icon: "instagram" as const, label: "@code_4_best", href: "https://www.instagram.com/code_4_best", external: true },
        ],
        addressTitle: "Adresa",
        addressLines: [
            "BEST Košice",
            "Technická univerzita v Košiciach",
            "Letná 9",
            "042 00 Košice",
            "Slovensko",
        ],
    },
    footer: {
        description: "BEST Košice je študentská organizácia pôsobiaca na Technickej univerzite v Košiciach od roku 1994.",
        sections: [
            {
                title: "Rýchle odkazy",
                links: [
                    { label: "Pre účastníkov", href: "#participants" },
                    { label: "Pre sponzorov", href: "#sponsors" },
                    { label: "O projekte", href: "#about-project" },
                    { label: "O nás", href: "#about-us" },
                    { label: "Kontakt", href: "#contact" },
                ],
            },
            {
                title: "Kontakt",
                links: [
                    { label: "kosice@best-eu.org", href: "mailto:kosice@best-eu.org" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/company/bestkosice", external: true },
                    { label: "Instagram", href: "https://www.instagram.com/code_4_best", external: true },
                ],
            },
        ],
        address: {
            title: "Adresa",
            lines: [
                "BEST Košice",
                "Technická univerzita v Košiciach",
                "Letná 9",
                "042 00 Košice",
                "Slovensko",
            ],
        },
        copyright: "\u00a9 2026 BEST Košice. Všetky práva vyhradené.",
    },
    links: {
        registrationUrl: "https://forms.office.com/Pages/ResponsePage.aspx?id=7yefHOb-9EWaZCVajI4lpa2IO3vNZItPpD8O-4THrSVUMENUQ0I4WExUVldZS085TDYzQzdXTlhNMS4u&embed=true",
        googleRegistrationUrl: "https://forms.gle/HzpebgdNsJuNA9y66",
        rulesPdf: "/rules.pdf",
    },
};