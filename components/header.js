import React from 'react'
import Link from 'next/link'


const header = () => {
    return (
        <nav>
            <Link href="/">ir a inicio</Link>
            <Link href="/peliculas">ir a peliculas</Link>
        </nav>
    )
}

export default header
