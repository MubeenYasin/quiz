import { TUsers } from '@/config/Types'
import axios from 'axios'
import { userAgent } from 'next/server'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Effect = () => {
    const [user, setUser] = useState<TUsers[]>([])

    useEffect(() => {
        axios
            .get('https://api.github.com/users')
            .then(res => { setUser(res.data) })
            .catch(err => { alert(err) })

    }, [])

    // console.log(user)
    return (
        <div>
            {user.map((userElem, index) =>
            (
                <div key={index}>
                    <p>{userElem.id}</p>
                    <p>{userElem.login}</p>
                    {/* <p>{userElem.avatar_url}</p> */}
                    <img src={userElem.avatar_url} width='50px' height='50px' alt='kjh' />
                    <hr/>
                </div> 
            )
            )}
        </div>
    )
}

export default Effect