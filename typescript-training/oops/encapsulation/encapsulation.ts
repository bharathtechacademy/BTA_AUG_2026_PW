class Class1 {

    private name: string = "Bharath Reddy";
    private age: number = 30;
    private city: string = "Hyderabad";

    private printData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }

    public getAge(): number {
        return this.age;
    }

    public setNewAge(age: number): void {
        this.age = age;
    }

}


class Class3 {

    printData() {
        let obj = new Class1();
        console.log(obj.getAge());
        obj.setNewAge(35);
        console.log(obj.getAge());
    }
}
