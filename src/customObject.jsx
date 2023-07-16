import { DoubleSide } from "three"

import { useEffect, useMemo, useRef } from "react"


export default function CustomObject( {vertCount} ){

    const geometryRef = useRef()
    
    const positions = useMemo(()=>{

        const positions = new Float32Array(vertCount * 3)

        for (let i=0; i<vertCount * 3; i++)
        {
            positions[i] = (Math.random() - 0.5) * 5
        }

        return positions

    },[])

    useEffect(()=>{
        geometryRef.current.computeVertexNormals()
    },[])


    return(
        
        <mesh>
            <bufferGeometry ref={geometryRef}>
                <bufferAttribute
                    attach="attributes-position"
                    count={ vertCount }
                    itemSize={ 3 }
                    array={ positions }
                    />
            </bufferGeometry>

            <meshStandardMaterial color='red' side={ DoubleSide }/>
        </mesh>
    )
}