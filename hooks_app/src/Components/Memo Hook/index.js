import { useMemo, useState } from 'react'
import './index.css'

const ResturaentCartApp = () => {
    const [isDark, changeTheme] = useState(true)
    const [items, addItems] = useState([
        {
            name: 'laptop',
            price: 200000,
        },
        {
            name: 'book',
            price: 200,
        },
        {
            name: 'mouse',
            price: 400,
        }
    ])
    const [tip, addTip] = useState(50)

    const themeStyle = useMemo(() => {
        console.log('Theme Changed')
        return {
            backgroundColor: isDark ? 'black': 'white',
            color: isDark ? 'white': 'black'
        }
    }, [isDark])

    const totalBill = useMemo(() => {
        console.log('Total bill Changed')
        return items.reduce((acc, product) => (acc + product.price), 0) + tip
    }, [items, tip])

    return (
        <div className='cart-bg'>
            <nav className='header'><button className='theme-btn' onClick={() => changeTheme(curr => !curr)}>Toggle Theme</button></nav>
            <div style={themeStyle}>
                <h1>Total bill: {totalBill}</h1>
                <button onClick={() => addTip(curr => curr + 10)}>add tip</button>
            </div>
        </div>
    )
}

export default ResturaentCartApp