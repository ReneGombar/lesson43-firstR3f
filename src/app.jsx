import { Canvas, useFrame } from '@react-three/fiber'
import Experience from './experience'

export default function App(){
    
    const vertCount = 100

    return(
        <>

        <Canvas 

            //pixel ration for mobile devices. Clamping it between [1 and 2]
            dpr={ [1 , 2 ] } //this is the default value so can be deleted

            gl = { { antialias: false } }
            
            camera={{
                    fov:45,
                    position:[5,2,5],
                    near: 0.1,
                    far: 100,
                    }}
                >

            <Experience vertCount={parseInt(vertCount)} />
        </Canvas>
        </>
    )
    
}