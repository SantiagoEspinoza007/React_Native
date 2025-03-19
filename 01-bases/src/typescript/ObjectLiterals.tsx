interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    country: string;
    city: string;
    houseNo?: number;
}

const ObjectLiterals = () => {
    const person: Person = {
        firstName: 'Santiago',
        lastName: 'Espinoza',
        age: 22,
        address: {
            country: 'Ecuador',
            city: 'Loja',
            houseNo: 14-11
        }
    }
  
  
    return (
    <>
        <h3>Objetos Literales</h3>

        <pre>
            {JSON.stringify(person, null, 2)}
        </pre>
    </>
  )
}

export default ObjectLiterals
