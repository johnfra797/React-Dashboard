import React, { useRef, useEffect, useState } from 'react'
import './style.css';

function Switch() {
    const [checked, setChecked] = useState(false);
    const ref = useRef(null);
    function handleChange() {
        setChecked(ref.current.checked);
        if (ref.current.checked) {
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')
        } else {
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        }
    }
    useEffect(() => {
        const mq=window.matchMedia('(prefers-color-scheme: dark)');
        if (mq.matches) {
            setChecked(true);
        }
    }, [])


    return (<div className="dark-mode">
        <p className="dark-mode-title">Dark Mode</p>
        <input type="checkbox" checked={checked} ref={ref} onChange={handleChange} className="checkbox" id="checkbox" />
        <label className="switch" htmlFor="checkbox">

        </label>
    </div>
    );
}

export default Switch;