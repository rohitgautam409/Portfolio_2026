import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import Iphone17ProModels from "../models/IPhone_17_Pro_Model";
import Lights from "./Lights";

const MODEL_SCALE    = 7000;
const VIEWPORT_FIT   = 0.90;
const CAMERA_FOV     = 42;
const SCREEN_ANCHOR_Z = 25.0;
const SCREEN_OFFSET_Y = 0;

const _quat   = new THREE.Quaternion();
const _normal  = new THREE.Vector3();
const _origin  = new THREE.Vector3();
const _camPos  = new THREE.Vector3();
const _toCam   = new THREE.Vector3();

function formatMatrix3D(m) {
    const css = [
        m[0],   m[1],  m[2],  m[3],
       -m[4],  -m[5], -m[6], -m[7],
        m[8],   m[9],  m[10], m[11],
        m[12],  m[13], m[14], m[15]
    ];
    return `matrix3d(${css.map(v => (Math.abs(v) < 1e-10 ? 0 : v).toFixed(6)).join(',')})`;
}

function formatCameraMatrix3D(a) {
    const css = [
        a[0], -a[1], a[2], a[3],
        a[4], -a[5], a[6], a[7],
        a[8], -a[9], a[10], a[11],
        a[12], -a[13], a[14], a[15]
    ];
    return `matrix3d(${css.map(v => (Math.abs(v) < 1e-10 ? 0 : v).toFixed(6)).join(',')})`;
}

export default function ModelExp({ stageRef, cameraElRef, screenElRef }) {
    const { camera, size } = useThree();
    const phoneGroupRef    = useRef(null);
    const screenAnchorRef  = useRef(null);

    const drag = useRef({
        isPointerDown: false,
        isDragging:    false,
        startX: 0, startY: 0,
        lastX:  0, lastY:  0,
        pointerId:   null,
        yaw: 0, pitch: 0,
        targetYaw: 0, targetPitch: 0,
    });

    const entrance = useRef({ progress: 0, isDone: false });

    useEffect(() => {
        const stageEl  = stageRef?.current;
        const screenEl = screenElRef?.current;
        if (!stageEl) return;

        const onDown = (e) => {
            if (screenEl && screenEl.contains(e.target)) return;
            drag.current.isPointerDown = true;
            drag.current.isDragging    = false;
            drag.current.startX = drag.current.lastX = e.clientX;
            drag.current.startY = drag.current.lastY = e.clientY;
            drag.current.pointerId = e.pointerId;
        };

        const onMove = (e) => {
            if (!drag.current.isPointerDown) return;
            if (!drag.current.isDragging) {
                const dist = Math.hypot(e.clientX - drag.current.startX, e.clientY - drag.current.startY);
                if (dist > 6) {
                    drag.current.isDragging = true;
                    stageEl.style.cursor = "grabbing";
                    try { stageEl.setPointerCapture(e.pointerId); } catch (_) {}
                } else return;
            }
            const dx = e.clientX - drag.current.lastX;
            const dy = e.clientY - drag.current.lastY;
            drag.current.lastX = e.clientX;
            drag.current.lastY = e.clientY;
            drag.current.targetYaw  += dx * 0.005;
            drag.current.targetPitch = Math.max(-0.45, Math.min(0.45, drag.current.targetPitch + dy * 0.003));
        };

        const onUp = (e) => {
            drag.current.isPointerDown = false;
            if (drag.current.isDragging) {
                drag.current.isDragging = false;
                stageEl.style.cursor = "grab";
                try { stageEl.releasePointerCapture(e.pointerId); } catch (_) {}
            }
        };

        stageEl.style.cursor = "grab";
        stageEl.addEventListener("pointerdown", onDown);
        window.addEventListener("pointermove",  onMove);
        window.addEventListener("pointerup",    onUp);
        window.addEventListener("pointercancel", onUp);

        return () => {
            stageEl.removeEventListener("pointerdown", onDown);
            window.removeEventListener("pointermove",  onMove);
            window.removeEventListener("pointerup",    onUp);
            window.removeEventListener("pointercancel", onUp);
        };
    }, [stageRef, screenElRef]);

    useFrame((_, delta) => {
        const phoneGroup   = phoneGroupRef.current;
        const screenAnchor = screenAnchorRef.current;
        const stageEl      = stageRef?.current;
        const cameraEl     = cameraElRef?.current;
        const screenEl     = screenElRef?.current;

        if (!phoneGroup || !screenAnchor || !stageEl || !cameraEl || !screenEl) return;

        if (!entrance.current.isDone) {
            entrance.current.progress = Math.min(1, entrance.current.progress + delta / 2);
            if (entrance.current.progress >= 1) entrance.current.isDone = true;
        }
        const p        = entrance.current.progress;
        const eased    = 1 - Math.pow(1 - p, 4);
        const entranceY   = -1000 * (1 - eased);
        const entranceYaw = -Math.PI + Math.PI * eased;

        if (!drag.current.isDragging) {
            drag.current.targetYaw   *= 0.92;
            drag.current.targetPitch *= 0.92;
        }
        drag.current.yaw   += (drag.current.targetYaw   - drag.current.yaw)   * 0.14;
        drag.current.pitch += (drag.current.targetPitch - drag.current.pitch) * 0.14;

        const restScale = (size.height * VIEWPORT_FIT) / 1080;
        phoneGroup.scale.setScalar(restScale);
        phoneGroup.position.set(0, entranceY, 0);
        phoneGroup.rotation.set(drag.current.pitch, drag.current.yaw + entranceYaw, 0);
        phoneGroup.updateMatrixWorld(true);

        const halfH   = size.height / 2;
        const halfW   = size.width  / 2;
        const camDist = halfH / Math.tan((CAMERA_FOV * Math.PI) / 360);

        camera.position.set(0, 0, camDist);
        camera.fov    = CAMERA_FOV;
        camera.aspect = size.width / size.height;
        camera.near   = 10;
        camera.far    = 15000;
        camera.updateProjectionMatrix();
        camera.updateMatrixWorld(true);

        stageEl.style.perspective       = `${camDist.toFixed(2)}px`;
        stageEl.style.perspectiveOrigin = "50% 50%";

        const camMatrixStr = formatCameraMatrix3D(camera.matrixWorldInverse.elements);
        cameraEl.style.transform = `translateZ(${camDist.toFixed(2)}px) ${camMatrixStr} translate(${halfW.toFixed(2)}px, ${halfH.toFixed(2)}px)`;

        screenAnchor.updateWorldMatrix(true, false);
        const screenMatrixStr = formatMatrix3D(screenAnchor.matrixWorld.elements);
        screenEl.style.transform = `translate(-50%, -50%) ${screenMatrixStr}`;

        screenAnchor.getWorldQuaternion(_quat);
        _normal.set(0, 0, 1).applyQuaternion(_quat);
        screenAnchor.getWorldPosition(_origin);
        camera.getWorldPosition(_camPos);
        _toCam.subVectors(_camPos, _origin).normalize();

        const isFacing  = _normal.dot(_toCam) > 0.0;
        const targetVis = isFacing ? "visible" : "hidden";
        const targetPE  = isFacing ? "auto"    : "none";

        if (screenEl.style.visibility !== targetVis) {
            screenEl.style.visibility    = targetVis;
            screenEl.style.pointerEvents = targetPE;
        }
    });

    return (
        <>
            <Lights />

            <group ref={phoneGroupRef} position={[0, -950, 0]}>
                <group rotation={[0, Math.PI, 0]}>
                    <Iphone17ProModels scale={MODEL_SCALE} />
                </group>

                <object3D
                    ref={screenAnchorRef}
                    position={[SCREEN_OFFSET_Y, 0, SCREEN_ANCHOR_Z]}
                    rotation={[0, 0, 0]}
                />
            </group>
        </>
    );
}
