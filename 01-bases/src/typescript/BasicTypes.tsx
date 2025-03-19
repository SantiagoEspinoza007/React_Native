const BasicTypes = () => {

    const name: string = 'Santiago';
    const age: number = 22;
    const isActive: boolean = true;

    const powers: string[] = ['Velocidad', 'Volar', 'Nadar'];



    return (
    <>
        <h3>Tipos Basicos</h3>
        {name} - {age} - {isActive ? 'Activo' : 'Inactivo'}
        <p>
            {powers.join(', ')}
        </p>
    </>
  )
}

export default BasicTypes
