class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
  
    append(key, value) {
      const newNode = new Node(key, value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
   
    get(key) {
      let current = this.head;
      while (current) {
        if (current.key === key) {
          return current.value;
        }
        current = current.next;
      }
      return undefined;
    }
  

    remove(key) {
      if (!this.head) {
        return undefined;
      }
      if (this.head.key === key) {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
      }
      let current = this.head;
      while (current.next) {
        if (current.next.key === key) {
          const value = current.next.value;
          current.next = current.next.next;
          return value;
        }
        current = current.next;
      }
      return undefined;
    }
  }
  
  class HashTable {
    constructor(size = 10) {
      this.size = size;
      this.table = new Array(size);
      for (let i = 0; i < size; i++) {
        this.table[i] = new LinkedList();
      }
    }

    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    
    set(key, value) {
      const index = this.hash(key);
      this.table[index].append(key, value);
    }
  
    get(key) {
      const index = this.hash(key);
      return this.table[index].get(key);
    }
  
    
    remove(key) {
      const index = this.hash(key);
      return this.table[index].remove(key);
    }
  }
  
 
  const hashTable = new HashTable();
  
  hashTable.set("apple", 10);
  hashTable.set("banana", 20);
  hashTable.set("orange", 30);
  
  console.log("Valor para a chave 'apple':", hashTable.get("apple")); 
  console.log("Valor para a chave 'banana':", hashTable.get("banana")); 
  console.log("Valor para a chave 'orange':", hashTable.get("orange")); 
  
  console.log("Removendo a chave 'banana' junto com seu valor:", hashTable.remove("banana")); 
  
  console.log("Valor para a chave 'banana' após remoção:", hashTable.get("banana")); 
  