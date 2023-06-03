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





function orangesRotting(grid: number[][]): number {

  let time:number = 0;
  let deltaRow = [-1,+1,0,0];
  let deltaColumn = [0,0,+1,-1]

  let n = grid.length;
  let m  = grid[0].length;

let visGrid:number[][] = Array(n).fill([]);
for(let i=0;i<n;i++){
  visGrid[i] = Array(m).fill(0);
}

  let q = new MyQueue<[[number,number],number]>();

  for(let i =0;i<n;i++){
    for(let j = 0;j<m;j++){
          if(grid[i][j] === 2){
            q.push([[i,j],0]);
            visGrid[i][j] = 2;
          }
          else{
            visGrid[i][j] = 0;
          }
    }
  }

  while(!q.isEmpty()){
    
    let front  = q.front()
    q.pop();
    let value = front!.value;
    let r = value![0][0];
    let c = value![0][1];
    let t = value![1];

    for(let i=0;i<4;i++){
      let row = r + deltaRow[i];
      let col = c+ deltaColumn[i];

      if(row>=0 && row<n && col>=0 && col<m && visGrid[row][col]==2 && grid[row][col]==1 ){
              q.push([[row,col],t+1]);
              visGrid[row][col] = 2;

      }

    }
  time++;

  }


return time?time:-1;

};




