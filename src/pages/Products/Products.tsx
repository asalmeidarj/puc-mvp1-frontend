import { Link, useParams, RedirectFunction, useSearchParams } from 'react-router-dom'

import styles from './products.module.css'

interface IProduct {
    id: string,
    name: string,
}

export default function Products() {

    const { id } = useParams()

    const [teste] = useSearchParams()
    console.log(''+teste);
    
    
    const products: IProduct[] = [
        {
            id: '1',
            name: 'Produto 1'
        },
        {
            id: '2',
            name: 'Produto 2'
        },
        {
            id: '3',
            name: 'Produto 3'
        }
    ]

    let route = "/products"

    function componentInfo(id: string) {
        let product = findProductById(id)
        return (
            <section>{product ? product.name : 'Produto Inexistente'}</section>
        )
    }

    function findProductById(id: string): IProduct | undefined {
        for (let product of products) {
            if (product.id == id) {
                return product
            }
        }
        return
    }


    return (
        <main className={styles.container}>
            {!id ?
                <section>
                    {products.map((item) => (
                        <Link className={styles.link} key={item.id} to={'/products/' + item.id}> {item.name} </Link>
                    ))}
                </section> :
                componentInfo(id)
            }
        </main>
    )
}
