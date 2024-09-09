class Stack {
    constructor() {
      this.items = [];
    }
  
  
    push(element) {
      this.items.push(element);
    }
  
 
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
   
    peek() {
      return this.items[this.items.length - 1];
    }
  
    
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    
    clear() {
      this.items = [];
    }
  }
  
 
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log("Elemento no topo da pilha:", stack.peek()); 
  console.log("Tamanho da pilha:", stack.size()); 
  
  console.log("Elemento removido:", stack.pop()); 
  console.log("Elemento no topo da pilha após remoção:", stack.peek()); 
  console.log("Tamanho da pilha após remoção:", stack.size()); 
  
  stack.clear();
  console.log("Pilha limpa:", stack.isEmpty()); 