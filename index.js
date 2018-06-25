// const getBucket = () => {
//     const char_set = 'abcdefghijklmnopqrstuvwxyz';
//     const char_set_array = char_set.split('');
//     let bucket = 0;
//     for (var i = 0; i < char_set.length; i++) {
//         bucket ^= char_set.charCodeAt(i);
//     }

//     return bucket;
// }

// const begin = 'a'.charCodeAt(0);
// const end = 'z'.charCodeAt(0);

// const isPangram = str => {
//     const input = str.toLowerCase();
//     let bucket = 0;
//     for (var i = 0; i < str.length; i++) {
//         const c = input.charCodeAt(i);
//         if (c >= begin && c <= end) {
//             bucket ^= c;
//         }
//     }
//     return bucket === getBucket();
// }

const isPangram = str => {
    str = str.toLowerCase().split('');
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .map(letter => str.includes(letter))
        .reduce((prev, curr) => {
            return prev && curr;
        }, true);
};

const isPangramRegex = str => {
    return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(str) 

};

const isPangramV2 = str => {
    let checker = {};
    const char_set = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < char_set.length; i++) {
        checker[char_set.charAt(i)] = true;
    }

    for (var i = 0; i < str.length; i++) {
        delete checker[str.charAt(i).toLowerCase()];
    }
    return Object.keys(checker).length === 0;
}

const tests = [
    'abcdefghijklmnopqrstuvwyz',
    'Two driven jocks help fax my big quiz.​',
    'Pack my box with five dozen liquor jugs.',
    'The five boxing wizards jump quickly.',
    'Bright vixens jump; dozy fowl quack.',
    'Jackdaws love my big sphinx of quartz.',
    'John quickly extemporized five tow bags.',
    'Waltz, nymph, for quick jigs vex Bud.',
    'Quick wafting zephyrs vex bold Jim.'
];

tests.forEach(t => console.log(isPangramV2(t)));