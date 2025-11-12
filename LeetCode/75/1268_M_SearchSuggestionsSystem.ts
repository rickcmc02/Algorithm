/*
You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed.

 

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Explanation: The only word "havana" will be always suggested while typing the search word.
 

Constraints:

1 <= products.length <= 1000
1 <= products[i].length <= 3000
1 <= sum(products[i].length) <= 2 * 104
All the strings of products are unique.
products[i] consists of lowercase English letters.
1 <= searchWord.length <= 1000
searchWord consists of lowercase English letters.
*/

class TrieNode {
    children: Map<string, TrieNode>
    isEnd: boolean;
    words: string[];

    constructor() {
        this.children = new Map();
        this.isEnd = false;
        this.words = []; // 거쳐가는 단어 저장
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        const splited = word.split("");
        let currNode: TrieNode = this.root;

        for (const char of splited) {
            if (!currNode.children.has(char))
                currNode.children.set(char, new TrieNode());
            
            currNode.words.push(word); // unique하기 때문에 기포함여부 검증 필요 없음

            currNode = currNode.children.get(char)!;
        }

        currNode.words.push(word); // 끝나는 단계에서도 원 단어 포함시키기
        currNode.isEnd = true;
    }

    wordsStartsWith(prefix: string): string[] {
        const splited = prefix.split("");
        let currNode = this.root;

        for (const char of splited) {
            if (!currNode.children.has(char)) return []; // 일치하는 단어 없음

            currNode = currNode.children.get(char)!;
        }

        return currNode.words;
    }
}

function suggestedProducts(products: string[], searchWord: string): string[][] {
    const trie = new Trie();
    const suggestions: string[][] = [];

    for (const product of products) {
        trie.insert(product);
    }

    let currSearch = "";
    for (const char of searchWord) {
        currSearch += char;
        suggestions.push(trie.wordsStartsWith(currSearch).sort().slice(0, 3));
    }

    return suggestions;
};