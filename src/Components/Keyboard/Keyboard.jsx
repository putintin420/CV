import React from "react";
import { Perf } from "r3f-perf";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";

import RightKeycaps from "./RightKeycaps";
import StemClick from "./StemClick";
import BottomHousing from "./BottomHousing";
import Stem from "./Stem";
import Contacts from "./Contacts";
import Springs from "./Springs";
import TopHousing from "./TopHousing";
import Rotary from "./Rotary";
import Housing from "./Housing";

const Keyboard = () => {
	return (
		<div className="h-screen ">
			<Canvas>
				<color attach="background" args={["white"]} />
				<Perf position="top-left" />
				<Environment preset="forest" background />
				<OrbitControls makeDefault />
				<Center>
					<group scale={0.02}>
						<RightKeycaps />
						<StemClick />
						<BottomHousing />
						<Stem />
						<Contacts />
						<Springs />
						<TopHousing />
						<Rotary />
						<Housing />
					</group>
				</Center>
			</Canvas>
		</div>
	);
};

export default Keyboard;
