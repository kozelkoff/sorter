class Sorter {
    constructor() {
        // your implementation
        this.mas = [];
        this.f = function compareFunction(a, b){
            return a - b;
        }

    }


    add(element) {
        // your implementation
        this.mas.push(element);
    }

    at(index) {
        // your implementation
        return this.mas[index];
    }

    get length() {
        // your implementation
        return this.mas.length;
    }

    toArray() {
        // your implementation
        return(this.mas);

    }

   sort(indices) {
        // your implementation

        let mas_sort = [];
        let i=0;
        for(let j=0; j<indices.length; j++){
            mas_sort[i]=this.mas[indices[j]];
            i++;
        }


        mas_sort.sort(this.f);
       for(let i = 0 ; i < indices.length - 1; i++) {
           // сравниваем два соседних элемента.
           for(let j = 0 ; j < indices.length - i - 1 ; j++) {
               if(indices[j] > indices[j+1]) {
                   // если они идут в неправильном порядке, то
                   //  меняем их местами.
                   let tmp = indices[j];
                   indices[j] = indices[j+1] ;
                   indices[j+1] = tmp;
               }
           }
       }
        //indices.sort(this.f);

        var j1=0;
        for(let i =0; i<this.mas.length; i++){
            if(i==indices[j1]) {
                this.mas[i] = mas_sort[j1];
                j1++;
            }
        }
        return(this.mas);



    }


    setComparator(compareFunction){
        // your implementation
            this.f = compareFunction;
        }
    }



module.exports = Sorter;