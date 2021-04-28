import React, { useRef, useState } from 'react';

import Button from '../../button/button.component';

import './netlifyForm.scss';

const NetlifyForm = () => {

    //** states for form styles **//
    const [ formState , setFormState ] = useState({
        show: false,
        formDone: false,
        netlifyRes: null
    });

    const setFormStateFn = ( formSubItem, newState ) => {
        setFormState( oldStates => ({
            ...oldStates,
            [ formSubItem ]: newState
        }));
    }


    //** managing inputs **//

    const nameInputRef = useRef('');
    const emailInputRef = useRef('');
    const messageInputRef = useRef('');
    const honeypot = useRef('');

    const encodeForNetlify = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formObj = {
            "form-name": event.target.getAttribute("name"),
            "name": nameInputRef.current.value,
            "email": emailInputRef.current.value,
            "message": nameInputRef.current.value,
        };
        
        if( honeypot.current.value !== '' ){
            formObj["honeypot"] = honeypot.current.value;
        } 

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encodeForNetlify({ formObj })
        })
            .then( res => {
                // navigate("/thank-you/");
                console.log('succes!')
                console.log(res);
                res.ok ? 
                    setFormStateFn('netlifyRes', true):
                    setFormStateFn('netlifyRes', false);
            })
            .catch(error => {
                setFormStateFn('netlifyRes', false);
                console.error(error);
            });
        console.log(nameInputRef.current.value);
    };

    return (
        <div className={ `netlifyFormComponent` }>
            <h3 className={ `subtitle` }>
                Contact From
            </h3>
            <div 
                className={[ 
                    `formWrapper`, 
                    formState.netlifyRes === false ? 'formFaild' : null,
                    formState.netlifyRes === true ? 'formSuccessful' : null,
                ].join(' ')}
            >
                <div 
                    className={`successful`}
                >
                    your message has been reserved
                </div>
                <div className={ `error` }>
                    <p>
                        something went wrong,
                    </p>
                    <p>
                        you can contact me on this email address
                    </p>
                    <p>
                        contact@amir4rab.com
                    </p>
                </div>
                <form 
                    name="contact v0.2" 
                    method="post" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    // data-netlify-recaptcha="true"
                >
                    <input type="hidden" name="form-name" value="contact v0.2" />
                    <p hidden>
                        <label>
                            Don’t fill this out: <input name="bot-field" ref={honeypot} />
                        </label>
                    </p>
                    <div className={ `inputGroup` }>
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
                    <div className={ `inputGroup` }>
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
                    <div className={ `inputGroup` }>
                        <label>
                            <p>Message</p>
                            <textarea 
                                name="message"
                                ref={ messageInputRef }
                                required={ true }
                            ></textarea>
                        </label>
                    </div>
                    <div className={ `inputGroup` }>
                        <Button type="submit">
                            send
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NetlifyForm;
