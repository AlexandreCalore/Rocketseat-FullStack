// Utilizando GenericTransformStream

function useState<T>(){
    let state: T

    function get(){
        return state
    }

    function set(newValue: T){
        state = newValue
    }

    return {get, set}
}

let newState = useState()
newState.get();
newState.set('Calore')
newState.set(123)

// Aqui que entra o uso do generic, é utilizado para deixar a tipagem flexivel, definindo a tipagem em momento de execução, mas a partir do momento que for definido na declaração, essa que irá prevalecer. O genéric é definido por meio de: <T>

/**sendo estas suas convenções
 * S => State
 * T => Type
 * K => Key
 * E => Element
 * 
 * tudo isso para representar o generico. E quando declarado isso na variável, ele passa a aceitar qualquer tipo de valor, podendo ser sobscrevido posteriormente na atribuição, conforme exemplo a seguir:
 */

let newStateKnow = useState<string>()
newStateKnow.get();
newStateKnow.set('Calore')
//newStateKnow.set(123) // Retorna erro devido termos definido o tipo da variável como sendo string 

// Mas podemos fazer um union, mesmo com o tipo generico

function useState2<T extends number | string = string>(){ //extendemos o tipo primitivo, e ao mesmo tempo definimos um tipo padrão (nesse caso a string) para quando não for escolhido o tipo
    let state: T

    function get(){
        return state
    }

    function set(newValue: T){
        state = newValue
    }

    return {get, set}
}


let newStateKnow2 = useState<string>()
newStateKnow2.get();
newStateKnow2.set('Calore')
// newStateKnow.set(123) // Nesse caso em especifico, mesmo tendo definido 2 tipos na declaração, devemos respeitar somente 1 deles, por conta disso o erro é lançado. 