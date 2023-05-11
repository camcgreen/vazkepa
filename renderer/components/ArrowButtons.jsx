import Router from 'next/router'
import React from 'react'

export default function ArrowButtons({ right, left, urlRight, urlLeft }) {
    return (
        <div style={{ zIndex: '200', position: 'absolute', display: 'flex', justifyContent: 'space-between', top: '45%', left: '32%', width: '65vw' }}>
            <div style={{ scale: '-1' }} >

                {left &&
                    <img onClick={() => {
                        console.log('click')
                        if (left) {
                            urlLeft ? Router.push(urlLeft) : Router.back()
                        }
                    }} src='/images/arrowButton.png' />
                }
            </div>

            <div >

                {right &&
                    <img onClick={() => {
                        console.log('click')
                        if (right) {
                            Router.push(urlRight)
                        }
                    }} src='/images/arrowButton.png' />
                }
            </div>

        </div>
    )
}
