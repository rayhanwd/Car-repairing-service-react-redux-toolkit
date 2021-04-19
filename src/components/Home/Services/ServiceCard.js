import React from 'react';
import { useHistory } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ServiceCard = (props) => {
    const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const { id, planningType, price, monthOrYear, savingAmount } = props.getData;
    const history = useHistory();
    const orderPushed = (id) => {
        history.push(`checkOutOrder/${id}`);
    }
    return (

        <div className="col-md-4">
            <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: prop.xys.interpolate(trans) }}>
                <div class="card border-0 mb-5 pb-4">
                    <div class="card-body text-center">
                        <h5 class="card-title mt-4">{planningType}</h5>
                        <h1 class="mt-4"><span>$</span>{price}</h1>
                        <h6 class="mt-4">{monthOrYear}</h6>
                        <span class="mt-4">Save {savingAmount}%</span>
                        <br />
                        <button onClick={() => orderPushed(id)} class="custom-btn my-4">{planningType}</button>
                    </div>
                </div>
            </animated.div>
        </div>


    );
};

export default ServiceCard;