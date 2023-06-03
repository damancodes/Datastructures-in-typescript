class QueueNode <T>{

    value:T|undefined;
    next:QueueNode<T> | undefined;

    constructor(value:T){
        this.value = value;
        this.next = undefined;
    }
}


class MyQueue<T>{
    private head :QueueNode<T>|undefined;
    private tail:QueueNode<T>|undefined;
    private _size:number = 0;

    constructor(value?:T){
        if(value){
            this.head = new QueueNode(value);
            this.tail  = this.head;
            this._size++

        }
      else{  this.head = undefined;
        this.tail = undefined;
      }
    }

    
    isEmpty():boolean{
        return this._size ? false:true;
    }


    push(value:T):void{
        const newNode = new QueueNode<T>(value);
        this._size++;
        if(this.head == undefined){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            
            this.tail!.next = newNode;
            this.tail = newNode;

        }

    }
    pop():QueueNode<T>|undefined{
        if(this._size==0){
            return undefined;
        }
        else{
            const returnNodev = this.head;
            this.head = this.head?.next;
            this._size--;
            return returnNodev
        }
    }

   front():QueueNode<T>|undefined{
            //return the head of the queue
            return this.head;
   }
   
   size():number{
    return this._size;
   }

}



 



