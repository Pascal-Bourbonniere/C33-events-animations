/**
 * 
 * @param {Le nom du id du input} inputId 
 * @param {La valeur qu'on veut mettre dans le input} value 
 */
const setInputValue = (inputId, value) => {
    const input = document.getElementById(inputId)
    if (!input) {
        console.error(`Aucun input trouvé avec le id ${inputId}`)
    } else {
        input.value = value
    }
}

/**
 * 
 * @param {good password} password 
 * @param {attempt} userInput
 */
const getPasswordMatchValue = (password, userInput) => {
    return getLevenshteinDistance(password, userInput)
}

/**
 * 
 * @param {word to find} word1 
 * @param {given word} word2 
 */
const getLevenshteinDistance = (word1, word2) => {
    console.log(word1, word2)
    const DELETION_COST = 26
    const INSERTION_COST = 26
    let matrix = new Array(word1.length + 1);
    matrix = matrix.fill().map(() => Array(word2.length + 1).fill(0))

    for (let i = 0; i <= word1.length; i++) {
        matrix[i][0] = i*26
    }
    for (let i = 0; i <= word2.length; i++) {
        matrix[0][i] = i*26
    }
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            const substitutionCost = 
            word1[i - 1] === word2[j - 1] ?
            0 :
            Math.abs(word1.charCodeAt(i - 1) - word2.charCodeAt(j - 1))
            console.log(word2.charCodeAt(j - 1))
            matrix[i][j] = Math.min(matrix[i - 1][j] + DELETION_COST,
                matrix[i][j - 1] + INSERTION_COST,
                matrix[i - 1][j - 1] + substitutionCost)
            }
        }
    return matrix[word1.length][word2.length]
}