import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from "./customObject"


//convert ThreeJS class to declarative class using extend
extend({ OrbitControls })

export default function App(){

    //useThree gives us acces to camera, scene, renderer, clock . . . .
    const { camera, gl } = useThree()   //destructre and retrieve camera and renderer (gl)

    // useRef to get reference to a cube mesh for animating in useFrame
    const cubeRef = useRef()
    const groupRef = useRef()
    
    //useFrame, is a function called in each frame. using delta will assure same animation speed regardless of Hz
    useFrame((state,delta)=>{
        groupRef.current.rotation.y += delta
        cubeRef.current.rotation.y += delta
        
    })

    return (
            <>
            {/* OrbitControls are imported and extended from ThreeJS */}
            <orbitControls args={ [camera, gl.domElement] }/>

            <group ref={groupRef} >
                <mesh position={[-1.5 , 0 , 0]} scale={0.3}>
                    <sphereGeometry args={[2, 32, 32]}/>
                    <meshStandardMaterial color='yellow'/>
                </mesh> 

                <mesh position={[1.5 ,0 , 0]} scale={1} ref={cubeRef}>
                    <boxGeometry />
                    <meshStandardMaterial wireframe={false} flatShading />
                </mesh> 
            </group>

                <mesh position={[0 ,-1 , 0]} rotation-x={-Math.PI * 0.5} scale={10} >
                    <planeGeometry  />
                    <meshNormalMaterial wireframe={false} flatShading/>
                </mesh> 

                
                <directionalLight position={[1 ,4, 3]} intensity={0.5}/>
                <ambientLight intensity={0.2}/>
            
                <CustomObject/>

            </>
    )
}