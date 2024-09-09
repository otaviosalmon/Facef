class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
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
  
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log("Elemento na frente da fila:", queue.front()); 
  console.log("Tamanho da fila:", queue.size()); 
  
  console.log("Elemento removido:", queue.dequeue()); 
  console.log("Elemento na frente da fila após remoção:", queue.front()); 
  console.log("Tamanho da fila após remoção:", queue.size()); 
  
  queue.clear();
  console.log("Fila limpa:", queue.isEmpty()); 