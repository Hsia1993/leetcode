const input = ["Hello", "Alaska", "Dad", "Peace"];
const sameRow = (word, rec) => {
    const val = rec[word[0]];
    for(let i = 1; i < word.length; i++) {
        if(rec[word[i]] !== val) {
            return false;
        }
    }
    return true;
}
const findWords = (words) => {
    let rec = {};
    const pos = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    for(let i = 0; i < pos.length; i++) {
        for(let j = 0; j < pos[i].length; j++) {
            rec[pos[i][j]] = i;
            rec[pos[i][j].toUpperCase()] = i;
        }
    }
    return words.filter((word) => sameRow(word, rec));
};


console.log(findWords(input))
