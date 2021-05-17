// Obtencion del # (hash) con el ID sino reenvia el'/'
// slice() devuelve una copia de una parte del array dentro de un nuevo array
// split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas
const getHash = () => 
    // location -> nos permite acceder a la url, hash -> permite acceder al fragmento de la url que incluye el hash, slice(1) nos permite elminar el primer elemento en este caso el simbolo #, split -> nos permite eliminar el slash '/' y solo dejaria el 1
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; // ['', '1', '']

export default getHash;