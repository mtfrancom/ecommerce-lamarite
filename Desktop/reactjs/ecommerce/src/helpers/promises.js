import { productos } from "../data/producto";
export const task = new Promise((resolve, reject)=> {
    resolve(true)
    reject("error")
}
);

export const productosApi = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(productos);

    }, 2000)
})