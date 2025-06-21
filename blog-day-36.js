//  📝 Day 36: Write a javascript program which make structure like X using Star symbol(*) ?

// Solution:-

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == j || i + j == 5 + 1) {
            process.stdout.write('* ')
        }
        else {
            process.stdout.write('  ')
        }
    }
    console.log();
}
