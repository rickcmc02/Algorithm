/*
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
 

Constraints:

1 <= word.length, prefix.length <= 2000
word and prefix consist only of lowercase English letters.
At most 3 * 104 calls in total will be made to insert, search, and startsWith.
*/

// answer 2

class TrieNode0208 {
    children: Map<string, TrieNode0208>;
    isEnd: boolean;

    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}


class Trie0208 {
    root: TrieNode0208

    constructor() {
        this.root = new TrieNode0208();
    }

    insert(word: string): void {
        const splited = word.split("");
        let currNode = this.root;

        for (const char of splited) {
            if (!currNode.children.has(char))
                currNode.children.set(char, new TrieNode0208());

            currNode = currNode.children.get(char)!;
        }

        currNode.isEnd = true;
    }

    search(word: string): boolean {
        const splited = word.split("");
        let currNode = this.root;

        for (const char of splited) {
            if (!currNode.children.has(char)) return false;

            currNode = currNode.children.get(char)!;
        }

        return currNode.isEnd;
    }

    startsWith(prefix: string): boolean {
        const splited = prefix.split("");
        let currNode = this.root;

        for (const char of splited) {
            if (!currNode.children.has(char)) return false;

            currNode = currNode.children.get(char)!;
        }

        return true;
    }
}

// answer 1
/*
class Trie0208 {
    data: string[] = [];

    constructor() {
    }

    insert(word: string): void {
        this.data.push(word);
    }

    search(word: string): boolean {
        return this.data.includes(word);
    }

    startsWith(prefix: string): boolean {
        return this.data.some((datum) => datum.startsWith(prefix));
    }
}
    */