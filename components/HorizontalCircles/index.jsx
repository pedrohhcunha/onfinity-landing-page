import circles from './images/circles.svg'
import Image from 'next/image'

export default function HorizontalCircles({ top, left, right, bottom }) {
    return(
        <aside style={{
            position: 'absolute',
            top: top,
            left: left,
            right: right,
            bottom: bottom
        }}>
            <Image src={circles} />
        </aside>
    )
}