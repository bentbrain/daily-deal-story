import { AbsoluteFill } from 'remotion'

export const Test = ({ productTitle }) => {

    return (
        <AbsoluteFill style={{
            background: 'white',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }} ><h1 style={{
            fontFamily: 'Helvetica',
            color: 'Grey',
            fontSize: '5rem',
        }} >{productTitle}</h1></AbsoluteFill>
    )
}