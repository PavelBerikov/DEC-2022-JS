
/*{
    let cards = [
        {cardSuit: 'spade', value: '6', color: 'black'},
        {cardSuit: 'spade', value: '7', color: 'black'},
        {cardSuit: 'spade', value: '8', color: 'black'},
        {cardSuit: 'spade', value: '9', color: 'black'},
        {cardSuit: 'spade', value: '10', color: 'black'},
        {cardSuit: 'spade', value: 'jack', color: 'black'},
        {cardSuit: 'spade', value: 'queen', color: 'black'},
        {cardSuit: 'spade', value: 'king', color: 'black'},
        {cardSuit: 'spade', value: 'ace', color: 'black'},
        {cardSuit: 'clubs', value: '6', color: 'black'},
        {cardSuit: 'clubs', value: '7', color: 'black'},
        {cardSuit: 'clubs', value: '8', color: 'black'},
        {cardSuit: 'clubs', value: '9', color: 'black'},
        {cardSuit: 'clubs', value: '10', color: 'black'},
        {cardSuit: 'clubs', value: 'jack', color: 'black'},
        {cardSuit: 'clubs', value: 'queen', color: 'black'},
        {cardSuit: 'clubs', value: 'king', color: 'black'},
        {cardSuit: 'clubs', value: 'ace', color: 'black'},
        {cardSuit: 'diamond', value: '6', color: 'red'},
        {cardSuit: 'diamond', value: '7', color: 'red'},
        {cardSuit: 'diamond', value: '8', color: 'red'},
        {cardSuit: 'diamond', value: '9', color: 'red'},
        {cardSuit: 'diamond', value: '10', color: 'red'},
        {cardSuit: 'diamond', value: 'jack', color: 'red'},
        {cardSuit: 'diamond', value: 'queen', color: 'red'},
        {cardSuit: 'diamond', value: 'king', color: 'red'},
        {cardSuit: 'diamond', value: 'ace', color: 'red'},
        {cardSuit: 'heart', value: '6', color: 'red'},
        {cardSuit: 'heart', value: '7', color: 'red'},
        {cardSuit: 'heart', value: '8', color: 'red'},
        {cardSuit: 'heart', value: '9', color: 'red'},
        {cardSuit: 'heart', value: '10', color: 'red'},
        {cardSuit: 'heart', value: 'jack', color: 'red'},
        {cardSuit: 'heart', value: 'queen', color: 'red'},
        {cardSuit: 'heart', value: 'king', color: 'red'},
        {cardSuit: 'heart', value: 'ace', color: 'red'},
    ]
    console.log(cards.reduce((accumulator, value) => {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            return card
        }
        if (value === 'spade') {
            accumulator.spade.push(value)

        } else {
            accumulator.clubs.push(value)
        }
    }, {spade: [], clubs: [], diamond: [], heart: []}))
    console.log(cards.reduce((acc, value) => {
        acc[value.cardSuit].push(value)
        return acc
    }, {spade: [], clubs: [], diamond: [], heart: [],}))

}*/
/*взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker-->*/
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (let i = 0; i < coursesArray.length; i++) {
    let modul = coursesArray[i].modules
    console.log(modul)
    console.log(modul.filter((value => value.length === 'html')))
}