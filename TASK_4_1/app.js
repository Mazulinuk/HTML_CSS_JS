console.log(Array.from({ length: 5 }, (_, i) => ' '.repeat(4 - i) + '*'.repeat(i * 2 + 1)).join('\n'));
