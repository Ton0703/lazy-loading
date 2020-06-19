import React, { Suspense } from 'react'
import Loading from './loading'

function lazy(Props) {
    //const Component = React.lazy(props)
    return (
        <Suspense fallback={<Loading />}>
            {Props}
        </Suspense>
    )
}

export default lazy
