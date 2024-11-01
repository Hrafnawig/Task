class RecentlyUsedList {
    constructor(maxLength){
        if (!maxLength) throw new Error("specify MaxLength");
        this.maxLength = maxLength;
        this. items = [];
    }

 add(...i){
    i.reverse().forEach(item =>{
        //this.items.push(item); adding new elements to the end.
        const DuplicateCheck = this.items.indexOf(item); // -1 is non existing element in array
            if (DuplicateCheck !== -1) {
                console.log (item + ' cutted out')
                this.items.splice(DuplicateCheck, 1);
            }
        this.items.unshift(item); //to the front
    });
    if (this.items.length > this.maxLength) {
        this.items = this.items.slice(0, this.maxLength);
    }
    console.log(this.items)
 }
}
function runTests() {
    const test = new RecentlyUsedList(3); //Max length test
    test.add('try', 'new', 'things');// ading elements test
    test.add ('first');// check that elements always add in start of array
    test.add('first');// check on duplicates
}
runTests();
