import React, { useRef } from 'react';

import Button from '../../button/button.component';

import * as classes from './netlifyForm.module.scss';

const NetlifyForm = () => {

    // const [state, setstate] = useState(initialState)

    const nameInputRef = useRef('');
    const emailInputRef = useRef('');
    const messageInputRef = useRef('');

    const encodeForNetlify = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encodeForNetlify({
                "form-name": nameInputRef.current.value,
                "form-email": emailInputRef.current.value,
                "form-message": nameInputRef.current.value,
            })
        })
            .then( res => {
                // navigate("/thank-you/");
                console.log('succes!')
                console.log(res);
            })
            .catch(error => {
                console.error(error);
            });
        console.log(nameInputRef.current.value);
    }

    return (
        <div className={ classes.netlifyFormComponent }>
            <h3 className={ classes.subtitle }>
                Contact From
            </h3>
            <form 
                name="contact v0.1" 
                method="post" 
                data-netlify="true" 
                onSubmit={handleSubmit}
                data-netlify-recaptcha="true"
            >
                <input type="hidden" name="form-name" value="contact v0.1" />
                <div className={ classes.inputGroup }>
                    <label>
                        <p>Your Name</p>
                        <input 
                            ref={nameInputRef} 
                            type="text" 
                            name="name"
                            required={ true }
                        />
                    </label>
                </div>
                <div className={ classes.inputGroup }>
                    <label>
                        <p>Your Email</p>
                        <input 
                            ref={emailInputRef} 
                            type="email" 
                            name="email"
                            required={ true }
                        />
                    </label>
                </div>
                <div className={ classes.inputGroup }>
                    <label>
                        <p>Message</p>
                        <textarea 
                            name="message"
                            ref={ messageInputRef }
                            required={ true }
                        ></textarea>
                    </label>
                </div>
                <div className={ classes.inputGroup }>
                    <Button type="submit">
                        send
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default NetlifyForm;
