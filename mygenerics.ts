const score: Array<number> = []
const names: Array<number> = []

function identity1(val: boolean | number): boolean | number {
    return val
}

function identity2(val: any): any {
    return val
}

function identity3<Type>(val: Type): Type {
    return val
}

identity3(3)
identity3("prats")
identity3(true)

function identity4<T>(val: T): T {
    return val
}

interface bottle {
    brand: string,
    type: number
}

// identity4<bottle>({})


function getSearch<T>(product: T[]): T {
    const myIndex = 3
    return product[myIndex]
}


const getMoreSearch = <T,>(product: T[]): T => {
    const myIndex = 4
    return product[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valone: T, valtwo: U): object {
    return {
        valone,
        valtwo
    }
}

// anotherFunction(3,"4")
// anotherFunction(3, 4.6)
// anotherFunction(3, {})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class sellable<T> {
    public cart: T[] = []

    addtocart(products: T) {
        this.cart.push(products)
    }
}