import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";
import Lights from "./Light";
import { Suspense } from "react";
import IPhone from "./IPhone";

const ModelView = (index, groupRef, gsapType, controlRef, setRotationState, size, item) => {
    return (
        <View index={index} id={gsapType} className={`w-full h-full ${index === 2} ? "right-[-100%] : ""`}>
            {/* Ambient Light */}
            <ambientLight intensity={0.3} />

            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />

            <OrbitControls />

            <group>
                <Suspense fallback={<Html><div>Loading</div></Html>}>
                    <IPhone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
                </Suspense>
            </group>
        </View>
    )
}

export default ModelView