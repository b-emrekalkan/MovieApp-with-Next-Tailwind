import Link from 'next/link'
import React from 'react'

//! Capture the "mn" props from the "Header" here 👇
const MenuItems = ({ mn }) => {
    return (
        <Link href={mn.url}>{mn.name}</Link>
    )
}

export default MenuItems