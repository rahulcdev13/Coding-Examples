// OutPut of Below code :

console.log(+true) // 1
console.log(!!"") // false

/* ----------------------------------------------- */

const  arr = [1,2,3,4, 5]
for(var i =0 ; i < arr.length;i++){
  setTimeout(()=>{
    console.log(arr[i])
  },0)
}
// undefined
// undefined
// undefined
// undefined
// undefined

/* ----------------------------------------------- */
const obj = {
    name:"john",
    getName : function(){
      console.log(this.name) // john
    }
  }
  obj.getName()

// With arraw function 
const objs = {
    name:"john",
    getName : () => {
      console.log(this.name) // undefined
    }
  }
  objs.getName()
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */
